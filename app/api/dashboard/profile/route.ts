import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/supabase/supabase'
import { cookies } from 'next/headers'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'

export async function GET(req: NextRequest) {
  const { data, error } = await supabase.from('profilo').select('*')

  if (error) {
    throw new Error('No every profilo')
  }

  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  // const token = req.headers.authorization;
  
  const supabase = createServerActionClient({cookies})
  const { data, error } = await supabase.from('profilo').insert({
      img: body.img,
      title: body.title,
      description: body.description,
      tag: body.tag,
    });
  
  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data);
}

export async function PUT(req: NextRequest) {
  const body = await req.json();

  const supabase = createServerActionClient({cookies})

  const { data, error } = await supabase
  .from('profilo')
  .update({...body})
  .eq('id', body.id)
  .select()
  
  console.log(data, error);

  return NextResponse.json(data);
}

// const { data, error } = await supabase.from('profilo')
    //   .select('*').eq('id', id)
    //   sendData = data;