import React, { useEffect, useMemo, useState } from "react";
import { Bell, Crown, Image as ImageIcon, Loader2, Lock, Save, Send } from "lucide-react";
import { supabase } from "../lib/supabase";

const fieldClass = "w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-slate-800 dark:text-white outline-none focus:border-indigo-500";
const buttonClass = "inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:opacity-60";
const statusLabel = (value = "") => String(value).replaceAll("_", " ").replace(/\b\w/g, (m) => m.toUpperCase());
const formatDate = (value) => {
  if (!value) return "—";
  try { return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(new Date(value)); } catch { return value; }
};

export default function PortalClientExtras({ activeTab, session, profile, memberships = [], onRefresh }) {
  const [account, setAccount] = useState({ full_name: "", phone: "", job_title: "" });
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [busy, setBusy] = useState("");
  const [message, setMessage] = useState("");
  const [invoices, setInvoices] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedTicketId, setSelectedTicketId] = useState("");
  const [reply, setReply] = useState("");

  const organization = memberships[0]?.client_organizations || null;
  const selectedTicket = tickets.find((item) => item.id === selectedTicketId);
  const selectedMessages = messages.filter((item) => item.ticket_id === selectedTicketId && !item.is_internal);
  const unread = notifications.filter((item) => !item.read_at).length;

  useEffect(() => {
    setAccount({ full_name: profile?.full_name || "", phone: profile?.phone || "", job_title: profile?.job_title || "" });
    if (profile?.avatar_path) {
      supabase.storage.from("profile-avatars").createSignedUrl(profile.avatar_path, 3600).then(({ data }) => setAvatarUrl(data?.signedUrl || ""));
    } else setAvatarUrl("");
  }, [profile?.full_name, profile?.phone, profile?.job_title, profile?.avatar_path]);

  useEffect(() => {
    if (!session?.user) return;
    const load = async () => {
      if (activeTab === "billing") {
        const { data } = await supabase.from("invoices").select("id,invoice_number,description,currency,amount,amount_paid,status,issue_date,due_date").order("created_at", { ascending: false });
        setInvoices(data || []);
      }
      if (activeTab === "dashboard") {
        const { data } = await supabase.from("notifications").select("id,title,body,read_at,created_at").eq("user_id", session.user.id).order("created_at", { ascending: false }).limit(50);
        setNotifications(data || []);
      }
      if (activeTab === "support") {
        const [{ data: ticketData }, { data: messageData }] = await Promise.all([
          supabase.from("support_tickets").select("id,organization_id,ticket_number,subject,status,priority,created_at").order("created_at", { ascending: false }),
          supabase.from("support_messages").select("id,ticket_id,organization_id,sender_id,message,is_internal,created_at").order("created_at", { ascending: true }),
        ]);
        setTickets(ticketData || []); setMessages(messageData || []); setSelectedTicketId((current) => current || ticketData?.[0]?.id || "");
      }
    };
    load();
  }, [activeTab, session?.user?.id]);

  const saveProfile = async (event) => {
    event.preventDefault(); setBusy("profile"); setMessage("");
    let avatarPath = profile?.avatar_path || "";
    if (avatarFile) {
      const ext = avatarFile.name.split(".").pop() || "jpg";
      avatarPath = `${session.user.id}/avatar-${Date.now()}.${ext}`;
      const { error: uploadError } = await supabase.storage.from("profile-avatars").upload(avatarPath, avatarFile, { upsert: true, contentType: avatarFile.type || undefined });
      if (uploadError) { setMessage(uploadError.message); setBusy(""); return; }
    }
    const { error } = await supabase.rpc("update_my_profile", { p_full_name: account.full_name, p_phone: account.phone, p_job_title: account.job_title, p_avatar_path: avatarPath });
    setMessage(error ? error.message : "Profile updated successfully.");
    if (!error) { setAvatarFile(null); onRefresh?.(); }
    setBusy("");
  };

  const changePassword = async (event) => {
    event.preventDefault();
    if (newPassword.length < 10) { setMessage("Use a password with at least 10 characters."); return; }
    setBusy("password");
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setMessage(error ? error.message : "Password updated successfully.");
    if (!error) setNewPassword("");
    setBusy("");
  };

  const markAllRead = async () => {
    const ids = notifications.filter((item) => !item.read_at).map((item) => item.id);
    if (!ids.length) return;
    const { error } = await supabase.from("notifications").update({ read_at: new Date().toISOString() }).in("id", ids).eq("user_id", session.user.id);
    if (!error) setNotifications((items) => items.map((item) => ({ ...item, read_at: item.read_at || new Date().toISOString() })));
  };

  const sendReply = async (event) => {
    event.preventDefault();
    if (!selectedTicket || !reply.trim()) return;
    setBusy("reply");
    const { error } = await supabase.from("support_messages").insert({ ticket_id: selectedTicket.id, organization_id: selectedTicket.organization_id, sender_id: session.user.id, message: reply.trim(), is_internal: false });
    if (error) setMessage(error.message);
    else {
      setReply("");
      const { data } = await supabase.from("support_messages").select("id,ticket_id,organization_id,sender_id,message,is_internal,created_at").order("created_at", { ascending: true });
      setMessages(data || []);
    }
    setBusy("");
  };

  const printInvoice = (invoice) => {
    const popup = window.open("", "_blank", "width=860,height=900");
    if (!popup) return;
    const balance = Number(invoice.amount || 0) - Number(invoice.amount_paid || 0);
    popup.document.write(`<!doctype html><html><head><title>${invoice.invoice_number}</title><style>body{font-family:Arial,sans-serif;padding:48px;color:#111827}h1{margin:0}.muted{color:#64748b}.box{border:1px solid #e2e8f0;border-radius:12px;padding:16px;margin:18px 0}.total{font-size:24px;font-weight:700}button{margin-top:24px;padding:12px 18px}</style></head><body><h1>Eragonova Enterprise</h1><p class="muted">Technology • Engineering • Growth</p><hr/><h2>Invoice ${invoice.invoice_number}</h2><div class="box"><b>Status:</b> ${statusLabel(invoice.status)}<br/><b>Issue:</b> ${formatDate(invoice.issue_date)}<br/><b>Due:</b> ${formatDate(invoice.due_date)}<br/><b>Description:</b> ${invoice.description || "Invoice"}</div><p class="total">${invoice.currency} ${Number(invoice.amount || 0).toFixed(2)}</p><p>Paid: ${invoice.currency} ${Number(invoice.amount_paid || 0).toFixed(2)}</p><p>Balance: ${invoice.currency} ${balance.toFixed(2)}</p><button onclick="window.print()">Print / Save as PDF</button></body></html>`);
    popup.document.close();
  };

  return <>
    {activeTab === "dashboard" && organization?.is_founder && <div className="mb-6 rounded-2xl border border-amber-200 dark:border-amber-500/20 bg-gradient-to-br from-amber-50 to-white dark:from-amber-500/10 dark:to-slate-900 p-5"><div className="flex items-center gap-4">{organization.logo_url ? <img src={organization.logo_url} alt={`${organization.name} logo`} className="h-16 w-16 rounded-2xl border border-amber-200 bg-white object-contain p-2"/> : <div className="h-16 w-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center"><Crown size={28}/></div>}<div><div className="flex items-center gap-2 text-amber-700 dark:text-amber-300"><Crown size={17}/><span className="text-xs font-bold uppercase tracking-[0.14em]">{organization.badge_title || "Founding Client"}</span></div><h3 className="mt-1 text-xl font-bold text-slate-950 dark:text-white">{organization.name}</h3><p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{organization.badge_note || "Recognised as an early Eragonova client."}</p></div></div></div>}

    {activeTab === "dashboard" && unread > 0 && <div className="mb-6 rounded-xl border border-indigo-100 dark:border-indigo-500/20 bg-indigo-50/70 dark:bg-indigo-500/10 px-4 py-3 flex items-center justify-between gap-4"><div className="flex items-center gap-2 text-sm text-indigo-800 dark:text-indigo-200"><Bell size={17}/>{unread} unread portal notification{unread === 1 ? "" : "s"}</div><button onClick={markAllRead} className="text-xs font-semibold text-indigo-700 dark:text-indigo-200">Mark all read</button></div>}

    {activeTab === "billing" && invoices.length > 0 && <div className="mt-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-5"><h3 className="font-bold text-slate-950 dark:text-white">Invoice tools</h3><p className="mt-1 text-sm text-slate-500">Print an invoice or save it as PDF from your browser.</p><div className="mt-4 flex flex-wrap gap-2">{invoices.map((invoice)=><button key={invoice.id} onClick={()=>printInvoice(invoice)} className="rounded-xl border border-slate-200 dark:border-white/10 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200">{invoice.invoice_number} · Print / PDF</button>)}</div></div>}

    {activeTab === "support" && tickets.length > 0 && <div className="mt-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6"><h3 className="text-xl font-bold text-slate-950 dark:text-white">Support conversation</h3><div className="mt-4 grid lg:grid-cols-[.7fr_1.3fr] gap-5"><div className="space-y-2">{tickets.map((ticket)=><button key={ticket.id} onClick={()=>setSelectedTicketId(ticket.id)} className={`w-full text-left rounded-xl border p-3 ${selectedTicketId===ticket.id?"border-indigo-400 bg-indigo-50 dark:bg-indigo-500/10":"border-slate-100 dark:border-white/10"}`}><p className="text-xs font-bold text-indigo-500">{ticket.ticket_number}</p><p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">{ticket.subject}</p><p className="mt-1 text-[11px] text-slate-400">{statusLabel(ticket.status)} · {statusLabel(ticket.priority)}</p></button>)}</div><div>{selectedTicket ? <><div className="space-y-3 max-h-[300px] overflow-y-auto">{selectedMessages.length ? selectedMessages.map((item)=><div key={item.id} className={`rounded-xl p-3 ${item.sender_id===session.user.id?"bg-indigo-50 dark:bg-indigo-500/10 ml-6":"bg-slate-50 dark:bg-white/5 mr-6"}`}><p className="text-sm text-slate-700 dark:text-slate-200">{item.message}</p><p className="mt-1 text-[11px] text-slate-400">{formatDate(item.created_at)}</p></div>) : <p className="text-sm text-slate-500">No replies yet.</p>}</div>{selectedTicket.status !== "closed" && <form onSubmit={sendReply} className="mt-4 flex gap-3"><input value={reply} onChange={(e)=>setReply(e.target.value)} className={fieldClass} placeholder="Write a reply…"/><button disabled={busy==="reply" || !reply.trim()} className={buttonClass}>{busy==="reply"?<Loader2 className="animate-spin" size={17}/>:<Send size={17}/>}</button></form>}</> : null}</div></div></div>}

    {activeTab === "account" && <div className="mt-6 space-y-6"><div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6"><h3 className="text-xl font-bold text-slate-950 dark:text-white">Edit profile</h3>{message && <p className="mt-3 rounded-xl bg-slate-50 dark:bg-white/5 px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{message}</p>}<form onSubmit={saveProfile} className="mt-5 grid sm:grid-cols-2 gap-4"><label className="sm:col-span-2 flex items-center gap-4"><div className="h-20 w-20 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 flex items-center justify-center overflow-hidden">{avatarUrl?<img src={avatarUrl} alt="Profile" className="h-full w-full object-cover"/>:<ImageIcon size={28} className="text-slate-400"/>}</div><div><p className="text-sm font-semibold text-slate-900 dark:text-white">Profile photo</p><input type="file" accept="image/*" onChange={(e)=>setAvatarFile(e.target.files?.[0]||null)} className="mt-2 text-xs text-slate-500"/></div></label><input required className={fieldClass} placeholder="Full name" value={account.full_name} onChange={(e)=>setAccount({...account,full_name:e.target.value})}/><input className={fieldClass} placeholder="Phone" value={account.phone} onChange={(e)=>setAccount({...account,phone:e.target.value})}/><input className={`${fieldClass} sm:col-span-2`} placeholder="Position / title" value={account.job_title} onChange={(e)=>setAccount({...account,job_title:e.target.value})}/><button disabled={busy==="profile"} className={`${buttonClass} sm:col-span-2`}>{busy==="profile"?<Loader2 className="animate-spin" size={17}/>:<Save size={17}/>} Save profile</button></form></div><div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6"><h3 className="text-xl font-bold text-slate-950 dark:text-white">Change password</h3><form onSubmit={changePassword} className="mt-4 flex flex-col sm:flex-row gap-3"><input type="password" minLength="10" className={fieldClass} value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} placeholder="New password (10+ characters)"/><button disabled={busy==="password" || !newPassword} className={buttonClass}><Lock size={17}/> Update password</button></form></div></div>}
  </>;
}
