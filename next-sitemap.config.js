/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://codeswayam.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: [
    '/api/*',
    '/admin/*',
    '/_next/*',
    '/404',
    '/500',
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      // Add dynamic sitemaps here if needed
      // 'https://codeswayam.com/blog-sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority for specific pages
    const priorities = {
      '/': 1.0,
      '/products': 0.9,
      '/pricing': 0.9,
      '/services': 0.8,
      '/about': 0.7,
      '/contact-us': 0.7,
      '/blog': 0.8,
      '/testimonials': 0.6,
      '/case-studies': 0.7,
      '/team': 0.6,
    };

    // Custom change frequency for specific pages
    const changefreqs = {
      '/': 'daily',
      '/blog': 'daily',
      '/products': 'weekly',
      '/pricing': 'weekly',
    };

    return {
      loc: path,
      changefreq: changefreqs[path] || config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
