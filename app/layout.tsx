import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

import { GlobalNavbar } from "@/components/GlobalNavbar";
import { GlobalFooter } from "@/components/GlobalFooter";
import { Analytics } from "@codeswayam/analytics";
import { constructMetadata, SOCIAL_LINKS, siteConfig } from "@/lib/seo";
import { CSWProvider } from "@codeswayam/auth";

export const metadata: Metadata = {
  ...constructMetadata(),
  manifest: '/manifest.json',
  title: {
    default: 'Code Swayam \u2014 Premium SaaS Engineering & AI Tools',
    template: '%s | Code Swayam',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/*
          rel="me" — Social identity verification links.
          Google, Mastodon, and other crawlers use these to verify that
          the social profiles listed belong to this domain.
          All handles are @codeswayam.
        */}
        <link rel="me" href={SOCIAL_LINKS.twitter} />
        <link rel="me" href={SOCIAL_LINKS.instagram} />
        <link rel="me" href={SOCIAL_LINKS.linkedin} />
        <link rel="me" href={SOCIAL_LINKS.github} />
        <link rel="me" href={SOCIAL_LINKS.youtube} />
        {/* Publisher identity */}
        <link rel="author" href={`${siteConfig.url}/about`} />
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${instrumentSans.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <CSWProvider
          apiUrl={process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}
          ssoUrl={process.env.NEXT_PUBLIC_APP_AUTH_URL || "http://localhost:3003"}
        >
          <Analytics
            gtmId={process.env.NEXT_PUBLIC_GTM_ID}
            ga4Id={process.env.NEXT_PUBLIC_GA4_ID}
            metaPixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID}
            gscVerification={process.env.NEXT_PUBLIC_GSC_VERIFICATION}
            hotjarId={process.env.NEXT_PUBLIC_HOTJAR_ID}
            clarityId={process.env.NEXT_PUBLIC_CLARITY_ID}
            appName="codeswayam-web"
          />

          <GlobalNavbar />
          <main className="flex-1">
            {children}
          </main>
          <GlobalFooter />
        </CSWProvider>
      </body>
    </html>
  );
}
