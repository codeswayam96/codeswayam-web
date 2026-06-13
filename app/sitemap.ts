import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/data';

const siteUrl = 'https://codeswayam.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // 1. Static Pages
    const staticPages = [
        { path: '', priority: 1.0, changeFrequency: 'daily' as const },
        { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: '/products', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
        { path: '/pricing', priority: 0.8, changeFrequency: 'weekly' as const },
        { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/contact-us', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/case-studies', priority: 0.7, changeFrequency: 'weekly' as const },
        { path: '/team', priority: 0.6, changeFrequency: 'monthly' as const },
        { path: '/testimonials', priority: 0.6, changeFrequency: 'monthly' as const },
        { path: '/privacy-policy', priority: 0.5, changeFrequency: 'monthly' as const },
        { path: '/terms-and-conditions', priority: 0.5, changeFrequency: 'monthly' as const },
        { path: '/refund-policy', priority: 0.5, changeFrequency: 'monthly' as const },
        { path: '/delivery-policy', priority: 0.5, changeFrequency: 'monthly' as const },
    ];

    const staticRoutes = staticPages.map((page) => ({
        url: `${siteUrl}${page.path}`,
        lastModified: new Date().toISOString(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }));

    // 2. Dynamic Blog Posts
    let dynamicRoutes: MetadataRoute.Sitemap = [];
    try {
        const posts = await getBlogPosts();
        if (posts && Array.isArray(posts)) {
            dynamicRoutes = posts.map((post) => {
                const saasName = (post.saas || 'engineering').toLowerCase();
                return {
                    url: `${siteUrl}/blog/${saasName}/${post.slug}`,
                    lastModified: post.createdAt ? new Date(post.createdAt).toISOString() : new Date().toISOString(),
                    changeFrequency: 'weekly' as const,
                    priority: 0.7,
                };
            });
        }
    } catch (err) {
        console.error('Error generating dynamic sitemap routes:', err);
    }

    return [...staticRoutes, ...dynamicRoutes];
}
