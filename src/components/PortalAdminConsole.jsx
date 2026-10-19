import React, { useEffect, useMemo, useState } from "react";
import {
  BarChart3,
  CheckCircle2,
  Download,
  FileText,
  FolderKanban,
  Loader2,
  MessageSquare,
  Send,
  ShieldCheck,
  Users,
} from "lucide-react";
import { supabase, PORTAL_STORAGE_BUCKETS } from "../lib/supabase";

const fieldClass = "w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-slate-800 dark:text-white outline-none focus:border-indigo-500";
const buttonClass = "inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:opacity-60";

function AdminCard({ title, description, icon: Icon, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 flex items-center justify-center shrink-0"><Icon size={20}/></div>
        <div><h3 className="font-bold text-slate-950 dark:text-white">{title}</h3>{description && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{description}</p>}</div>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Notice({ message }) {
  if (!message) return null;
  return <div className="rounded-xl border border-indigo-100 dark:border-indigo-500/20 bg-indigo-50/70 dark:bg-indigo-500/10 px-4 py-3 text-sm text-indigo-800 dark:text-indigo-200" role="status">{message}</div>;
}

const cleanSlug = (value = "") => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
const cleanFileName = (value = "file") => value.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/-+/g, "-");

export default function PortalAdminConsole({ session, onRefresh }) {
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState("");
  const [message, setMessage] = useState("");
  const [organizations, setOrganizations] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [memberships, setMemberships] = useState([]);
  const [projects, setProjects] = useState([]);
  const [tickets, setTickets] = useState([]);

  const [orgForm, setOrgForm] = useState({ name: "", contact_name: "", contact_email: "", contact_phone: "" });
  const [inviteForm, setInviteForm] = useState({ organization_id: "", full_name: "", email: "", member_role: "member" });
  const [projectForm, setProjectForm] = useState({ organization_id: "", code: "", name: "", summary: "", service_division: "", start_date: "", due_date: "" });
  const [updateForm, setUpdateForm] = useState({ project_id: "", title: "", body: "", update_type: "general" });
  const [invoiceForm, setInvoiceForm] = useState({ organization_id: "", project_id: "", invoice_number: "", description: "", currency: "GHS", amount: "", due_date: "", status: "issued" });
  const [documentForm, setDocumentForm] = useState({ organization_id: "", project_id: "", title: "", description: "", category: "general", file: null });

  const loadAdminData = async () => {
    setLoading(true);
    setMessage("");
    const [orgsResult, profilesResult, membershipsResult, projectsResult, ticketsResult] = await Promise.all([
      supabase.from("client_organizations").select("id,name,slug,status,primary_contact_name,primary_contact_email,primary_contact_phone,created_at").order("created_at", { ascending: false }),
      supabase.from("profiles").select("id,full_name,email,role,status,created_at").order("created_at", { ascending: false }),
      supabase.from("organization_members").select("id,organization_id,user_id,member_role,status").eq("status", "active"),
      supabase.from("projects").select("id,organization_id,code,name,status,progress,created_at").order("created_at", { ascending: false }),
      supabase.from("support_tickets").select("id,organization_id,project_id,ticket_number,subject,priority,status,created_at").order("created_at", { ascending: false }).limit(50),
    ]);
    const firstError = [orgsResult, profilesResult, membershipsResult, projectsResult, ticketsResult].find((result) => result.error)?.error;
    if (firstError) setMessage(firstError.message);
    setOrganizations(orgsResult.data || []);
    setProfiles(profilesResult.data || []);
    setMemberships(membershipsResult.data || []);
    setProjects(projectsResult.data || []);
    setTickets(ticketsResult.data || []);
    setLoading(false);
  };

  useEffect(() => { loadAdminData(); }, []);

  const profileMap = useMemo(() => Object.fromEntries(profiles.map((profile) => [profile.id, profile])), [profiles]);
  const orgMap = useMemo(() => Object.fromEntries(organizations.map((org) => [org.id, org])), [organizations]);
  const projectMap = useMemo(() => Object.fromEntries(projects.map((project) => [project.id, project])), [projects]);
  const clientCount = profiles.filter((profile) => profile.role === "client").length;
  const openTicketCount = tickets.filter((ticket) => !["resolved", "closed"].includes(ticket.status)).length;

  const withBusy = async (key, work, successMessage) => {
    setBusy(key);
    setMessage("");
    try {
      await work();
      if (successMessage) setMessage(successMessage);
      await loadAdminData();
      onRefresh?.();
    } catch (error) {
      setMessage(error?.message || "The action could not be completed.");
    } finally {
      setBusy("");
    }
  };

  const createOrganization = async (event) => {
    event.preventDefault();
    await withBusy("organization", async () => {
      const name = orgForm.name.trim();
      const slug = cleanSlug(name);
      if (!name || !slug) throw new Error("Enter a valid organisation name.");
      const { error } = await supabase.from("client_organizations").insert({
        name,
        slug,
        primary_contact_name: orgForm.contact_name.trim() || null,
        primary_contact_email: orgForm.contact_email.trim().toLowerCase() || null,
        primary_contact_phone: orgForm.contact_phone.trim() || null,
      });
      if (error) throw error;
      setOrgForm({ name: "", contact_name: "", contact_email: "", contact_phone: "" });
    }, "Client organisation created.");
  };

  const inviteClient = async (event) => {
    event.preventDefault();
    await withBusy("invite", async () => {
      const { data, error } = await supabase.functions.invoke("admin-portal-action", {
        body: {
          action: "invite_client",
          organization_id: inviteForm.organization_id,
          full_name: inviteForm.full_name.trim(),
          email: inviteForm.email.trim().toLowerCase(),
          member_role: inviteForm.member_role,
        },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setInviteForm((current) => ({ ...current, full_name: "", email: "" }));
    }, "Client invitation sent and organisation access assigned.");
  };

  const createProject = async (event) => {
    event.preventDefault();
    await withBusy("project", async () => {
      const { error } = await supabase.from("projects").insert({
        organization_id: projectForm.organization_id,
        code: projectForm.code.trim().toUpperCase(),
        name: projectForm.name.trim(),
        summary: projectForm.summary.trim() || null,
        service_division: projectForm.service_division.trim() || null,
        start_date: projectForm.start_date || null,
        due_date: projectForm.due_date || null,
        created_by: session?.user?.id || null,
        status: "planning",
        progress: 0,
        client_visible: true,
      });
      if (error) throw error;
      setProjectForm((current) => ({ ...current, code: "", name: "", summary: "", service_division: "", start_date: "", due_date: "" }));
    }, "Project created.");
  };

  const postProjectUpdate = async (event) => {
    event.preventDefault();
    await withBusy("update", async () => {
      const project = projectMap[updateForm.project_id];
      if (!project) throw new Error("Select a valid project.");
      const { error } = await supabase.from("project_updates").insert({
        project_id: project.id,
        organization_id: project.organization_id,
        title: updateForm.title.trim(),
        body: updateForm.body.trim(),
        update_type: updateForm.update_type,
        client_visible: true,
        created_by: session?.user?.id || null,
      });
      if (error) throw error;
      setUpdateForm((current) => ({ ...current, title: "", body: "" }));
    }, "Project update published to the client portal.");
  };

  const createInvoice = async (event) => {
    event.preventDefault();
    await withBusy("invoice", async () => {
      const amount = Number(invoiceForm.amount);
      if (!Number.isFinite(amount) || amount < 0) throw new Error("Enter a valid invoice amount.");
      const { error } = await supabase.from("invoices").insert({
        organization_id: invoiceForm.organization_id,
        project_id: invoiceForm.project_id || null,
        invoice_number: invoiceForm.invoice_number.trim().toUpperCase(),
        description: invoiceForm.description.trim() || null,
        currency: invoiceForm.currency.trim().toUpperCase() || "GHS",
        amount,
        amount_paid: 0,
        status: invoiceForm.status,
        issue_date: new Date().toISOString().slice(0, 10),
        due_date: invoiceForm.due_date || null,
        client_visible: true,
      });
      if (error) throw error;
      setInvoiceForm((current) => ({ ...current, invoice_number: "", description: "", amount: "", due_date: "" }));
    }, "Invoice added to the client portal.");
  };

  const uploadDocument = async (event) => {
    event.preventDefault();
    await withBusy("document", async () => {
      const file = documentForm.file;
      if (!file) throw new Error("Choose a file to upload.");
      const organizationId = documentForm.organization_id;
      const projectSegment = documentForm.project_id || "general";
      const storagePath = `${organizationId}/${projectSegment}/${Date.now()}-${cleanFileName(file.name)}`;
      const { error: uploadError } = await supabase.storage.from(PORTAL_STORAGE_BUCKETS.documents).upload(storagePath, file, { contentType: file.type || undefined, upsert: false });
      if (uploadError) throw uploadError;

      const { error: metadataError } = await supabase.from("documents").insert({
        organization_id: organizationId,
        project_id: documentForm.project_id || null,
        title: documentForm.title.trim() || file.name,
        description: documentForm.description.trim() || null,
        category: documentForm.category,
        storage_bucket: PORTAL_STORAGE_BUCKETS.documents,
        storage_path: storagePath,
        file_name: file.name,
        mime_type: file.type || null,
        size_bytes: file.size,
        client_visible: true,
        uploaded_by: session?.user?.id || null,
      });
      if (metadataError) {
        await supabase.storage.from(PORTAL_STORAGE_BUCKETS.documents).remove([storagePath]);
        throw metadataError;
      }
      setDocumentForm((current) => ({ ...current, title: "", description: "", file: null }));
      const fileInput = document.getElementById("admin-document-file");
      if (fileInput) fileInput.value = "";
    }, "Document uploaded securely and made available to the client.");
  };

  const updateTicketStatus = async (ticketId, status) => {
    await withBusy(`ticket-${ticketId}`, async () => {
      const payload = { status };
      if (["resolved", "closed"].includes(status)) payload.closed_at = new Date().toISOString();
      else payload.closed_at = null;
      const { error } = await supabase.from("support_tickets").update(payload).eq("id", ticketId);
      if (error) throw error;
    }, "Support ticket updated.");
  };

  if (loading) return <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-8 flex items-center justify-center gap-3 text-slate-600 dark:text-slate-300"><Loader2 className="animate-spin" size={20}/> Loading administrator workspace…</div>;

  return (
    <div className="space-y-6">
      <AdminCard title="Eragonova business documents" description="Download current company templates for use wherever you are." icon={Download}>
        <div className="flex flex-col sm:flex-row gap-3">
          <a className={buttonClass} href="/documents/Eragonova_Official_Receipt.docx" download><Download size={17}/> Download 10-page receipt pad</a>
          <a className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5" href="/documents/Eragonova_Letterhead.docx" download><Download size={17}/> Download letterhead</a>
        </div>
      </AdminCard>
      <div className="rounded-2xl border border-indigo-200 dark:border-indigo-500/20 bg-indigo-50 dark:bg-indigo-500/10 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div><div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-200"><ShieldCheck size={20}/><span className="text-xs font-bold uppercase tracking-[0.16em]">Administrator Workspace</span></div><h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">Manage the client portal</h2><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Create clients and projects, publish updates, upload private files, manage billing and follow support requests.</p></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center"><div className="rounded-xl bg-white/80 dark:bg-slate-950/50 px-3 py-3"><p className="text-xl font-bold text-slate-950 dark:text-white">{organizations.length}</p><p className="text-[10px] text-slate-500">Clients</p></div><div className="rounded-xl bg-white/80 dark:bg-slate-950/50 px-3 py-3"><p className="text-xl font-bold text-slate-950 dark:text-white">{projects.length}</p><p className="text-[10px] text-slate-500">Projects</p></div><div className="rounded-xl bg-white/80 dark:bg-slate-950/50 px-3 py-3"><p className="text-xl font-bold text-slate-950 dark:text-white">{clientCount}</p><p className="text-[10px] text-slate-500">Users</p></div><div className="rounded-xl bg-white/80 dark:bg-slate-950/50 px-3 py-3"><p className="text-xl font-bold text-slate-950 dark:text-white">{openTicketCount}</p><p className="text-[10px] text-slate-500">Open tickets</p></div></div>
        </div>
      </div>

      <Notice message={message}/>

      <div className="grid xl:grid-cols-2 gap-6">
        <AdminCard title="Create client organisation" description="Create the secure client workspace before inviting users." icon={Users}>
          <form onSubmit={createOrganization} className="grid sm:grid-cols-2 gap-3">
            <input required className={`${fieldClass} sm:col-span-2`} placeholder="Organisation / client name" value={orgForm.name} onChange={(e)=>setOrgForm({...orgForm,name:e.target.value})}/>
            <input className={fieldClass} placeholder="Primary contact name" value={orgForm.contact_name} onChange={(e)=>setOrgForm({...orgForm,contact_name:e.target.value})}/>
            <input type="email" className={fieldClass} placeholder="Primary contact email" value={orgForm.contact_email} onChange={(e)=>setOrgForm({...orgForm,contact_email:e.target.value})}/>
            <input className={`${fieldClass} sm:col-span-2`} placeholder="Primary contact phone" value={orgForm.contact_phone} onChange={(e)=>setOrgForm({...orgForm,contact_phone:e.target.value})}/>
            <button disabled={busy === "organization"} className={`${buttonClass} sm:col-span-2`}>{busy === "organization" ? <Loader2 className="animate-spin" size={17}/> : <CheckCircle2 size={17}/>} Create organisation</button>
          </form>
        </AdminCard>

        <AdminCard title="Invite client user" description="Email a secure Supabase invitation and link the user to a client organisation." icon={Send}>
          <form onSubmit={inviteClient} className="space-y-3">
            <select required className={fieldClass} value={inviteForm.organization_id} onChange={(e)=>setInviteForm({...inviteForm,organization_id:e.target.value})}><option value="">Select organisation</option>{organizations.map((org)=><option key={org.id} value={org.id}>{org.name}</option>)}</select>
            <input className={fieldClass} placeholder="Client full name" value={inviteForm.full_name} onChange={(e)=>setInviteForm({...inviteForm,full_name:e.target.value})}/>
            <input required type="email" className={fieldClass} placeholder="Client email" value={inviteForm.email} onChange={(e)=>setInviteForm({...inviteForm,email:e.target.value})}/>
            <select className={fieldClass} value={inviteForm.member_role} onChange={(e)=>setInviteForm({...inviteForm,member_role:e.target.value})}><option value="member">Member</option><option value="manager">Manager</option><option value="owner">Owner</option></select>
            <button disabled={busy === "invite" || !organizations.length} className={buttonClass}>{busy === "invite" ? <Loader2 className="animate-spin" size={17}/> : <Send size={17}/>} Send client invitation</button>
          </form>
        </AdminCard>

        <AdminCard title="Create project" description="Start a project and make its progress visible to the selected client." icon={FolderKanban}>
          <form onSubmit={createProject} className="space-y-3">
            <select required className={fieldClass} value={projectForm.organization_id} onChange={(e)=>setProjectForm({...projectForm,organization_id:e.target.value})}><option value="">Select client organisation</option>{organizations.map((org)=><option key={org.id} value={org.id}>{org.name}</option>)}</select>
            <div className="grid sm:grid-cols-2 gap-3"><input required className={fieldClass} placeholder="Project code e.g. ERA-001" value={projectForm.code} onChange={(e)=>setProjectForm({...projectForm,code:e.target.value})}/><input required className={fieldClass} placeholder="Project name" value={projectForm.name} onChange={(e)=>setProjectForm({...projectForm,name:e.target.value})}/></div>
            <textarea rows="3" className={fieldClass} placeholder="Project summary" value={projectForm.summary} onChange={(e)=>setProjectForm({...projectForm,summary:e.target.value})}/>
            <input className={fieldClass} placeholder="Service division" value={projectForm.service_division} onChange={(e)=>setProjectForm({...projectForm,service_division:e.target.value})}/>
            <div className="grid sm:grid-cols-2 gap-3"><label className="text-xs text-slate-500">Start date<input type="date" className={`${fieldClass} mt-1`} value={projectForm.start_date} onChange={(e)=>setProjectForm({...projectForm,start_date:e.target.value})}/></label><label className="text-xs text-slate-500">Due date<input type="date" className={`${fieldClass} mt-1`} value={projectForm.due_date} onChange={(e)=>setProjectForm({...projectForm,due_date:e.target.value})}/></label></div>
            <button disabled={busy === "project" || !organizations.length} className={buttonClass}>{busy === "project" ? <Loader2 className="animate-spin" size={17}/> : <FolderKanban size={17}/>} Create project</button>
          </form>
        </AdminCard>

        <AdminCard title="Publish project update" description="Add a client-visible progress note, milestone, risk or delivery update." icon={BarChart3}>
          <form onSubmit={postProjectUpdate} className="space-y-3">
            <select required className={fieldClass} value={updateForm.project_id} onChange={(e)=>setUpdateForm({...updateForm,project_id:e.target.value})}><option value="">Select project</option>{projects.map((project)=><option key={project.id} value={project.id}>{project.code} — {project.name}</option>)}</select>
            <input required className={fieldClass} placeholder="Update title" value={updateForm.title} onChange={(e)=>setUpdateForm({...updateForm,title:e.target.value})}/>
            <textarea required rows="4" className={fieldClass} placeholder="Update details" value={updateForm.body} onChange={(e)=>setUpdateForm({...updateForm,body:e.target.value})}/>
            <select className={fieldClass} value={updateForm.update_type} onChange={(e)=>setUpdateForm({...updateForm,update_type:e.target.value})}><option value="general">General</option><option value="milestone">Milestone</option><option value="risk">Risk</option><option value="decision">Decision</option><option value="delivery">Delivery</option></select>
            <button disabled={busy === "update" || !projects.length} className={buttonClass}>{busy === "update" ? <Loader2 className="animate-spin" size={17}/> : <BarChart3 size={17}/>} Publish update</button>
          </form>
        </AdminCard>

        <AdminCard title="Upload client document" description="Files are stored in the private client-documents bucket and delivered through signed links." icon={FileText}>
          <form onSubmit={uploadDocument} className="space-y-3">
            <select required className={fieldClass} value={documentForm.organization_id} onChange={(e)=>setDocumentForm({...documentForm,organization_id:e.target.value,project_id:""})}><option value="">Select client organisation</option>{organizations.map((org)=><option key={org.id} value={org.id}>{org.name}</option>)}</select>
            <select className={fieldClass} value={documentForm.project_id} onChange={(e)=>setDocumentForm({...documentForm,project_id:e.target.value})}><option value="">General / no project</option>{projects.filter((project)=>!documentForm.organization_id||project.organization_id===documentForm.organization_id).map((project)=><option key={project.id} value={project.id}>{project.code} — {project.name}</option>)}</select>
            <input className={fieldClass} placeholder="Document title (optional)" value={documentForm.title} onChange={(e)=>setDocumentForm({...documentForm,title:e.target.value})}/>
            <textarea rows="2" className={fieldClass} placeholder="Description (optional)" value={documentForm.description} onChange={(e)=>setDocumentForm({...documentForm,description:e.target.value})}/>
            <select className={fieldClass} value={documentForm.category} onChange={(e)=>setDocumentForm({...documentForm,category:e.target.value})}><option value="general">General</option><option value="proposal">Proposal</option><option value="quotation">Quotation</option><option value="invoice">Invoice</option><option value="report">Report</option><option value="design">Design</option><option value="policy">Policy</option><option value="manual">Manual</option><option value="deliverable">Deliverable</option></select>
            <input id="admin-document-file" required type="file" className={fieldClass} onChange={(e)=>setDocumentForm({...documentForm,file:e.target.files?.[0] || null})}/>
            <button disabled={busy === "document" || !organizations.length} className={buttonClass}>{busy === "document" ? <Loader2 className="animate-spin" size={17}/> : <FileText size={17}/>} Upload secure document</button>
          </form>
        </AdminCard>

        <AdminCard title="Create invoice" description="Publish invoice amount and status to the selected client." icon={FileText}>
          <form onSubmit={createInvoice} className="space-y-3">
            <select required className={fieldClass} value={invoiceForm.organization_id} onChange={(e)=>setInvoiceForm({...invoiceForm,organization_id:e.target.value,project_id:""})}><option value="">Select client organisation</option>{organizations.map((org)=><option key={org.id} value={org.id}>{org.name}</option>)}</select>
            <select className={fieldClass} value={invoiceForm.project_id} onChange={(e)=>setInvoiceForm({...invoiceForm,project_id:e.target.value})}><option value="">General / no project</option>{projects.filter((project)=>!invoiceForm.organization_id||project.organization_id===invoiceForm.organization_id).map((project)=><option key={project.id} value={project.id}>{project.code} — {project.name}</option>)}</select>
            <div className="grid sm:grid-cols-2 gap-3"><input required className={fieldClass} placeholder="Invoice number" value={invoiceForm.invoice_number} onChange={(e)=>setInvoiceForm({...invoiceForm,invoice_number:e.target.value})}/><input required type="number" min="0" step="0.01" className={fieldClass} placeholder="Amount" value={invoiceForm.amount} onChange={(e)=>setInvoiceForm({...invoiceForm,amount:e.target.value})}/></div>
            <div className="grid sm:grid-cols-2 gap-3"><input className={fieldClass} placeholder="Currency" value={invoiceForm.currency} onChange={(e)=>setInvoiceForm({...invoiceForm,currency:e.target.value})}/><select className={fieldClass} value={invoiceForm.status} onChange={(e)=>setInvoiceForm({...invoiceForm,status:e.target.value})}><option value="draft">Draft</option><option value="issued">Issued</option><option value="part_paid">Part paid</option><option value="paid">Paid</option><option value="overdue">Overdue</option><option value="cancelled">Cancelled</option></select></div>
            <input className={fieldClass} placeholder="Description" value={invoiceForm.description} onChange={(e)=>setInvoiceForm({...invoiceForm,description:e.target.value})}/>
            <label className="text-xs text-slate-500">Due date<input type="date" className={`${fieldClass} mt-1`} value={invoiceForm.due_date} onChange={(e)=>setInvoiceForm({...invoiceForm,due_date:e.target.value})}/></label>
            <button disabled={busy === "invoice" || !organizations.length} className={buttonClass}>{busy === "invoice" ? <Loader2 className="animate-spin" size={17}/> : <FileText size={17}/>} Add invoice</button>
          </form>
        </AdminCard>
      </div>

      <AdminCard title="Support management" description="Review client requests and move them through the support workflow." icon={MessageSquare}>
        <div className="space-y-3">
          {tickets.length ? tickets.map((ticket) => (
            <div key={ticket.id} className="rounded-xl border border-slate-100 dark:border-white/10 p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div><p className="text-xs font-bold text-indigo-500">{ticket.ticket_number} · {orgMap[ticket.organization_id]?.name || "Client"}</p><p className="mt-1 font-semibold text-slate-950 dark:text-white">{ticket.subject}</p><p className="mt-1 text-xs text-slate-500">{ticket.priority} priority{ticket.project_id ? ` · ${projectMap[ticket.project_id]?.code || "Project"}` : ""}</p></div>
              <select disabled={busy === `ticket-${ticket.id}`} className={`${fieldClass} lg:w-52`} value={ticket.status} onChange={(e)=>updateTicketStatus(ticket.id,e.target.value)}><option value="open">Open</option><option value="in_progress">In progress</option><option value="waiting_on_client">Waiting on client</option><option value="resolved">Resolved</option><option value="closed">Closed</option></select>
            </div>
          )) : <p className="text-sm text-slate-500">No support tickets yet.</p>}
        </div>
      </AdminCard>

      <AdminCard title="Client access overview" description="See which portal users are connected to each organisation." icon={Users}>
        <div className="space-y-4">
          {organizations.length ? organizations.map((org) => {
            const orgMembers = memberships.filter((membership) => membership.organization_id === org.id);
            return <div key={org.id} className="rounded-xl border border-slate-100 dark:border-white/10 p-4"><div className="flex items-start justify-between gap-4"><div><p className="font-bold text-slate-950 dark:text-white">{org.name}</p><p className="mt-1 text-xs text-slate-500">{org.primary_contact_email || "No primary contact email"}</p></div><span className="rounded-full bg-slate-100 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300">{orgMembers.length} user{orgMembers.length === 1 ? "" : "s"}</span></div>{orgMembers.length > 0 && <div className="mt-3 flex flex-wrap gap-2">{orgMembers.map((membership) => { const person = profileMap[membership.user_id]; return <span key={membership.id} className="rounded-lg bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-600 dark:text-slate-300">{person?.full_name || person?.email || "Portal user"} · {membership.member_role}</span>; })}</div>}</div>;
          }) : <p className="text-sm text-slate-500">No client organisations created yet.</p>}
        </div>
      </AdminCard>
    </div>
  );
}
