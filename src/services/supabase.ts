import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://igjxeqhbrewixmqpeodv.supabase.co',
  process.env.SUPABASE_ANON_KEY
);
