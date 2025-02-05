import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qkcehupmupkseerzayxq.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrY2VodXBtdXBrc2VlcnpheXhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4NDM3MzAsImV4cCI6MjA0NzQxOTczMH0.uQB-YYiJJn3SsR2b1f5mHhGtuSD1sDHuTkqTFj3913g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
