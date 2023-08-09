import { NextResponse, NextRequest } from "next/server";
import { supabase }  from '@/supabase/supabase'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { email, password } = body;
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `http://localhost:3000/`
    },
  })

  return NextResponse.json(data);
}

export async function GET(req: NextRequest, res: NextResponse) {
  const supabase = createServerActionClient({cookies});
  const { data: { session }, error} = await supabase.auth.getSession();
  if (!session) {
    return NextResponse.json(error);
  }
  const { user: { email } } = session;

  const userData = await supabase.from('users').select('*').eq('email', email) 

  if (userData.data?.length === 0) {
    console.log('no users')
    NextResponse.json('no users');
  }

  return NextResponse.json(userData.data);
}

export async function PUT(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const {user, image, name} = body;
  const supabase = createServerActionClient({cookies});

  let {data, error} = await supabase.from('users')
    .update({image, name})
    .eq('id', user).select()

  if (data?.length === 0) {
    return NextResponse.json(error)
  }

  return NextResponse.json(data);
}