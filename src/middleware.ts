import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Retrieve the token from cookies
  const token = req.cookies.get("authToken");
  // Define protected routes
  const protectedRoutes = [
    "/appointments",
    "/questionnaire",
    "/features",
    "/anonymous-sharing",
    "/womenhealth",
  ];

  // Check if the current path is protected
  const isProtectedRoute = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  // Redirect unauthorized users to /signup
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/signup", req.url));
  }

  // Allow access to all other routes
  return NextResponse.next();
}
export const config = {
  matcher: [
    '/appointments/:path*',
    '/questionnaire/:path*',
    '/features/:path*',
    '/anonymous-sharing/:path*',
    '/womenhealth/:path*',
  ],
};
