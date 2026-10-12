import React from "react";
import { ArrowRight } from "lucide-react";
import CapabilityVisual from "../components/CapabilityVisual";
import DivisionVisual from "../components/DivisionVisual";
import { divisions, servicePillars, sectors } from "../data/siteData";

const pillarAccents = ["blue", "amber", "emerald"];
const sectorAccents = ["blue", "emerald", "violet", "amber", "indigo", "teal"];

const serviceShowcase = [
  ["04", "data", "Data & Analytics", "Dashboard, reporting and decision-support views that turn operational information into something easier to understand.", ["Power BI", "Tableau", "SQL", "KPI Reporting"]],
  ["02", "network", "Networking & Infrastructure", "Topology, connectivity and infrastructure planning presented through clear technical views and structured implementation.", ["LAN/WAN", "Routing", "Switching", "Wireless"]],
  ["07", "engineering", "Electrical & Electronic Engineering", "Technical systems, electrical documentation and engineering support represented through clean schematics and operating data.", ["Power", "Electronics", "Drawings", "Smart Systems"]],
  ["09", "documents", "Documentation & Compliance", "Professional reports, proposals, policies and technical documentation organised for clarity, review and use.", ["Reports", "SOPs", "Proposals", "Policies"]],
  ["10", "creative", "Branding, Media & Print", "Visual systems that bring identity, campaigns, print materials and digital communication into a consistent brand experience.", ["Branding", "Design", "Print", "Campaigns"]],
  ["15", "academy", "Eragonova Academy", "Learning experiences that combine structured tracks, progress, practical exercises and organisation-specific capability building.", ["Technology", "Data", "Business", "Engineering"]],
];

function divisionAccent(number) {
  const n = Number(number);
  if (n <= 3) return "blue";
  if (n <= 6) return "indigo";
  if (n === 7) return "amber";
  if (n <= 10) return "emerald";
  if (n <= 14) return "teal";
  if (n === 15) return "violet";
  return "fuchsia";
}

function SectionHeading({ eyebrow, title, copy, centered = false }) {
  return (
    <div className={centered ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}>
      <p className="text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white">{title}</h2>
      {copy && <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">{copy}</p>}
    </div>
  );
}

function DivisionCard({ division }) {
  const Icon = division.icon;
  const accent = divisionAccent(division.number);
  return (
    <article className="accent-card rounded-3xl p-5 sm:p-6" data-accent={accent}>
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="accent-icon"><Icon size={23}/></div>
        <span className="accent-kicker text-xs font-bold tracking-[0.18em]">DIVISION {division.number}</span>
      </div>

      <div className="relative z-10 mt-5">
        <DivisionVisual number={division.number} accent={accent} />
      </div>

      <h3 className="relative z-10 mt-5 text-xl font-bold tracking-tight text-slate-950 dark:text-white">{division.title}</h3>
      <p className="relative z-10 mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{division.summary}</p>
      <div className="relative z-10 mt-5 space-y-4">
        {division.groups.map(([group, items]) => (
          <div key={group}>
            <p className="accent-kicker text-xs font-bold uppercase tracking-[0.13em]">{group}</p>
            <div className="mt-2 flex flex-wrap gap-2">{items.map(item => <span key={item} className="accent-chip">{item}</span>)}</div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="accent-band relative overflow-hidden text-white pt-36 pb-20 sm:pt-40 sm:pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Enterprise Services</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.045em] leading-[1.02]">Connected capabilities for technology, engineering, operations and growth.</h1>
            <p className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-white/70">Eragonova brings together specialist services that can be engaged individually or combined around a wider business, institutional or community need.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#/contact" className="primary-button px-6 py-3.5">Discuss Your Need <ArrowRight size={18}/></a>
              <a href="#/projects" className="secondary-button px-6 py-3.5 border-white/25 bg-white/10 text-white hover:bg-white/15">See Work in Practice</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-field opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Capabilities" title="Three capability pillars. Sixteen service divisions." copy="Our services span digital systems, engineering, business operations, knowledge, training and community development."/>
          <div className="mt-10 grid lg:grid-cols-3 gap-5">
            {servicePillars.map((pillar,index) => (
              <div key={pillar.title} className="accent-card rounded-3xl p-7" data-accent={pillarAccents[index % pillarAccents.length]}>
                <span className="accent-kicker relative z-10 text-xs font-bold tracking-[0.18em]">0{index+1}</span>
                <h3 className="relative z-10 mt-3 text-xl font-bold text-slate-950 dark:text-white">{pillar.title}</h3>
                <p className="relative z-10 mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{pillar.description}</p>
                <p className="relative z-10 mt-5 text-xs font-bold uppercase tracking-[0.13em] text-slate-400">{pillar.divisions.length} divisions</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Visual Capability Showcase" title="See the work in a more tangible way." copy="Selected service areas use clean visual previews to show the kinds of dashboards, systems, technical views, documents and learning experiences that sit behind the service descriptions." />
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            {serviceShowcase.map(([number,type,title,text,tags]) => (
              <article key={number} className="capability-showcase-card rounded-[1.75rem] border border-slate-200 bg-white p-4 sm:p-5 dark:border-white/10 dark:bg-white/[0.035]">
                <CapabilityVisual type={type} />
                <div className="px-1 pt-5 pb-1">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Division {number}</p>
                  <h3 className="mt-2 text-xl font-bold text-slate-950 dark:text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{tags.map(tag => <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {servicePillars.map((pillar,pillarIndex) => {
        const items = divisions.filter(d => pillar.divisions.includes(d.number));
        return (
          <section key={pillar.title} className={pillarIndex%2===0 ? "py-24 bg-white dark:bg-slate-950" : "py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10"}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <SectionHeading eyebrow={`Pillar 0${pillarIndex+1}`} title={pillar.title} copy={pillar.description}/>
              <div className="mt-10 grid lg:grid-cols-2 gap-6">{items.map(division => <DivisionCard key={division.number} division={division}/>)}</div>
            </div>
          </section>
        );
      })}

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Who We Serve" title="Solutions shaped around the organisation, not just the tool." centered/>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectors.map(([Icon,title,text], index) => (
              <div key={title} className="accent-card rounded-3xl p-7" data-accent={sectorAccents[index % sectorAccents.length]}>
                <div className="accent-icon"><Icon size={23}/></div>
                <h3 className="relative z-10 mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3>
                <p className="relative z-10 mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="graphic-panel rounded-[2rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 p-8 sm:p-10 lg:p-12 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="relative max-w-3xl"><h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Need several services in one engagement?</h2><p className="mt-3 text-white/65 leading-7">We can define one scope, one set of outcomes and a coordinated delivery approach across the relevant Eragonova divisions.</p></div>
            <a href="#/contact" className="relative shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-950 hover:bg-blue-50 transition">Start a Project <ArrowRight size={18}/></a>
          </div>
        </div>
      </section>
    </>
  );
}
