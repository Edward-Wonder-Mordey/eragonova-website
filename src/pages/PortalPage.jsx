import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  Download,
  FileText,
  FolderKanban,
  Loader2,
  Lock,
  LogOut,
  Megaphone,
  MessageSquare,
  Monitor,
  ReceiptText,
  Send,
  ShieldCheck,
  Target,
  UserCircle2,
} from "lucide-react";
import CapabilityVisual from "../components/CapabilityVisual";
import PortalAnnouncements from "./PortalAnnouncements";
import { supabase, PORTAL_STORAGE_BUCKETS } from "../lib/supabase";

const publicFeatures = [
  [Target, "Project Visibility", "Keep milestones, priorities and agreed deliverables easy to follow.", "blue"],
  [FileText, "Documents", "Access relevant reports, proposals, policies and project files securely.", "indigo"],
  [Monitor, "Support", "Use a clear route for service requests, technical follow-up and communication.", "cyan"],
  [BarChart3, "Reporting", "Bring project updates, analytics and performance information into one client-facing experience.", "emerald"],
];

const tabItems = [
  ["dashboard", BarChart3, "Dashboard"],
  ["announcements", Megaphone, "Announcements"],
  ["projects", FolderKanban, "Projects"],
  ["documents", FileText, "Documents"],
  ["billing", ReceiptText, "Billing"],
  ["support", MessageSquare, "Support"],
  ["account", UserCircle2, "Account"],
];

const formatDate = (value) => {
  if (!value) return "—";
  try {
    return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(new Date(value));
  } catch {
    return value;
  }
};

const statusLabel = (value = "") => value.replaceAll("_", " ").replace(/\b\w/g, (m) => m.toUpperCase());

function PortalLogin({ onSignedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  const signIn = async (event) => {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    const { data, error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    if (error) setMessage(error.message);
    else onSignedIn?.(data.session);
    setBusy(false);
  };

  const resetPassword = async () => {
    if (!email.trim()) {
      setMessage("Enter your account email first, then choose Reset password.");
      return;
    }
    setBusy(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/portal/`,
    });
    setMessage(error ? error.message : "If the account exists, a password reset email has been sent.");
    setBusy(false);
  };

  return (
    <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-6 sm:p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl bg-indigo-500/15 border border-indigo-300/20 text-indigo-200 flex items-center justify-center"><ShieldCheck size={22} /></div>
        <div>
          <p className="font-bold text-white">Secure client sign in</p>
          <p className="text-xs text-white/50">Access is provided by Eragonova.</p>
        </div>
      </div>
      <form onSubmit={signIn} className="mt-7 space-y-4">
        <label className="block">
          <span className="text-xs font-semibold text-white/65">Email</span>
          <input required type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full rounded-xl border border-white/15 bg-slate-950/40 px-4 py-3 text-white outline-none transition focus:border-indigo-400" placeholder="you@example.com" />
        </label>
        <label className="block">
          <span className="text-xs font-semibold text-white/65">Password</span>
          <input required type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2 w-full rounded-xl border border-white/15 bg-slate-950/40 px-4 py-3 text-white outline-none transition focus:border-indigo-400" placeholder="Your password" />
        </label>
        {message && <p className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70" role="status">{message}</p>}
        <button disabled={busy} className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3.5 font-semibold text-white transition hover:bg-indigo-400 disabled:opacity-60">
          {busy ? <Loader2 className="animate-spin" size={18} /> : <Lock size={18} />} Sign in
        </button>
        <button type="button" disabled={busy} onClick={resetPassword} className="w-full text-sm font-semibold text-indigo-200 hover:text-white disabled:opacity-60">Reset password</button>
      </form>
      <p className="mt-6 text-xs leading-5 text-white/45">No public registration is offered here. Client accounts are connected to approved Eragonova engagements.</p>
    </div>
  );
}

function SummaryCard({ icon: Icon, label, value, note }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-5">
      <div className="flex items-start justify-between gap-4">
        <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{label}</p><p className="mt-2 text-3xl font-bold text-slate-950 dark:text-white">{value}</p></div>
        <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 flex items-center justify-center"><Icon size={20} /></div>
      </div>
      {note && <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{note}</p>}
    </div>
  );
}

function StatusPill({ value }) {
  return <span className="inline-flex rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-2.5 py-1 text-[11px] font-bold text-slate-600 dark:text-slate-300">{statusLabel(value)}</span>;
}

export default function PortalPage() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [profile, setProfile] = useState(null);
  const [memberships, setMemberships] = useState([]);
  const [projects, setProjects] = useState([]);
  const [updates, setUpdates] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [portalMessage, setPortalMessage] = useState("");
  const [ticketForm, setTicketForm] = useState({ organization_id: "", project_id: "", subject: "", description: "", priority: "normal" });
  const [submittingTicket, setSubmittingTicket] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [testimonialsLoading, setTestimonialsLoading] = useState(false);
  const [testimonialAction, setTestimonialAction] = useState("");
  const [testimonialNotice, setTestimonialNotice] = useState("");

  const isStaff = ["admin", "staff"].includes(profile?.role);
  const isAdmin = profile?.role === "admin";
  const portalTabItems = isAdmin ? [...tabItems, ["testimonials", MessageSquare, "Testimonials"]] : tabItems;
  const primaryMembership = memberships[0];

  const loadPortalData = async (currentSession) => {
    if (!currentSession?.user) return;
    setDataLoading(true);
    setPortalMessage("");
    const userId = currentSession.user.id;

    const [profileResult, membershipsResult, projectsResult, updatesResult, documentsResult, invoicesResult, ticketsResult, notificationsResult] = await Promise.all([
      supabase.from("profiles").select("id, full_name, email, role, status").eq("id", userId).maybeSingle(),
      supabase.from("organization_members").select("organization_id, member_role, status, client_organizations(id,name,status)").eq("user_id", userId).eq("status", "active"),
      supabase.from("projects").select("id, organization_id, code, name, summary, service_division, status, progress, start_date, due_date, completed_at").order("created_at", { ascending: false }),
      supabase.from("project_updates").select("id, project_id, organization_id, title, body, update_type, created_at").order("created_at", { ascending: false }).limit(10),
      supabase.from("documents").select("id, organization_id, project_id, title, description, category, storage_path, file_name, mime_type, size_bytes, created_at").order("created_at", { ascending: false }),
      supabase.from("invoices").select("id, organization_id, project_id, invoice_number, description, currency, amount, amount_paid, status, issue_date, due_date, storage_path").order("created_at", { ascending: false }),
      supabase.from("support_tickets").select("id, organization_id, project_id, ticket_number, subject, description, priority, status, created_at, updated_at").order("created_at", { ascending: false }),
      supabase.from("notifications").select("id, title, body, link, read_at, created_at").eq("user_id", userId).order("created_at", { ascending: false }).limit(20),
    ]);

    const firstError = [profileResult, membershipsResult, projectsResult, updatesResult, documentsResult, invoicesResult, ticketsResult, notificationsResult].find((result) => result.error)?.error;
    if (firstError) setPortalMessage(firstError.message);

    setProfile(profileResult.data || null);
    setMemberships(membershipsResult.data || []);
    setProjects(projectsResult.data || []);
    setUpdates(updatesResult.data || []);
    setDocuments(documentsResult.data || []);
    setInvoices(invoicesResult.data || []);
    setTickets(ticketsResult.data || []);
    setNotifications(notificationsResult.data || []);

    const firstOrg = membershipsResult.data?.[0]?.organization_id || "";
    setTicketForm((current) => ({ ...current, organization_id: current.organization_id || firstOrg }));
    setDataLoading(false);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (data.session) loadPortalData(data.session);
      setLoading(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      if (nextSession) loadPortalData(nextSession);
      else {
        setProfile(null); setMemberships([]); setProjects([]); setUpdates([]); setDocuments([]); setInvoices([]); setTickets([]); setNotifications([]);
      }
    });
    return () => listener.subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadTestimonials = async () => {
    if (!isAdmin) return;
    setTestimonialsLoading(true);
    const { data, error } = await supabase.from("testimonials")
      .select("id, display_name, organization_name, project_name, quote, status, display_consent, created_at, approved_at")
      .order("created_at", { ascending: false });
    if (error) setTestimonialNotice(error.message);
    else { setTestimonials(data || []); setTestimonialNotice(""); }
    setTestimonialsLoading(false);
  };

  useEffect(() => {
    if (isAdmin && activeTab === "testimonials") loadTestimonials();
  }, [isAdmin, activeTab]);

  const moderateTestimonial = async (item, nextStatus) => {
    setTestimonialAction(item.id);
    setTestimonialNotice("");
    const approved = nextStatus === "approved";
    const { error } = await supabase.from("testimonials").update({
      status: nextStatus,
      approved_at: approved ? new Date().toISOString() : null,
      approved_by: approved ? session.user.id : null,
    }).eq("id", item.id);
    if (error) setTestimonialNotice(error.message);
    else {
      setTestimonialNotice(approved ? "Feedback approved and published." : nextStatus === "pending" ? "Feedback returned to review." : "Feedback unpublished.");
      await loadTestimonials();
    }
    setTestimonialAction("");
  };

  const organizationOptions = useMemo(() => memberships.map((m) => ({ id: m.organization_id, name: m.client_organizations?.name || m.organization_id })), [memberships]);
  const openTickets = tickets.filter((ticket) => !["resolved", "closed"].includes(ticket.status)).length;
  const unread = notifications.filter((item) => !item.read_at).length;

  const downloadDocument = async (document) => {
    setPortalMessage("");
    const { data, error } = await supabase.storage.from(PORTAL_STORAGE_BUCKETS.documents).createSignedUrl(document.storage_path, 60);
    if (error) setPortalMessage(error.message);
    else window.open(data.signedUrl, "_blank", "noopener,noreferrer");
  };

  const createTicket = async (event) => {
    event.preventDefault();
    if (!session?.user || !ticketForm.organization_id) return;
    setSubmittingTicket(true);
    setPortalMessage("");
    const payload = {
      organization_id: ticketForm.organization_id,
      project_id: ticketForm.project_id || null,
      subject: ticketForm.subject.trim(),
      description: ticketForm.description.trim(),
      priority: ticketForm.priority,
      created_by: session.user.id,
    };
    const { error } = await supabase.from("support_tickets").insert(payload);
    if (error) setPortalMessage(error.message);
    else {
      setTicketForm((current) => ({ ...current, subject: "", description: "", project_id: "", priority: "normal" }));
      setPortalMessage("Support request submitted successfully.");
      await loadPortalData(session);
    }
    setSubmittingTicket(false);
  };

  const signOut = async () => { await supabase.auth.signOut(); setActiveTab("dashboard"); };

  if (loading) {
    return <section className="min-h-[70vh] bg-slate-950 text-white pt-40 flex items-center justify-center"><Loader2 className="animate-spin" size={34} /></section>;
  }

  if (!session) {
    return (
      <>
        <section className="accent-band relative overflow-hidden text-white pt-36 pb-20 sm:pt-40 sm:pb-24">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-center">
            <div>
              <div className="h-14 w-14 rounded-2xl bg-indigo-500/15 border border-indigo-300/20 text-indigo-200 flex items-center justify-center shadow-lg shadow-indigo-950/20"><Lock size={26}/></div>
              <p className="mt-6 text-indigo-300 text-xs font-bold uppercase tracking-[0.22em]">Client Portal</p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.045em] leading-[1.02]">Your secure Eragonova workspace.</h1>
              <p className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-white/70">Approved clients can securely access project information, documents, billing records and support linked to their engagement.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3"><a href="/contact/" className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3.5 font-semibold text-white transition hover:bg-indigo-400">Request Client Access <ArrowRight size={18}/></a></div>
            </div>
            <PortalLogin onSignedIn={(nextSession) => { setSession(nextSession); loadPortalData(nextSession); }} />
          </div>
        </section>
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {publicFeatures.map(([Icon, title, text, accent]) => <div key={title} className="accent-card rounded-3xl p-7" data-accent={accent}><div className="accent-icon"><Icon size={23}/></div><h2 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></div>)}
          </div>
        </section>
      </>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="rounded-3xl bg-slate-950 text-white p-6 sm:p-8 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 dot-field opacity-10 pointer-events-none" />
          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div><p className="text-indigo-300 text-xs font-bold uppercase tracking-[0.2em]">Eragonova Client Portal</p><h1 className="mt-2 text-3xl sm:text-4xl font-bold">Welcome{profile?.full_name ? `, ${profile.full_name}` : ""}.</h1><p className="mt-2 text-sm text-white/55">{isStaff ? "Staff access" : primaryMembership?.client_organizations?.name || "Secure client access"}</p></div>
            <div className="flex items-center gap-3"><div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm"><span className="text-white/50">Role</span> <strong className="ml-2">{statusLabel(profile?.role || "client")}</strong></div><button onClick={signOut} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold hover:bg-white/10"><LogOut size={16}/> Sign out</button></div>
          </div>
        </div>

        <div className="mt-6 grid lg:grid-cols-[230px_1fr] gap-6">
          <aside className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-3 h-fit lg:sticky lg:top-28">
            <nav className="space-y-1" aria-label="Portal navigation">
              {portalTabItems.map(([id, Icon, label]) => <button key={id} onClick={() => setActiveTab(id)} className={`w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-left transition ${activeTab === id ? "bg-indigo-600 text-white" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"}`}><Icon size={18}/>{label}{id === "support" && openTickets > 0 && <span className="ml-auto text-xs">{openTickets}</span>}{id === "dashboard" && unread > 0 && <span className="ml-auto h-2 w-2 rounded-full bg-amber-400" />}</button>)}
            </nav>
          </aside>

          <main>
            {(dataLoading || portalMessage) && <div className="mb-5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 px-4 py-3 text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2">{dataLoading && <Loader2 className="animate-spin" size={16}/>} {portalMessage || "Refreshing portal data…"}</div>}

            {activeTab === "dashboard" && <div className="space-y-6">
              <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4"><SummaryCard icon={FolderKanban} label="Projects" value={projects.length}/><SummaryCard icon={FileText} label="Documents" value={documents.length}/><SummaryCard icon={MessageSquare} label="Open support" value={openTickets}/><SummaryCard icon={Bell} label="Unread notices" value={unread}/></div>
              <div className="grid xl:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6"><h2 className="font-bold text-slate-950 dark:text-white">Recent project updates</h2><div className="mt-4 space-y-4">{updates.length ? updates.slice(0,5).map((item) => <div key={item.id} className="border-t first:border-t-0 border-slate-100 dark:border-white/10 pt-4 first:pt-0"><div className="flex items-start justify-between gap-4"><p className="font-semibold text-slate-900 dark:text-white">{item.title}</p><span className="text-xs text-slate-400 whitespace-nowrap">{formatDate(item.created_at)}</span></div><p className="mt-1 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{item.body}</p></div>) : <p className="text-sm text-slate-500">No project updates yet.</p>}</div></div>
                <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6"><h2 className="font-bold text-slate-950 dark:text-white">Notifications</h2><div className="mt-4 space-y-4">{notifications.length ? notifications.slice(0,5).map((item) => <div key={item.id} className="flex gap-3"><Bell size={16} className={item.read_at ? "text-slate-300" : "text-indigo-500"}/><div><p className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</p>{item.body && <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.body}</p>}</div></div>) : <p className="text-sm text-slate-500">No notifications yet.</p>}</div></div>
              </div>
            </div>}

            {activeTab === "announcements" && <PortalAnnouncements profile={profile} session={session} onSent={() => loadPortalData(session)} />}

            {activeTab === "projects" && <div className="space-y-4"><div><h2 className="text-2xl font-bold text-slate-950 dark:text-white">Projects</h2><p className="mt-1 text-sm text-slate-500">Project status and agreed progress visible to your account.</p></div>{projects.length ? projects.map((project) => <article key={project.id} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6"><div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-500">{project.code}</p><h3 className="mt-1 text-xl font-bold text-slate-950 dark:text-white">{project.name}</h3>{project.summary && <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{project.summary}</p>}</div><StatusPill value={project.status}/></div><div className="mt-5"><div className="flex justify-between text-xs font-semibold text-slate-500"><span>Progress</span><span>{project.progress}%</span></div><div className="mt-2 h-2 rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden"><div className="h-full rounded-full bg-indigo-600" style={{ width: `${project.progress}%` }} /></div></div><div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500"><span>Start: {formatDate(project.start_date)}</span><span>Due: {formatDate(project.due_date)}</span>{project.service_division && <span>{project.service_division}</span>}</div></article>) : <p className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 text-sm text-slate-500">No client-visible projects are linked to this account yet.</p>}</div>}

            {activeTab === "documents" && <div className="space-y-4"><div><h2 className="text-2xl font-bold text-slate-950 dark:text-white">Documents</h2><p className="mt-1 text-sm text-slate-500">Private project and engagement files.</p></div>{documents.length ? documents.map((document) => <div key={document.id} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div className="flex gap-4"><div className="h-11 w-11 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 flex items-center justify-center shrink-0"><FileText size={21}/></div><div><p className="font-bold text-slate-950 dark:text-white">{document.title}</p><p className="mt-1 text-xs text-slate-500">{statusLabel(document.category)} · {document.file_name} · {formatDate(document.created_at)}</p></div></div><button onClick={() => downloadDocument(document)} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5"><Download size={16}/> Download</button></div>) : <p className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 text-sm text-slate-500">No documents are available yet.</p>}</div>}

            {activeTab === "billing" && <div className="space-y-4"><div><h2 className="text-2xl font-bold text-slate-950 dark:text-white">Billing</h2><p className="mt-1 text-sm text-slate-500">Client-visible invoice and payment status.</p></div>{invoices.length ? invoices.map((invoice) => <div key={invoice.id} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-5 grid sm:grid-cols-[1fr_auto_auto] gap-4 items-center"><div><p className="font-bold text-slate-950 dark:text-white">{invoice.invoice_number}</p><p className="mt-1 text-xs text-slate-500">{invoice.description || "Invoice"} · Due {formatDate(invoice.due_date)}</p></div><div className="text-left sm:text-right"><p className="text-lg font-bold text-slate-950 dark:text-white">{invoice.currency} {Number(invoice.amount || 0).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}</p>{Number(invoice.amount_paid || 0) > 0 && <p className="text-xs text-slate-500">Paid: {invoice.currency} {Number(invoice.amount_paid).toLocaleString()}</p>}</div><StatusPill value={invoice.status}/></div>) : <p className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 text-sm text-slate-500">No invoices are available yet.</p>}</div>}

            {activeTab === "support" && <div className="grid xl:grid-cols-[.95fr_1.05fr] gap-6"><div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6"><h2 className="text-xl font-bold text-slate-950 dark:text-white">Create support request</h2>{organizationOptions.length || isStaff ? <form onSubmit={createTicket} className="mt-5 space-y-4"><select required value={ticketForm.organization_id} onChange={(e)=>setTicketForm({...ticketForm,organization_id:e.target.value,project_id:""})} className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-slate-800 dark:text-white"><option value="">Select organisation</option>{organizationOptions.map((org)=><option key={org.id} value={org.id}>{org.name}</option>)}</select><select value={ticketForm.project_id} onChange={(e)=>setTicketForm({...ticketForm,project_id:e.target.value})} className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-slate-800 dark:text-white"><option value="">General / no project</option>{projects.filter((p)=>!ticketForm.organization_id||p.organization_id===ticketForm.organization_id).map((p)=><option key={p.id} value={p.id}>{p.code} — {p.name}</option>)}</select><input required value={ticketForm.subject} onChange={(e)=>setTicketForm({...ticketForm,subject:e.target.value})} className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-slate-800 dark:text-white" placeholder="Subject"/><textarea required rows="5" value={ticketForm.description} onChange={(e)=>setTicketForm({...ticketForm,description:e.target.value})} className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-slate-800 dark:text-white" placeholder="Describe your request"/><select value={ticketForm.priority} onChange={(e)=>setTicketForm({...ticketForm,priority:e.target.value})} className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-slate-800 dark:text-white"><option value="low">Low priority</option><option value="normal">Normal priority</option><option value="high">High priority</option><option value="urgent">Urgent</option></select><button disabled={submittingTicket} className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-60">{submittingTicket?<Loader2 className="animate-spin" size={17}/>:<Send size={17}/>} Submit request</button></form> : <p className="mt-4 text-sm text-slate-500">Your account must be linked to a client organisation before support requests can be submitted.</p>}</div><div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6"><h2 className="text-xl font-bold text-slate-950 dark:text-white">Support history</h2><div className="mt-5 space-y-4">{tickets.length ? tickets.map((ticket)=><div key={ticket.id} className="rounded-xl border border-slate-100 dark:border-white/10 p-4"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold text-indigo-500">{ticket.ticket_number}</p><p className="mt-1 font-semibold text-slate-950 dark:text-white">{ticket.subject}</p></div><StatusPill value={ticket.status}/></div><p className="mt-2 text-xs text-slate-500">{statusLabel(ticket.priority)} priority · {formatDate(ticket.created_at)}</p></div>) : <p className="text-sm text-slate-500">No support requests yet.</p>}</div></div></div>}

            {activeTab === "testimonials" && isAdmin && <div className="space-y-5">
              <div><h2 className="text-2xl font-bold text-slate-950 dark:text-white">Client testimonials</h2><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Review submissions here. Only approved feedback with consent appears on the public Projects page.</p></div>
              {testimonialNotice && <p role="status" className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 px-4 py-3 text-sm text-slate-700 dark:text-slate-300">{testimonialNotice}</p>}
              {testimonialsLoading ? <div className="flex items-center gap-2 rounded-2xl bg-white p-6 text-sm text-slate-500 dark:bg-slate-900"><Loader2 className="animate-spin" size={17}/> Loading submissions…</div> : testimonials.length ? testimonials.map((item) => <article key={item.id} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div><div className="flex flex-wrap items-center gap-2"><h3 className="font-bold text-slate-950 dark:text-white">{item.display_name}</h3><StatusPill value={item.status}/></div><p className="mt-1 text-xs text-slate-500">{[item.organization_name, item.project_name, formatDate(item.created_at)].filter(Boolean).join(" · ")}</p></div>
                  <span className={item.display_consent ? "text-xs font-semibold text-emerald-600" : "text-xs font-semibold text-amber-600"}>{item.display_consent ? "Publication consent given" : "No publication consent"}</span>
                </div>
                <blockquote className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-700 dark:text-slate-300">“{item.quote}”</blockquote>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.status !== "approved" && item.display_consent && <button disabled={testimonialAction === item.id} onClick={() => moderateTestimonial(item, "approved")} className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500 disabled:opacity-60">{testimonialAction === item.id ? <Loader2 size={15} className="animate-spin"/> : <CheckCircle2 size={15}/>} Approve &amp; publish</button>}
                  {item.status === "pending" && <button disabled={testimonialAction === item.id} onClick={() => moderateTestimonial(item, "rejected")} className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-white/10 dark:text-slate-200 disabled:opacity-60">Reject</button>}
                  {item.status === "approved" && <button disabled={testimonialAction === item.id} onClick={() => moderateTestimonial(item, "rejected")} className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-white/10 dark:text-slate-200 disabled:opacity-60">Unpublish</button>}
                  {item.status === "rejected" && <button disabled={testimonialAction === item.id} onClick={() => moderateTestimonial(item, "pending")} className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-white/10 dark:text-slate-200 disabled:opacity-60">Return to review</button>}
                </div>
              </article>) : <p className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500 dark:border-white/10 dark:bg-slate-900">No submissions yet. Approved existing feedback will also appear here.</p>}
            </div>}

            {activeTab === "account" && <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6"><h2 className="text-2xl font-bold text-slate-950 dark:text-white">Account</h2><div className="mt-6 grid sm:grid-cols-2 gap-5 text-sm"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Name</p><p className="mt-2 font-semibold text-slate-900 dark:text-white">{profile?.full_name || "Not set"}</p></div><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Email</p><p className="mt-2 font-semibold text-slate-900 dark:text-white">{profile?.email || session.user.email}</p></div><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Access role</p><p className="mt-2 font-semibold text-slate-900 dark:text-white">{statusLabel(profile?.role || "client")}</p></div><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Account status</p><p className="mt-2 font-semibold text-slate-900 dark:text-white">{statusLabel(profile?.status || "active")}</p></div></div>{memberships.length > 0 && <div className="mt-7 border-t border-slate-100 dark:border-white/10 pt-6"><p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Client organisations</p><div className="mt-3 flex flex-wrap gap-2">{memberships.map((membership)=><span key={membership.organization_id} className="rounded-full bg-slate-100 dark:bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">{membership.client_organizations?.name || membership.organization_id} · {statusLabel(membership.member_role)}</span>)}</div></div>}</div>}
          </main>
        </div>
      </div>
    </section>
  );
}
