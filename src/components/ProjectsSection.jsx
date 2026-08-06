import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Eragonova Website",
      category: "IT & Systems Administration",
      description:
        "Future-proof enterprise website showcasing services and projects with scalable architecture.",
    },
    {
      title: "Community Poultry Initiative",
      category: "Business & Community Development",
      description:
        "Coordinated self-reliance project supporting local farmers with feed distribution and training.",
    },
    {
      title: "PromisedLand Data Center",
      category: "IT Infrastructure",
      description:
        "Designed hybrid data center deployment with Azure and AWS integration for scalability.",
    },
    {
      title: "Professional Branding Campaign",
      category: "Branding & Documentation",
      description:
        "Developed contract-ready corporate profiles, proposals, and reports for NGOs and enterprises.",
    },
    {
      title: "Renewable Energy Pilot",
      category: "Electrical & Electronic Engineering",
      description:
        "Implemented solar hybrid systems and conducted safety audits for SMEs in Kumasi.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 md:py-20 lg:py-24 bg-[#FAFAF6] dark:bg-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="mb-12 font-bold text-[#111] dark:text-white/90 text-3xl">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white dark:bg-[#121212] shadow hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#2563eb] dark:text-[#3b82f6]">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {project.category}
              </p>
              <p className="text-[#444] dark:text-white/70 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
