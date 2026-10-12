import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AcademyPage from "./pages/AcademyPage";
import { ContactPage, LegalPage } from "./pages/CorporatePages";
import { ServicesPage, ProjectsPage, ResourcesPage, CommunityPage, CareersPage } from "./pages/ClientFacingPages";
import PartnersPage from "./pages/PartnersPage";
import PortalPage from "./pages/PortalPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

function getRoute() {
  return window.location.hash.replace(/^#\/?/, "").split("?")[0].replace(/\/$/, "") || "home";
}

const routes = {
  home: HomePage,
  about: AboutPage,
  services: ServicesPage,
  projects: ProjectsPage,
  academy: AcademyPage,
  resources: ResourcesPage,
  community: CommunityPage,
  partners: PartnersPage,
  careers: CareersPage,
  portal: PortalPage,
  contact: ContactPage,
  legal: LegalPage,
  privacy: PrivacyPage,
  terms: TermsPage,
};

function NotFoundPage() {
  return (
    <section className="min-h-[70vh] bg-slate-950 text-white pt-40 pb-24 flex items-center">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">404</p>
        <h1 className="mt-4 text-5xl sm:text-6xl font-bold tracking-tight">That page is not part of the site.</h1>
        <p className="mt-5 text-white/65 text-lg">Use the main navigation or return to the Eragonova homepage.</p>
        <a href="#/home" className="mt-8 primary-button px-6 py-3.5">Return Home</a>
      </div>
    </section>
  );
}

export default function AppRouter() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const Page = routes[route] || NotFoundPage;

  return (
    <>
      <Header currentRoute={route} />
      <Page />
    </>
  );
}
