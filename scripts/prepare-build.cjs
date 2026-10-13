const fs = require("fs");
const path = require("path");

const enterpriseFile = path.join(__dirname, "..", "src", "components", "EnterpriseBlueprint.jsx");

if (fs.existsSync(enterpriseFile)) {
  let source = fs.readFileSync(enterpriseFile, "utf8");
  // lucide-react 0.263.x does not expose the later Handshake icon name.
  source = source.replace(/\s+Handshake,\n/, "\n");
  source = source.replace(/<Handshake size=\{24\}\/>/g, "<Users size={24}/>");
  fs.writeFileSync(enterpriseFile, source, "utf8");
}

const portalFile = path.join(__dirname, "..", "src", "pages", "PortalPage.jsx");

if (fs.existsSync(portalFile)) {
  let source = fs.readFileSync(portalFile, "utf8");

  // lucide-react 0.263.x predates ReceiptText; FileText keeps Billing compatible.
  source = source.replace(/\s+ReceiptText,\n/, "\n");
  source = source.replace(/\["billing", ReceiptText, "Billing"\]/g, '["billing", FileText, "Billing"]');

  // This repository does not include the react-hooks ESLint rule plugin.
  source = source.replace(/\n\s*\/\/ eslint-disable-next-line react-hooks\/exhaustive-deps\n/g, "\n");

  if (!source.includes('import PortalAdminConsole from "../components/PortalAdminConsole";')) {
    source = source.replace(
      'import { supabase, PORTAL_STORAGE_BUCKETS } from "../lib/supabase";',
      'import { supabase, PORTAL_STORAGE_BUCKETS } from "../lib/supabase";\nimport PortalAdminConsole from "../components/PortalAdminConsole";'
    );
  }
  if (!source.includes('import PortalClientExtras from "../components/PortalClientExtras";')) {
    source = source.replace(
      'import PortalAdminConsole from "../components/PortalAdminConsole";',
      'import PortalAdminConsole from "../components/PortalAdminConsole";\nimport PortalClientExtras from "../components/PortalClientExtras";\nimport PortalAdminExtras from "../components/PortalAdminExtras";\nimport PortalMilestonesCard from "../components/PortalMilestonesCard";'
    );
  } else if (!source.includes('import PortalMilestonesCard from "../components/PortalMilestonesCard";')) {
    source = source.replace(
      'import PortalClientExtras from "../components/PortalClientExtras";',
      'import PortalClientExtras from "../components/PortalClientExtras";\nimport PortalMilestonesCard from "../components/PortalMilestonesCard";'
    );
  }
  if (!source.includes('import PortalAccessGuide from "../components/PortalAccessGuide";')) {
    source = source.replace(
      'import PortalMilestonesCard from "../components/PortalMilestonesCard";',
      'import PortalMilestonesCard from "../components/PortalMilestonesCard";\nimport PortalAccessGuide from "../components/PortalAccessGuide";'
    );
  }

  // Load the extra profile and client metadata used by editable profiles and founding-client badges.
  source = source.replace(
    'select("id, full_name, email, role, status")',
    'select("id, full_name, email, role, status, phone, job_title, avatar_path")'
  );
  source = source.replace(
    'client_organizations(id,name,status)',
    'client_organizations(id,name,status,logo_url,website_url,client_number,is_founder,badge_title,badge_note)'
  );
  source = source.replace(
    'status, progress, start_date, due_date, completed_at',
    'status, progress, received_date, start_date, due_date, completed_at'
  );

  // Keep a permanent, easy-to-find permissions reference in every signed-in portal.
  if (!source.includes('["guide", ShieldCheck, "Access Guide"]')) {
    source = source.replace(
      '["support", MessageSquare, "Support"],\n  ["account", UserCircle2, "Account"],',
      '["support", MessageSquare, "Support"],\n  ["guide", ShieldCheck, "Access Guide"],\n  ["account", UserCircle2, "Account"],'
    );
  }

  // Role-aware navigation: administrators get Admin, staff get Operations, clients get only client tabs.
  source = source.replace(
    '{tabItems.map(([id, Icon, label]) =>',
    '{(profile?.role === "admin" ? [...tabItems, ["admin", ShieldCheck, "Admin"]] : profile?.role === "staff" ? [...tabItems, ["operations", ShieldCheck, "Operations"]] : tabItems).map(([id, Icon, label]) =>'
  );
  source = source.replace(
    '{(profile?.role === "admin" ? [...tabItems, ["admin", ShieldCheck, "Admin"]] : tabItems).map(([id, Icon, label]) =>',
    '{(profile?.role === "admin" ? [...tabItems, ["admin", ShieldCheck, "Admin"]] : profile?.role === "staff" ? [...tabItems, ["operations", ShieldCheck, "Operations"]] : tabItems).map(([id, Icon, label]) =>'
  );

  if (!source.includes('activeTab === "admin" && profile?.role === "admin"')) {
    source = source.replace(
      '{activeTab === "account" &&',
      '{activeTab === "admin" && profile?.role === "admin" && <PortalAdminConsole session={session} onRefresh={() => loadPortalData(session)} />}\n\n            {activeTab === "account" &&'
    );
  }
  if (!source.includes('activeTab === "operations" && profile?.role === "staff"')) {
    source = source.replace(
      '{activeTab === "account" &&',
      '{activeTab === "operations" && profile?.role === "staff" && <PortalAdminExtras session={session} mode="staff" onRefresh={() => loadPortalData(session)} />}\n\n            {activeTab === "account" &&'
    );
  }
  if (!source.includes('<PortalAccessGuide active={activeTab === "guide"}')) {
    source = source.replace(
      '{activeTab === "account" &&',
      '<PortalAccessGuide active={activeTab === "guide"} role={profile?.role || "client"} organizationName={primaryMembership?.client_organizations?.name || ""} />\n\n            {activeTab === "account" &&'
    );
  }

  // Distinguish administrator access from future staff access.
  source = source.replace(
    '{isStaff ? "Staff access" : primaryMembership?.client_organizations?.name || "Secure client access"}',
    '{profile?.role === "admin" ? "Administrator access" : profile?.role === "staff" ? "Staff access" : primaryMembership?.client_organizations?.name || "Secure client access"}'
  );

  // Add client-side profile editing, founder recognition, invoice PDF tools, notifications and support chat.
  if (!source.includes('<PortalClientExtras activeTab={activeTab}')) {
    source = source.replace(
      '{activeTab === "dashboard" &&',
      '<PortalClientExtras activeTab={activeTab} session={session} profile={profile} memberships={memberships} onRefresh={() => loadPortalData(session)} />\n\n            <PortalMilestonesCard activeTab={activeTab} />\n\n            {activeTab === "dashboard" &&'
    );
  } else if (!source.includes('<PortalMilestonesCard activeTab={activeTab}')) {
    source = source.replace(
      '<PortalClientExtras activeTab={activeTab} session={session} profile={profile} memberships={memberships} onRefresh={() => loadPortalData(session)} />',
      '<PortalClientExtras activeTab={activeTab} session={session} profile={profile} memberships={memberships} onRefresh={() => loadPortalData(session)} />\n\n            <PortalMilestonesCard activeTab={activeTab} />'
    );
  }

  // Display the full project timeline, including received and completed dates.
  source = source.replace(
    '<span>Start: {formatDate(project.start_date)}</span><span>Due: {formatDate(project.due_date)}</span>',
    '<span>Received: {formatDate(project.received_date)}</span><span>Start: {formatDate(project.start_date)}</span><span>Due: {formatDate(project.due_date)}</span><span>Completed: {formatDate(project.completed_at)}</span>'
  );

  fs.writeFileSync(portalFile, source, "utf8");
}

const adminConsoleFile = path.join(__dirname, "..", "src", "components", "PortalAdminConsole.jsx");

if (fs.existsSync(adminConsoleFile)) {
  let source = fs.readFileSync(adminConsoleFile, "utf8");

  // Keep action feedback visible after refresh.
  source = source.replace(
    '  const loadAdminData = async () => {\n    setLoading(true);\n    setMessage("");',
    '  const loadAdminData = async () => {\n    setLoading(true);'
  );
  source = source.replace(
    '    }, "Client invitation sent and organisation access assigned.");',
    '    }, "Client invitation sent and organisation access assigned. The user will appear once the invitation creates the account.");'
  );

  if (!source.includes('import PortalAdminExtras from "./PortalAdminExtras";')) {
    source = source.replace(
      'import { supabase, PORTAL_STORAGE_BUCKETS } from "../lib/supabase";',
      'import { supabase, PORTAL_STORAGE_BUCKETS } from "../lib/supabase";\nimport PortalAdminExtras from "./PortalAdminExtras";'
    );
  }
  if (!source.includes('<PortalAdminExtras session={session} mode="admin"')) {
    source = source.replace(
      '<Notice message={message}/>',
      '<Notice message={message}/>\n\n      <PortalAdminExtras session={session} mode="admin" onRefresh={onRefresh} />'
    );
  }

  fs.writeFileSync(adminConsoleFile, source, "utf8");
}

const adminExtrasFile = path.join(__dirname, "..", "src", "components", "PortalAdminExtras.jsx");

if (fs.existsSync(adminExtrasFile)) {
  let source = fs.readFileSync(adminExtrasFile, "utf8");

  // Keep founding-client history visible to both administrators and future staff.
  if (!source.includes('Founding client history')) {
    source = source.replace(
      '{message&&<div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{message}</div>}',
      '{message&&<div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{message}</div>}\n    {orgs.filter(o=>o.is_founder).map(o=><div key={`founder-${o.id}`} className="rounded-2xl border border-amber-200 dark:border-amber-500/20 bg-gradient-to-r from-amber-50 to-white dark:from-amber-500/10 dark:to-slate-900 p-5"><div className="flex items-center gap-4">{o.logo_url?<img src={o.logo_url} alt={`${o.name} logo`} className="h-14 w-14 rounded-xl border border-amber-200 bg-white object-contain p-2"/>:<div className="h-14 w-14 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center"><Crown size={24}/></div>}<div><p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700 dark:text-amber-300">Founding client history</p><h3 className="mt-1 text-lg font-bold text-slate-950 dark:text-white">{o.badge_title || `Client ${String(o.client_number||1).padStart(3,"0")} · ${o.name}`}</h3><p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{o.badge_note || `${o.name} is recognised as an early Eragonova client.`}</p></div></div></div>)}'
    );
  }

  fs.writeFileSync(adminExtrasFile, source, "utf8");
}
