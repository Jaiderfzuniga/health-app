import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://rcvinudolpskqpfixyux.supabase.co";
const SUPABASE_ANON_KEY = "2X2P32JT0jDk7DeTCIRX4wIJ9Tn1Aegs0XgGy+MifbrXYg09w8WkVx679zuLn4p/mC1DcoMs162cjUUF4w8RaQ==";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);