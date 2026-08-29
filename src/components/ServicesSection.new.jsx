import React from "react";
import { Server, BarChart3, CircuitBoard, PenTool, Users } from "lucide-react";

const services = [
  { icon: Server, title: "IT & Systems Administration", text: "Reliable infrastructure and support for organizations that depend on their technology every day.", items: ["Windows & Linux administration", "Servers, networking, DNS & DHCP", "Cloud, virtualization & systems support"] },
  { icon: BarChart3, title: "Data & Analytics", text: "Turn operational data into clear reporting, dashboards, and decisions that move organizations forward.", items: ["SQL & data analysis", "Power BI & Tableau reporting", "Audit, quality & workflow analysis"] },
  { icon: CircuitBoard, title: "Electrical & Electronic Engineering", text: "Practical engineering support connecting electrical systems, electronics, safety, and modern infrastructure.", items: ["Electrical design & wiring", "Electronics & technical systems", "Engineering documentation & support"] },
  { icon: PenTool, title: "Branding & Business Documentation", text: "Professional materials that help organizations communicate clearly, present themselves credibly, and prepare for opportunities.", items: ["Company profiles & proposals", "Reports, presentations & documentation", "Digital presence & visual communication"] },
  { icon: Users, title: "Planning & Organizational Support", text: "Structured planning and coordination for projects, teams, community programs, and growing organizations.", items: ["Strategic planning & administration", "Project coordination & reporting", "Training & self-reliance programs"] },
];

export default function ServicesSection() {
  return <section id="services" className="py-24 lg:py-32 bg-white dark:bg-slate-950"><div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="max-w-3xl mb-14"><p className="eyebrow">What we do</p><h2 className="section-title">One enterprise.<br /><span className="text-blue-600 dark:text-blue-400">Multiple capabilities.</span></h2><p className="section-lead">Our work sits at the intersection of reliable technology, practical engineering, useful data, and meaningful service.</p></div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{services.map(({icon:Icon,title,text,items},i)=><article key={title} className={`service-card ${i===0 ? "lg:col-span-2" : ""}`}><div className="service-icon"><Icon size={22}/></div><h3 className="text-xl font-bold mt-6">{title}</h3><p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">{text}</p><ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-300">{items.map(item=><li key={item} className="flex gap-2"><span className="text-blue-500">✓</span>{item}</li>)}</ul></article>)}</div>
  </div></section>;
}
