/**
 * json-ld.ts — Centralised JSON-LD Structured Data Utility
 *
 * All Schema.org structured data for codeswayam.com lives here.
 * Import individual builders from page files and render inside a
 * <script type="application/ld+json"> tag via dangerouslySetInnerHTML.
 *
 * Reference: https://schema.org / https://developers.google.com/search/docs/appearance/structured-data
 */

import { SOCIAL_LINKS, siteConfig } from './seo';

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

export type JsonLdGraph = {
    '@context': 'https://schema.org';
    '@graph': object[];
};

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/** Wrap one or more schema nodes into a JSON-LD @graph document. */
export function buildJsonLd(...nodes: object[]): JsonLdGraph {
    return {
        '@context': 'https://schema.org',
        '@graph': nodes,
    };
}

/** Serialize a JSON-LD graph for dangerouslySetInnerHTML. */
export function serializeJsonLd(graph: JsonLdGraph): string {
    return JSON.stringify(graph, null, 0);
}

// ─────────────────────────────────────────────────────────────────────────────
// SCHEMA BUILDERS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Organization — Full company entity with all social profiles.
 * Used on: homepage, layout
 * Google uses `sameAs` to verify brand identity across platforms.
 */
export function organizationSchema() {
    return {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: 'Code Swayam',
        alternateName: 'CodeSwayam',
        url: siteConfig.url,
        logo: {
            '@type': 'ImageObject',
            url: `${siteConfig.url}/logo.png`,
            width: 512,
            height: 512,
            caption: 'Code Swayam Logo',
        },
        image: `${siteConfig.url}/og-image.jpg`,
        description:
            'Code Swayam is a premium SaaS engineering company building high-performance tools and custom software for modern businesses. We specialise in AI integration, scalable architectures, and editorial-grade design.',
        foundingDate: '2022',
        numberOfEmployees: {
            '@type': 'QuantitativeValue',
            value: 10,
        },
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'IN',
        },
        contactPoint: [
            {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                email: 'hello@codeswayam.com',
                availableLanguage: ['English', 'Hindi'],
            },
            {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: 'sales@codeswayam.com',
                availableLanguage: ['English'],
            },
        ],
        sameAs: [
            SOCIAL_LINKS.twitter,
            SOCIAL_LINKS.instagram,
            SOCIAL_LINKS.linkedin,
            SOCIAL_LINKS.github,
            SOCIAL_LINKS.youtube,
        ],
    };
}

/**
 * WebSite — Enables Google's Sitelinks Search Box in SERPs.
 * The SearchAction tells Google users can search the site from Google itself.
 * Used on: homepage only
 */
export function websiteSchema() {
    return {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: 'Code Swayam',
        description: siteConfig.description,
        publisher: {
            '@id': `${siteConfig.url}/#organization`,
        },
        potentialAction: [
            {
                '@type': 'SearchAction',
                target: {
                    '@type': 'EntryPoint',
                    urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
                },
                'query-input': 'required name=search_term_string',
            },
        ],
        inLanguage: 'en-US',
    };
}

/**
 * WebPage — Page-level semantic context.
 * Used on: every page (customise per page).
 */
export function webPageSchema({
    url,
    title,
    description,
    datePublished = '2022-01-01',
    dateModified = new Date().toISOString().slice(0, 10),
    breadcrumb,
}: {
    url: string;
    title: string;
    description: string;
    datePublished?: string;
    dateModified?: string;
    breadcrumb?: ReturnType<typeof breadcrumbSchema>;
}) {
    return {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: { '@id': `${siteConfig.url}/#website` },
        about: { '@id': `${siteConfig.url}/#organization` },
        datePublished,
        dateModified,
        inLanguage: 'en-US',
        ...(breadcrumb && { breadcrumb: { '@id': `${url}#breadcrumb` } }),
    };
}

/**
 * BreadcrumbList — Renders breadcrumb trail in Google SERPs.
 * Used on: all inner pages.
 *
 * @param items - Array of { name, url } breadcrumb items.
 *                The first item is always the homepage.
 */
export function breadcrumbSchema(
    items: { name: string; url: string }[],
    pageUrl: string,
) {
    const allItems = [{ name: 'Home', url: siteConfig.url }, ...items];
    return {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: allItems.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

/**
 * ItemList — Used to showcase a list of products/services for Google rich results.
 * Used on: homepage (products), products page.
 */
export function itemListSchema(
    items: { name: string; url: string; description: string; position: number }[],
) {
    return {
        '@type': 'ItemList',
        name: 'Code Swayam SaaS Products',
        description: 'Premium SaaS tools built by Code Swayam for digital growth.',
        itemListElement: items.map((item) => ({
            '@type': 'ListItem',
            position: item.position,
            name: item.name,
            url: item.url,
            description: item.description,
        })),
    };
}

/**
 * FAQPage — Renders FAQ accordion rich results in Google SERPs.
 * Used on: services page, pricing page, any page with an FAQ section.
 */
export function faqSchema(faqs: { question: string; answer: string }[]) {
    return {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

/**
 * ProfessionalService — Marks the site as a professional services company.
 * Helps with local SEO and "Hire Us" / service discovery queries.
 */
export function professionalServiceSchema() {
    return {
        '@type': 'ProfessionalService',
        '@id': `${siteConfig.url}/#service`,
        name: 'Code Swayam Engineering Services',
        url: `${siteConfig.url}/services`,
        description:
            'Custom SaaS engineering, AI integration, UI/UX design, and cloud infrastructure services for ambitious startups.',
        provider: { '@id': `${siteConfig.url}/#organization` },
        serviceType: [
            'SaaS Engineering',
            'AI Integration',
            'UI/UX Design',
            'Backend Development',
            'Cloud Infrastructure',
            'Identity & Auth',
        ],
        areaServed: {
            '@type': 'Place',
            name: 'Worldwide',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Engineering Services',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS Engineering' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Integration' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Backend Systems' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Infrastructure' } },
            ],
        },
    };
}

// ─────────────────────────────────────────────────────────────────────────────
// SITE NAVIGATION — Links every key page into the schema graph
// ─────────────────────────────────────────────────────────────────────────────

/**
 * The canonical list of all public-facing pages on codeswayam.com.
 * This is the single source of truth for navigation schema.
 * Add new pages here and they appear automatically in the JSON-LD.
 */
export const SITE_PAGES = [
    {
        name: 'Home',
        url: 'https://codeswayam.com',
        description: 'Code Swayam — Premium SaaS engineering and AI tools.',
        position: 1,
    },
    {
        name: 'SaaS Products',
        url: 'https://codeswayam.com/products',
        description: 'Browse all Code Swayam SaaS tools — Auraflow, ChatLift, MailTracker and more.',
        position: 2,
    },
    {
        name: 'Engineering Services',
        url: 'https://codeswayam.com/services',
        description: 'Hire Code Swayam for SaaS engineering, AI integration, UI/UX design, and cloud infrastructure.',
        position: 3,
    },
    {
        name: 'Blog & Insights',
        url: 'https://codeswayam.com/blog',
        description: 'Engineering, growth, and strategy articles from the Code Swayam team.',
        position: 4,
    },
    {
        name: 'Pricing',
        url: 'https://codeswayam.com/pricing',
        description: 'Transparent pricing for Code Swayam SaaS products and engineering services.',
        position: 5,
    },
    {
        name: 'About Us',
        url: 'https://codeswayam.com/about',
        description: 'Learn about the team, mission, and story behind Code Swayam.',
        position: 6,
    },
    {
        name: 'Contact',
        url: 'https://codeswayam.com/contact-us',
        description: 'Get in touch with Code Swayam for projects, partnerships, or support.',
        position: 7,
    },
    {
        name: 'Case Studies',
        url: 'https://codeswayam.com/case-studies',
        description: 'Real-world results and technical deep-dives from Code Swayam projects.',
        position: 8,
    },
    {
        name: 'Team',
        url: 'https://codeswayam.com/team',
        description: 'Meet the engineers, designers, and strategists behind Code Swayam.',
        position: 9,
    },
    {
        name: 'Testimonials',
        url: 'https://codeswayam.com/testimonials',
        description: 'What clients say about working with Code Swayam.',
        position: 10,
    },
] as const;

/**
 * siteNavigationSchema — Generates a SiteNavigationElement for every key page.
 *
 * Google uses this schema type to understand site structure and can use it
 * to surface Sitelinks (direct page links) beneath the main search result.
 *
 * Place in the homepage @graph only (one declaration is enough site-wide).
 */
export function siteNavigationSchema() {
    return SITE_PAGES.map((page) => ({
        '@type': 'SiteNavigationElement',
        '@id': `${page.url}#nav-item-${page.position}`,
        name: page.name,
        description: page.description,
        url: page.url,
        position: page.position,
        isPartOf: { '@id': `${siteConfig.url}/#website` },
    }));
}

/**
 * blogSchema — Declares the blog listing page as a Blog entity.
 * Helps Google understand this is a content publication, not just marketing copy.
 * Place in the homepage or blog listing page @graph.
 */
export function blogSchema(
    posts: { title: string; url: string; datePublished?: string; description?: string }[] = [],
) {
    return {
        '@type': 'Blog',
        '@id': `${siteConfig.url}/blog#blog`,
        name: 'Code Swayam Blog',
        description:
            'Engineering, growth, and strategy insights from the Code Swayam team. We write about SaaS, AI, Next.js, NestJS, and scaling digital products.',
        url: `${siteConfig.url}/blog`,
        publisher: { '@id': `${siteConfig.url}/#organization` },
        inLanguage: 'en-US',
        ...(posts.length > 0 && {
            blogPost: posts.map((post) => ({
                '@type': 'BlogPosting',
                headline: post.title,
                url: post.url,
                description: post.description ?? '',
                datePublished: post.datePublished ?? new Date().toISOString().slice(0, 10),
                author: { '@id': `${siteConfig.url}/#organization` },
                publisher: { '@id': `${siteConfig.url}/#organization` },
                isPartOf: { '@id': `${siteConfig.url}/blog#blog` },
            })),
        }),
    };
}
