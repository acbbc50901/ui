import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import useGetUser from './app/hooks/useGetUser';

export async function middleware(req: NextRequest) {
  const {session, error, res} = await useGetUser(req);
  if(session) {
    return res
  }
  if (req.nextUrl.pathname.includes('/dashboard')) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = '/';
    redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }
  return res
}