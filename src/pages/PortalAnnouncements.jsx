import React, { useEffect, useState } from "react";
import { Bell, Loader2, Megaphone, Send } from "lucide-react";
import { supabase } from "../lib/supabase";

const audienceLabels = {
  clients: "Clients",
  staff: "Staff",
  everyone: "Everyone",
};

const formatDate = (value) => {
  if (!value) return "—";
  try {
    return new Intl.DateTimeFormat("en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value));
  } catch {
    return value;
  }
};

export default function PortalAnnouncements({ profile, session, onSent }) {
  const isAdmin = profile?.role === "admin";
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [message, setMessage] = useState(null);
  const [busy, setBusy] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [form, setForm] = useState({ title: "", body: "", audience: "clients" });

  useEffect(() => {
    let active = true;

    const loadAnnouncements = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("announcements")
        .select("id, title, body, audience, created_at")
        .order("created_at", { ascending: false })
        .limit(50);

      if (!active) return;
      setAnnouncements(data || []);
      setLoadError(error?.message || "");
      setLoading(false);
    };

    loadAnnouncements();
    return () => {
      active = false;
    };
  }, [refreshKey]);

  const publishAnnouncement = async (event) => {
    event.preventDefault();
    if (!isAdmin || !session?.user?.id) return;

    const title = form.title.trim();
    const body = form.body.trim();
    if (!title || !body) return;

    setBusy(true);
    setMessage(null);

    try {
      const { error } = await supabase.from("announcements").insert({
        title,
        body,
        audience: form.audience,
        created_by: session.user.id,
      });

      if (error) {
        setMessage({ type: "error", text: error.message });
        return;
      }

      setForm({ title: "", body: "", audience: "clients" });
      setMessage({
        type: "success",
        text: `Announcement published to ${audienceLabels[form.audience]}. It is now available in the portal, and recipients receive an unread notification.`,
      });
      setRefreshKey((current) => current + 1);
      await onSent?.();
    } catch (error) {
      setMessage({ type: "error", text: error.message || "The announcement could not be published." });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
            <Megaphone size={21} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Announcements</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              {isAdmin
                ? "Share an update with client accounts, staff, or everyone who uses the portal."
                : "Read updates from Eragonova that are relevant to your portal account."}
            </p>
          </div>
        </div>
      </header>

      {isAdmin && (
        <form onSubmit={publishAnnouncement} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
          <div>
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">Write an announcement</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Publishing adds the announcement to the selected audience’s portal and creates an unread notification for active recipients.
            </p>
          </div>

          <div className="mt-5 grid gap-4">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Title</span>
              <input
                required
                maxLength={160}
                value={form.title}
                onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                placeholder="e.g. Planned portal maintenance"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Message</span>
              <textarea
                required
                maxLength={5000}
                rows={5}
                value={form.body}
                onChange={(event) => setForm((current) => ({ ...current, body: event.target.value }))}
                className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition focus:border-indigo-500 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                placeholder="Write the information your audience needs to know."
              />
              <span className="mt-1 block text-right text-xs text-slate-400">{form.body.length}/5000</span>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Send to</span>
              <select
                value={form.audience}
                onChange={(event) => setForm((current) => ({ ...current, audience: event.target.value }))}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 dark:border-white/10 dark:bg-slate-950 dark:text-white sm:max-w-sm"
              >
                <option value="clients">Clients</option>
                <option value="staff">Staff</option>
                <option value="everyone">Everyone</option>
              </select>
            </label>
          </div>

          {message && (
            <p
              role="status"
              className={`mt-4 rounded-xl border px-4 py-3 text-sm ${message.type === "error"
                ? "border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-400/20 dark:bg-rose-500/10 dark:text-rose-200"
                : "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-200"}`}
            >
              {message.text}
            </p>
          )}

          <button
            disabled={busy}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {busy ? <Loader2 className="animate-spin" size={17} /> : <Send size={17} />}
            {busy ? "Publishing…" : "Publish announcement"}
          </button>
        </form>
      )}

      {loadError && (
        <p role="alert" className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-400/20 dark:bg-rose-500/10 dark:text-rose-200">
          Announcements could not be loaded: {loadError}
        </p>
      )}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-slate-950 dark:text-white">Recent announcements</h3>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Showing the latest 50 announcements available to your account.</p>
          </div>
          <Bell size={18} className="text-indigo-500" />
        </div>

        <div className="mt-5 space-y-4">
          {loading ? (
            <div className="flex items-center gap-2 py-3 text-sm text-slate-500 dark:text-slate-400">
              <Loader2 className="animate-spin" size={17} /> Loading announcements…
            </div>
          ) : announcements.length ? (
            announcements.map((item) => (
              <article key={item.id} className="border-t border-slate-100 pt-4 first:border-t-0 first:pt-0 dark:border-white/10">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h4 className="font-semibold text-slate-950 dark:text-white">{item.title}</h4>
                  <span className="shrink-0 text-xs text-slate-400">{formatDate(item.created_at)}</span>
                </div>
                {isAdmin && (
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-indigo-500">
                    {audienceLabels[item.audience] || "Portal users"}
                  </p>
                )}
                <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p>
              </article>
            ))
          ) : (
            <p className="rounded-xl bg-slate-50 px-4 py-5 text-sm text-slate-500 dark:bg-white/5 dark:text-slate-400">
              No announcements are available yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
