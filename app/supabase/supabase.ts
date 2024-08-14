import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hgqlvwmfkufdscoxyzdi.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhncWx2d21ma3VmZHNjb3h5emRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM2NDEwMDQsImV4cCI6MjAzOTIxNzAwNH0.rv4AmIND9NnS9GuMPsQADmX6KhyguqzZEY_PezsNPFA`;
export const supabase = createClient(supabaseUrl, supabaseKey);
