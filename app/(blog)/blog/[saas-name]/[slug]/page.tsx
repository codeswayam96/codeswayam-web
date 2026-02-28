import { notFound } from 'next/navigation';
import { cmsClient } from '@/lib/cms/sanity';
import Link from 'next/link';
import type { Metadata } from 'next';

interface BlogPostProps {
    params: Promise<{
        'saas-name': string;
        slug: string;
    }>;
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
    const resolvedParams = await params;
    const post = await cmsClient.fetchPostBySlug(resolvedParams['saas-name'], resolvedParams.slug);

    if (!post) {
        return { title: 'Post Not Found | Code Swayam' };
    }
    return {
        title: `${post.title} | Code Swayam Blog`,
        description: post.content.substring(0, 160),
        openGraph: { type: 'article', title: post.title },
    };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
    const resolvedParams = await params;
    const post = await cmsClient.fetchPostBySlug(resolvedParams['saas-name'], resolvedParams.slug);

    if (!post) notFound();

    return (
        <div style={{ backgroundColor: '#FFFFFF', color: '#111827', minHeight: '100vh' }}>
            <article className="max-w-3xl mx-auto px-6 py-20 bg-white">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold mb-12 text-gray-400 hover:text-gray-900 transition-colors">
                    ← Back to Blog
                </Link>

                <header className="mb-12">
                    <div className="inline-flex items-center gap-2 mb-6 text-xs font-bold tracking-wider px-3 py-1.5 rounded-full bg-gray-50 text-gray-600">
                        {resolvedParams['saas-name'].toUpperCase()}
                    </div>
                    <h1 className="text-5xl font-bold tracking-tight mb-6 leading-tight text-black">
                        {post!.title}
                    </h1>
                    <p className="text-xl leading-relaxed text-gray-500 border-l-4 pl-4 border-[#00ADB5]">
                        The ultimate insight into building growth operations for {resolvedParams['saas-name']}.
                    </p>
                </header>

                {/* Divider */}
                <div className="mb-12 h-px bg-gray-100" />

                {/* Content */}
                <div className="text-lg leading-relaxed space-y-6 text-gray-700">
                    <p>{post!.content}</p>
                    <p className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-gray-600 italic">
                        More dynamic content for the blog post "<strong>{resolvedParams.slug}</strong>"
                        hosted under the SaaS product category "<strong>{resolvedParams['saas-name']}</strong>" would be rendered here via MDX or Sanity Portable Text.
                    </p>
                </div>
            </article>
        </div>
    );
}
