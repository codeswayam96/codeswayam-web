import Link from 'next/link';
import { cmsClient } from '@/lib/cms/sanity';
import type { Metadata } from 'next';
import { ArrowRight, Search } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Insights | Code Swayam',
    description: 'Latest insights, tutorials, and updates from the Code Swayam SaaS ecosystem.',
};

export default async function BlogIndexPage() {
    const posts = await cmsClient.fetchPosts();

    return (
        <div className="bg-background text-foreground min-h-screen">
            {/* Editorial Hero */}
            <section className="pt-52 pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-3">
                            <span className="w-12 h-[1px] bg-primary"></span>
                            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-primary">Editorial</span>
                        </div>
                        <h1 className="text-7xl md:text-[10rem] font-display font-bold tracking-[-0.06em] leading-[0.85] text-foreground uppercase">
                            Insights <br />& Strategy.
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12 items-end">
                            <div className="md:col-span-6">
                                <p className="text-2xl md:text-3xl font-display font-medium text-muted-foreground leading-tight text-balance">
                                    Deep dives into the architecture, strategy, and engineering behind the CodeSwayam ecosystem.
                                </p>
                            </div>
                            <div className="md:col-span-5 md:col-start-8">
                                <div className="relative group">
                                    <input 
                                        type="text" 
                                        placeholder="SEARCH ARTICLES..." 
                                        className="w-full bg-secondary border border-border rounded-full px-8 py-5 text-[12px] font-black tracking-widest uppercase focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                    />
                                    <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Section */}
            <section className="px-6 pb-32">
                <div className="max-w-7xl mx-auto">
                    {posts.slice(0, 1).map((post) => (
                        <Link key={post.id} href={`/blog/${post.saas}/${post.slug}`} className="group block">
                            <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                                <div className="lg:col-span-7 aspect-[16/9] rounded-[2.5rem] bg-secondary overflow-hidden relative border border-border">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                                    <div className="absolute inset-0 flex items-center justify-center text-[15rem] font-display font-black text-foreground/5 uppercase tracking-tighter select-none">
                                        {post.saas}
                                    </div>
                                    <div className="absolute bottom-10 left-10">
                                        <span className="bg-white/90 backdrop-blur px-6 py-2 rounded-full text-[12px] font-black uppercase tracking-widest text-black">
                                            Featured Article
                                        </span>
                                    </div>
                                </div>
                                <div className="lg:col-span-5">
                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="text-[12px] font-black uppercase tracking-widest text-primary">
                                            {post.saas}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-border" />
                                        <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
                                            5 MIN READ
                                        </span>
                                    </div>
                                    <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.05] mb-8 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-xl text-muted-foreground mb-12 leading-relaxed line-clamp-3">
                                        {post.excerpt || `An in-depth look into how we built ${post.title} and the strategic decisions that shaped its architecture.`}
                                    </p>
                                    <div className="inline-flex items-center gap-3 text-[12px] font-black uppercase tracking-[0.2em] group-hover:gap-5 transition-all text-foreground">
                                        Read Full Article <ArrowRight className="w-5 h-5 text-primary" />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Grid Section */}
            <section className="bg-secondary/50 py-32 px-6 border-t border-border">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.slice(1).map((post) => (
                            <Link key={post.id} href={`/blog/${post.saas}/${post.slug}`} className="group">
                                <article className="bg-background rounded-[2rem] p-4 h-full flex flex-col border border-border hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5">
                                    <div className="aspect-[4/3] rounded-[1.5rem] bg-secondary mb-8 overflow-hidden relative border border-border">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent" />
                                        <div className="absolute inset-0 flex items-center justify-center text-6xl font-display font-black text-foreground/5 uppercase tracking-tighter">
                                            {post.saas}
                                        </div>
                                    </div>
                                    <div className="px-4 pb-6 flex flex-col flex-1">
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="text-[11px] font-black uppercase tracking-widest text-primary">
                                                {post.saas}
                                            </span>
                                            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
                                                AUG 2024
                                            </span>
                                        </div>
                                        <h3 className="text-3xl font-display font-bold tracking-tight leading-tight mb-6 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-base text-muted-foreground leading-relaxed line-clamp-3 mb-10">
                                            {post.excerpt || "Exploring the intersection of engineering excellence and product growth at Code Swayam."}
                                        </p>
                                        <div className="mt-auto pt-6 border-t border-border flex justify-between items-center group-hover:opacity-100 opacity-60 transition-opacity">
                                            <span className="text-[11px] font-black uppercase tracking-widest">Read More</span>
                                            <ArrowRight className="w-4 h-4 text-primary" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

