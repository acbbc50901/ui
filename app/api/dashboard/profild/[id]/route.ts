import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'

export async function DELETE(req: NextRequest, { params } : { params : { id : string}}) {
  const { id } = params
  const supabase = createServerActionClient({cookies})
  let { error } = await supabase
    .from('profilo').delete().eq('id', id)
  return NextResponse.json(error);
}