import { withCSWAuth } from "@codeswayam/auth/middleware";

/**
 * CodeSwayam Marketing Website — SSO Middleware
 *
 * Most pages are public (blog, pricing, landing).
 * /dashboard and /admin require authentication.
 */
export default withCSWAuth({
    ssoUrl:       process.env.NEXT_PUBLIC_APP_AUTH_URL || process.env.NEXT_PUBLIC_AUTH_URL,
    callbackPath: "/auth/callback",
    publicPaths: [
        "/",
        "/blog",
        "/pricing",
        "/about",
        "/contact",
        "/login",       // legacy path — the real login is on codeswayam-auth
        "/api",
    ],
});

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
};

