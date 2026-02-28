import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check for the SSO JWT cookie set by the NestJS backend
  const authCookie = request.cookies.get('Authentication');
  const url = request.nextUrl.clone();
  const isAuthPage = url.pathname.startsWith('/login');

  // Define routes that require authentication (e.g., dashboard, admin)
  const isProtectedPath = url.pathname.startsWith('/dashboard') || url.pathname.startsWith('/admin');

  // If user is not authenticated and tries to access a protected route
  if (!authCookie && isProtectedPath) {
    // Redirect them to central auth portal, appending their original destination
    const redirectUrl = encodeURIComponent(request.url);
    const authUrl = process.env.NEXT_PUBLIC_AUTH_URL || 'http://localhost:3002';

    return NextResponse.redirect(`${authUrl}/login?redirect=${redirectUrl}`);
  }

  // If user IS authenticated and tries to access local login (which no longer exists)
  if (authCookie && isAuthPage) {
    url.pathname = '/dashboard'; // Default dashboard route
    url.search = '';
    return NextResponse.redirect(url);
  }

  // Clone the request headers and set a custom header to inform the UI of auth state
  const requestHeaders = new Headers(request.headers);
  if (authCookie) {
    requestHeaders.set('x-user-authenticated', 'true');
  } else {
    requestHeaders.set('x-user-authenticated', 'false');
  }

  // Return the response with modified headers
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
