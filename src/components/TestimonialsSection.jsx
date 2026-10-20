import React, { useEffect, useState } from "react";
import { CheckCircle2, Loader2, MessageSquare, Send } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function TestimonialsSection() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ display_name: "", organization_name: "", project_name: "", quote: "", consent: false, website: "" });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let mounted = true;
    supabase.from("testimonials")
      .select("id, display_name, organization_name, project_name, quote, approved_at")
      .eq("status", "approved")
      .eq("display_consent", true)
      .order("approved_at", { ascending: false })
      .limit(8)
      .then(({ data }) => {
        if (mounted) setItems(data || []);
        if (mounted) setLoading(false);
      });
    return () => { mounted = false; };
  }, []);

  const submit = async (event) => {
    event.preventDefault();
    setMessage("");
    if (form.website) { setMessage("Thank you. Your feedback has been received for review."); return; }
    setSubmitting(true);
    const { error } = await supabase.from("testimonials").insert({
      display_name: form.display_name.trim(),
      organization_name: form.organization_name.trim() || null,
      project_name: form.project_name.trim() || null,
      quote: form.quote.trim(),
      display_consent: form.consent,
    });
    setSubmitting(false);
    if (error) {
      setMessage("We could not submit your feedback just now. Please try again later or contact Eragonova.");
      return;
    }
    setForm({ display_name: "", organization_name: "", project_name: "", quote: "", consent: false, website: "" });
    setMessage("Thanks. Your feedback is with Eragonova for review. It will appear here only after approval.");
  };

  return (
    <section className="mt-12 grid lg:grid-cols-[1.05fr_.95fr] gap-8" aria-labelledby="client-feedback-heading">
      <div>
        <p className="eyebrow">Client feedback</p>
        <h3 id="client-feedback-heading" className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">Experiences from our clients</h3>
        <div className="mt-5 space-y-4">
          {loading ? <p className="text-sm text-slate-500">Loading approved feedback…</p> : items.length ? items.map((item) => (
            <figure key={item.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950">
              <MessageSquare size={21} className="text-blue-600 dark:text-blue-400" />
              <blockquote className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">“{item.quote}”</blockquote>
              <figcaption className="mt-4 font-bold text-slate-950 dark:text-white">{item.display_name}</figcaption>
              {(item.organization_name || item.project_name) && <p className="mt-1 text-xs text-slate-500">{[item.organization_name, item.project_name].filter(Boolean).join(" · ")}</p>}
            </figure>
          )) : <p className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-500 dark:border-white/10 dark:bg-slate-950">Approved client feedback will appear here.</p>}
        </div>
      </div>
      <form onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-950">
        <h3 className="text-xl font-bold text-slate-950 dark:text-white">Share your experience</h3>
        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">Submissions are reviewed by Eragonova before publication. Please share feedback you are comfortable making public.</p>
        <div className="mt-5 space-y-4">
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">Name or display name
            <input required minLength="2" maxLength="100" value={form.display_name} onChange={(e) => setForm({ ...form, display_name: e.target.value })} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-transparent px-3 py-2.5 font-normal dark:border-white/15" />
          </label>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">Organisation (optional)
            <input maxLength="120" value={form.organization_name} onChange={(e) => setForm({ ...form, organization_name: e.target.value })} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-transparent px-3 py-2.5 font-normal dark:border-white/15" />
          </label>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">Project or service (optional)
            <input maxLength="160" value={form.project_name} onChange={(e) => setForm({ ...form, project_name: e.target.value })} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-transparent px-3 py-2.5 font-normal dark:border-white/15" />
          </label>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">Your feedback
            <textarea required minLength="20" maxLength="1200" rows="5" value={form.quote} onChange={(e) => setForm({ ...form, quote: e.target.value })} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-transparent px-3 py-2.5 font-normal dark:border-white/15" />
          </label>
          <div className="absolute -left-[10000px]" aria-hidden="true">
            <label>Leave this field empty<input tabIndex="-1" autoComplete="off" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} /></label>
          </div>
          <label className="flex items-start gap-3 text-xs leading-5 text-slate-600 dark:text-slate-400">
            <input required type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} className="mt-1" />
            I agree that Eragonova may publish this feedback and the name/organisation I provided if it is approved.
          </label>
          {message && <p role="status" className="rounded-xl bg-slate-100 p-3 text-sm text-slate-700 dark:bg-white/5 dark:text-slate-200">{message}</p>}
          <button disabled={submitting} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500 disabled:opacity-60">{submitting ? <Loader2 className="animate-spin" size={17}/> : <Send size={17}/>} Submit feedback</button>
        </div>
      </form>
    </section>
  );
}
