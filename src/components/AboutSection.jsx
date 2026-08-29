import React from "react";
import { CheckCircle2, Compass, Layers3, HeartHandshake, ExternalLink } from "lucide-react";

const principles = [
  [Compass, "Understand", "We start with the problem, environment, constraints, and outcome that matter."],
  [Layers3, "Design", "We translate requirements into practical systems, workflows, documentation, and plans."],
  [CheckCircle2, "Build", "We prioritize reliability, clarity, security, quality assurance, and maintainability."],
  [HeartHandshake, "Support", "We communicate clearly, document what we deliver, and keep improvement in view."],
];

export default function AboutSection() {
  return <section id="about" className="py-24 lg:py-32 bg-[#FAFAF6] dark:bg-slate-950"><div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-12 items-start">
      <div><p className="eyebrow">About Eragonova</p><h2 className="section-title">Technology should <span className="text-blue-600 dark:text-blue-400">serve people.</span></h2>
        <p className="section-lead mt-6">Eragonova Enterprise is a multidisciplinary solutions firm founded in Kumasi, Ghana. We bring together IT infrastructure, system administration, data analysis, electrical and electronic engineering, professional documentation, and strategic support.</p>
        <p className="mt-5 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">Our approach is shaped by a simple belief: dependable technical work should be understandable, responsible, and useful. Whether the challenge is a network, a data workflow, an engineering requirement, or a business document, we aim to turn complexity into something people can confidently use.</p>
        <p className="mt-5 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">The enterprise was founded by Edward Wonder Mordey, an IT and engineering professional whose background spans system administration, data analysis, auditing, technical support, networking, and electrical & electronic engineering.</p>
        <a href="https://edward-wonder-mordey.github.io/portfolio/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-7 font-semibold text-blue-600 dark:text-blue-400 hover:underline">Meet the founder & view professional portfolio <ExternalLink size={16}/></a>
      </div>
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-sm"><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">Technical foundation</p><div className="mt-6 space-y-5">
        <div><p className="font-semibold">System Administration</p><p className="text-sm text-slate-500 mt-1">Windows Server · Linux · Active Directory · DHCP / DNS · Cloud</p></div>
        <div><p className="font-semibold">Data & Automation</p><p className="text-sm text-slate-500 mt-1">SQL · Python · PowerShell · Bash · Power BI · Tableau</p></div>
        <div><p className="font-semibold">Networking & Security</p><p className="text-sm text-slate-500 mt-1">Network configuration · Nmap · discovery · monitoring · security foundations</p></div>
        <div><p className="font-semibold">Engineering</p><p className="text-sm text-slate-500 mt-1">Electrical systems · electronics · wiring design · technical problem-solving</p></div>
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800"><p className="text-sm font-semibold">Academic & professional foundation</p><p className="text-sm text-slate-500 mt-1">BAS System Administration · Ensign College · Electrical & Electronic Engineering · KsTU · IT Professional & Technical Support credentials</p></div>
      </div></div>
    </div>

    <div className="mt-20"><p className="eyebrow">How we work</p><h3 className="text-3xl md:text-4xl font-bold tracking-tight mt-3">From problem to <span className="text-blue-600 dark:text-blue-400">practical outcome.</span></h3><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">{principles.map(([Icon,title,text])=><div key={title} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6"><div className="service-icon"><Icon size={20}/></div><h4 className="font-bold text-lg mt-5">{title}</h4><p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-2">{text}</p></div>)}</div></div>

    <div className="mt-16 grid md:grid-cols-2 gap-6"><div className="rounded-2xl bg-slate-950 text-white p-7"><p className="text-blue-300 text-xs font-bold uppercase tracking-[0.18em]">Our vision</p><p className="text-xl leading-relaxed mt-4">To grow into a trusted Ghanaian technology and engineering enterprise delivering scalable, sustainable, and practical solutions.</p></div><div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-7"><p className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-[0.18em]">Our mission</p><p className="text-xl leading-relaxed mt-4 text-slate-700 dark:text-slate-200">Empower organizations and communities through technology, engineering, clear documentation, and structured development.</p></div></div>
  </div></section>;
}
