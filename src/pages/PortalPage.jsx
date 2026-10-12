import React from "react";
import { ArrowRight, Lock, Target, FileText, Monitor, BarChart3, CheckCircle2 } from "lucide-react";

export default function PortalPage() {
  const features = [
    [Target, "Project Visibility", "Keep milestones, priorities and agreed deliverables easy to follow."],
    [FileText, "Documents", "Organise relevant reports, proposals, policies and project files around the engagement."],
    [Monitor, "Support", "Provide a clear route for service requests, technical follow-up and communication."],
    [BarChart3, "Reporting", "Bring operational updates, analytics and performance information into one client-facing experience."],
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white pt-36 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 opacity-20 hero-grid" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="h-14 w-14 rounded-2xl bg-blue-500/10 border border-blue-400/20 text-blue-300 flex items-center justify-center"><Lock size={26}/></div>
            <p className="mt-6 text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Client Portal</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.045em] leading-[1.02]">A dedicated space for active client engagements.</h1>
            <p className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-white/70">Eragonova's client portal experience supports organised communication, project visibility, documents, support and reporting around active engagements.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#/contact" className="primary-button px-6 py-3.5">Request Client Access <ArrowRight size={18}/></a>
              <a href="#/contact" className="secondary-button px-6 py-3.5 border-white/25 bg-white/10 text-white hover:bg-white/15">Contact Eragonova</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Client Experience</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white">Everything centred on the engagement.</h2>
            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">The portal is designed to keep important project information easier to access, understand and follow throughout the client relationship.</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map(([Icon,title,text]) => (
              <div key={title} className="rounded-3xl border border-slate-200 p-7 dark:border-white/10 dark:bg-white/[0.03]">
                <Icon className="text-blue-600 dark:text-blue-300" size={23}/>
                <h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[.8fr_1.2fr] gap-10 items-start">
          <div>
            <p className="text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Access</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">Client access linked to your engagement.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">Use the access request option with the same organisation and contact details associated with your Eragonova engagement.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-white/[0.03]">
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              {["Organisation or client name","Primary engagement contact","Project or service reference where applicable","Reason for access request"].map(item => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-300" size={18}/>{item}</li>)}
            </ul>
            <a href="#/contact" className="mt-7 primary-button px-5 py-3">Request Access <ArrowRight size={17}/></a>
          </div>
        </div>
      </section>
    </>
  );
}
