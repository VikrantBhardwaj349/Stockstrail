import { createClient } from '@supabase/supabase-js'

// Replace these with your Supabase project URL and anon key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Reviews table type
export type Review = {
  id: number
  created_at: string
  name: string
  company?: string
  position: string
  comment: string
  rating: number
}