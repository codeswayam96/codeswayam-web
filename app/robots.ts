import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const siteUrl = 'https://codeswayam.com'; // Replace with actual domain

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/', '/private/'], // Adjust as necessary
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
