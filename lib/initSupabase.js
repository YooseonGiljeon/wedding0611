import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://nsfasakhrjgimjgbwylh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zZmFzYWtocmpnaW1qZ2J3eWxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIxMDM0NjksImV4cCI6MTk2NzY3OTQ2OX0.DqWyQeieymeTyARUiYTCLL6yKHOE14Q2HdUxUE8NWcY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
