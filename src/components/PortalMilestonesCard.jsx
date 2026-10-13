import React, { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Circle, Clock3, Flag, Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";

const formatDate = (value) => {
  if (!value) return "No due date";
  try { return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(new Date(value)); } catch { return value; }
};
const label = (value = "") => String(value).replaceAll("_", " ").replace(/\b\w/g, (m) => m.toUpperCase());

export default function PortalMilestonesCard({ activeTab }) {
  const [loading, setLoading] = useState(false);
  const [milestones, setMilestones] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (activeTab !== "projects") return;
    setLoading(true);
    Promise.all([
      supabase.from("project_milestones").select("id,project_id,title,description,status,due_date,completed_at,sort_order").order("sort_order", { ascending: true }),
      supabase.from("projects").select("id,code,name").order("created_at", { ascending: false }),
    ]).then(([m, p]) => {
      setMilestones(m.data || []);
      setProjects(p.data || []);
      setLoading(false);
    });
  }, [activeTab]);

  const grouped = useMemo(() => projects.map((project) => ({ project, items: milestones.filter((m) => m.project_id === project.id) })).filter((group) => group.items.length), [projects, milestones]);
  if (activeTab !== "projects") return null;
  if (loading) return <div className="mt-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 flex items-center gap-2 text-sm text-slate-500"><Loader2 className="animate-spin" size={17}/> Loading milestones…</div>;
  if (!grouped.length) return null;

  return <div className="mt-6 space-y-5">{grouped.map(({ project, items }) => <section key={project.id} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6"><div className="flex items-center gap-3"><div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 flex items-center justify-center"><Flag size={19}/></div><div><p className="text-xs font-bold uppercase tracking-[0.12em] text-indigo-500">Milestones · {project.code}</p><h3 className="text-lg font-bold text-slate-950 dark:text-white">{project.name}</h3></div></div><div className="mt-5 space-y-3">{items.map((item) => { const Icon = item.status === "completed" ? CheckCircle2 : item.status === "in_progress" ? Clock3 : Circle; return <div key={item.id} className="rounded-xl border border-slate-100 dark:border-white/10 p-4 flex items-start gap-3"><Icon size={18} className={item.status === "completed" ? "text-emerald-500 mt-0.5" : "text-indigo-500 mt-0.5"}/><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><p className="font-semibold text-slate-900 dark:text-white">{item.title}</p><span className="rounded-full bg-slate-100 dark:bg-white/5 px-2 py-1 text-[10px] font-bold text-slate-500 dark:text-slate-300">{label(item.status)}</span></div>{item.description && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.description}</p>}<p className="mt-2 text-xs text-slate-400">Due: {formatDate(item.due_date)}{item.completed_at ? ` · Completed: ${formatDate(item.completed_at)}` : ""}</p></div></div>;})}</div></section>)}</div>;
}
