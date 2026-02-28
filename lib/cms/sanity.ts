import { getBlogPosts } from '@/lib/data';

export const cmsClient = {
    // Fetch all blog posts
    fetchPosts: async () => {
        return await getBlogPosts();
    },

    // Fetch a single blog post by saas and slug
    fetchPostBySlug: async (saasName: string, slug: string) => {
        const posts = await getBlogPosts();
        const post = posts.find(p => p.saas === saasName && p.slug === slug);
        if (!post) {
            return null;
        }
        return post;
    }
};
