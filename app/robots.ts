import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const siteUrl = 'https://codeswayam.com';

    return {
        rules: [
            {
                // Allow all well-behaved crawlers
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/admin/',
                    '/private/',
                    '/dashboard/',
                    '/auth/',
                    '/debug/',
                    '/_next/',
                ],
            },
            {
                // Prevent AI training scrapers from harvesting content
                userAgent: [
                    'GPTBot',
                    'ChatGPT-User',
                    'CCBot',
                    'anthropic-ai',
                    'Claude-Web',
                ],
                disallow: '/',
            },
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl,
    };
}
