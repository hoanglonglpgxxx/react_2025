
import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://ckcsvgntzdukvgxevvyh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrY3N2Z250emR1a3ZneGV2dnloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1NjIyOTMsImV4cCI6MjA4MDEzODI5M30.0W1-viyG-R5bWGyrhHGXmnRF_uON2380mTGQYEcCBUU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;