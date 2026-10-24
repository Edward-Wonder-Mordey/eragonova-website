revoke all on table public.announcements from public;
revoke all on table public.announcements from anon;
revoke all on table public.announcements from authenticated;
grant select, insert on table public.announcements to authenticated;
