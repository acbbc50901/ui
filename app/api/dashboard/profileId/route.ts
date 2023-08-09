import { NextRequest, NextResponse } from "next/server";

import { supabase } from "@/supabase/supabase";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { id } = body;
  const { data, error } = await supabase.from('profilo')
    .select('*').eq('id', id)
  console.log('data:', data, error, id);


  return NextResponse.json(data);
}

export async function GET(req: NextRequest, { params } : { params : { id : string}}) {
  const body = await req.json();

  const { id } = body;
  // const { data, error } = await supabase.from('profilo')
  //   .select('*').eq('title', id)
  // console.log('data:', data, error, id);


  return NextResponse.json(id);
}