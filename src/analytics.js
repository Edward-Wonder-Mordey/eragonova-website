const getMeasurementId = () => window.ERAGONOVA_CONFIG?.gaMeasurementId?.trim() || "";

export function initAnalytics() {
  const measurementId = getMeasurementId();
  if (!/^G-[A-Z0-9]+$/i.test(measurementId) || window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

export function trackPageView(path) {
  const measurementId = getMeasurementId();
  if (!window.gtag || !/^G-[A-Z0-9]+$/i.test(measurementId)) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    page_title: document.title,
  });
}

export function trackEvent(name, parameters = {}) {
  if (!window.gtag) return;
  window.gtag("event", name, parameters);
}
