import { MetadataRoute } from 'next';

const siteUrl = 'https://codeswayam.com'; // Replace with actual domain

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/privacy-policy',
        '/terms-and-conditions',
        '/refund-policy',
        '/delivery-policy',
        '/contact-us',
    ].map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // You can also fetch dynamic routes here (e.g., courses, blogs)
    // const courses = await getCourses();
    // const dynamicRoutes = courses.map(course => ({ url: `${siteUrl}/courses/${course.slug}`, lastModified: course.updatedAt }));

    return [...routes];
}
