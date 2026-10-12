import React from "react";
import { ArrowRight, CheckCircle2, Target, BarChart3, FileText, Layers, Users, Briefcase, Globe2, Mail } from "lucide-react";
import ProjectsSection from "../components/ProjectsSection.new";
import CapabilityVisual from "../components/CapabilityVisual";
import { divisions, servicePillars, sectors, resourceTypes, communityPrograms } from "../data/siteData";

const pillarAccents = ["blue", "amber", "emerald"];
const sectorAccents = ["blue", "emerald", "violet", "amber", "indigo", "teal"];
const resourceAccents = ["blue", "violet", "emerald", "amber"];
const communityAccents = ["violet", "cyan", "emerald", "amber", "indigo", "fuchsia"];
const careerAccents = ["blue", "cyan", "indigo", "amber", "emerald", "violet"];

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

function PageHero({ eyebrow, title, copy, actions }) {
  return (
    <section className="accent-band relative overflow-hidden text-white pt-36 pb-20 sm:pt-40 sm:pb-24">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
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
        <div className="graphic-panel rounded-[2rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 p-8 sm:p-10 lg:p-12 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="relative max-w-3xl"><h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2><p className="mt-3 text-white/65 leading-7">{copy}</p></div>
          <a href={href} className="relative shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-950 hover:bg-blue-50 transition">{primary} <ArrowRight size={18}/></a>
        </div>
      </div>
    </section>
  );
}

function DivisionCard({ division }) {
  const Icon = division.icon;
  const accent = divisionAccent(division.number);
  return (
    <article className="accent-card rounded-3xl p-6 sm:p-7" data-accent={accent}>
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="accent-icon"><Icon size={23}/></div>
        <span className="accent-kicker text-xs font-bold tracking-[0.18em]">DIVISION {division.number}</span>
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

export function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Enterprise Services" title="Connected capabilities for technology, engineering, operations and growth." copy="Eragonova brings together specialist services that can be engaged individually or combined around a wider business, institutional or community need." actions={<><a href="#/contact" className="primary-button px-6 py-3.5">Discuss Your Need <ArrowRight size={18}/></a><a href="#/projects" className="secondary-button px-6 py-3.5 border-white/25 bg-white/10 text-white hover:bg-white/15">See Work in Practice</a></>} />

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
              <div className="mt-10 grid lg:grid-cols-2 gap-5">{items.map(division => <DivisionCard key={division.number} division={division}/>)}</div>
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
      <CTA title="Need several services in one engagement?" copy="We can define one scope, one set of outcomes and a coordinated delivery approach across the relevant Eragonova divisions."/>
    </>
  );
}

export function ProjectsPage() {
  const approach = [
    [Target,"Challenge","Define the problem or opportunity clearly.","blue"],
    [Layers,"Approach","Structure the work around the right disciplines and priorities.","indigo"],
    [FileText,"Deliverables","Produce useful systems, documents, designs or outputs.","emerald"],
    [BarChart3,"Outcome","Focus delivery on the change or result the engagement is meant to create.","amber"],
  ];
  return (
    <>
      <PageHero eyebrow="Projects & Capabilities" title="Practical work organised around useful outcomes." copy="Explore how Eragonova approaches data, digital services, operations, design, documentation and enterprise systems." actions={<a href="#/contact" className="primary-button px-6 py-3.5">Discuss a Similar Project <ArrowRight size={18}/></a>} />
      <ProjectsSection />
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Our Approach" title="Clear from challenge to outcome." copy="Projects are approached with attention to the problem, the work required, the deliverables and the result the client needs."/>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {approach.map(([Icon,title,text,accent]) => (
              <div key={title} className="accent-card rounded-2xl p-6" data-accent={accent}>
                <div className="accent-icon"><Icon size={22}/></div>
                <h3 className="relative z-10 mt-4 font-bold text-slate-950 dark:text-white">{title}</h3>
                <p className="relative z-10 mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Have work that needs structure, not just execution?" copy="Bring the problem, current situation and desired outcome. We can define the right project scope together."/>
    </>
  );
}

export function ResourcesPage() {
  const knowledgeAreas = [
    ["Technology & infrastructure","blue"], ["Business & administration","emerald"], ["Data & reporting","cyan"],
    ["Engineering & technical documentation","amber"], ["Training & professional development","violet"], ["Community & organisational development","fuchsia"],
  ];
  return (
    <>
      <PageHero eyebrow="Resources" title="Practical knowledge designed to be used." copy="Insights, templates, guides and research focused on technology, engineering, operations, data, documentation and organisational growth." actions={<a href="#/contact" className="primary-button px-6 py-3.5">Request a Resource <ArrowRight size={18}/></a>} />
      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-field opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {resourceTypes.map(([Icon,title,text], index) => (
              <div key={title} className="accent-card rounded-3xl p-7" data-accent={resourceAccents[index % resourceAccents.length]}>
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
          <SectionHeading eyebrow="Knowledge Areas" title="Resources across the work organisations manage every day." copy="Our knowledge areas reflect the same practical disciplines found across Eragonova's services and training."/>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {knowledgeAreas.map(([item,accent]) => (
              <div key={item} className="accent-card rounded-2xl p-6" data-accent={accent}>
                <CheckCircle2 className="accent-kicker relative z-10" size={19}/><p className="relative z-10 mt-3 font-semibold text-slate-900 dark:text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Looking for a specific guide, template or reference?" copy="Tell us what you need and the context in which you plan to use it." primary="Contact Eragonova"/>
    </>
  );
}

export function CommunityPage() {
  const principles = [
    [Users,"People first","Build capability that individuals and groups can continue using after the programme.","violet"],
    [Briefcase,"Economic usefulness","Connect skills and systems to employability, entrepreneurship and stronger local operations.","emerald"],
    [Globe2,"Partnership-ready","Work with organisations already trusted within the communities being served.","cyan"],
  ];
  return (
    <>
      <PageHero eyebrow="Community Development" title="Technology should create human impact." copy="Eragonova connects digital skills, entrepreneurship, practical service, self-reliance and organisational support with long-term community development." actions={<a href="#/contact" className="primary-button px-6 py-3.5">Partner With Us <ArrowRight size={18}/></a>} />
      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-violet-500/5 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Programme Areas" title="Practical programmes for people and communities." copy="Community initiatives can be delivered directly or with institutions, churches, NGOs and local partners."/>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {communityPrograms.map((program,index) => (
              <div key={program} className="accent-card rounded-3xl p-7" data-accent={communityAccents[index % communityAccents.length]}>
                <span className="accent-kicker relative z-10 text-xs font-bold">0{index+1}</span>
                <h3 className="relative z-10 mt-3 text-lg font-bold text-slate-950 dark:text-white">{program}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-3 gap-5">
          {principles.map(([Icon,title,text,accent]) => (
            <div key={title} className="accent-card rounded-3xl p-7" data-accent={accent}>
              <div className="accent-icon"><Icon size={23}/></div>
              <h3 className="relative z-10 mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3>
              <p className="relative z-10 mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA title="Planning a community, church, youth or self-reliance programme?" copy="Eragonova can support programme design, training, documentation, technology and delivery coordination." primary="Discuss a Programme"/>
    </>
  );
}

export function CareersPage() {
  const talentAreas = [
    "IT & infrastructure", "Data & analytics", "Software & digital solutions", "Electrical & electronic engineering", "Administration & operations", "Design, documentation & research",
  ];
  return (
    <>
      <PageHero eyebrow="Careers & Collaboration" title="Build useful things with Eragonova." copy="We welcome professionals, specialists, trainees and collaborators whose skills align with technology, engineering, data, administration, creative work and community development." actions={<a href="#/contact" className="primary-button px-6 py-3.5">Express Interest <Mail size={18}/></a>} />
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Talent Areas" title="Where your capabilities can contribute." copy="Eragonova works across several disciplines, creating opportunities for different professional strengths and collaboration models."/>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {talentAreas.map((item,index) => (
              <div key={item} className="accent-card rounded-3xl p-7" data-accent={careerAccents[index % careerAccents.length]}>
                <span className="accent-kicker relative z-10 text-xs font-bold">0{index+1}</span>
                <h3 className="relative z-10 mt-3 text-lg font-bold text-slate-950 dark:text-white">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[.8fr_1.2fr] gap-10 items-start">
          <SectionHeading eyebrow="Expression of Interest" title="Show the capability you can contribute." copy="A clear introduction helps us understand where your experience and strengths may fit across Eragonova's work."/>
          <div className="accent-card rounded-3xl p-7" data-accent="indigo">
            <ul className="relative z-10 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              {["Your professional area and strongest capabilities","Relevant work, portfolio or project evidence","Location and availability","Preferred type of collaboration or engagement","Clear contact details"].map(item => <li key={item} className="flex gap-3"><CheckCircle2 className="accent-kicker mt-0.5 shrink-0" size={18}/>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <CTA title="Want Eragonova to know what you can contribute?" copy="Use the contact page and select Careers / Collaboration in your message." primary="Express Interest"/>
    </>
  );
}
