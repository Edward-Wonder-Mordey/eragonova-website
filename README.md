# Eragonova Enterprise Website

Official website repository for **Eragonova Enterprise**.

**Public website:** https://eragonova.com  
**Positioning:** Technology • Engineering • Growth  
**Motto:** Practical Technology. Reliable Infrastructure. Sustainable Growth.

## Website purpose

The website presents Eragonova as a multidisciplinary technology, engineering and business solutions company based in Ghana and built to serve clients across Africa and internationally. It covers the enterprise service divisions, projects and capabilities, Academy, practical resources, community development, strategic partners, careers, client portal access, contact information and public legal/privacy information.

## Main public pages

- `/` — Home
- `/about/` — About
- `/services/` — Enterprise services and 16 service divisions
- `/projects/` — Projects and capability areas
- `/academy/` — Eragonova Academy
- `/resources/` — Resources and practical starter checklists
- `/community/` — Community development
- `/partners/` — Strategic partners
- `/careers/` — Careers and collaboration
- `/portal/` — Client portal access information
- `/contact/` — Contact and project enquiry form
- `/legal/` — Legal information
- `/privacy/` — Privacy notice
- `/terms/` — Website and engagement terms

Legacy `#/...` links are automatically converted to the clean URL structure.

## Hosting and domain

The site is built with React and deployed to GitHub Pages through `.github/workflows/deploy-pages.yml`.

The custom domain is configured through `public/CNAME` as:

```text
eragonova.com
```

The production `postbuild` process creates a real `index.html` inside each public route directory. This means direct visits to clean URLs such as `/services/` and `/contact/` can be served as normal pages rather than depending only on an SPA 404 fallback. A no-index `404.html` fallback is also generated for genuinely unknown paths.

## SEO and search

- The authoritative page-specific titles, descriptions, labels and canonical paths are stored in `src/data/routeMeta.json`.
- `src/data/routeMeta.js` exposes that shared metadata to the React application.
- `scripts/postbuild.cjs` uses the same metadata to generate route-specific static HTML shells with the correct title, description, canonical URL, Open Graph/Twitter metadata and page/breadcrumb schema.
- Organisation and website structured data are defined in `public/index.html`.
- `src/AppRouter.jsx` also updates metadata during in-app navigation.
- `public/sitemap.xml` lists the public clean URLs.
- `public/robots.txt` points search engines to the sitemap.
- Google Search Console Domain verification should be completed with the TXT record Google supplies for `eragonova.com`.

## Analytics

Google Analytics is prepared but disabled until a real GA4 Measurement ID is available.

To enable it later, edit:

`public/site-config.js`

and change:

```js
window.ERAGONOVA_CONFIG = {
  gaMeasurementId: "G-XXXXXXXXXX",
};
```

Do not invent or copy another website's Measurement ID.

## Contact form

The contact form is in `src/components/ContactSection.jsx` and currently submits through Formspree. It includes:

- required enquiry details
- privacy consent
- a honeypot spam field
- accessible success/error messages
- analytics events when GA4 is enabled

Do not place passwords, private API keys or payment credentials in the public source code.

## Accessibility

Accessibility support includes a skip-to-content link, visible keyboard focus, mobile-menu state information, Escape-key menu closing, accessible form status messages and reduced-motion support. The related CSS is in `src/accessibility.css`.

## Resources

`src/pages/ResourcesPage.jsx` contains a starter library with practical checklists covering technology readiness, project scoping, data/reporting quality, document control, training needs and community programme planning. These are general planning aids and should not be represented as project-specific professional assessments.

## Documentation

The plain-language owner's handbook is stored at:

`docs/Eragonova_Enterprise_Website_Owners_Handbook.docx`

Its reusable generator is:

`docs/generate_handbook.py`

The handbook workflow applies temporary documentation patches when needed, rebuilds the Word handbook and removes the temporary patch files. When the website structure changes significantly, update the handbook or its generator so the management documentation remains aligned with the live site.

## Development

```bash
npm install
npm start
```

Production build:

```bash
npm run build
```

The build automatically runs the preparation script before compilation and the postbuild route-generation script after compilation.
