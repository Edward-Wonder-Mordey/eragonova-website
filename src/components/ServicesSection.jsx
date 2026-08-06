import React from "react";

export default function ServicesSection() {
  const services = [
    {
      title: "IT & Systems Administration",
      items: [
        "IT Infrastructure Design, Troubleshooting & Optimization (in-person & remote)",
        "Network Architecture & Cybersecurity Solutions (remote monitoring + on-site setup)",
        "Cloud Services & Remote Systems Management (remote)",
        "Server Administration & Virtualization (remote & in-person)",
        "Systems Integration & Automation (in-person)",
      ],
    },
    {
      title: "Data & Analytics",
      items: [
        "Remote Data Analysis & Reporting (remote)",
        "Business Intelligence Dashboards (remote)",
        "Compliance & Audit-Ready Documentation (remote)",
        "Predictive Analytics for SMEs and NGOs (remote)",
      ],
    },
    {
      title: "Electrical & Electronic Engineering",
      items: [
        "Electrical Systems Design & Installation (in-person)",
        "Electronic Circuit Design & Troubleshooting (in-person & remote consultation)",
        "Renewable Energy Solutions - Solar, Hybrid Systems (in-person)",
        "Industrial Automation & Control Systems (in-person)",
        "Power Systems Maintenance & Safety Audits (in-person)",
      ],
    },
    {
      title: "Professional Branding & Documentation",
      items: [
        "Strategic Branding for Contract Eligibility (remote)",
        "Export-Ready Business Documentation (remote)",
        "Corporate Profiles, Proposals & Reports (remote)",
        "Digital Marketing & Presentation Design (remote)",
      ],
    },
    {
      title: "Business & Community Development",
      items: [
        "Business Administration & Strategic Planning (remote & in-person)",
        "Project Coordination for NGOs, Churches & Community Initiatives (in-person & remote support)",
        "Training & Capacity-Building Workshops (in-person & remote webinars)",
        "Self-Reliance & Sustainability Programs (in-person & remote mentoring)",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-20 lg:py-24 bg-white dark:bg-[#121212]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="mb-8 font-bold text-[#111] dark:text-white/90 text-3xl">
          Comprehensive Services
        </h2>
        <p className="mb-12 text-gray-600 dark:text-gray-300 text-lg">
          Enterprise solutions spanning technology, engineering, analytics, branding & community development
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4 text-[#2563eb] dark:text-[#3b82f6]">
                {service.title}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
