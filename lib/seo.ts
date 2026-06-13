import { Metadata } from 'next';

export const siteConfig = {
    name: 'Code Swayam',
    description: 'Code Swayam SaaS Ecosystem - Learn, Build, and Grow',
    url: 'https://codeswayam.com', // Replace with your actual domain
    ogImage: 'https://codeswayam.com/og-image.jpg', // Replace with your actual OG image
    links: {
        twitter: 'https://twitter.com/codeswayam', // Replace with actual links
        github: 'https://github.com/codeswayam96',
    },
};

export function constructMetadata({
    title = siteConfig.name,
    description = siteConfig.description,
    image = siteConfig.ogImage,
    icons = '/favicon.ico',
    noIndex = false,
    keywords = ['Code Swayam', 'SaaS platform', 'software development', 'AI agents', 'NestJS API', 'Next.js application'],
    canonical,
}: {
    title?: string;
    description?: string;
    image?: string;
    icons?: string;
    noIndex?: boolean;
    keywords?: string | string[];
    canonical?: string;
} = {}): Metadata {
    const resolvedCanonical = canonical ? `${siteConfig.url}${canonical}` : undefined;

    return {
        title,
        description,
        keywords: Array.isArray(keywords) ? keywords.join(', ') : keywords,
        openGraph: {
            title,
            description,
            type: 'website',
            locale: 'en_US',
            siteName: siteConfig.name,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
            creator: '@codeswayam',
        },
        icons,
        metadataBase: new URL(siteConfig.url),
        alternates: resolvedCanonical ? {
            canonical: resolvedCanonical,
        } : undefined,
        robots: noIndex 
            ? { index: false, follow: false }
            : { index: true, follow: true, googleBot: { index: true, follow: true } },
    };
}
