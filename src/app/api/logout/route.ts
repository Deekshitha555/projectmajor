// app/api/logout/route.ts
import { NextResponse } from 'next/server'
import { serialize } from 'cookie'

export async function POST() {
 const serialized = serialize('authToken', '', {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  expires: new Date(0), // Immediate expiration
  path: '/',
  domain: process.env.NODE_ENV === 'production' ? ".yourdomain.com" : undefined
});
  return new NextResponse(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Set-Cookie': serialized }
  })
}