import React, { useEffect, useMemo, useState } from "react";
import { History, Loader2, RefreshCw } from "lucide-react";
import { supabase } from "../lib/supabase";

const fmt = (value) => {
  try { return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value)); }
  catch { return value || "—"; }
};
const label = (value = "") => String(value).replaceAll("_", " ").replace(/\b\w/g, (m) => m.toUpperCase());

export default function PortalAuditTrail() {
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [message, setMessage] = useState("");

  const profileMap = useMemo(() => Object.fromEntries(profiles.map((p) => [p.id, p])), [profiles]);

  const load = async () => {
    setLoading(true);
    setMessage("");
    const [logs, users] = await Promise.all([
      supabase.from("activity_log").select("id,actor_id,action,entity_type,entity_id,metadata,created_at").order("created_at", { ascending: false }).limit(50),
      supabase.from("profiles").select("id,full_name,email,role"),
    ]);
    const error = logs.error || users.error;
    if (error) setMessage(error.message);
    setEntries(logs.data || []);
    setProfiles(users.data || []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  return (
    <section className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 flex items-center justify-center"><History size={20}/></div>
          <div><h3 className="font-bold text-slate-950 dark:text-white">Recent portal activity</h3><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Administrator audit view of recent portal record changes.</p></div>
        </div>
        <button onClick={load} disabled={loading} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 disabled:opacity-60"><RefreshCw size={15}/> Refresh</button>
      </div>
      {message && <p className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-500/20 dark:bg-rose-500/5 dark:text-rose-300">{message}</p>}
      {loading ? <div className="mt-5 flex items-center gap-2 text-sm text-slate-500"><Loader2 className="animate-spin" size={16}/> Loading activity…</div> : (
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead><tr className="border-b border-slate-200 dark:border-white/10 text-xs uppercase tracking-[0.12em] text-slate-400"><th className="py-3 pr-4">When</th><th className="py-3 pr-4">Actor</th><th className="py-3 pr-4">Action</th><th className="py-3 pr-4">Record</th><th className="py-3">Context</th></tr></thead>
            <tbody>{entries.length ? entries.map((item) => { const actor = profileMap[item.actor_id]; return <tr key={item.id} className="border-b last:border-b-0 border-slate-100 dark:border-white/5"><td className="py-3 pr-4 text-slate-500 whitespace-nowrap">{fmt(item.created_at)}</td><td className="py-3 pr-4"><p className="font-semibold text-slate-900 dark:text-white">{actor?.full_name || actor?.email || "System"}</p>{actor?.role && <p className="text-xs text-slate-400">{label(actor.role)}</p>}</td><td className="py-3 pr-4 font-semibold text-slate-700 dark:text-slate-200">{label(item.action)}</td><td className="py-3 pr-4 text-slate-600 dark:text-slate-300">{label(item.entity_type)}{item.entity_id ? <span className="block text-xs text-slate-400 max-w-[180px] truncate">{item.entity_id}</span> : null}</td><td className="py-3 text-xs text-slate-500">{item.metadata?.organization_id ? `Org: ${item.metadata.organization_id}` : item.metadata?.project_id ? `Project: ${item.metadata.project_id}` : "—"}</td></tr>; }) : <tr><td colSpan="5" className="py-6 text-slate-500">No portal activity has been recorded yet.</td></tr>}</tbody>
          </table>
        </div>
      )}
    </section>
  );
}
