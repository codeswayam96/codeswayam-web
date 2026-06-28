import { Metadata } from 'next';

// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIG — Single source of truth for all brand & SEO settings
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
    name: 'Code Swayam',
    legalName: 'Code Swayam Inc.',
    description:
        'Code Swayam is a premium SaaS engineering company. We build high-performance software, AI-powered tools, and custom digital products for ambitious startups and enterprises.',
    url: 'https://codeswayam.com',
    ogImage: 'https://codeswayam.com/og-image.jpg',
    email: 'hello@codeswayam.com',
    /** Social handles — all use @codeswayam */
    links: {
        twitter: 'https://twitter.com/codeswayam',
        instagram: 'https://instagram.com/codeswayam',
        linkedin: 'https://linkedin.com/company/codeswayam',
        github: 'https://github.com/codeswayam96',
        youtube: 'https://youtube.com/@codeswayam',
    },
};

/**
 * SOCIAL_LINKS — Named export used by JSON-LD schemas, footer, and layout.
 * All handles are @codeswayam.
 */
export const SOCIAL_LINKS = siteConfig.links;

// ─────────────────────────────────────────────────────────────────────────────
// DEFAULT KEYWORDS — Covers the full topical surface of the site
// ─────────────────────────────────────────────────────────────────────────────

const DEFAULT_KEYWORDS = [
    'Code Swayam',
    'CodeSwayam',
    'SaaS engineering',
    'custom software development',
    'AI integration',
    'Next.js development',
    'NestJS API',
    'SaaS platform',
    'startup software',
    'full stack engineering',
    'LinkedIn automation',
    'Auraflow',
    'digital growth',
    'software agency India',
    'premium SaaS tools',
];

// ─────────────────────────────────────────────────────────────────────────────
// constructMetadata — Main metadata factory used by every page
// ─────────────────────────────────────────────────────────────────────────────

export function constructMetadata({
    title = siteConfig.name,
    description = siteConfig.description,
    image = siteConfig.ogImage,
    icons = '/favicon.ico',
    noIndex = false,
    keywords = DEFAULT_KEYWORDS,
    canonical,
    type = 'website',
}: {
    title?: string;
    description?: string;
    image?: string;
    icons?: string;
    noIndex?: boolean;
    keywords?: string | string[];
    canonical?: string;
    type?: 'website' | 'article' | 'profile';
} = {}): Metadata {
    const resolvedCanonical = canonical
        ? `${siteConfig.url}${canonical}`
        : undefined;

    const pageUrl = resolvedCanonical ?? siteConfig.url;

    return {
        title,
        description,
        keywords: Array.isArray(keywords) ? keywords.join(', ') : keywords,
        authors: [{ name: 'Code Swayam', url: siteConfig.url }],
        creator: 'Code Swayam',
        publisher: 'Code Swayam',
        openGraph: {
            title,
            description,
            url: pageUrl,
            type,
            locale: 'en_US',
            siteName: siteConfig.name,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: `${title} — Code Swayam`,
                    type: 'image/jpeg',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
            site: '@codeswayam',
            creator: '@codeswayam',
        },
        icons,
        metadataBase: new URL(siteConfig.url),
        alternates: resolvedCanonical
            ? { canonical: resolvedCanonical }
            : undefined,
        robots: noIndex
            ? { index: false, follow: false }
            : {
                  index: true,
                  follow: true,
                  googleBot: {
                      index: true,
                      follow: true,
                      'max-video-preview': -1,
                      'max-image-preview': 'large',
                      'max-snippet': -1,
                  },
              },
    };
}
