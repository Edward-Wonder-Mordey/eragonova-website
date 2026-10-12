import React from "react";
import {
  Monitor,
  Network,
  Cloud,
  BarChart3,
  ShieldCheck,
  Code2,
  Zap,
  Briefcase,
  FileText,
  Palette,
  Search,
  Building,
  Wrench,
  Settings,
  GraduationCap,
  Heart,
  ArrowRight,
  CheckCircle2,
  Users,
  Landmark,
  School,
  BookOpen,
  Handshake,
  Mail,
  Lock,
  Target,
  Globe2,
  Award,
  Layers,
} from "lucide-react";

const values = [
  ["Integrity", "Do what is right even when nobody is watching."],
  ["Excellence", "Pursue quality in every project."],
  ["Stewardship", "Protect and improve what has been entrusted to us."],
  ["Innovation", "Continuously improve systems and solutions."],
  ["Service", "Technology should serve people."],
  ["Reliability", "Deliver dependable work and clear communication."],
  ["Continuous Learning", "Remain teachable and adaptable."],
  ["Community Impact", "Create solutions that strengthen individuals and communities."],
];

const divisions = [
  {
    number: "01",
    title: "IT & Systems Administration",
    icon: Monitor,
    groups: [
      ["End User Support", ["Computer troubleshooting", "Printer support", "Software installation", "Help desk services", "User support"]],
      ["Server Administration", ["Windows Server", "Linux Server", "Active Directory", "Group Policy", "Storage management"]],
      ["Infrastructure Support", ["System monitoring", "Backup systems", "Disaster recovery", "Virtualisation", "Hyper-V management"]],
      ["Cloud Administration", ["Microsoft 365", "Azure", "AWS", "Google Workspace"]],
    ],
  },
  {
    number: "02",
    title: "Networking & Infrastructure",
    icon: Network,
    groups: [
      ["Network Design", ["LAN design", "WAN design", "Wireless networks", "Campus networks"]],
      ["Network Administration", ["DNS", "DHCP", "Routing", "Switching"]],
      ["Structured Cabling", ["Network cabling", "Data points", "Rack installation"]],
      ["Infrastructure Audits", ["Performance reviews", "Infrastructure assessments", "Upgrade recommendations"]],
    ],
  },
  {
    number: "03",
    title: "Cloud & Digital Transformation",
    icon: Cloud,
    groups: [
      ["Cloud Services", ["Azure deployments", "AWS deployments", "Hybrid cloud solutions"]],
      ["Digital Transformation", ["Process mapping", "Workflow optimisation", "Digital migration"]],
      ["Automation", ["Infrastructure as Code", "Terraform", "Automation frameworks"]],
      ["Modern Platforms", ["DevOps", "Containerisation", "Kubernetes", "Cloud security"]],
    ],
  },
  {
    number: "04",
    title: "Data & Analytics",
    icon: BarChart3,
    groups: [
      ["Data Analysis", ["SQL reporting", "Data validation", "Data cleaning", "Data auditing"]],
      ["Business Intelligence", ["Power BI", "Tableau", "Dashboards", "KPI reporting"]],
      ["Performance Analytics", ["Operational reporting", "Decision support systems"]],
      ["Advanced Analytics", ["Predictive analytics", "AI-assisted reporting", "Data governance", "BI consulting"]],
    ],
  },
  {
    number: "05",
    title: "Cybersecurity & Information Protection",
    icon: ShieldCheck,
    groups: [
      ["Security Services", ["Security assessments", "Vulnerability reviews", "Risk analysis"]],
      ["Security Operations", ["Log reviews", "Monitoring", "Security documentation"]],
      ["Security Awareness", ["Staff training", "Cyber hygiene", "Policy development"]],
      ["Protection & Response", ["Managed security", "Security operations support", "Incident response"]],
    ],
  },
  {
    number: "06",
    title: "Software & Digital Solutions",
    icon: Code2,
    groups: [
      ["Website Development", ["Corporate websites", "Portfolio websites", "E-commerce platforms"]],
      ["Business Web Applications", ["Booking systems", "Client portals", "Learning platforms"]],
      ["Digital Products", ["Mobile applications", "SaaS products", "Internal enterprise systems"]],
    ],
  },
  {
    number: "07",
    title: "Electrical & Electronic Engineering",
    icon: Zap,
    groups: [
      ["Electrical Services", ["Wiring design", "Electrical installation", "Power distribution"]],
      ["Electronics", ["Diagnostics", "Repairs", "Circuit analysis"]],
      ["Technical Documentation", ["Drawings", "Engineering reports", "Engineering compliance documents"]],
      ["Smart & Renewable Systems", ["Solar systems", "Renewable energy", "Smart buildings", "CCTV", "Access control systems"]],
    ],
  },
  {
    number: "08",
    title: "Administration & Business Support",
    icon: Briefcase,
    groups: [
      ["Administrative Support", ["Virtual assistant services", "Executive assistance", "Calendar management", "Email management", "Meeting coordination"]],
      ["Office Support", ["Records management", "Data entry", "Customer support", "Process administration"]],
      ["Business Operations", ["Workflow documentation", "Organisational systems", "Administrative audits"]],
    ],
  },
  {
    number: "09",
    title: "Documentation & Compliance Services",
    icon: FileText,
    groups: [
      ["Corporate Documentation", ["Company profiles", "Business plans", "Reports", "Presentations"]],
      ["Tender & Proposal Services", ["Tender documentation", "Technical proposals", "Bid packaging"]],
      ["Compliance Documentation", ["SOPs", "Policies", "Procedures", "Operational manuals"]],
      ["Technical Writing", ["User guides", "Training materials", "Knowledge bases"]],
    ],
  },
  {
    number: "10",
    title: "Branding, Media & Print Services",
    icon: Palette,
    groups: [
      ["Branding", ["Logo design", "Brand identity systems", "Corporate visual guides"]],
      ["Graphic Design", ["Marketing materials", "Promotional campaigns", "Advertising design"]],
      ["Print Solutions", ["Corporate printing", "Training materials", "Large format printing"]],
      ["Customisation", ["T-shirts", "Corporate gifts", "Merchandise"]],
    ],
  },
  {
    number: "11",
    title: "Research & Intelligence Services",
    icon: Search,
    groups: [
      ["Research", ["Market research", "Community assessments", "Feasibility studies"]],
      ["Monitoring & Evaluation", ["Survey analysis", "Programme evaluation", "Impact assessment"]],
      ["Intelligence Services", ["Data collection", "Reporting", "Decision support"]],
    ],
  },
  {
    number: "12",
    title: "Organisational Development",
    icon: Building,
    groups: [
      ["Strategic Planning", ["Strategic plans", "Organisational roadmaps"]],
      ["Operations", ["Process reviews", "Quality assurance", "Operational assessments"]],
      ["Project Coordination", ["Stakeholder management", "Reporting systems", "Performance reviews"]],
    ],
  },
  {
    number: "13",
    title: "Consulting Services",
    icon: Wrench,
    groups: [
      ["Consulting Areas", ["Technology consulting", "Engineering consulting", "Operations consulting", "Data consulting", "Administrative consulting", "Organisational consulting"]],
    ],
  },
  {
    number: "14",
    title: "Managed Services",
    icon: Settings,
    groups: [
      ["Managed IT", ["Remote support", "Infrastructure monitoring", "System maintenance"]],
      ["Managed Documentation", ["Report management", "Policy maintenance", "Knowledge management"]],
      ["Managed Analytics", ["Monthly reporting", "Dashboard maintenance"]],
    ],
  },
  {
    number: "15",
    title: "Eragonova Academy",
    icon: GraduationCap,
    groups: [
      ["Technology Training", ["Networking", "Linux", "Windows Server", "Active Directory", "Cloud computing"]],
      ["Data Training", ["Excel", "SQL", "Power BI", "Tableau"]],
      ["Business Training", ["Administrative support", "Customer service", "Business writing", "Documentation"]],
      ["Professional & Engineering", ["Leadership", "Communication", "Project coordination", "Electrical fundamentals", "Electronics", "Technical safety"]],
    ],
  },
  {
    number: "16",
    title: "Community Development Programmes",
    icon: Heart,
    groups: [
      ["Community Programmes", ["Digital literacy", "Youth technology development", "Entrepreneurship training", "Community projects", "Church technology support", "Self-reliance programmes"]],
    ],
  },
];

const sectors = [
  [Briefcase, "Small Businesses", "Practical systems, digital tools, documentation, analytics and operational support that can grow with the business."],
  [Heart, "NGOs", "Structured reporting, monitoring, data, technology support, documentation and programme delivery systems."],
  [Users, "Churches", "Technology support, records, communications, training, community programmes and self-reliance initiatives."],
  [School, "Educational Institutions", "Infrastructure, digital platforms, analytics, technical documentation and technology capacity building."],
  [Landmark, "Government Organisations", "Professional documentation, infrastructure, data, process improvement and contract-ready technical support."],
  [Globe2, "Community Projects", "Digital literacy, entrepreneurship, research, project coordination and sustainable community development support."],
];

const academyTracks = [
  ["Technology", ["Networking", "Linux", "Windows Server", "Active Directory", "Cloud Computing"]],
  ["Data", ["Excel", "SQL", "Power BI", "Tableau"]],
  ["Business", ["Administrative Support", "Customer Service", "Business Writing", "Documentation"]],
  ["Professional Development", ["Leadership", "Communication", "Project Coordination"]],
  ["Engineering", ["Electrical Fundamentals", "Electronics", "Technical Safety"]],
];

const resources = [
  [BookOpen, "Blog", "Practical insights on technology, engineering, operations, data and organisational growth."],
  [FileText, "Templates", "Useful business, technical, administrative and project documentation resources."],
  [Layers, "Guides", "Step-by-step guides designed to turn complex systems into practical action."],
  [Award, "Research Papers", "Research and evidence-based material supporting better decisions and stronger systems."],
];

const communityPrograms = [
  "Digital Literacy Programmes",
  "Youth Technology Development",
  "Entrepreneurship Training",
  "Community Projects",
  "Church Technology Support",
  "Self-Reliance Programmes",
];

function SectionHeading({ eyebrow, title, copy, centered = false }) {
  return (
    <div className={centered ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}>
      <p className="text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white">{title}</h2>
      {copy && <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">{copy}</p>}
    </div>
  );
}

function ServiceCard({ division }) {
  const Icon = division.icon;
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.06]">
      <div className="flex items-start justify-between gap-4">
        <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300 flex items-center justify-center"><Icon size={23} /></div>
        <span className="text-xs font-bold tracking-[0.18em] text-slate-400 dark:text-slate-500">DIVISION {division.number}</span>
      </div>
      <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-950 dark:text-white">{division.title}</h3>
      <div className="mt-5 space-y-5">
        {division.groups.map(([group, items]) => (
          <div key={group}>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{group}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {items.map((item) => <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 dark:bg-white/[0.07] dark:text-slate-300">{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function EnterpriseBlueprint({ projects }) {
  return (
    <>
      <section id="about" className="py-24 sm:py-28 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-20 items-start">
            <div>
              <SectionHeading
                eyebrow="About Eragonova"
                title="One enterprise. Multiple disciplines. One standard of delivery."
                copy="Eragonova Enterprise is a Ghanaian multidisciplinary solutions company combining technology, engineering, data, documentation, business support, training and organisational development into practical solutions for businesses, institutions, churches, NGOs, communities and government organisations."
              />
              <div className="mt-8 rounded-3xl bg-slate-950 p-7 sm:p-9 text-white relative overflow-hidden">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
                <p className="relative text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Our Mission</p>
                <p className="relative mt-3 text-lg leading-8 text-white/80">To empower organisations and communities through technology, engineering excellence, administrative support, structured systems, practical innovation and professional development.</p>
                <div className="relative mt-7 pt-7 border-t border-white/10">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Our Vision</p>
                  <p className="mt-3 text-lg leading-8 text-white/80">To become one of Africa's most trusted multidisciplinary technology and engineering enterprises, delivering scalable, sustainable and transformative solutions that improve organisations, communities and lives.</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">How we work</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {values.map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                    <div className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-300" size={18}/><div><h3 className="font-bold text-slate-900 dark:text-white">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 sm:py-28 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading
            eyebrow="Enterprise Services"
            title="A complete multidisciplinary service platform."
            copy="Eragonova is structured to help clients move from a problem to a practical solution without having to coordinate many disconnected providers. Our divisions can work independently or together around a single engagement."
          />
          <div className="mt-12 grid lg:grid-cols-2 gap-5">
            {divisions.map((division) => <ServiceCard key={division.number} division={division} />)}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5 rounded-3xl bg-blue-600 p-7 sm:p-9 text-white">
            <div><p className="text-sm font-semibold text-blue-100">Need a combination of services?</p><h3 className="mt-1 text-2xl font-bold">We can scope a multidisciplinary engagement around your actual need.</h3></div>
            <a href="#contact" className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-700 hover:bg-blue-50 transition">Discuss your project <ArrowRight size={18}/></a>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-24 sm:py-28 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading
            eyebrow="Solutions"
            title="Built around the organisations we serve."
            copy="The same technology or engineering tool can solve very different problems depending on the organisation. We start with the operating need, then combine the right services around it."
            centered
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectors.map(([Icon, title, text]) => (
              <article key={title} className="rounded-3xl border border-slate-200 p-7 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300 flex items-center justify-center"><Icon size={21}/></div>
                <h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {projects}

      <section id="academy" className="py-24 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 hero-grid" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-12 lg:gap-20">
            <div>
              <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Eragonova Academy</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em]">Skills that move people and organisations forward.</h2>
              <p className="mt-5 text-base sm:text-lg leading-8 text-white/65">Training programmes, workshops and practical learning experiences spanning technology, data, business, professional development and engineering.</p>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-500 transition">Request training <ArrowRight size={18}/></a>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {academyTracks.map(([track, items]) => (
                <div key={track} className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm">
                  <h3 className="font-bold text-blue-200">{track}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">{items.map(item => <li key={item} className="flex gap-2"><span className="text-blue-400">•</span>{item}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="resources" className="py-24 sm:py-28 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Resources" title="Useful knowledge, not just service delivery." copy="Eragonova's resource hub is designed to make practical knowledge easier to apply through articles, templates, guides and research." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resources.map(([Icon, title, text]) => (
              <article key={title} className="rounded-3xl border border-slate-200 p-6 dark:border-white/10 dark:bg-white/[0.03]">
                <Icon className="text-blue-600 dark:text-blue-300" size={24}/><h3 className="mt-5 font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="py-24 sm:py-28 bg-blue-50/70 dark:bg-blue-950/20 border-y border-blue-100 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[.9fr_1.1fr] gap-12 lg:gap-20 items-center">
          <div>
            <SectionHeading eyebrow="Community" title="Technology should create human impact." copy="Eragonova's community programmes connect digital skills, entrepreneurship, self-reliance and practical service with long-term community development." />
            <a href="#contact" className="mt-7 primary-button px-5 py-3">Partner on a community programme <ArrowRight size={18}/></a>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {communityPrograms.map((program, index) => (
              <div key={program} className="rounded-2xl bg-white p-5 border border-blue-100 shadow-sm dark:bg-white/[0.05] dark:border-white/10">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-300">0{index + 1}</span><h3 className="mt-2 font-bold text-slate-900 dark:text-white">{program}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="py-24 sm:py-28 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Strategic Partnerships" title="Independent expertise, connected when it adds value." copy="Eragonova maintains relationships with trusted independent organisations whose services complement our own." />
          <div className="mt-10 rounded-3xl border border-slate-200 p-7 sm:p-9 dark:border-white/10 dark:bg-white/[0.03] grid lg:grid-cols-[.8fr_1.2fr] gap-8">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-500/10 dark:text-fuchsia-300 flex items-center justify-center"><Handshake size={24}/></div>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Independent Strategic Partner</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">Elyra Suite Group</h3>
              <p className="mt-1 font-semibold text-fuchsia-600 dark:text-fuchsia-300">Beauty • Business • Excellence</p>
            </div>
            <div>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">Services include beauty services, hair and wig solutions, makeup services, nail care, business support, administrative services, training programmes and women's empowerment programmes.</p>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">Where appropriate, clients requiring complementary beauty, wellness, personal development or related support may be referred to Elyra Suite Group.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="careers" className="py-24 sm:py-28 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="rounded-[2rem] bg-slate-950 p-8 sm:p-10 lg:p-12 text-white grid lg:grid-cols-[1fr_auto] gap-8 items-center relative overflow-hidden">
            <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative"><p className="text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Careers & Collaboration</p><h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Build useful things with Eragonova.</h2><p className="mt-4 max-w-2xl text-white/65 leading-7">We welcome expressions of interest from professionals, specialists, trainees and collaborators whose skills align with our technology, engineering, data, administrative, creative and community work.</p></div>
            <a href="#contact" className="relative inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-950 hover:bg-blue-50 transition">Express interest <Mail size={18}/></a>
          </div>
        </div>
      </section>

      <section id="portal" className="py-24 sm:py-28 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 lg:gap-20 items-center">
            <div>
              <div className="h-14 w-14 rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300 flex items-center justify-center"><Lock size={26}/></div>
              <SectionHeading eyebrow="Client Portal" title="A structured home for active engagements." copy="Client access is provided directly for eligible engagements. The portal framework is designed around clear communication, documents, progress visibility, support and reporting." />
              <a href="#contact" className="mt-7 secondary-button px-5 py-3">Request client access <ArrowRight size={18}/></a>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                [Target, "Project visibility", "Track milestones, priorities and agreed deliverables."],
                [FileText, "Documents", "Keep approved reports, policies, proposals and project files organised."],
                [Monitor, "Support", "A clear route for service requests, technical support and follow-up."],
                [BarChart3, "Reporting", "Access relevant operational updates, analytics and performance reporting."],
              ].map(([Icon, title, text]) => (
                <div key={title} className="rounded-2xl border border-slate-200 p-6 dark:border-white/10 dark:bg-white/[0.03]"><Icon className="text-blue-600 dark:text-blue-300" size={21}/><h3 className="mt-4 font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="legal" className="py-20 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 items-start">
            <div><p className="text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Legal & Engagement</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">Clear terms. Responsible delivery.</h2></div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                ["Privacy", "Information shared with Eragonova is handled for the purpose of communication, service scoping and delivery."],
                ["Engagement Terms", "Scope, timelines, fees, responsibilities and deliverables are confirmed for each client engagement."],
                ["Responsible Use", "Technology, data and security services are delivered for legitimate, authorised and professional purposes."],
              ].map(([title, text]) => <div key={title} className="rounded-2xl border border-slate-200 p-5 dark:border-white/10 dark:bg-white/[0.03]"><h3 className="font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></div>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
