import React from "react";
import { ArrowRight, CheckCircle2, Target, BarChart3, FileText, Layers, Users, Briefcase, Globe2, Mail } from "lucide-react";
import ProjectsSection from "../components/ProjectsSection.new";
import { divisions, servicePillars, sectors, resourceTypes, communityPrograms } from "../data/siteData";

function PageHero({ eyebrow, title, copy, actions }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-36 pb-20 sm:pt-40 sm:pb-24">
      <div className="absolute inset-0 opacity-20 hero-grid" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">{eyebrow}</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.045em] leading-[1.02]">{title}</h1>
          <p className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-white/70">{copy}</p>
          {actions && <div className="mt-8 flex flex-col sm:flex-row gap-3">{actions}</div>}
        </div>
      </div>
    </section>
  );
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

function CTA({ title, copy, primary = "Start a Project", href = "#/contact" }) {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="rounded-[2rem] bg-slate-950 p-8 sm:p-10 lg:p-12 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative max-w-3xl"><h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2><p className="mt-3 text-white/65 leading-7">{copy}</p></div>
          <a href={href} className="relative shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-950 hover:bg-blue-50 transition">{primary} <ArrowRight size={18}/></a>
        </div>
      </div>
    </section>
  );
}

function DivisionCard({ division }) {
  const Icon = division.icon;
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.035]">
      <div className="flex items-start justify-between gap-4"><div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300 flex items-center justify-center"><Icon size={23}/></div><span className="text-xs font-bold tracking-[0.18em] text-slate-400">DIVISION {division.number}</span></div>
      <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-950 dark:text-white">{division.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{division.summary}</p>
      <div className="mt-5 space-y-4">{division.groups.map(([group, items]) => <div key={group}><p className="text-xs font-bold uppercase tracking-[0.13em] text-slate-500 dark:text-slate-400">{group}</p><div className="mt-2 flex flex-wrap gap-2">{items.map(item => <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 dark:bg-white/[0.07] dark:text-slate-300">{item}</span>)}</div></div>)}</div>
    </article>
  );
}

export function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Enterprise Services" title="Connected capabilities for technology, engineering, operations and growth." copy="Eragonova brings together specialist services that can be engaged individually or combined around a wider business, institutional or community need." actions={<><a href="#/contact" className="primary-button px-6 py-3.5">Discuss Your Need <ArrowRight size={18}/></a><a href="#/projects" className="secondary-button px-6 py-3.5 border-white/25 bg-white/10 text-white hover:bg-white/15">See Work in Practice</a></>} />
      <section className="py-24 bg-white dark:bg-slate-950"><div className="max-w-7xl mx-auto px-6 lg:px-12"><SectionHeading eyebrow="Capabilities" title="Three capability pillars. Sixteen service divisions." copy="Our services span digital systems, engineering, business operations, knowledge, training and community development."/><div className="mt-10 grid lg:grid-cols-3 gap-5">{servicePillars.map((pillar,index)=><div key={pillar.title} className="rounded-3xl border border-slate-200 p-7 dark:border-white/10 dark:bg-white/[0.03]"><span className="text-xs font-bold tracking-[0.18em] text-blue-600 dark:text-blue-300">0{index+1}</span><h3 className="mt-3 text-xl font-bold text-slate-950 dark:text-white">{pillar.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{pillar.description}</p><p className="mt-5 text-xs font-bold uppercase tracking-[0.13em] text-slate-400">{pillar.divisions.length} divisions</p></div>)}</div></div></section>
      {servicePillars.map((pillar,pillarIndex)=>{const items=divisions.filter(d=>pillar.divisions.includes(d.number));return <section key={pillar.title} className={pillarIndex%2===0?"py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10":"py-24 bg-white dark:bg-slate-950"}><div className="max-w-7xl mx-auto px-6 lg:px-12"><SectionHeading eyebrow={`Pillar 0${pillarIndex+1}`} title={pillar.title} copy={pillar.description}/><div className="mt-10 grid lg:grid-cols-2 gap-5">{items.map(division=><DivisionCard key={division.number} division={division}/>)}</div></div></section>})}
      <section className="py-24 bg-white dark:bg-slate-950"><div className="max-w-7xl mx-auto px-6 lg:px-12"><SectionHeading eyebrow="Who We Serve" title="Solutions shaped around the organisation, not just the tool." centered/><div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">{sectors.map(([Icon,title,text])=><div key={title} className="rounded-3xl border border-slate-200 p-7 dark:border-white/10 dark:bg-white/[0.03]"><Icon className="text-blue-600 dark:text-blue-300" size={23}/><h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></div>)}</div></div></section>
      <CTA title="Need several services in one engagement?" copy="We can define one scope, one set of outcomes and a coordinated delivery approach across the relevant Eragonova divisions."/>
    </>
  );
}

export function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Projects & Capabilities" title="Practical work organised around useful outcomes." copy="Explore how Eragonova approaches data, digital services, operations, design, documentation and enterprise systems." actions={<a href="#/contact" className="primary-button px-6 py-3.5">Discuss a Similar Project <ArrowRight size={18}/></a>} />
      <ProjectsSection />
      <section className="py-24 bg-white dark:bg-slate-950"><div className="max-w-7xl mx-auto px-6 lg:px-12"><SectionHeading eyebrow="Our Approach" title="Clear from challenge to outcome." copy="Projects are approached with attention to the problem, the work required, the deliverables and the result the client needs."/><div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">{[[Target,"Challenge","Define the problem or opportunity clearly."],[Layers,"Approach","Structure the work around the right disciplines and priorities."],[FileText,"Deliverables","Produce useful systems, documents, designs or outputs."],[BarChart3,"Outcome","Focus delivery on the change or result the engagement is meant to create."]].map(([Icon,title,text])=><div key={title} className="rounded-2xl border border-slate-200 p-6 dark:border-white/10 dark:bg-white/[0.03]"><Icon className="text-blue-600 dark:text-blue-300" size={22}/><h3 className="mt-4 font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></div>)}</div></div></section>
      <CTA title="Have work that needs structure, not just execution?" copy="Bring the problem, current situation and desired outcome. We can define the right project scope together."/>
    </>
  );
}

export function ResourcesPage() {
  return (
    <>
      <PageHero eyebrow="Resources" title="Practical knowledge designed to be used." copy="Insights, templates, guides and research focused on technology, engineering, operations, data, documentation and organisational growth." actions={<a href="#/contact" className="primary-button px-6 py-3.5">Request a Resource <ArrowRight size={18}/></a>} />
      <section className="py-24 bg-white dark:bg-slate-950"><div className="max-w-7xl mx-auto px-6 lg:px-12"><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{resourceTypes.map(([Icon,title,text])=><div key={title} className="rounded-3xl border border-slate-200 p-7 dark:border-white/10 dark:bg-white/[0.03]"><Icon className="text-blue-600 dark:text-blue-300" size={24}/><h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></div>)}</div></div></section>
      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10"><div className="max-w-7xl mx-auto px-6 lg:px-12"><SectionHeading eyebrow="Knowledge Areas" title="Resources across the work organisations manage every day." copy="Our knowledge areas reflect the same practical disciplines found across Eragonova's services and training."/><div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">{["Technology & infrastructure","Business & administration","Data & reporting","Engineering & technical documentation","Training & professional development","Community & organisational development"].map(item=><div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]"><CheckCircle2 className="text-blue-600 dark:text-blue-300" size={19}/><p className="mt-3 font-semibold text-slate-900 dark:text-white">{item}</p></div>)}</div></div></section>
      <CTA title="Looking for a specific guide, template or reference?" copy="Tell us what you need and the context in which you plan to use it." primary="Contact Eragonova"/>
    </>
  );
}

export function CommunityPage() {
  return (
    <>
      <PageHero eyebrow="Community Development" title="Technology should create human impact." copy="Eragonova connects digital skills, entrepreneurship, practical service, self-reliance and organisational support with long-term community development." actions={<a href="#/contact" className="primary-button px-6 py-3.5">Partner With Us <ArrowRight size={18}/></a>} />
      <section className="py-24 bg-white dark:bg-slate-950"><div className="max-w-7xl mx-auto px-6 lg:px-12"><SectionHeading eyebrow="Programme Areas" title="Practical programmes for people and communities." copy="Community initiatives can be delivered directly or with institutions, churches, NGOs and local partners."/><div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{communityPrograms.map((program,index)=><div key={program} className="rounded-3xl border border-slate-200 p-7 dark:border-white/10 dark:bg-white/[0.03]"><span className="text-xs font-bold text-blue-600 dark:text-blue-300">0{index+1}</span><h3 className="mt-3 text-lg font-bold text-slate-950 dark:text-white">{program}</h3></div>)}</div></div></section>
      <section className="py-24 bg-blue-50/70 dark:bg-blue-950/20 border-y border-blue-100 dark:border-blue-900/30"><div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-3 gap-5">{[[Users,"People first","Build capability that individuals and groups can continue using after the programme."],[Briefcase,"Economic usefulness","Connect skills and systems to employability, entrepreneurship and stronger local operations."],[Globe2,"Partnership-ready","Work with organisations already trusted within the communities being served."]].map(([Icon,title,text])=><div key={title} className="rounded-3xl bg-white p-7 border border-blue-100 dark:bg-white/[0.05] dark:border-white/10"><Icon className="text-blue-600 dark:text-blue-300" size={23}/><h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></div>)}</div></section>
      <CTA title="Planning a community, church, youth or self-reliance programme?" copy="Eragonova can support programme design, training, documentation, technology and delivery coordination." primary="Discuss a Programme"/>
    </>
  );
}

export function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Careers & Collaboration" title="Build useful things with Eragonova." copy="We welcome professionals, specialists, trainees and collaborators whose skills align with technology, engineering, data, administration, creative work and community development." actions={<a href="#/contact" className="primary-button px-6 py-3.5">Express Interest <Mail size={18}/></a>} />
      <section className="py-24 bg-white dark:bg-slate-950"><div className="max-w-7xl mx-auto px-6 lg:px-12"><SectionHeading eyebrow="Talent Areas" title="Where your capabilities can contribute." copy="Eragonova works across several disciplines, creating opportunities for different professional strengths and collaboration models."/><div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{["IT & infrastructure","Data & analytics","Software & digital solutions","Electrical & electronic engineering","Administration & operations","Design, documentation & research"].map((item,index)=><div key={item} className="rounded-3xl border border-slate-200 p-7 dark:border-white/10 dark:bg-white/[0.03]"><span className="text-xs font-bold text-blue-600 dark:text-blue-300">0{index+1}</span><h3 className="mt-3 text-lg font-bold text-slate-950 dark:text-white">{item}</h3></div>)}</div></div></section>
      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10"><div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[.8fr_1.2fr] gap-10"><SectionHeading eyebrow="Expression of Interest" title="Show the capability you bring." copy="Make it easy to understand the kind of work you can contribute to and the experience behind it."/><div className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-white/[0.03]"><ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">{["Your professional area and strongest capabilities","Relevant work, portfolio or project evidence","Location and availability","Preferred type of collaboration or engagement","Clear contact details"].map(item=><li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-300" size={18}/>{item}</li>)}</ul></div></div></section>
      <CTA title="Want to contribute to Eragonova's work?" copy="Use the contact page and select Careers / Collaboration when sending your details." primary="Express Interest"/>
    </>
  );
}
