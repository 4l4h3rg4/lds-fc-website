import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ggbzkuednpprfrxtmcyz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnYnprdWVkbnBwcmZyeHRtY3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2NzM3MzEsImV4cCI6MjA4MTI0OTczMX0.9YPzX3BoLCN_W7LSWIoGJyG_rwgB5bcAC8I_ccCsLEQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase as s };
