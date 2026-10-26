import React, { useCallback, useEffect, useState } from "react";
import { Loader2, Megaphone, Send } from "lucide-react";
import { supabase } from "../lib/supabase";

const fieldClass = "w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-slate-800 dark:text-white outline-none focus:border-indigo-500";
const buttonClass = "inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:opacity-60";
const audienceLabels = { clients: "Clients", staff: "Staff", everyone: "Everyone" };

const formatDate = (value) => {
  if (!value) return "—";
  try {
    return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
  } catch {
    return value;
  }
};

export default function PortalAnnouncements({ session, isAdmin = false }) {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [form, setForm] = useState({ title: "", body: "", audience: "" });

  const loadAnnouncements = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("announcements")
      .select("id,title,body,audience,created_at")
      .order("created_at", { ascending: false })
      .limit(100);

    if (error) {
      setAnnouncements([]);
      setFeedback({ type: "error", text: error.message });
    } else {
      setAnnouncements(data || []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadAnnouncements();
  }, [loadAnnouncements]);

  const getRecipientIds = async (audience) => {
    const { data: profiles, error: profilesError } = await supabase
      .from("profiles")
      .select("id,role")
      .eq("status", "active");
    if (profilesError) throw profilesError;

    let activeClientIds = new Set();
    if (audience === "clients" || audience === "everyone") {
      const { data: memberships, error: membershipsError } = await supabase
        .from("organization_members")
        .select("user_id")
        .eq("status", "active");
      if (membershipsError) throw membershipsError;
      activeClientIds = new Set((memberships || []).map((membership) => membership.user_id));
    }

    const matchesAudience = (profile) => {
      if (audience === "staff") return profile.role === "staff";
      if (audience === "clients") return profile.role === "client" && activeClientIds.has(profile.id);
      if (audience === "everyone") return profile.role === "admin" || profile.role === "staff" || (profile.role === "client" && activeClientIds.has(profile.id));
      return false;
    };

    return [...new Set((profiles || []).filter(matchesAudience).map((profile) => profile.id))]
      .filter((userId) => userId !== session?.user?.id);
  };

  const publishAnnouncement = async (event) => {
    event.preventDefault();
    const title = form.title.trim();
    const body = form.body.trim();
    if (title.length < 3 || title.length > 160) {
      setFeedback({ type: "error", text: "The title must be between 3 and 160 characters." });
      return;
    }
    if (!body || body.length > 5000) {
      setFeedback({ type: "error", text: "Enter a message of up to 5,000 characters." });
      return;
    }
    if (!Object.prototype.hasOwnProperty.call(audienceLabels, form.audience)) {
      setFeedback({ type: "error", text: "Choose who should receive this announcement." });
      return;
    }

    setSending(true);
    setFeedback(null);
    const { error: announcementError } = await supabase.from("announcements").insert({
      title,
      body,
      audience: form.audience,
      created_by: session?.user?.id,
    });

    if (announcementError) {
      setFeedback({ type: "error", text: announcementError.message });
      setSending(false);
      return;
    }

    setForm({ title: "", body: "", audience: "" });
    let successText = "Announcement published for " + audienceLabels[form.audience] + ".";
    try {
      const recipientIds = await getRecipientIds(form.audience);
      if (recipientIds.length) {
        const preview = body.replace(/\s+/g, " ").slice(0, 240);
        const notificationBody = preview.length < body.length
          ? preview + "… Open Announcements in the portal for the full message."
          : preview + " Open Announcements in the portal to view this update.";
        for (let start = 0; start < recipientIds.length; start += 100) {
          const rows = recipientIds.slice(start, start + 100).map((user_id) => ({
            user_id,
            title: "New announcement: " + title,
            body: notificationBody,
            link: "/portal/#announcements",
          }));
          const { error } = await supabase.from("notifications").insert(rows);
          if (error) throw error;
        }
        successText += " Dashboard alerts sent to " + recipientIds.length + " portal user" + (recipientIds.length === 1 ? "" : "s") + ".";
      } else {
        successText += " There are no active matching portal users to alert.";
      }
      setFeedback({ type: "success", text: successText });
    } catch (error) {
      setFeedback({ type: "warning", text: "The announcement is published, but dashboard alerts could not be sent: " + (error?.message || "Please try again later.") });
    }
    await loadAnnouncements();
    setSending(false);
  };

  return (
    <div className="space-y-6">
      <header>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300"><Megaphone size={21}/></div>
          <div><h2 className="text-2xl font-bold text-slate-950 dark:text-white">Announcements</h2><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Portal updates from Eragonova Enterprise.</p></div>
        </div>
      </header>

      {feedback && <div role="status" className={`rounded-xl border px-4 py-3 text-sm ${feedback.type === "error" ? "border-rose-200 bg-rose-50 text-rose-800 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-200" : feedback.type === "warning" ? "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200" : "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-200"}`}>{feedback.text}</div>}

      {isAdmin && <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
        <div className="flex items-start gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300"><Send size={19}/></div><div><h3 className="font-bold text-slate-950 dark:text-white">Publish an announcement</h3><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Choose the audience. The portal will show the announcement only to people with the matching access.</p></div></div>
        <form onSubmit={publishAnnouncement} className="mt-5 space-y-4">
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">Audience
            <select required className={`${fieldClass} mt-2`} value={form.audience} onChange={(event) => setForm({ ...form, audience: event.target.value })}>
              <option value="">Choose recipients</option>
              <option value="clients">Clients</option>
              <option value="staff">Staff</option>
              <option value="everyone">Everyone</option>
            </select>
          </label>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">Title
            <input required minLength="3" maxLength="160" className={`${fieldClass} mt-2`} value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} placeholder="Announcement title"/>
            <span className="mt-1 block text-right text-xs font-normal text-slate-400">{form.title.length}/160</span>
          </label>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">Message
            <textarea required maxLength="5000" rows="5" className={`${fieldClass} mt-2 resize-y`} value={form.body} onChange={(event) => setForm({ ...form, body: event.target.value })} placeholder="Write the announcement for the selected audience…"/>
            <span className="mt-1 block text-right text-xs font-normal text-slate-400">{form.body.length}/5000</span>
          </label>
          <button type="submit" disabled={sending} className={buttonClass}>{sending ? <Loader2 className="animate-spin" size={17}/> : <Send size={17}/>} {sending ? "Publishing…" : "Publish announcement"}</button>
        </form>
      </section>}

      <section className="space-y-4" aria-live="polite">
        {loading ? <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500 dark:border-white/10 dark:bg-slate-900"><Loader2 className="animate-spin" size={17}/> Loading announcements…</div>
          : announcements.length ? announcements.map((announcement) => <article key={announcement.id} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div><h3 className="text-lg font-bold text-slate-950 dark:text-white">{announcement.title}</h3><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{formatDate(announcement.created_at)}</p></div>
              <span className="inline-flex w-fit rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-200">{audienceLabels[announcement.audience] || "Portal"}</span>
            </div>
            <p className="mt-4 whitespace-pre-wrap break-words text-sm leading-7 text-slate-700 dark:text-slate-300">{announcement.body}</p>
          </article>)
          : <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500 dark:border-white/10 dark:bg-slate-900">No announcements are available for your account yet.</div>}
      </section>
    </div>
  );
}
