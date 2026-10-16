import React from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./layout/RootLayout";
import AppRouter from "./AppRouter";
import { initAnalytics } from "./analytics";
import "./index.css";
import "./divisionVisual.css";
import "./accessibility.css";

initAnalytics();

// The Academy page originally shipped very aggressively compressed local WebP
// assets. Keep the page layout intact, but swap those four image sources for
// sharp, high-resolution photographs when they appear in the DOM.
const academyImageSources = {
  "/academy/academy-hero.webp":
    "https://images.pexels.com/photos/33920044/pexels-photo-33920044/free-photo-of-focused-students-in-it-workshop-in-accra.jpeg?auto=compress&dpr=1&h=750&w=1260",
  "/academy/academy-3-month.webp":
    "https://images.pexels.com/photos/33920035/pexels-photo-33920035/free-photo-of-students-engaged-in-hands-on-technology-workshop.jpeg?auto=compress&dpr=1&h=750&w=1260",
  "/academy/academy-6-month.webp":
    "https://images.pexels.com/photos/5539293/pexels-photo-5539293.jpeg?auto=compress&dpr=1&h=750&w=1260",
  "/academy/academy-1-year.webp":
    "https://images.pexels.com/photos/34046709/pexels-photo-34046709/free-photo-of-diverse-team-engaged-in-business-training-workshop.jpeg?auto=compress&dpr=1&h=750&w=1260",
};

function upgradeAcademyImages(scope = document) {
  scope.querySelectorAll?.("img").forEach((image) => {
    if (image.dataset.academyQuality === "hd") return;

    let pathname;
    try {
      pathname = new URL(image.getAttribute("src") || "", window.location.origin).pathname;
    } catch {
      return;
    }

    const highResolutionSource = academyImageSources[pathname];
    if (!highResolutionSource) return;

    image.src = highResolutionSource;
    image.dataset.academyQuality = "hd";
    image.decoding = "async";
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootLayout>
      <AppRouter />
    </RootLayout>
  </React.StrictMode>
);

requestAnimationFrame(() => upgradeAcademyImages());

const academyImageObserver = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType !== Node.ELEMENT_NODE) return;
      if (node.matches?.("img")) upgradeAcademyImages(node.parentElement || document);
      else upgradeAcademyImages(node);
    });
  }
});

academyImageObserver.observe(document.getElementById("root"), {
  childList: true,
  subtree: true,
});
