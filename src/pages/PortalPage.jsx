import React from "react";
import { ArrowRight, Lock, Target, FileText, Monitor, BarChart3, CheckCircle2 } from "lucide-react";
import CapabilityVisual from "../components/CapabilityVisual";

export default function PortalPage() {
  const features = [
    [Target, "Project Visibility", "Keep milestones, priorities and agreed deliverables easy to follow.", "blue"],
    [FileText, "Documents", "Organise relevant reports, proposals, policies and project files around the engagement.", "indigo"],
    [Monitor, "Support", "Provide a clear route for service requests, technical follow-up and communication.", "cyan"],
    [BarChart3, "Reporting", "Bring operational updates, analytics and performance information into one client-facing experience.", "emerald"],
  ];

  return (
    <>
      <section className="accent-band relative overflow-hidden text-white pt-36 pb-20 sm:pt-40 sm:pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-center">
          <div>
            <div className="h-14 w-14 rounded-2xl bg-indigo-500/15 border border-indigo-300/20 text-indigo-200 flex items-center justify-center shadow-lg shadow-indigo-950/20"><Lock size={26}/></div>
            <p className="mt-6 text-indigo-300 text-xs font-bold uppercase tracking-[0.22em]">Client Portal</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.045em] leading-[1.02]">A dedicated space for active client engagements.</h1>
            <p className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-white/70">Eragonova's client portal experience supports organised communication, project visibility, documents, support and reporting around active engagements.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400 hover:-translate-y-0.5">Request Client Access <ArrowRight size={18}/></a>
              <a href="#/contact" className="secondary-button px-6 py-3.5 border-white/25 bg-white/10 text-white hover:bg-white/15">Contact Eragonova</a>
            </div>
          </div>
          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-3 sm:p-4 shadow-2xl shadow-indigo-950/30 backdrop-blur-sm">
            <CapabilityVisual type="portal" />
            <div className="mt-3 flex items-center justify-between gap-3 px-1 text-[11px] font-semibold text-white/45"><span>Project workspace</span><span>Documents • Support • Reporting</span></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-field opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-indigo-600 dark:text-indigo-300 text-xs font-bold uppercase tracking-[0.22em]">Client Experience</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white">Everything centred on the engagement.</h2>
            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">The portal is designed to keep important project information easier to access, understand and follow throughout the client relationship.</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map(([Icon,title,text,accent]) => (
              <div key={title} className="accent-card rounded-3xl p-7" data-accent={accent}>
                <div className="accent-icon"><Icon size={23}/></div>
                <h3 className="relative z-10 mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3>
                <p className="relative z-10 mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[.8fr_1.2fr] gap-10 items-start">
          <div>
            <p className="text-indigo-600 dark:text-indigo-300 text-xs font-bold uppercase tracking-[0.22em]">Access</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">Client access linked to your engagement.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">Use the access request option with the same organisation and contact details associated with your Eragonova engagement.</p>
          </div>
          <div className="accent-card rounded-3xl p-7" data-accent="indigo">
            <div className="relative z-10 flex items-center gap-3 mb-6">
              <div className="accent-icon"><Lock size={21}/></div>
              <p className="font-bold text-slate-950 dark:text-white">Access request details</p>
            </div>
            <ul className="relative z-10 space-y-4 text-sm text-slate-600 dark:text-slate-400">
              {["Organisation or client name","Primary engagement contact","Project or service reference where applicable","Reason for access request"].map(item => <li key={item} className="flex gap-3"><CheckCircle2 className="accent-kicker mt-0.5 shrink-0" size={18}/>{item}</li>)}
            </ul>
            <a href="#/contact" className="relative z-10 mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 hover:-translate-y-0.5">Request Access <ArrowRight size={17}/></a>
          </div>
        </div>
      </section>
    </>
  );
}
