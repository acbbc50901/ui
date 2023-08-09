import { supabase }  from '@/supabase/supabase'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default async function getUser(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const { data: { session }, error} = await supabase.auth.getSession();

  return {session, error, res}
}

export const getList = async () => {
  const { data, error } = await supabase.storage.from('productImg').list();
  if (error) {
    console.log('Error fetching images:', error.message);
    return null;
  }
  const newList = data.filter((item) => item.metadata.size > 0)
  return newList;
};