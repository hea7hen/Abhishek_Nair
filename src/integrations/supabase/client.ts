// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://gvpysareziqzcvwbcwkb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2cHlzYXJlemlxemN2d2Jjd2tiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwNDY1NDAsImV4cCI6MjA1NzYyMjU0MH0.MZ8Y6iByCx4Gvmi-XJeqmNbOdmHbR6Yf2VJtzXITyC4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);