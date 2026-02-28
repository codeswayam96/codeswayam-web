import Link from 'next/link';
import { cmsClient } from '@/lib/cms/sanity';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | Code Swayam',
    description: 'Latest insights, tutorials, and updates from the Code Swayam SaaS ecosystem.',
};

export default async function BlogIndexPage() {
    const posts = await cmsClient.fetchPosts();

    return (
        <div style={{ backgroundColor: '#F9FAFB', color: '#111827', minHeight: '100vh' }}>
            {/* Header */}
            <section className="relative overflow-hidden bg-white border-b border-gray-100">
                <div className="absolute inset-0 pointer-events-none" aria-hidden>
                    <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-5 blur-[80px]"
                        style={{ background: '#00ADB5' }} />
                </div>
                <div className="relative max-w-4xl mx-auto px-6 py-24">
                    <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#00ADB5' }}>Blog</div>
                    <h1 className="text-5xl font-bold tracking-tight mb-6 text-black">
                        Insights from the<br />Code Swayam team
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl">
                        Tutorials, product updates, and growth strategies for builders and founders.
                    </p>
                </div>
            </section>

            {/* Posts */}
            <section className="max-w-4xl mx-auto px-6 py-24 bg-[#F9FAFB]">
                <div className="flex flex-col gap-6">
                    {posts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.saas}/${post.slug}`}
                            className="group block rounded-2xl p-8 bg-white border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <span className="text-xs font-bold tracking-wider mb-4 px-3 py-1 rounded-full inline-block bg-gray-50 text-gray-600">
                                {post.saas.toUpperCase()}
                            </span>
                            <h2 className="text-2xl font-bold mb-3 text-black group-hover:text-[#00ADB5] transition-colors">
                                {post.title}
                            </h2>
                            <p className="text-gray-500 mb-6">Read more about {post.title.toLowerCase()} and how it impacts your workflow...</p>
                            <div className="text-sm font-bold flex items-center gap-2" style={{ color: '#00ADB5' }}>
                                Read Article <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
