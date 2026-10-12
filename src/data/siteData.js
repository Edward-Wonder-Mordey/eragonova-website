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
  Users,
  Landmark,
  School,
  BookOpen,
  Award,
  Layers,
  Globe2,
} from "lucide-react";

export const values = [
  ["Integrity", "Do what is right even when nobody is watching."],
  ["Excellence", "Pursue quality in every project."],
  ["Stewardship", "Protect and improve what has been entrusted to us."],
  ["Innovation", "Continuously improve systems and solutions."],
  ["Service", "Technology should serve people."],
  ["Reliability", "Deliver dependable work and clear communication."],
  ["Continuous Learning", "Remain teachable and adaptable."],
  ["Community Impact", "Create solutions that strengthen individuals and communities."],
];

export const divisions = [
  {
    number: "01",
    title: "IT & Systems Administration",
    icon: Monitor,
    summary: "Support, administer and improve the systems people rely on every day.",
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
    summary: "Plan, configure and maintain reliable wired and wireless infrastructure.",
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
    summary: "Modernise platforms, workflows and infrastructure with scalable digital systems.",
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
    summary: "Turn operational data into reliable reporting, dashboards and decision support.",
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
    summary: "Strengthen security awareness, controls, monitoring and authorised response capability.",
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
    summary: "Build useful web platforms, internal applications and digital products.",
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
    summary: "Support practical electrical, electronic, power and smart-system requirements.",
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
    summary: "Provide dependable administrative, customer and operational support.",
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
    summary: "Create clear, professional documentation that supports operations, bids and compliance.",
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
    summary: "Create coherent visual communication across digital, print and branded materials.",
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
    summary: "Collect, analyse and present evidence that supports better planning and decisions.",
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
    summary: "Improve structures, workflows, coordination and organisational performance.",
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
    summary: "Provide structured advisory support across Eragonova's core disciplines.",
    groups: [
      ["Consulting Areas", ["Technology consulting", "Engineering consulting", "Operations consulting", "Data consulting", "Administrative consulting", "Organisational consulting"]],
    ],
  },
  {
    number: "14",
    title: "Managed Services",
    icon: Settings,
    summary: "Maintain recurring technology, documentation and reporting functions over time.",
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
    summary: "Build practical capability through technology, data, business and engineering training.",
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
    summary: "Use skills, systems and training to strengthen communities and self-reliance.",
    groups: [
      ["Community Programmes", ["Digital literacy", "Youth technology development", "Entrepreneurship training", "Community projects", "Church technology support", "Self-reliance programmes"]],
    ],
  },
];

export const servicePillars = [
  {
    title: "Digital & Technology Systems",
    description: "Infrastructure, cloud, data, cybersecurity and software services that improve digital capability.",
    divisions: ["01", "02", "03", "04", "05", "06"],
  },
  {
    title: "Engineering & Operational Support",
    description: "Engineering, administration, documentation, organisational and managed-service support.",
    divisions: ["07", "08", "09", "12", "13", "14"],
  },
  {
    title: "Brand, Research & Capability",
    description: "Communication, evidence, training and development services that strengthen people and organisations.",
    divisions: ["10", "11", "15", "16"],
  },
];

export const sectors = [
  [Briefcase, "Small Businesses", "Practical systems, digital tools, documentation, analytics and operational support that can grow with the business."],
  [Heart, "NGOs", "Structured reporting, monitoring, data, technology support, documentation and programme delivery systems."],
  [Users, "Churches", "Technology support, records, communications, training, community programmes and self-reliance initiatives."],
  [School, "Educational Institutions", "Infrastructure, digital platforms, analytics, technical documentation and technology capacity building."],
  [Landmark, "Government Organisations", "Professional documentation, infrastructure, data, process improvement and contract-ready technical support."],
  [Globe2, "Community Projects", "Digital literacy, entrepreneurship, research, project coordination and sustainable community development support."],
];

export const academyTracks = [
  ["Technology", ["Networking", "Linux", "Windows Server", "Active Directory", "Cloud Computing"]],
  ["Data", ["Excel", "SQL", "Power BI", "Tableau"]],
  ["Business", ["Administrative Support", "Customer Service", "Business Writing", "Documentation"]],
  ["Professional Development", ["Leadership", "Communication", "Project Coordination"]],
  ["Engineering", ["Electrical Fundamentals", "Electronics", "Technical Safety"]],
];

export const resourceTypes = [
  [BookOpen, "Insights", "Practical articles on technology, engineering, operations, data and organisational growth."],
  [FileText, "Templates", "Reusable business, technical, administrative and project documentation resources."],
  [Layers, "Guides", "Step-by-step material designed to turn complex systems into practical action."],
  [Award, "Research", "Evidence-based material supporting better decisions and stronger systems."],
];

export const communityPrograms = [
  "Digital Literacy Programmes",
  "Youth Technology Development",
  "Entrepreneurship Training",
  "Community Projects",
  "Church Technology Support",
  "Self-Reliance Programmes",
];
