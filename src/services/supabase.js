import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wovhxzpcjuroxlheabgv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indvdmh4enBjanVyb3hsaGVhYmd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMjI1NTAsImV4cCI6MjA1OTg5ODU1MH0.AYcwEcVk-k6Y2p2k2kx7_Ga2ob-IA5QXUyrPz_uawMA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
