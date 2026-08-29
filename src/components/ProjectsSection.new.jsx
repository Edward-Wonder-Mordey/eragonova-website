import React from "react";
import { ArrowUpRight, Database, Server, Network, FileText, Building2, ClipboardCheck } from "lucide-react";

const projects = [
  ["PromisedLand Data Center", "IT Infrastructure", "A hybrid Azure and AWS deployment proposal focused on resilience, scalability, and a clear operating model.", Database],
  ["Linux Deployment Proposal", "Infrastructure & Security", "A permissions-led Linux server architecture covering access control, scalable storage, and operational planning.", Server],
  ["Customer Support Mini-Suite", "Data & Operations", "A practical support and analytics workflow combining ticket triage, customer satisfaction visibility, troubleshooting, and reporting.", ClipboardCheck],
  ["Network Fingerprinting & Security Assessment", "Networking & Security", "A controlled Nmap and Zenmap exercise covering network discovery, OS fingerprinting, exposed services, and security analysis.", Network],
  ["Eragonova Enterprise Platform", "Digital Enterprise", "The company's evolving digital platform, built to make technical services clearer, more accessible, and easier to scale.", Building2],
  ["Stake Welfare & Self-Reliance Plan · 2026", "Planning & Leadership", "A structured annual program plan demonstrating strategic planning, stakeholder coordination, measurable goals, and progress tracking.", FileText],
];

export default function ProjectsSection() {
  return <section id="projects" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50"><div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"><div className="max-w-2xl"><p className="eyebrow">Selected work</p><h2 className="section-title">Built for <span className="text-blue-600 dark:text-blue-400">real-world impact.</span></h2><p className="section-lead">Selected projects and demonstrations drawn from our growing technology, infrastructure, data, and planning portfolio.</p></div><a href="#contact" className="secondary-button px-5 py-3 shrink-0">Discuss your project <ArrowUpRight size={17}/></a></div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{projects.map(([title,category,description,Icon],i)=><article key={title} className={`project-card ${i===0 ? "lg:row-span-2" : ""}`}><div className="flex items-center justify-between"><div className="project-icon"><Icon size={21}/></div><span className="text-xs font-semibold uppercase tracking-wider text-slate-400">0{i+1}</span></div><div className="mt-16"><p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">{category}</p><h3 className="text-xl font-bold mt-2">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p></div></article>)}</div>
    <div className="mt-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 text-sm text-slate-600 dark:text-slate-400">These projects represent selected academic, professional, internal, and planning work. They are presented as evidence of capability rather than as claims that every project was a commercial client engagement.</div>
  </div></section>;
}
