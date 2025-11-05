import { createClient } from '@supabase/supabase-js'

// Your Supabase project credentials
const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL 
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY 

// Validate the URL format
if (!supabaseUrl || !supabaseUrl.startsWith('http')) {
  console.error('❌ Invalid Supabase URL:', supabaseUrl)
  throw new Error('Invalid Supabase URL: Must be a valid HTTP or HTTPS URL')
}

if (!supabaseAnonKey) {
  console.error('❌ Missing Supabase Anon Key')
  throw new Error('Missing Supabase Anon Key')
}

console.log('✅ Supabase URL:', supabaseUrl)
console.log('✅ Supabase Key:', supabaseAnonKey.substring(0, 20) + '...')

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

// Queries table type
export type QueryRecord = {
  id: number
  created_at: string
  name: string
  phone: string
  email: string
  service: string
  message: string
}
export type NewQueryInput = Omit<QueryRecord, "id" | "created_at">;