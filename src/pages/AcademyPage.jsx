import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Monitor,
  BarChart3,
  Briefcase,
  Users,
  Zap,
  Rocket,
  Clock3,
  Award,
  BookOpenCheck,
  Target,
  CalendarDays,
} from "lucide-react";

const trackAccents = ["blue", "cyan", "emerald", "violet", "amber", "indigo"];
const trackIcons = [Monitor, BarChart3, Briefcase, Zap, Users, Rocket];

const academyProgrammeTracks = [
  ["Technology & IT", ["IT Support", "Networking", "Linux", "Windows Server", "Active Directory", "Cloud Computing", "Systems Administration", "Cybersecurity Fundamentals"]],
  ["Data & Analytics", ["Excel", "SQL", "Power BI", "Tableau", "Data Analysis", "Reporting", "Business Intelligence"]],
  ["Business & Administration", ["Administrative Support", "Virtual Assistance", "Customer Service", "Business Writing", "Documentation", "Office Productivity"]],
  ["Engineering & Technical Skills", ["Electrical Fundamentals", "Electronics", "Technical Safety", "Diagnostics", "Technical Documentation"]],
  ["Professional Development", ["Communication", "Leadership", "Career Readiness", "Project Coordination", "Workplace Skills"]],
  ["Entrepreneurship", ["Business Fundamentals", "Customer Service", "Business Operations", "Branding", "Digital Tools", "Basic Financial Management", "Business Documentation"]],
];

const programmes = [
  {
    duration: "3 Months",
    title: "Skills Programme",
    accent: "blue",
    icon: Clock3,
    image: "/academy/academy-3-month.webp",
    imageAlt: "Eragonova Academy learners taking part in hands-on technical and networking training",
    description: "Focused practical training for learners who want to develop a specific, usable skill in a shorter period.",
    features: [
      "Focused skill pathway",
      "Guided practical exercises",
      "Projects or applied tasks",
      "Completion assessment",
    ],
  },
  {
    duration: "6 Months",
    title: "Professional Certificate Programme",
    accent: "violet",
    icon: Award,
    image: "/academy/academy-6-month.webp",
    imageAlt: "Eragonova Academy learners receiving structured professional computer training",
    description: "Broader job-ready development combining related skills, practical work, structured learning and assessment.",
    features: [
      "Multiple connected modules",
      "Hands-on practice and projects",
      "Career-focused skill development",
      "Programme completion certificate",
    ],
  },
  {
    duration: "1 Year",
    title: "Career Development Programme",
    accent: "emerald",
    icon: Target,
    image: "/academy/academy-1-year.webp",
    imageAlt: "Eragonova Academy career development workshop focused on leadership and professional growth",
    description: "A deeper professional pathway for learners who want sustained development across a complete technical or business track.",
    features: [
      "Foundation to advanced modules",
      "Portfolio and project development",
      "Practical assessments",
      "Career-readiness support",
    ],
  },
];

const futurePathways = [
  ["2 Years", "Advanced Professional Programme", "An intensive future pathway designed for deeper specialisation, practical experience, projects and mentoring."],
  ["3 Years", "Professional Career Pathway", "A comprehensive future pathway combining technical depth, professional development, entrepreneurship, projects and workplace preparation."],
];

const learningExamples = [
  {
    track: "Technology & IT",
    title: "Heritage Vault 2.0",
    type: "Academic case study",
    description: "A Linux-centred infrastructure architecture case study exploring availability, security, scalable storage, search, disaster recovery and controlled automation.",
    focus: ["Linux", "PostgreSQL", "Ansible", "High availability"],
  },
  {
    track: "Cloud & Infrastructure",
    title: "PromisedLand Data Center",
    type: "Architecture proposal",
    description: "A hybrid Azure and AWS deployment proposal designed around resilience, scalability and clear operating needs.",
    focus: ["Azure", "AWS", "Hybrid cloud"],
  },
  {
    track: "Data & Analytics",
    title: "Data Analytics & Reporting",
    type: "Academic coursework",
    description: "SQL analysis, relational modelling, Excel reporting and business intelligence work across several datasets.",
    focus: ["SQL", "Excel", "Power BI", "Tableau"],
  },
  {
    track: "Business & Documentation",
    title: "Kumasi YSA Quick Start Guide",
    type: "Community resource",
    description: "An audience-focused guide that turns community orientation into clear first-week actions, routines and a practical checklist.",
    focus: ["Technical writing", "Documentation", "Onboarding"],
  },
  {
    track: "Entrepreneurship & Digital Presence",
    title: "Eragonova Enterprise Website",
    type: "Founder project",
    description: "A digital enterprise platform that presents services, capabilities and practical resources in a clear, organised way.",
    focus: ["Digital strategy", "Service design", "Web"],
  },
  {
    track: "Engineering & Technical Skills",
    title: "Electrical & Electronic Engineering Studies",
    type: "Academic studies",
    description: "Formal engineering study that complements systems learning with a foundation in electrical and electronic principles.",
    focus: ["Electrical fundamentals", "Electronics", "Technical problem-solving"],
  },
];

const learningModel = [
  [BookOpenCheck, "Guided learning", "Structured instruction with clear learning outcomes and practical examples."],
  [Monitor, "Practical exercises", "Hands-on labs, tasks and guided practice built around real tools and workplace scenarios."],
  [Target, "Projects & assessment", "Applied projects and assessments used to demonstrate progress and practical capability."],
  [CalendarDays, "Flexible delivery", "Programme schedules and delivery formats can be adapted to the pathway and learner context."],
];

export default function AcademyPage() {
  return (
    <>
      <section className="accent-band relative overflow-hidden text-white pt-36 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-center">
          <div>
            <div className="h-14 w-14 rounded-2xl bg-violet-500/15 border border-violet-300/20 text-violet-200 flex items-center justify-center"><GraduationCap size={27}/></div>
            <p className="mt-6 text-violet-300 text-xs font-bold uppercase tracking-[0.22em]">Eragonova Academy</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.045em] leading-[1.02]">Practical skills. Professional growth. Career-focused learning.</h1>
            <p className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-white/70">Eragonova Academy provides practical, career-focused training across technology, data, business, engineering, professional development and entrepreneurship. Programmes are designed around usable skills, guided practice, projects and assessment.</p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {["3-Month Skills Programme", "6-Month Professional Certificate", "1-Year Career Development"].map(item => (
                <span key={item} className="rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white/80">{item}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#programmes" className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-500 hover:-translate-y-0.5">Explore Programmes <ArrowRight size={18}/></a>
              <a href="#/contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white transition hover:bg-white/15">Request Programme Information</a>
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-3 sm:p-4 shadow-2xl shadow-violet-950/30 backdrop-blur-sm">
            <div className="relative overflow-hidden rounded-[1.25rem]">
              <img
                src="/academy/academy-hero.webp"
                alt="Eragonova Academy instructor guiding learners in a professional computer training session"
                className="w-full aspect-[16/9] object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/55 to-transparent" />
            </div>
            <div className="mt-3 flex items-center justify-between gap-3 px-1 text-[11px] font-semibold text-white/45">
              <span>Structured learning</span>
              <span>Tracks • Labs • Projects • Progress</span>
            </div>
          </div>
        </div>
      </section>

      <section id="programmes" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden scroll-mt-28">
        <div className="absolute inset-0 dot-field opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-violet-600 dark:text-violet-300 text-xs font-bold uppercase tracking-[0.22em]">Programme Options</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white">Choose the depth of training that fits your goal.</h2>
            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">The Academy will launch with three structured programme durations. Content, timetable, delivery format and fees will vary by selected training pathway.</p>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-5">
            {programmes.map(({ duration, title, accent, icon: Icon, image, imageAlt, description, features }) => (
              <article key={duration} className="accent-card rounded-3xl overflow-hidden" data-accent={accent}>
                <div className="relative z-10 aspect-[16/9] overflow-hidden border-b border-slate-200/70 dark:border-white/10">
                  <img
                    src={image}
                    alt={imageAlt}
                    className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/35 to-transparent" />
                </div>
                <div className="p-7">
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="accent-icon"><Icon size={23}/></div>
                    <span className="accent-kicker text-xs font-bold uppercase tracking-[0.14em]">{duration}</span>
                  </div>
                  <h3 className="relative z-10 mt-5 text-2xl font-bold text-slate-950 dark:text-white">{title}</h3>
                  <p className="relative z-10 mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
                  <div className="relative z-10 mt-5 space-y-3">
                    {features.map(feature => (
                      <div key={feature} className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 size={17} className="accent-kicker mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#/contact" className="relative z-10 mt-6 inline-flex items-center gap-2 font-semibold text-sm accent-kicker">Ask about this programme <ArrowRight size={16}/></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-violet-600 dark:text-violet-300 text-xs font-bold uppercase tracking-[0.22em]">Learning Tracks</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white">Six connected areas of professional development.</h2>
            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">Learners choose a pathway based on the capability they want to build. Individual subjects and module combinations will depend on programme duration and level.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {academyProgrammeTracks.map(([track,items], index) => {
              const Icon = trackIcons[index % trackIcons.length];
              return (
                <div key={track} className="accent-card rounded-3xl p-7" data-accent={trackAccents[index % trackAccents.length]}>
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="accent-icon"><Icon size={23}/></div>
                    <span className="accent-kicker text-xs font-bold">0{index+1}</span>
                  </div>
                  <h3 className="relative z-10 mt-5 text-xl font-bold text-slate-950 dark:text-white">{track}</h3>
                  <div className="relative z-10 mt-4 flex flex-wrap gap-2">{items.map(item => <span key={item} className="accent-chip">{item}</span>)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-violet-600 dark:text-violet-300 text-xs font-bold uppercase tracking-[0.22em]">Free self-study resources</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white">Start learning with Eragonova’s Knowledge Centre.</h2>
            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">Use these practical guides for independent learning, preparation or reference. They are free resources, separate from Academy programmes, assessments and certificates.</p>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {title:"Digital Literacy Essentials",description:"Explore computer and Windows basics, safe internet use, account protection and backups.",query:"computer"},
              {title:"Small Business Technology Essentials",description:"Find practical guides on business email, digital records, business data and office networking.",query:"business"},
              {title:"Business Documentation Essentials",description:"Review proposal writing, record organisation, tender preparation and print-ready documents.",query:"proposal"},
              {title:"Engineering Safety & Technical Foundations",description:"Start with electrical safety, solar and generator awareness, and energy-efficiency checks.",query:"electrical"},
            ].map((pathway) => (
              <article key={pathway.title} className="accent-card rounded-3xl p-6" data-accent="violet">
                <div className="accent-icon"><BookOpenCheck size={22}/></div>
                <h3 className="relative z-10 mt-5 text-xl font-bold text-slate-950 dark:text-white">{pathway.title}</h3>
                <p className="relative z-10 mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{pathway.description}</p>
                <a href={`/free-tech-help/?q=${encodeURIComponent(pathway.query)}`} className="relative z-10 mt-5 inline-flex items-center gap-2 font-semibold text-sm accent-kicker">Explore free guides <ArrowRight size={16}/></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-violet-600 dark:text-violet-300 text-xs font-bold uppercase tracking-[0.22em]">Applied Learning Examples</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white">See how learning connects to practical work.</h2>
            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">These selected portfolio examples show how skills can be applied in academic, founder, proposal and community contexts. They are illustrative examples, not a promise that every item is an Academy assignment or client engagement.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {learningExamples.map((example) => (
              <article key={example.title} className="accent-card rounded-3xl p-6" data-accent="violet">
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-2"><span className="accent-kicker text-xs font-bold uppercase tracking-[0.12em]">{example.track}</span><span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">{example.type}</span></div>
                <h3 className="relative z-10 mt-5 text-xl font-bold text-slate-950 dark:text-white">{example.title}</h3>
                <p className="relative z-10 mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{example.description}</p>
                <div className="relative z-10 mt-4 flex flex-wrap gap-2">{example.focus.map((skill) => <span key={skill} className="accent-chip">{skill}</span>)}</div>
                <a href="https://edward-wonder-mordey.github.io/portfolio/#work" target="_blank" rel="noopener noreferrer" className="relative z-10 mt-5 inline-flex items-center gap-2 font-semibold text-sm accent-kicker">View portfolio examples <ArrowRight size={16}/></a>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-violet-200 bg-violet-50 p-5 dark:border-violet-500/20 dark:bg-violet-500/10">
            <p className="text-sm leading-7 text-violet-950 dark:text-violet-100"><strong>Learning context:</strong> Examples are labelled by their context. Programme modules, projects, assessments and certificates will be defined separately for each published Academy pathway.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[.9fr_1.1fr] gap-12 items-start">
          <div>
            <p className="text-violet-600 dark:text-violet-300 text-xs font-bold uppercase tracking-[0.22em]">How Learning Works</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">Built around capability, not just classroom time.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">Programmes combine instruction with practice so learners can apply what they study. Specific requirements will be published for each pathway before enrolment.</p>
            <div className="mt-7 overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
              <img
                src="/academy/academy-3-month.webp"
                alt="Eragonova Academy learners collaborating with instructor support on practical technical work"
                className="w-full aspect-[16/9] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {learningModel.map(([Icon, title, description], index) => (
              <div key={title} className="accent-card rounded-2xl p-5" data-accent={trackAccents[index % trackAccents.length]}>
                <Icon className="accent-kicker relative z-10" size={21}/>
                <p className="relative z-10 mt-3 font-semibold text-slate-900 dark:text-white">{title}</p>
                <p className="relative z-10 mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[.85fr_1.15fr] gap-10 items-start">
          <div>
            <p className="text-violet-600 dark:text-violet-300 text-xs font-bold uppercase tracking-[0.22em]">Future Pathways</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">Longer professional pathways are being developed carefully.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">The initial Academy launch focuses on the 3-month, 6-month and 1-year programmes. Longer pathways will be introduced only after their curriculum, practical requirements, assessment model and appropriate recognition arrangements are properly established.</p>
          </div>
          <div className="space-y-4">
            {futurePathways.map(([duration, title, description], index) => (
              <div key={duration} className="accent-card rounded-2xl p-6" data-accent={index === 0 ? "indigo" : "violet"}>
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <span className="accent-kicker text-xs font-bold uppercase tracking-[0.14em]">Planned pathway • {duration}</span>
                    <h3 className="mt-2 text-xl font-bold text-slate-950 dark:text-white">{title}</h3>
                  </div>
                  <span className="self-start rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">In development</span>
                </div>
                <p className="relative z-10 mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5 sm:p-6 dark:border-violet-500/20 dark:bg-violet-500/10">
            <p className="text-sm leading-7 text-violet-950 dark:text-violet-100"><strong>Programme status:</strong> Eragonova Academy programmes are professional training and career-development programmes. They are not represented as university degrees. Programme-specific certification, recognition, entry requirements, fees and delivery details will be clearly stated before enrolment.</p>
          </div>

          <div className="graphic-panel mt-10 rounded-[2rem] bg-gradient-to-br from-slate-950 via-violet-950 to-slate-950 p-8 sm:p-10 lg:p-12 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="relative max-w-3xl"><h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Interested in an Eragonova Academy programme?</h2><p className="mt-3 text-white/65 leading-7">Tell us the skill area, your preferred programme duration and the outcome you want. We will share the appropriate pathway information as programmes open for enrolment.</p></div>
            <a href="#/contact" className="relative shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-violet-700 hover:bg-violet-50 transition">Request Programme Information <ArrowRight size={18}/></a>
          </div>
        </div>
      </section>
    </>
  );
}
