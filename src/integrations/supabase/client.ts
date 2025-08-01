// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jbwrmmpitvqymaaaemfa.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impid3JtbXBpdHZxeW1hYWFlbWZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5NTA2MzUsImV4cCI6MjA2OTUyNjYzNX0.sXRq5HGksGnFL0k27O3hrewkjtr6TyagV5d178EsAEk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});