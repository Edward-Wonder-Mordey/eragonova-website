import React from "react";

export default function HeroSection() {
  return (
    <section
      id="hero_section"
      className="relative min-h-screen flex items-center"
    >
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        {/* Background image - technology/business theme */}
        <img
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-full object-cover object-center"
        />

        {/* Left-to-right gradient overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0f172a 0%, rgba(15, 23, 42, 0.95) 20%, rgba(15, 23, 42, 0.7) 40%, transparent 60%)",
          }}
        />

        {/* Additional dark mode overlay */}
        <div className="absolute inset-0 dark:bg-black/10" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 min-h-screen">
            {/* Left column - Text content */}
            <div className="flex flex-col justify-center py-20 lg:py-0 max-w-[600px]">
              {/* Main headline */}
              <div className="mb-6">
                <h1
                  className="font-medium text-white leading-tight tracking-tight"
                  style={{
                    fontFamily: '"Instrument Sans", sans-serif',
                    fontSize: "clamp(32px, 5.5vw, 64px)",
                    lineHeight: "clamp(38px, 6.2vw, 72px)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Complete Enterprise
                  <br />
                  Solutions for All
                  <span
                    className="inline-block ml-1 w-1.5 h-1.5 rounded-full bg-[#3b82f6]"
                    style={{ transform: "translateY(-2px)" }}
                  />
                </h1>
              </div>

              {/* Sub-headline */}
              <div className="mb-8 max-w-[480px]">
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "clamp(14px, 1.4vw, 16px)",
                    lineHeight: 1.5,
                    color: "rgba(255, 255, 255, 0.85)",
                  }}
                >
                  From IT infrastructure and electrical engineering to data
                  analytics, strategic branding, and community development —
                  Eragonova delivers contract-ready solutions across Ghana and
                  beyond.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-block px-8 py-4 bg-[#3b82f6] text-white rounded-full transition-all duration-200 ease-in-out 
                           hover:bg-[#2563eb] 
                           active:bg-[#1d4ed8] active:scale-95 
                           focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-opacity-50 focus:ring-offset-2"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 600,
                    fontSize: "16px",
                    letterSpacing: "0.5px",
                  }}
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Right column - Image area (handled by background image) */}
            <div className="hidden lg:block">
              {/* This column is visually filled by the background image */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


