import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mlhtzglvoyhdpqoqugam.supabase.co";
const supabasePublishableKey = "sb_publishable_BN3uhwY_Z817M61m2TVocA_rHPaDPkg";

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export const PORTAL_STORAGE_BUCKETS = {
  documents: "client-documents",
  support: "support-attachments",
};
