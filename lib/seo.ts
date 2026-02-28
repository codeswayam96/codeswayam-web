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
}: {
    title?: string;
    description?: string;
    image?: string;
    icons?: string;
    noIndex?: boolean;
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image,
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
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}
