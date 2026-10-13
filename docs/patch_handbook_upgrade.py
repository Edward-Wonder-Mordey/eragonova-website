from pathlib import Path

path = Path("docs/generate_handbook.py")
text = path.read_text(encoding="utf-8")

replacements = {
    "https://edward-wonder-mordey.github.io/eragonova-website/": "https://eragonova.com/",
    "Version 1.0 — 13 October 2026": "Version 1.1 — 13 October 2026",
    "('Routes','Decides which page opens for #/about, #/services and other links.','src/AppRouter.jsx')": "('Routes','Decides which clean page path opens for /about, /services and other links. Older #/... links are also supported.','src/AppRouter.jsx')",
    "['Website address after #/','Page shown','Source file']": "['Website path','Page shown','Source file']",
    "('home','Home','src/pages/HomePage.jsx')": "('/','Home','src/pages/HomePage.jsx')",
    "('about','About','src/pages/AboutPage.jsx')": "('/about','About','src/pages/AboutPage.jsx')",
    "('services','Services','src/pages/ServicesPage.jsx')": "('/services','Services','src/pages/ServicesPage.jsx')",
    "('projects','Projects','src/pages/ClientFacingPages.jsx')": "('/projects','Projects','src/pages/ClientFacingPages.jsx')",
    "('academy','Academy','src/pages/AcademyPage.jsx')": "('/academy','Academy','src/pages/AcademyPage.jsx')",
    "('resources','Resources','src/pages/ClientFacingPages.jsx')": "('/resources','Resources','src/pages/ResourcesPage.jsx')",
    "('community','Community','src/pages/ClientFacingPages.jsx')": "('/community','Community','src/pages/ClientFacingPages.jsx')",
    "('partners','Partners','src/pages/PartnersPage.jsx')": "('/partners','Partners','src/pages/PartnersPage.jsx')",
    "('careers','Careers','src/pages/ClientFacingPages.jsx')": "('/careers','Careers','src/pages/ClientFacingPages.jsx')",
    "('portal','Client Portal','src/pages/PortalPage.jsx')": "('/portal','Client Portal','src/pages/PortalPage.jsx')",
    "('contact','Contact','src/pages/CorporatePages.jsx + ContactSection.jsx')": "('/contact','Contact','src/pages/CorporatePages.jsx + ContactSection.jsx')",
    "('legal','Legal','src/pages/CorporatePages.jsx')": "('/legal','Legal','src/pages/CorporatePages.jsx')",
    "('privacy','Privacy','src/pages/PrivacyPage.jsx')": "('/privacy','Privacy','src/pages/PrivacyPage.jsx')",
    "('terms','Terms','src/pages/TermsPage.jsx')": "('/terms','Terms','src/pages/TermsPage.jsx')",
    "('Live URL','https://eragonova.com/','package.json, public/index.html, sitemap/robots as applicable')": "('Live URL','https://eragonova.com/','public/CNAME, package.json, public/index.html, sitemap/robots')",
    "('SEO title/description/social preview','public/index.html','Main metadata for search and link sharing.')": "('Page SEO titles/descriptions','src/data/routeMeta.js','Main page-by-page search titles, descriptions and canonical paths.'),\n('Organisation/social SEO shell','public/index.html','Base metadata, organisation schema and social image.')",
    "('Google Search Console verification','public/googlebcb43e0ea049d806.html','Do not remove unless changing verification method.')": "('Google Search Console verification','Spaceship DNS + Google Search Console','Use Google Domain verification and add only the TXT record Google supplies.')",
    "('src/pages/ClientFacingPages.jsx','Projects, Resources, Community, Careers','GREEN/AMBER')": "('src/pages/ClientFacingPages.jsx','Projects, Community and Careers','GREEN/AMBER'),('src/pages/ResourcesPage.jsx','Resources and starter checklists','GREEN/AMBER')",
    "('src/index.css','Global styling','AMBER/RED')": "('src/index.css','Global styling','AMBER/RED'),('src/accessibility.css','Accessibility, focus and reduced-motion styles','AMBER'),('src/data/routeMeta.js','Page-specific SEO and canonical paths','AMBER'),('src/analytics.js','Optional GA4 loading and events','RED'),('public/site-config.js','Public GA4 Measurement ID setting','AMBER'),('scripts/postbuild.cjs','Creates GitHub Pages clean-route fallback','RED')",
    "body(doc,'The main SEO description, title, keywords, canonical URL and social-sharing metadata are in public/index.html. Search-engine support files are in public/robots.txt and public/sitemap.xml. A Google Search Console verification file is already present.')": "body(doc,'SEO is split between the base page shell and the clean public routes. Page-specific titles, descriptions and canonical paths are stored in src/data/routeMeta.js and applied by src/AppRouter.jsx. Organisation/WebSite structured data is in public/index.html. Search-engine discovery files are public/robots.txt and public/sitemap.xml. Google Search Console should use Domain verification through a TXT record in the eragonova.com DNS settings.')",
    "('Change Google/search description','public/index.html','meta name=\"description\"')": "('Change a page search description','src/data/routeMeta.js','Edit the description for the relevant route.')",
    "('Change browser/search title','public/index.html','<title> and og:title/twitter:title')": "('Change a page browser/search title','src/data/routeMeta.js','Edit the title for the relevant route.')",
    "('Change social preview description','public/index.html','og:description and twitter:description')": "('Change base social preview','public/index.html','Edit the default Open Graph/Twitter values used before route JavaScript loads.')",
    "('Google verification','public/googlebcb43e0ea049d806.html','Do not remove while using this verification method')": "('Google Search Console','Spaceship DNS','Add the TXT verification value supplied by Google for the Domain property.')",
    "body(doc,'No Google Analytics gtag integration is currently visible in the source reviewed for this handbook. If analytics is added later, document the measurement ID location here and update the Privacy page if the tool uses cookies or collects visitor data.')": "body(doc,'Google Analytics 4 support is prepared but intentionally disabled until a real Measurement ID is available. When one is created, put it in public/site-config.js. The site will then load GA4 and record page views, contact clicks and successful contact-form leads. Review the Privacy notice before enabling any analytics or cookie-dependent features.')",
    "('Custom domain','Stronger corporate identity than the GitHub Pages URL.','When domain ownership is ready.')": "('Google Search Console','Helps Google discover and report on eragonova.com search performance.','When Google provides the DNS TXT verification record.')",
    "('Structured SEO per route','Improves search targeting beyond one HTML metadata shell.','When SEO becomes a dedicated growth channel.')": "('SEO review and content growth','Keeps route metadata, schema, resources and search targeting aligned with the business.','Review quarterly or when major services change.')",
    "'I know public/index.html controls the main SEO/social metadata.'": "'I know src/data/routeMeta.js controls page-specific SEO while public/index.html contains the base organisation/social metadata.'",
    "('13 Oct 2026','Initial handbook','docs/','Created website owner’s handbook.','Baseline documentation.')": "('13 Oct 2026','Initial handbook','docs/','Created website owner’s handbook.','Baseline documentation.'),('13 Oct 2026','Website upgrade','routing / SEO / accessibility / contact','Moved to eragonova.com clean URLs, route SEO, schema, accessibility improvements, analytics readiness and contact-form privacy/spam protection.','Updated after custom-domain launch.')",
}

for old, new in replacements.items():
    if old not in text:
        print(f"Handbook patch note: pattern not found: {old[:80]}")
    text = text.replace(old, new)

path.write_text(text, encoding="utf-8")
print("Updated handbook generator for eragonova.com and the October 2026 technical upgrade.")
