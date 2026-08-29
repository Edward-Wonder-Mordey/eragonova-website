import React from "react";
import { Server, BarChart3, CircuitBoard, PenTool, Users } from "lucide-react";

const services = [
  { icon: Server, title: "IT & Systems Administration", text: "Infrastructure, networks, cybersecurity, cloud, servers, virtualization and automation for reliable operations.", items: ["Infrastructure & network architecture", "Cloud and server administration", "Cybersecurity & systems optimization"] },
  { icon: BarChart3, title: "Data & Analytics", text: "Turn operational data into clear reporting, dashboards and decisions that move organizations forward.", items: ["Data analysis & reporting", "Business intelligence dashboards", "Audit-ready & predictive analytics"] },
  { icon: CircuitBoard, title: "Electrical & Electronic Engineering", text: "Practical engineering services spanning electrical systems, electronics, solar and industrial control.", items: ["Electrical design & installation", "Solar & hybrid energy systems", "Automation, maintenance & safety"] },
  { icon: PenTool, title: "Branding & Documentation", text: "Professional business materials designed to improve credibility, communication and contract readiness.", items: ["Corporate profiles & proposals", "Contract-ready documentation", "Digital marketing & presentations"] },
  { icon: Users, title: "Business & Community Development", text: "Structured planning, training and project coordination that strengthen organizations and communities.", items: ["Strategic planning & administration", "NGO, church & community projects", "Training & self-reliance programs"] },
];

export default function ServicesSection() {
  return <section id="services" className="py-24 lg:py-32 bg-white dark:bg-slate-950"><div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="max-w-3xl mb-14"><p className="eyebrow">What we do</p><h2 className="section-title">One enterprise.<br /><span className="text-blue-600 dark:text-blue-400">Multiple capabilities.</span></h2><p className="section-lead">From digital infrastructure to physical engineering, Eragonova brings complementary disciplines together to solve real business and community challenges.</p></div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{services.map(({icon:Icon,title,text,items},i)=><article key={title} className={`service-card ${i===0 ? "lg:col-span-2" : ""}`}><div className="service-icon"><Icon size={22}/></div><h3 className="text-xl font-bold mt-6">{title}</h3><p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">{text}</p><ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-300">{items.map(item=><li key={item} className="flex gap-2"><span className="text-blue-500">✓</span>{item}</li>)}</ul></article>)}</div>
  </div></section>;
}
