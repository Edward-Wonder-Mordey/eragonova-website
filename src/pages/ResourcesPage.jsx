import React from "react";
import { ArrowRight, CheckCircle2, ClipboardCheck, Download, FileText, Monitor, BarChart3, GraduationCap, ShieldCheck, Users } from "lucide-react";
import { resourceTypes } from "../data/siteData";

const accents = ["blue", "violet", "emerald", "amber"];

const guides = [
  {
    title: "Technology Readiness Checklist",
    icon: Monitor,
    accent: "blue",
    intro: "A simple starting point before upgrading devices, networks, cloud tools or business systems.",
    items: [
      "List the systems, devices and software the organisation currently depends on.",
      "Identify repeated failures, delays, security concerns and manual workarounds.",
      "Confirm who needs access to what information and from which locations.",
      "Check backup, recovery, update and account-management practices.",
      "Define the business outcome the technology change is expected to improve before choosing tools.",
    ],
  },
  {
    title: "Project Scoping Brief",
    icon: ClipboardCheck,
    accent: "indigo",
    intro: "Use these questions before requesting a quotation, proposal or multidisciplinary project plan.",
    items: [
      "What problem or opportunity are we trying to address?",
      "What should be different when the work is complete?",
      "Which deliverables are essential and which are optional?",
      "Who will approve decisions and provide required access or information?",
      "Are there deadlines, budget limits, technical constraints or third-party dependencies?",
    ],
  },
  {
    title: "Data & Reporting Quality Check",
    icon: BarChart3,
    accent: "cyan",
    intro: "A quick review before data is used for dashboards, management reporting or decisions.",
    items: [
      "Confirm the source and owner of each important dataset.",
      "Check for missing values, duplicates, inconsistent labels and unusual records.",
      "Document how key metrics are calculated so different reports use the same definition.",
      "Separate facts in the data from assumptions or interpretation.",
      "Keep a clear record of corrections and transformations made before reporting.",
    ],
  },
  {
    title: "Document Control Checklist",
    icon: FileText,
    accent: "emerald",
    intro: "Useful for proposals, reports, policies, technical documents and shared organisational records.",
    items: [
      "Use clear file names that identify the document, version and date where appropriate.",
      "Keep one agreed location for the current approved version.",
      "Record who reviewed or approved important documents.",
      "Avoid emailing multiple uncontrolled copies when a shared source can be used.",
      "Archive superseded versions without confusing them with the current working document.",
    ],
  },
  {
    title: "Training Needs Brief",
    icon: GraduationCap,
    accent: "violet",
    intro: "A practical way to define training before choosing a course or workshop format.",
    items: [
      "Identify the audience and what they already know.",
      "Describe the task or capability they should be able to perform after training.",
      "Separate knowledge gaps from equipment, process or management problems.",
      "Choose examples and exercises that match the participants' actual work.",
      "Decide how progress or practical competence will be checked after training.",
    ],
  },
  {
    title: "Community Programme Planning Check",
    icon: Users,
    accent: "fuchsia",
    intro: "A starting framework for youth, community, church, NGO or self-reliance initiatives.",
    items: [
      "Define the people the programme is intended to serve and the need being addressed.",
      "Work with trusted local stakeholders when community context matters.",
      "Set practical outcomes that can continue after the programme ends.",
      "Plan logistics, safeguarding, communications, equipment and follow-up responsibilities.",
      "Document what was delivered, participation, lessons learned and appropriate next steps.",
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="accent-band relative overflow-hidden text-white pt-36 pb-20 sm:pt-40 sm:pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Resources</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.045em] leading-[1.02]">Practical knowledge designed to be used.</h1>
            <p className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-white/70">Guides, checklists and resource areas focused on technology, engineering, operations, data, documentation, training and organisational growth.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="/free-tech-help/" className="primary-button px-6 py-3.5">Browse free technology help <ArrowRight size={18}/></a><a href="/contact/" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 font-bold text-white hover:bg-white/10">Request a Resource</a></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="graphic-panel rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-8 sm:p-10 lg:p-12 text-white grid lg:grid-cols-[1.1fr_.9fr] gap-10 items-center">
            <div className="relative">
              <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Free visitor resource · No signup · No payment · Version 2.0</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em]">Quick Technology Health Check</h2>
              <p className="mt-5 text-base sm:text-lg leading-8 text-white/70">Twelve safe first checks for computers, Wi-Fi, printers, storage, missing files, suspicious email and messages, shared passwords, backups, overheating, failed updates and possible account compromise.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="/digital-health-guide/" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-500 transition">Read the free guide <ArrowRight size={18}/></a>
                <a href="/Eragonova_Quick_Technology_Health_Check.pdf" download className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-950 hover:bg-blue-50 transition"><Download size={18}/> Download PDF</a>
              </div>
            </div>
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-7">
              <div className="h-14 w-14 rounded-2xl bg-blue-500/15 flex items-center justify-center text-blue-200"><ShieldCheck size={26}/></div>
              <h3 className="mt-5 text-xl font-bold">The principle: protect first, troubleshoot second.</h3>
              <div className="mt-5 space-y-3 text-sm leading-6 text-white/70">
                {["Avoid deleting data or system files just to 'fix' a symptom.","Do not bypass passwords, security controls or administrator restrictions.","Treat account compromise, suspicious messages, electrical, battery, ransomware and critical-system warning signs as escalation points."].map(item => <div key={item} className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue-300"/><span>{item}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Resource Formats</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white">Knowledge that can support planning and better decisions.</h2>
            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">As the library grows, Eragonova can publish original templates, guides, technical notes and research. The starter resources below can already be used as planning prompts.</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {resourceTypes.map(([Icon,title,text], index) => (
              <div key={title} className="accent-card rounded-3xl p-7" data-accent={accents[index % accents.length]}>
                <div className="accent-icon"><Icon size={24}/></div>
                <h3 className="relative z-10 mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3>
                <p className="relative z-10 mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Starter Library</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white">Six practical checklists you can use now.</h2>
            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">These are general planning aids, not substitutes for a project-specific assessment, professional engagement or organisation-specific policy.</p>
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-5">
            {guides.map(({ title, icon: Icon, accent, intro, items }) => (
              <details key={title} className="accent-card rounded-3xl p-6 sm:p-7 group" data-accent={accent}>
                <summary className="relative z-10 cursor-pointer list-none flex items-start gap-4">
                  <div className="accent-icon shrink-0"><Icon size={22}/></div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{intro}</p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.13em] accent-kicker group-open:hidden">Open checklist</p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.13em] accent-kicker hidden group-open:block">Close checklist</p>
                  </div>
                </summary>
                <ul className="relative z-10 mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-600 dark:border-white/10 dark:text-slate-300">
                  {items.map(item => <li key={item} className="flex gap-3"><CheckCircle2 className="accent-kicker mt-0.5 shrink-0" size={18}/><span>{item}</span></li>)}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="graphic-panel rounded-[2rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 p-8 sm:p-10 lg:p-12 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="relative max-w-3xl"><h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Need a more specific template, guide or assessment?</h2><p className="mt-3 text-white/65 leading-7">Tell us the problem, audience and intended use. Eragonova can discuss the appropriate resource or service scope.</p></div>
            <a href="/contact" className="relative shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-950 hover:bg-blue-50 transition">Contact Eragonova <ArrowRight size={18}/></a>
          </div>
        </div>
      </section>
    </>
  );
}
