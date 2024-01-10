"use server";
import { createClient } from "@supabase/supabase-js";

const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabaseUrl = process.env.SUPABASE_URL;

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
