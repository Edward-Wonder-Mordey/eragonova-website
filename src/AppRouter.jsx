import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import AcademyPage from "./pages/AcademyPage";
import ResourcesPage from "./pages/ResourcesPage";
import { ContactPage, LegalPage } from "./pages/CorporatePages";
import { ProjectsPage, CommunityPage, CareersPage } from "./pages/ClientFacingPages";
import PartnersPage from "./pages/PartnersPage";
import PortalPage from "./pages/PortalPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import { routeMeta, routePath, SITE_URL, SOCIAL_IMAGE } from "./data/routeMeta";
import { trackPageView } from "./analytics";

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

function routeFromPath(pathname = window.location.pathname) {
  const parts = pathname.split("/").filter(Boolean);
  const first = parts[0] === "eragonova-website" ? parts[1] : parts[0];
  return (first || "home").toLowerCase();
}

function legacyHashRoute() {
  const match = window.location.hash.match(/^#\/?([^?/#]+)/);
  return match?.[1]?.toLowerCase() || null;
}

function getRoute() {
  const legacy = legacyHashRoute();
  return legacy && routes[legacy] ? legacy : routeFromPath();
}

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function applyRouteMetadata(route) {
  const meta = routeMeta[route];
  const isKnown = Boolean(meta);
  const effective = meta || {
    path: window.location.pathname,
    label: "Page Not Found",
    title: "Page Not Found | Eragonova Enterprise",
    description: "The requested Eragonova Enterprise page could not be found.",
  };
  const canonicalUrl = `${SITE_URL}${effective.path === "/" ? "/" : effective.path}`;

  document.title = effective.title;
  setMeta("name", "description", effective.description);
  setMeta("name", "robots", isKnown ? "index,follow" : "noindex,follow");
  setMeta("property", "og:title", effective.title);
  setMeta("property", "og:description", effective.description);
  setMeta("property", "og:url", canonicalUrl);
  setMeta("property", "og:image", SOCIAL_IMAGE);
  setMeta("name", "twitter:title", effective.title);
  setMeta("name", "twitter:description", effective.description);
  setMeta("name", "twitter:image", SOCIAL_IMAGE);

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalUrl;

  let schema = document.getElementById("eragonova-route-schema");
  if (!schema) {
    schema = document.createElement("script");
    schema.id = "eragonova-route-schema";
    schema.type = "application/ld+json";
    document.head.appendChild(schema);
  }

  const graph = [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: effective.title,
      description: effective.description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
    },
  ];

  if (route !== "home" && isKnown) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: effective.label, item: canonicalUrl },
      ],
    });
  }

  schema.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}

function NotFoundPage() {
  return (
    <section className="min-h-[70vh] bg-slate-950 text-white pt-40 pb-24 flex items-center">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">404</p>
        <h1 className="mt-4 text-5xl sm:text-6xl font-bold tracking-tight">That page is not part of the site.</h1>
        <p className="mt-5 text-white/65 text-lg">Use the main navigation or return to the Eragonova homepage.</p>
        <a href="/" className="mt-8 primary-button px-6 py-3.5">Return Home</a>
      </div>
    </section>
  );
}

export default function AppRouter() {
  const [route, setRoute] = useState(getRoute);

  const navigate = useCallback((nextRoute, replace = false) => {
    const path = routes[nextRoute] ? routePath(nextRoute) : `/${nextRoute}`;
    window.history[replace ? "replaceState" : "pushState"]({}, "", path);
    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const legacy = legacyHashRoute();
    if (legacy && routes[legacy]) {
      navigate(legacy, true);
      return;
    }

    const current = routeFromPath();
    if (routes[current] && window.location.pathname !== routePath(current)) {
      window.history.replaceState({}, "", routePath(current));
    }
  }, [navigate]);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(routeFromPath());
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    const handleHashChange = () => {
      const legacy = legacyHashRoute();
      if (legacy && routes[legacy]) navigate(legacy, true);
    };

    const handleInternalClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target.closest?.("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const href = anchor.getAttribute("href");
      if (!href || (href.startsWith("#") && !href.startsWith("#/"))) return;

      let nextRoute = null;
      if (href.startsWith("#/")) {
        nextRoute = href.replace(/^#\/?/, "").split(/[/?#]/)[0];
      } else {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return;
        nextRoute = routeFromPath(url.pathname);
      }

      if (!nextRoute) return;
      event.preventDefault();
      navigate(nextRoute);
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handleHashChange);
    document.addEventListener("click", handleInternalClick);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleInternalClick);
    };
  }, [navigate]);

  useEffect(() => {
    applyRouteMetadata(route);
    trackPageView(routes[route] ? routePath(route) : window.location.pathname);

    const frame = window.requestAnimationFrame(() => {
      document.querySelectorAll('a[href^="#/"]').forEach((anchor) => {
        const linkedRoute = anchor.getAttribute("href").replace(/^#\/?/, "").split(/[/?#]/)[0];
        if (routes[linkedRoute]) anchor.setAttribute("href", routePath(linkedRoute));
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [route]);

  const Page = routes[route] || NotFoundPage;

  return (
    <>
      <Header currentRoute={route} />
      <Page />
    </>
  );
}
