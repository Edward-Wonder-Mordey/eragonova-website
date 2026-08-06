import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+233 50 537 4537",
      href: "tel:+233505374537",
    },
    {
      icon: Mail,
      label: "Email",
      value: "Eragonovaenterprise@gmail.com",
      href: "mailto:Eragonovaenterprise@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kumasi, Ghana",
      href: "#",
    },
  ];

  const serviceOptions = [
    "IT & Systems Administration",
    "Data & Analytics",
    "Electrical & Electronic Engineering",
    "Professional Branding & Documentation",
    "Business & Community Development",
    "Other / General Inquiry",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/mwvegdqp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-20 lg:py-24 bg-white dark:bg-[#121212]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - Contact Information */}
          <div>
            <h2
              className="mb-6 font-medium leading-tight text-[#000] dark:text-white/90"
              style={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: "clamp(32px, 4.5vw, 52px)",
                lineHeight: "1.05",
              }}
            >
              Let's Work
              <br />
              Together
            </h2>

            <p
              className="mb-8 text-[#444] dark:text-white/70"
              style={{
                fontFamily: '"Rethink Sans", sans-serif',
                fontSize: "clamp(14px, 1.2vw, 16px)",
                lineHeight: "1.5",
              }}
            >
              Ready to transform your business with professional IT solutions?
              Get in touch with us today to discuss how we can help you achieve
              your goals.
            </p>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-[#FAFAF6] dark:bg-[#1E1E1E] transition-all duration-200 hover:bg-[#F0F0EC] dark:hover:bg-[#262626] active:scale-[0.99]"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2563eb]/10 dark:bg-[#3b82f6]/10">
                      <IconComponent
                        className="w-5 h-5 text-[#2563eb] dark:text-[#3b82f6]"
                        strokeWidth={2}
                      />
                    </div>
                    <div>
                      <p
                        className="text-[#888] dark:text-white/50 mb-1"
                        style={{
                          fontFamily: '"Rethink Sans", sans-serif',
                          fontSize: "12px",
                        }}
                      >
                        {contact.label}
                      </p>
                      <p
                        className="text-[#111] dark:text-white/90 font-medium"
                        style={{
                          fontFamily: '"Montserrat", sans-serif',
                          fontSize: "16px",
                        }}
                      >
                        {contact.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right column - Contact Form */}
          <div>
            <h3
              className="mb-6 font-semibold text-[#111] dark:text-white/90"
              style={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: "clamp(20px, 2.5vw, 28px)",
                lineHeight: "1.25",
              }}
            >
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#444] dark:text-white/70 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#FAFAF6] dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 text-[#111] dark:text-white/90 focus:outline-none focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#3b82f6]"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[#444] dark:text-white/70 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#FAFAF6] dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 text-[#111] dark:text-white/90 focus:outline-none focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#3b82f6]"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-[#444] dark:text-white/70 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#FAFAF6] dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 text-[#111] dark:text-white/90 focus:outline-none focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#3b82f6]"
                  placeholder="+233 50 123 4567"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-[#444] dark:text-white/70 mb-2"
                >
                  Service Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#FAFAF6] dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 text-[#111] dark:text-white/90 focus:outline-none focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#3b82f6]"
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[#444] dark:text-white/70 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-[#FAFAF6] dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 text-[#111] dark:text-white/90 focus:outline-none focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#3b82f6]"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 rounded-lg bg-[#2563eb] text-white font-medium hover:bg-[#1d4ed8] transition disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <p className="text-green-600 mt-4">
                  ✅ Your message has been sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 mt-4">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
