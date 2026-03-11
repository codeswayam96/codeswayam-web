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
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/saas-products`);
        const data = response.data;
        if (Array.isArray(data)) return data;
        if (data && Array.isArray(data.data)) return data.data;
        return [];
    } catch (e) {
        console.error(e);
        return []; // Fallback
    }
}

// Fetch Blog Posts
export async function getBlogPosts(): Promise<BlogPost[]> {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
        const data = response.data;
        if (Array.isArray(data)) return data;
        if (data && Array.isArray(data.data)) return data.data;
        return [];
    } catch (e) {
        console.error(e);
        return []; // Fallback
    }
}
