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
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrumentSans.variable} antialiased min-h-screen flex flex-col font-sans`}
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
      </body>
    </html>
  );
}
