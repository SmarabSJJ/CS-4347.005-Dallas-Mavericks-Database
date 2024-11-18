import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ohzvjybrwhefxpuzpwnd.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oenZqeWJyd2hlZnhwdXpwd25kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEwMDYxOTksImV4cCI6MjA0NjU4MjE5OX0.bpXWYho9237KxCQBnPDI7wAoE1PvoOu7grDDjuW4VPQ"
)