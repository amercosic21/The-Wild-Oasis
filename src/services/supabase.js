import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wmmnuqmroxwwevktioio.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtbW51cW1yb3h3d2V2a3Rpb2lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI2NzkzMjMsImV4cCI6MjA5ODI1NTMyM30.CTV7qGxj55phR8lVFdKlVgpW6q9NAkcwEJZx8dsc_cQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
