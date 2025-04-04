import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qjlhwhqpirnbmrntujou.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqbGh3aHFwaXJuYm1ybnR1am91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1NjIxMDIsImV4cCI6MjA1OTEzODEwMn0.cpimAr-nHFsb8SOrRGuDrWAfuVhypL6pMol2HtjSWn8";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);