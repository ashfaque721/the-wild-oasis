import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qmigqgdzlbfiybrgfzct.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtaWdxZ2R6bGJmaXlicmdmemN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkxMzM5OTQsImV4cCI6MjAzNDcwOTk5NH0.lgV6bvpqQKmtvIRW9lxDrjo7a89EpLmgZFC6I5l640M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
