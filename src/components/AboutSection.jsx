import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-20 lg:py-24 bg-[#FAFAF6] dark:bg-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="mb-8 font-bold text-[#111] dark:text-white/90 text-3xl">
          About Eragonova Enterprise
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column: narrative */}
          <div>
            <p className="text-[#444] dark:text-white/70 text-lg leading-relaxed mb-6">
              Eragonova Enterprise is a multidisciplinary solutions firm founded
              in Kumasi, Ghana. We specialize in delivering contract‑ready
              services across IT infrastructure, electrical & electronic
              engineering, data analytics, branding, and community development.
            </p>
            <p className="text-[#444] dark:text-white/70 text-lg leading-relaxed mb-6">
              Our mission is to empower businesses, NGOs, and communities with
              future‑proof technology and sustainable strategies. By blending
              remote and in‑person service delivery, we ensure reliability,
              scalability, and impact across local and international projects.
            </p>
            <p className="text-[#444] dark:text-white/70 text-lg leading-relaxed">
              Founded by Edward Wonder Mordey, Eragonova Enterprise is built on
              a vision of self‑reliance, innovation, and trust. We are committed
              to clear communication, rigorous quality assurance, and
              transformative solutions that position our clients for long‑term
              success.
            </p>
          </div>

          {/* Right column: highlights */}
          <div className="bg-white dark:bg-[#121212] p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4 text-[#2563eb] dark:text-[#3b82f6]">
              Key Highlights
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Founded in Kumasi, Ghana</li>
              <li>Contract‑ready services for enterprises & NGOs</li>
              <li>Expertise spanning IT, engineering, analytics & branding</li>
              <li>Blended remote + in‑person delivery</li>
              <li>Commitment to self‑reliance & community empowerment</li>
            </ul>
          </div>
        </div>

        {/* Vision & Mission Sub-section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-[#111] dark:text-white/90">
            Vision & Mission
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#2563eb] dark:text-[#3b82f6]">
                Our Vision
              </h4>
              <p className="text-[#444] dark:text-white/70 text-lg leading-relaxed">
                To position Eragonova Enterprise as a leading contract‑ready firm
                in Ghana and beyond, serving both local and international
                clients with scalable, innovative, and sustainable solutions.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#2563eb] dark:text-[#3b82f6]">
                Our Mission
              </h4>
              <p className="text-[#444] dark:text-white/70 text-lg leading-relaxed">
                To empower communities and organizations through technology,
                engineering, and strategic development — blending remote and
                in‑person delivery to ensure reliability, growth, and
                self‑reliance for every client we serve, in Ghana and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
