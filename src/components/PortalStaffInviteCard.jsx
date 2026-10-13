import React, { useState } from "react";
import { Loader2, Send, UserPlus } from "lucide-react";
import { supabase } from "../lib/supabase";

const fieldClass = "w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-slate-800 dark:text-white outline-none focus:border-indigo-500";
const buttonClass = "inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:opacity-60";

export default function PortalStaffInviteCard({ onComplete }) {
  const [form, setForm] = useState({ full_name: "", email: "" });
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      const { data, error } = await supabase.functions.invoke("admin-portal-action", {
        body: {
          action: "invite_staff",
          full_name: form.full_name.trim(),
          email: form.email.trim().toLowerCase(),
        },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setForm({ full_name: "", email: "" });
      setMessage("Staff invitation sent. The invited user will receive Staff access after accepting the invitation.");
      onComplete?.();
    } catch (error) {
      setMessage(error?.message || "The staff invitation could not be sent.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 flex items-center justify-center shrink-0"><UserPlus size={20}/></div>
        <div>
          <h3 className="font-bold text-slate-950 dark:text-white">Invite staff member</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Create a secure internal Staff account without giving Administrator privileges.</p>
        </div>
      </div>
      <form onSubmit={submit} className="mt-5 space-y-3">
        <input className={fieldClass} placeholder="Staff full name" value={form.full_name} onChange={(e)=>setForm({...form,full_name:e.target.value})}/>
        <input required type="email" className={fieldClass} placeholder="Staff email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
        <button disabled={busy} className={buttonClass}>{busy ? <Loader2 className="animate-spin" size={17}/> : <Send size={17}/>} Send staff invitation</button>
      </form>
      {message && <p className="mt-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-sm text-slate-600 dark:text-slate-300" role="status">{message}</p>}
    </section>
  );
}
