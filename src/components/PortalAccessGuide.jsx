import React from "react";
import { CheckCircle2, Lock, ShieldCheck } from "lucide-react";

const guides = {
  client: {
    title: "Client access",
    intro: "A quick reference for what your Eragonova client account can and cannot do.",
    can: [
      "View projects, progress, dates, milestones and updates shared with your organisation.",
      "Download documents and files Eragonova has made visible to your organisation.",
      "View client-visible invoices, payment status and billing information.",
      "Create support requests and continue conversations on your support tickets.",
      "Read portal notifications related to your projects, billing and support activity.",
      "Update your own profile details, profile photo and password.",
    ],
    cannot: [
      "See another client's projects, files, invoices, support requests or private information.",
      "Change project progress, dates, milestones, project status or Eragonova project records.",
      "Edit invoice amounts, payment records or internal billing controls.",
      "Manage other users, roles, client memberships or organisation access.",
      "Read internal staff notes or other information marked private to Eragonova staff.",
      "Access administrator or staff-only management tools.",
    ],
  },
  staff: {
    title: "Staff access",
    intro: "A quick reference for your operational permissions as an Eragonova staff member.",
    can: [
      "Work with client organisations and operational records available to staff.",
      "Manage project progress, dates, milestones, updates and client-visible project information.",
      "Upload and manage project documents according to staff permissions.",
      "Work with invoices, payment status and billing records available to staff.",
      "Respond to client support requests and use internal staff notes where available.",
      "Update your own profile details, profile photo and password.",
    ],
    cannot: [
      "Promote yourself or another user to Administrator.",
      "Change protected administrator accounts or administrator-only security controls.",
      "Change client ownership, membership or protected access rules unless specifically allowed by an Administrator.",
      "View or recover another user's password.",
      "Bypass the portal's row-level security, private storage rules or account restrictions.",
      "Use administrator-only controls that are not included in the Staff Operations workspace.",
    ],
  },
  admin: {
    title: "Administrator access",
    intro: "A quick reference for your full Eragonova portal administration responsibilities.",
    can: [
      "Manage client organisations, client access, memberships and portal user roles.",
      "Create and manage projects, milestones, updates, dates, progress and project visibility.",
      "Manage private documents and the files made visible to each client organisation.",
      "Manage invoices, payment records, support workflows and client notifications.",
      "Manage Staff and Client account status and operational access.",
      "Use the Admin workspace to oversee portal activity while client data remains separated by security policies.",
    ],
    cannot: [
      "View, recover or display another user's password; authentication credentials remain protected by Supabase Auth.",
      "Treat the public browser key as a server secret or expose privileged service-role credentials in the website.",
      "Circumvent private-storage and row-level-security protections through the normal portal interface.",
      "Assume a user has access merely because an account exists; client membership and account status still control access.",
      "Use the portal to create false project, billing or client records that do not reflect real Eragonova activity.",
      "Share client-confidential information outside the organisation or engagement it belongs to.",
    ],
  },
};

function PermissionPanel({ title, subtitle, items, type = "can" }) {
  const positive = type === "can";
  return (
    <section className={`rounded-2xl border p-6 ${positive ? "border-emerald-200 dark:border-emerald-500/20 bg-emerald-50/70 dark:bg-emerald-500/5" : "border-rose-200 dark:border-rose-500/20 bg-rose-50/70 dark:bg-rose-500/5"}`}>
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${positive ? "bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" : "bg-rose-100 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300"}`}>
          {positive ? <CheckCircle2 size={20}/> : <Lock size={20}/>} 
        </div>
        <div>
          <p className={`text-xs font-bold uppercase tracking-[0.14em] ${positive ? "text-emerald-700 dark:text-emerald-300" : "text-rose-700 dark:text-rose-300"}`}>{title}</p>
          <h3 className="text-lg font-bold text-slate-950 dark:text-white">{subtitle}</h3>
        </div>
      </div>
      <div className="mt-5 space-y-3">
        {items.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{positive ? <CheckCircle2 size={17} className="mt-1 shrink-0 text-emerald-600 dark:text-emerald-400"/> : <Lock size={16} className="mt-1 shrink-0 text-rose-600 dark:text-rose-400"/>}<span>{item}</span></div>)}
      </div>
    </section>
  );
}

function RoleReference({ label, guide }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 flex items-center justify-center"><ShieldCheck size={20}/></div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-300">{label}</p>
          <h3 className="text-lg font-bold text-slate-950 dark:text-white">What this role is supposed to have</h3>
        </div>
      </div>
      <div className="mt-5 grid lg:grid-cols-2 gap-5">
        <div className="rounded-xl border border-emerald-200 dark:border-emerald-500/20 bg-emerald-50/60 dark:bg-emerald-500/5 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-300">Should have</p>
          <div className="mt-3 space-y-2.5">{guide.can.map((item) => <div key={item} className="flex gap-2.5 text-sm leading-6 text-slate-700 dark:text-slate-300"><CheckCircle2 size={16} className="mt-1 shrink-0 text-emerald-600 dark:text-emerald-400"/><span>{item}</span></div>)}</div>
        </div>
        <div className="rounded-xl border border-rose-200 dark:border-rose-500/20 bg-rose-50/60 dark:bg-rose-500/5 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-rose-700 dark:text-rose-300">Should not have</p>
          <div className="mt-3 space-y-2.5">{guide.cannot.map((item) => <div key={item} className="flex gap-2.5 text-sm leading-6 text-slate-700 dark:text-slate-300"><Lock size={15} className="mt-1 shrink-0 text-rose-600 dark:text-rose-400"/><span>{item}</span></div>)}</div>
        </div>
      </div>
    </div>
  );
}

export default function PortalAccessGuide({ active, role = "client", organizationName = "" }) {
  if (!active) return null;
  const guide = guides[role] || guides.client;

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-300">
              <ShieldCheck size={20} />
              <span className="text-xs font-bold uppercase tracking-[0.16em]">Access Guide</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">{guide.title}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-400">{guide.intro}</p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-sm text-slate-600 dark:text-slate-300">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Current role</span>
            <p className="mt-1 font-semibold text-slate-900 dark:text-white">{role === "admin" ? "Administrator" : role === "staff" ? "Staff" : "Client"}</p>
            {role === "client" && organizationName && <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{organizationName}</p>}
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 gap-6">
        <PermissionPanel title="You can" subtitle="Actions available to your role" items={guide.can} type="can" />
        <PermissionPanel title="You cannot" subtitle="Protected or restricted actions" items={guide.cannot} type="cannot" />
      </div>

      {role === "admin" && (
        <div className="space-y-5">
          <div className="rounded-2xl border border-indigo-200 dark:border-indigo-500/20 bg-indigo-50/70 dark:bg-indigo-500/5 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-700 dark:text-indigo-300">Administrator role reference</p>
            <h3 className="mt-2 text-xl font-bold text-slate-950 dark:text-white">What Staff and Clients should see and be allowed to do</h3>
            <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600 dark:text-slate-300">Use this section as a quick control check. It shows the expected portal boundaries for the other roles, so an Administrator can quickly confirm that Staff and Client accounts have the right level of access and nothing more.</p>
          </div>
          <RoleReference label="Staff role" guide={guides.staff} />
          <RoleReference label="Client role" guide={guides.client} />
        </div>
      )}

      <div className="rounded-2xl border border-indigo-200 dark:border-indigo-500/20 bg-indigo-50/70 dark:bg-indigo-500/5 px-5 py-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
        This guide is a quick summary of the current portal role model. Actual access is enforced by account status, organisation membership, row-level security and private-storage permissions. If a Staff or Client account has access outside the boundaries shown here, an Administrator should review that account and its memberships.
      </div>
    </div>
  );
}
