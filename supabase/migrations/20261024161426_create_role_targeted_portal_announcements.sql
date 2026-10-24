create table public.announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(btrim(title)) between 3 and 160),
  body text not null check (char_length(btrim(body)) between 1 and 5000),
  audience text not null check (audience in ('clients', 'staff', 'everyone')),
  created_by uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default now()
);

create index announcements_audience_created_at_idx
  on public.announcements (audience, created_at desc);

alter table public.announcements enable row level security;

grant select, insert on public.announcements to authenticated;

create policy "Portal users can read announcements for their audience"
on public.announcements for select to authenticated
using (
  private.is_admin()
  or (
    private.is_staff()
    and audience in ('staff', 'everyone')
  )
  or (
    audience in ('clients', 'everyone')
    and exists (
      select 1
      from public.organization_members as member
      where member.user_id = (select auth.uid())
        and member.status = 'active'
    )
  )
);

create policy "Administrators can publish announcements"
on public.announcements for insert to authenticated
with check (
  private.is_admin()
  and created_by = (select auth.uid())
);

create or replace function private.fanout_announcement_notifications()
returns trigger
language plpgsql
security definer
set search_path = pg_catalog
as $function$
begin
  if not private.is_admin()
     or new.created_by is distinct from auth.uid() then
    raise exception 'Only an active administrator can publish announcements'
      using errcode = '42501';
  end if;

  insert into public.notifications (user_id, title, body, link)
  select profile.id,
         'Announcement: ' || new.title,
         new.body,
         '/portal/'
  from public.profiles as profile
  where profile.status = 'active'
    and (
      (new.audience = 'everyone' and profile.role in ('admin', 'staff'))
      or (new.audience = 'staff' and profile.role in ('admin', 'staff'))
      or (
        new.audience in ('clients', 'everyone')
        and profile.role = 'client'
        and exists (
          select 1
          from public.organization_members as member
          where member.user_id = profile.id
            and member.status = 'active'
        )
      )
    );

  return new;
end;
$function$;

revoke all on function private.fanout_announcement_notifications() from public, anon, authenticated;

create trigger announcements_create_notifications
after insert on public.announcements
for each row execute function private.fanout_announcement_notifications();
