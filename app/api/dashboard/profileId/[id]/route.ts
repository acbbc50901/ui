import { NextRequest, NextResponse } from "next/server";

import { supabase } from "@/supabase/supabase";

export async function GET(req: NextRequest, { params } : { params : { id : string}}) {

  const { id } = params;
  const { data, error } = await supabase.from('profilo')
    .select('*').eq('title', id)
  console.log('data:', data, error, id);


  return NextResponse.json(data);
}