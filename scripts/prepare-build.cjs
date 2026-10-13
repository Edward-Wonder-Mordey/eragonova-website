const fs = require("fs");
const path = require("path");

const enterpriseFile = path.join(__dirname, "..", "src", "components", "EnterpriseBlueprint.jsx");

if (fs.existsSync(enterpriseFile)) {
  let source = fs.readFileSync(enterpriseFile, "utf8");

  // lucide-react 0.263.x does not expose the later Handshake icon name.
  source = source.replace(/\s+Handshake,\n/, "\n");
  source = source.replace(/<Handshake size=\{24\}\/>/g, "<Users size={24}/>");

  fs.writeFileSync(enterpriseFile, source, "utf8");
}

const portalFile = path.join(__dirname, "..", "src", "pages", "PortalPage.jsx");

if (fs.existsSync(portalFile)) {
  let source = fs.readFileSync(portalFile, "utf8");

  // lucide-react 0.263.x predates ReceiptText; FileText keeps Billing compatible.
  source = source.replace(/\s+ReceiptText,\n/, "\n");
  source = source.replace(/\["billing", ReceiptText, "Billing"\]/g, '["billing", FileText, "Billing"]');

  // This repository does not include the react-hooks ESLint rule plugin. The inline
  // disable directive itself becomes a build error, so remove only that directive.
  source = source.replace(/\n\s*\/\/ eslint-disable-next-line react-hooks\/exhaustive-deps\n/g, "\n");

  // Add the administrator workspace only for users whose database profile role is admin.
  if (!source.includes('import PortalAdminConsole from "../components/PortalAdminConsole";')) {
    source = source.replace(
      'import { supabase, PORTAL_STORAGE_BUCKETS } from "../lib/supabase";',
      'import { supabase, PORTAL_STORAGE_BUCKETS } from "../lib/supabase";\nimport PortalAdminConsole from "../components/PortalAdminConsole";'
    );
  }

  if (!source.includes('["admin", ShieldCheck, "Admin"]')) {
    source = source.replace(
      '{tabItems.map(([id, Icon, label]) =>',
      '{(profile?.role === "admin" ? [...tabItems, ["admin", ShieldCheck, "Admin"]] : tabItems).map(([id, Icon, label]) =>'
    );
  }

  if (!source.includes('activeTab === "admin" && profile?.role === "admin"')) {
    source = source.replace(
      '{activeTab === "account" &&',
      '{activeTab === "admin" && profile?.role === "admin" && <PortalAdminConsole session={session} onRefresh={() => loadPortalData(session)} />}\n\n            {activeTab === "account" &&'
    );
  }

  fs.writeFileSync(portalFile, source, "utf8");
}
