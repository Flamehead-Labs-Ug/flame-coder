import { createClient } from '@supabase/supabase-js'

export const supabase = process.env.NEXT_PUBLIC_ENABLE_SUPABASE
  ? createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    )
  : undefined

console.log('NEXT_PUBLIC_ENABLE_SUPABASE', process.env.NEXT_PUBLIC_ENABLE_SUPABASE)
console.log('SUPABASE_URL', process.env.SUPABASE_URL)
console.log('SUPABASE_ANON_KEY', process.env.SUPABASE_ANON_KEY)
console.log('supabase', supabase)
