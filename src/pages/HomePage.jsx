import Header from "../components/Header";
import HeroSection from "../components/HeroSection.new";
import ProjectsSection from "../components/ProjectsSection.new";
import EnterpriseBlueprint from "../components/EnterpriseBlueprint";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <HeroSection />
      <EnterpriseBlueprint projects={<ProjectsSection />} />
      <ContactSection />
    </div>
  );
}
