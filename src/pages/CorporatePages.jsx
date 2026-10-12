import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Lock,
  Target,
  BarChart3,
  FileText,
  Monitor,
  Briefcase,
  Users,
  ShieldCheck,
  Globe2,
  Layers,
} from "lucide-react";
import ProjectsSection from "../components/ProjectsSection.new";
import ContactSection from "../components/ContactSection";
import {
  values,
  divisions,
  servicePillars,
  sectors,
  academyTracks,
  resourceTypes,
  communityPrograms,
} from "../data/siteData";

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
          <div className="relative max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
            <p className="mt-3 text-white/65 leading-7">{copy}</p>
          </div>
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
      <div className="flex items-start justify-between gap-4">
        <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300 flex items-center justify-center"><Icon size={23}/></div>
        <span className="text-xs font-bold tracking-[0.18em] text-slate-400">DIVISION {division.number}</span>
      </div>
      <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-950 dark:text-white">{division.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{division.summary}</p>
      <div className="mt-5 space-y-4">
        {division.groups.map(([group, items]) => (
          <div key={group}>
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-slate-500 dark:text-slate-400">{group}</p>
            <div className="mt-2 flex flex-wrap gap-2">{items.map(item => <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 dark:bg-white/[0.07] dark:text-slate-300">{item}</span>)}</div>
          </div>
        ))}
      </div>
    </article>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Eragonova" title="One enterprise. Multiple disciplines. One standard of delivery." copy="Eragonova Enterprise is a Ghanaian multidisciplinary solutions company combining technology, engineering, data, documentation, business support, training and organisational development into practical solutions for organisations and communities." actions={<><a href="#/services" className="primary-button px-6 py-3.5">Explore Services <ArrowRight size={18}/></a><a href="#/contact" className="secondary-button px-6 py-3.5 border-white/25 bg-white/10 text-white hover:bg-white/15">Contact Eragonova</a></>} />
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-slate-950 p-8 text-white relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
            <p className="relative text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Mission</p>
            <p className="relative mt-3 text-lg leading-8 text-white/80">To empower organisations and communities through technology, engineering excellence, administrative support, structured systems, practical innovation and professional development.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-8 dark:border-white/10 dark:bg-white/[0.03]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">Vision</p>
            <p className="mt-3 text-lg leading-8 text-slate-700 dark:text-slate-300">To become one of Africa's most trusted multidisciplinary technology and engineering enterprises, delivering scalable, sustainable and transformative solutions that improve organisations, communities and lives.</p>
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Core Values" title="The standards behind the work." copy="Eragonova's values shape how projects are planned, communicated, delivered and improved." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map(([title, text]) => <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]"><CheckCircle2 className="text-blue-600 dark:text-blue-300" size={20}/><h3 className="mt-4 font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></div>)}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Operating Model" title="Multidisciplinary by design." copy="Some needs belong to one discipline. Others require several. Eragonova is structured so technology, engineering, data, documentation, administration, training and organisational support can be scoped independently or brought together around a single outcome." />
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[[Layers,"Integrated scope","Combine relevant disciplines around one defined problem and outcome."],[ShieldCheck,"Responsible delivery","Work within authorised scope, with clear responsibilities, documentation and communication."],[Globe2,"Flexible engagement","Support can be remote, on-site or hybrid depending on the service and location."]].map(([Icon,title,text]) => <div key={title} className="rounded-3xl border border-slate-200 p-7 dark:border-white/10 dark:bg-white/[0.03]"><Icon className="text-blue-600 dark:text-blue-300" size={24}/><h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></div>)}
          </div>
        </div>
      </section>
      <CTA title="Have a problem that crosses more than one discipline?" copy="Describe the outcome you need. Eragonova can structure the right combination of services around it." />
    </>
  );
}

export function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Enterprise Services" title="A multidisciplinary service platform built around real operating needs." copy="Eragonova's divisions can work independently or as one connected engagement. The goal is not to sell isolated services, but to match the right capability to the actual problem." actions={<><a href="#/contact" className="primary-button px-6 py-3.5">Discuss Your Need <ArrowRight size={18}/></a><a href="#/projects" className="secondary-button px-6 py-3.5 border-white/25 bg-white/10 text-white hover:bg-white/15">See Work in Practice</a></>} />
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Service Architecture" title="Three capability pillars. Sixteen service divisions." copy="This structure keeps the website easy to navigate while preserving the full breadth of the Eragonova enterprise blueprint." />
          <div className="mt-10 grid lg:grid-cols-3 gap-5">
            {servicePillars.map((pillar, index) => <div key={pillar.title} className="rounded-3xl border border-slate-200 p-7 dark:border-white/10 dark:bg-white/[0.03]"><span className="text-xs font-bold tracking-[0.18em] text-blue-600 dark:text-blue-300">0{index + 1}</span><h3 className="mt-3 text-xl font-bold text-slate-950 dark:text-white">{pillar.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{pillar.description}</p><p className="mt-5 text-xs font-bold uppercase tracking-[0.13em] text-slate-400">{pillar.divisions.length} divisions</p></div>)}
          </div>
        </div>
      </section>
      {servicePillars.map((pillar, pillarIndex) => {
        const items = divisions.filter(d => pillar.divisions.includes(d.number));
        return <section key={pillar.title} className={pillarIndex % 2 === 0 ? "py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10" : "py-24 bg-white dark:bg-slate-950"}><div className="max-w-7xl mx-auto px-6 lg:px-12"><SectionHeading eyebrow={`Pillar 0${pillarIndex + 1}`} title={pillar.title} copy={pillar.description}/><div className="mt-10 grid lg:grid-cols-2 gap-5">{items.map(division => <DivisionCard key={division.number} division={division}/>)}</div></div></section>;
      })}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Who We Serve" title="Solutions shaped around the organisation, not just the tool." centered />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">{sectors.map(([Icon,title,text]) => <div key={title} className="rounded-3xl border border-slate-200 p-7 dark:border-white/10 dark:bg-white/[0.03]"><Icon className="text-blue-600 dark:text-blue-300" size={23}/><h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></div>)}</div>
        </div>
      </section>
      <CTA title="Need several services in one engagement?" copy="We can define one scope, one set of outcomes and a coordinated delivery approach across the relevant Eragonova divisions." />
    </>
  );
}

export function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Projects & Case Studies" title="Evidence of capability, organised around useful outcomes." copy="This area presents selected practical work, delivery patterns and project capabilities across data, digital services, operations, design and enterprise systems." actions={<a href="#/contact" className="primary-button px-6 py-3.5">Discuss a Similar Project <ArrowRight size={18}/></a>} />
      <ProjectsSection />
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Case Study Standard" title="What a mature project profile should show." copy="As Eragonova's project portfolio grows, case studies will be structured around the challenge, scope, approach, deliverables and measurable result rather than simply displaying screenshots." />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[ [Target,"Challenge","What problem or opportunity needed to be addressed."], [Layers,"Approach","How the work was structured and which disciplines were involved."], [FileText,"Deliverables","What systems, documents, designs or outputs were produced."], [BarChart3,"Outcome","What improved, changed or became easier to manage."] ].map(([Icon,title,text]) => <div key={title} className="rounded-2xl border border-slate-200 p-6 dark:border-white/10 dark:bg-white/[0.03]"><Icon className="text-blue-600 dark:text-blue-300" size={22}/><h3 className="mt-4 font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></div>)}
          </div>
        </div>
      </section>
      <CTA title="Have work that needs structure, not just execution?" copy="Bring the problem, current situation and desired outcome. We can define the right project scope together." />
    </>
  );
}

export function AcademyPage() {
  return (
    <>
      <PageHero eyebrow="Eragonova Academy" title="Practical skills for people, teams and organisations." copy="Eragonova Academy brings together technology, data, business, professional development and engineering learning in practical formats designed around real capability." actions={<a href="#/contact" className="primary-button px-6 py-3.5">Request Training <ArrowRight size={18}/></a>} />
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Learning Tracks" title="Five connected areas of development." copy="Training can be arranged as focused workshops, structured short courses or organisation-specific capacity building depending on need." />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {academyTracks.map(([track,items], index) => <div key={track} className="rounded-3xl border border-slate-200 p-7 dark:border-white/10 dark:bg-white/[0.03]"><span className="text-xs font-bold text-blue-600 dark:text-blue-300">0{index+1}</span><h3 className="mt-3 text-xl font-bold text-slate-950 dark:text-white">{track}</h3><ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">{items.map(item => <li key={item} className="flex gap-2"><span className="text-blue-600 dark:text-blue-300">•</span>{item}</li>)}</ul></div>)}
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-10">
          <div><SectionHeading eyebrow="Delivery Formats" title="Training that can fit the context." copy="Programme design can vary by audience, location, duration and organisational objective." /></div>
          <div className="grid sm:grid-cols-2 gap-4">{["Instructor-led workshops","Team capacity building","Practical labs and guided exercises","Custom organisational training"].map(item => <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]"><CheckCircle2 className="text-blue-600 dark:text-blue-300" size={19}/><p className="mt-3 font-semibold text-slate-900 dark:text-white">{item}</p></div>)}</div>
        </div>
      </section>
      <CTA title="Need a training programme built around your team?" copy="Tell us the audience, skill gap and outcome you want. We can shape the delivery around those needs." primary="Request Training" />
    </>
  );
}

export function ResourcesPage() {
  return (
    <>
      <PageHero eyebrow="Resources" title="Practical knowledge designed to be used." copy="The Eragonova resource centre is being structured around insights, reusable templates, implementation guides and research that help organisations act more clearly and consistently." actions={<a href="#/contact" className="primary-button px-6 py-3.5">Suggest a Resource Need <ArrowRight size={18}/></a>} />
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{resourceTypes.map(([Icon,title,text]) => <div key={title} className="rounded-3xl border border-slate-200 p-7 dark:border-white/10 dark:bg-white/[0.03]"><Icon className="text-blue-600 dark:text-blue-300" size={24}/><h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></div>)}</div>
        </div>
      </section>
      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[.8fr_1.2fr] gap-10 items-start">
          <SectionHeading eyebrow="Resource Library" title="Built for quality before volume." copy="The dedicated resource library will expand with material that is useful enough to apply, not content published simply to fill a page." />
          <div className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-white/[0.03]"><p className="text-sm font-semibold text-blue-600 dark:text-blue-300">Current direction</p><ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">{["Technology and infrastructure implementation guides","Business and administrative templates","Data and reporting references","Engineering and technical documentation resources","Training and community-development materials"].map(item => <li key={item} className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-300"/>{item}</li>)}</ul></div>
        </div>
      </section>
      <CTA title="Looking for a specific guide, template or training resource?" copy="Tell us what would be useful. Resource priorities can be shaped around recurring client and community needs." primary="Contact Eragonova" />
    </>
  );
}

export function CommunityPage() {
  return (
    <>
      <PageHero eyebrow="Community Development" title="Technology should create human impact." copy="Eragonova's community work connects digital skills, entrepreneurship, practical service, self-reliance and organisational support with long-term development." actions={<a href="#/contact" className="primary-button px-6 py-3.5">Partner With Us <ArrowRight size={18}/></a>} />
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Programme Areas" title="Practical programmes with room to grow." copy="Community initiatives can be delivered directly or with institutions, churches, NGOs and local partners." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{communityPrograms.map((program,index) => <div key={program} className="rounded-3xl border border-slate-200 p-7 dark:border-white/10 dark:bg-white/[0.03]"><span className="text-xs font-bold text-blue-600 dark:text-blue-300">0{index+1}</span><h3 className="mt-3 text-lg font-bold text-slate-950 dark:text-white">{program}</h3></div>)}</div>
        </div>
      </section>
      <section className="py-24 bg-blue-50/70 dark:bg-blue-950/20 border-y border-blue-100 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-3 gap-5">{[[Users,"People first","Build capability that individuals and groups can continue using after the programme."],[Briefcase,"Economic usefulness","Connect skills and systems to employability, entrepreneurship and stronger local operations."],[Globe2,"Partnership-ready","Work with organisations already trusted within the communities being served."]].map(([Icon,title,text]) => <div key={title} className="rounded-3xl bg-white p-7 border border-blue-100 dark:bg-white/[0.05] dark:border-white/10"><Icon className="text-blue-600 dark:text-blue-300" size={23}/><h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></div>)}</div>
      </section>
      <CTA title="Planning a community, church, youth or self-reliance programme?" copy="Eragonova can support programme design, training, documentation, technology and delivery coordination." primary="Discuss a Programme" />
    </>
  );
}

export function PartnersPage() {
  return (
    <>
      <PageHero eyebrow="Strategic Partnerships" title="Independent expertise, connected when it adds value." copy="Eragonova works with independent organisations where complementary capability creates a better path for the client or community." actions={<a href="#/contact" className="primary-button px-6 py-3.5">Discuss Partnership <ArrowRight size={18}/></a>} />
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="rounded-[2rem] border border-slate-200 p-8 sm:p-10 dark:border-white/10 dark:bg-white/[0.03] grid lg:grid-cols-[.8fr_1.2fr] gap-10">
            <div><div className="h-14 w-14 rounded-2xl bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-500/10 dark:text-fuchsia-300 flex items-center justify-center"><Users size={26}/></div><p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Independent Strategic Partner</p><h2 className="mt-2 text-3xl font-bold text-slate-950 dark:text-white">Elyra Suite Group</h2><p className="mt-1 font-semibold text-fuchsia-600 dark:text-fuchsia-300">Beauty • Business • Excellence</p></div>
            <div><p className="text-base leading-8 text-slate-600 dark:text-slate-300">Elyra Suite Group operates independently and provides beauty services, hair and wig solutions, makeup services, nail care, business support, administrative services, training programmes and women's empowerment programmes.</p><p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">Where appropriate, clients requiring complementary beauty, wellness, personal development or related support may be referred to Elyra Suite Group.</p></div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12"><SectionHeading eyebrow="Partnership Principles" title="Clear boundaries. Complementary value." copy="Strategic partnerships should make service delivery clearer, not blur responsibility."/><div className="mt-10 grid md:grid-cols-3 gap-5">{[[ShieldCheck,"Independent identity","Partners retain their own identity, responsibilities and service boundaries."],[Layers,"Complementary capability","Collaboration is used where another organisation adds relevant capability Eragonova does not need to duplicate."],[Users,"Client clarity","Referrals and joint work should make it clear who is delivering what."]].map(([Icon,title,text]) => <div key={title} className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-white/[0.03]"><Icon className="text-blue-600 dark:text-blue-300" size={23}/><h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></div>)}</div></div>
      </section>
      <CTA title="Interested in a complementary strategic partnership?" copy="Partnership discussions can begin with the capability, market or community need you believe we can address better together." primary="Start a Partnership Discussion" />
    </>
  );
}

export function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Careers & Collaboration" title="Build useful things with Eragonova." copy="We welcome expressions of interest from professionals, specialists, trainees and collaborators whose skills align with technology, engineering, data, administration, creative work and community development." actions={<a href="#/contact" className="primary-button px-6 py-3.5">Express Interest <Mail size={18}/></a>} />
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Talent Areas" title="Where future collaboration can fit." copy="Expressions of interest are useful even when there is no public vacancy, because project needs can vary by discipline and location." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{["IT & infrastructure","Data & analytics","Software & digital solutions","Electrical & electronic engineering","Administration & operations","Design, documentation & research"].map((item,index) => <div key={item} className="rounded-3xl border border-slate-200 p-7 dark:border-white/10 dark:bg-white/[0.03]"><span className="text-xs font-bold text-blue-600 dark:text-blue-300">0{index+1}</span><h3 className="mt-3 text-lg font-bold text-slate-950 dark:text-white">{item}</h3></div>)}</div>
        </div>
      </section>
      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10"><div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[.8fr_1.2fr] gap-10"><SectionHeading eyebrow="How to Approach" title="Send capability, not just a job title." copy="A useful expression of interest should make it easy to understand the work you can contribute to."/><div className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-white/[0.03]"><ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">{["Your professional area and strongest capabilities","Relevant work, portfolio or project evidence","Location and availability","Preferred type of collaboration or engagement","Clear contact details"].map(item => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-300" size={18}/>{item}</li>)}</ul></div></div></section>
      <CTA title="Want Eragonova to know what you can contribute?" copy="Use the contact page and select Careers / Collaboration in your message so your expression of interest can be reviewed in context." primary="Express Interest" />
    </>
  );
}

export function PortalPage() {
  return (
    <>
      <PageHero eyebrow="Client Portal" title="A structured home for active engagements." copy="The client portal is a controlled-access framework for eligible Eragonova engagements. Access is provided directly rather than through open public registration." actions={<a href="#/contact" className="primary-button px-6 py-3.5">Request Client Access <Lock size={18}/></a>} />
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Portal Framework" title="Designed around visibility and organised delivery." copy="The portal direction is centred on the information clients need most during an active engagement." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{[[Target,"Project visibility","Milestones, priorities and agreed deliverables."],[FileText,"Documents","Approved reports, policies, proposals and project files."],[Monitor,"Support","A clear route for service requests and technical follow-up."],[BarChart3,"Reporting","Relevant operational updates, analytics and performance reporting."]].map(([Icon,title,text]) => <div key={title} className="rounded-3xl border border-slate-200 p-7 dark:border-white/10 dark:bg-white/[0.03]"><Icon className="text-blue-600 dark:text-blue-300" size={23}/><h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></div>)}</div>
        </div>
      </section>
      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10"><div className="max-w-4xl mx-auto px-6 lg:px-12 text-center"><Lock className="mx-auto text-blue-600 dark:text-blue-300" size={32}/><h2 className="mt-5 text-3xl font-bold text-slate-950 dark:text-white">Access is not publicly self-issued.</h2><p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">This avoids presenting a login experience before a client account and engagement structure actually exist. Eligible clients receive access instructions directly from Eragonova.</p></div></section>
      <CTA title="Already working with Eragonova and need portal access?" copy="Contact us using the same organisation and contact details associated with the engagement." primary="Request Access" />
    </>
  );
}

export function LegalPage() {
  return (
    <>
      <PageHero eyebrow="Legal & Engagement" title="Clear terms. Responsible delivery." copy="This section explains the operating principles behind privacy, engagement scope and responsible use of Eragonova services. Project-specific terms are confirmed separately for each engagement." />
      <section className="py-24 bg-white dark:bg-slate-950"><div className="max-w-5xl mx-auto px-6 lg:px-12 space-y-6">{[
        ["Privacy", "Information shared with Eragonova is used for communication, service scoping, project administration and delivery. Sensitive information should only be shared when necessary and through an appropriate agreed channel."],
        ["Engagement Terms", "Scope, timelines, fees, responsibilities, dependencies and deliverables are confirmed for each engagement. A website description of a capability does not by itself create a contract or guarantee that every service is available in every location or circumstance."],
        ["Responsible Use", "Technology, data, cybersecurity and engineering services are intended for legitimate, authorised and professional purposes. Eragonova does not treat public service descriptions as permission to access, test or modify systems without proper authority."],
        ["Third-Party Services", "Some engagements may rely on third-party platforms, hosting, software, cloud providers, payment systems or independent partners. Their own terms, availability and service conditions may also apply."],
        ["Intellectual Property", "Ownership and permitted use of project-specific designs, documents, software, data outputs and other deliverables should be defined in the applicable engagement terms where relevant."],
      ].map(([title,text]) => <article key={title} className="rounded-3xl border border-slate-200 p-7 sm:p-8 dark:border-white/10 dark:bg-white/[0.03]"><h2 className="text-2xl font-bold text-slate-950 dark:text-white">{title}</h2><p className="mt-3 text-base leading-8 text-slate-600 dark:text-slate-300">{text}</p></article>)}</div></section>
      <CTA title="Need clarity before starting an engagement?" copy="Raise the question before work begins so scope, responsibilities and expectations can be documented clearly." primary="Contact Eragonova" />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact Eragonova" title="Tell us what you need to solve." copy="Start with the problem, project, organisation or outcome. We can discuss the right service scope from there." />
      <ContactSection />
    </>
  );
}
