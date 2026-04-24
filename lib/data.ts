// Centralized Dummy Data Store

export interface SaaSProduct {
    id: number;
    saasId: string;
    icon?: string;
    name: string;
    tag: string;
    description: string;
    domain: string;
    status: 'Live' | 'Beta' | 'Soon';
    featured?: string | boolean;
}

export interface BlogPost {
    id: number;
    saas: string;
    tag: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    createdAt?: string;
    featured?: string | boolean;
}

import axios from 'axios';

// Fetch SaaS Products
export async function getSaasProducts(): Promise<SaaSProduct[]> {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    
    if (!apiUrl) {
        console.warn("API URL not defined, using dummy products.");
        return DUMMY_PRODUCTS;
    }

    try {
        const response = await axios.get(`${apiUrl}/saas-products`, {
            timeout: 8000,
            headers: { 'Accept': 'application/json' }
        });
        const data = response.data;
        if (Array.isArray(data)) return data;
        if (data && Array.isArray(data.data)) return data.data;
        return DUMMY_PRODUCTS;
    } catch (e: any) {
        // Silently fallback to dummy data on network errors
        console.error(`[API Error] /saas-products: ${e.message || 'Connection failed'}`);
        return DUMMY_PRODUCTS;
    }
}

const DUMMY_PRODUCTS: SaaSProduct[] = [
    {
        id: 1,
        saasId: "auraflow",
        name: "Auraflow",
        tag: "LinkedIn Automation",
        description: "Scale your LinkedIn outreach with high-performance AI agents.",
        domain: "auraflow.codeswayam.com",
        status: "Live",
        featured: true
    },
    {
        id: 2,
        saasId: "chatlift",
        name: "ChatLift",
        tag: "Conversational AI",
        description: "Intelligent customer support that scales with your business.",
        domain: "chatlift.codeswayam.com",
        status: "Beta"
    }
];

// Fetch Blog Posts
export async function getBlogPosts(): Promise<BlogPost[]> {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
        console.warn("API URL not defined, using dummy posts.");
        return DUMMY_POSTS;
    }

    try {
        const response = await axios.get(`${apiUrl}/blogs`, {
            timeout: 8000,
            headers: { 'Accept': 'application/json' }
        });
        const data = response.data;
        if (Array.isArray(data)) return data;
        if (data && Array.isArray(data.data)) return data.data;
        return DUMMY_POSTS;
    } catch (e: any) {
        // Silently fallback to dummy data on network errors
        console.error(`[API Error] /blogs: ${e.message || 'Connection failed'}`);
        return DUMMY_POSTS;
    }
}

const DUMMY_POSTS: BlogPost[] = [
    {
        id: 1,
        saas: "Auraflow",
        tag: "Engineering",
        title: "The 1:80 Rule: The Hidden Fact Density Pattern Behind Every AI-Cited Article",
        slug: "the-1-80-rule-fact-density-behind-every-ai-cited-article",
        excerpt: "Discover the mathematical pattern that distinguishes high-quality AI-assisted research from low-density filler.",
        content: "In the era of generative AI, the value of content isn't measured by word count, but by fact density. Our research into thousands of AI-cited articles reveals a consistent pattern we call the 1:80 rule...",
        createdAt: "2024-08-24"
    },
    {
        id: 2,
        saas: "ChatLift",
        tag: "Product",
        title: "Scaling Conversational AI: Lessons from 10M Messages",
        slug: "scaling-conversational-ai-lessons-from-10m-messages",
        excerpt: "How we optimized our infrastructure to handle millions of concurrent chat sessions with sub-100ms latency.",
        content: "Scaling a real-time chat platform requires a fundamental shift in how you handle state and message distribution...",
        createdAt: "2024-08-22"
    },
    {
        id: 3,
        saas: "MailTracker",
        tag: "Strategy",
        title: "The Future of Email Deliverability in a Privacy-First World",
        slug: "the-future-of-email-deliverability",
        excerpt: "Navigating the complex landscape of ISP changes and privacy regulations while maintaining high engagement.",
        content: "Email is still the king of ROI, but the rules are changing faster than ever. Here is how we stay ahead...",
        createdAt: "2024-08-20"
    }
];
