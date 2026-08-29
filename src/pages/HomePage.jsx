import Header from "../components/Header";
import HeroSection from "../components/HeroSection.new";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return <div className="min-h-screen bg-white dark:bg-slate-950"><Header /><HeroSection /><ServicesSection /><ProjectsSection /><AboutSection /><ContactSection /></div>;
}
