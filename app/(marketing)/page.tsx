import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Sparkles, Code, Globe, Zap, ArrowUpRight } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { getSaasProducts, getBlogPosts } from '@/lib/data';

export const metadata: Metadata = constructMetadata({
    title: 'Code Swayam — Premium SaaS Engineering',
    description: 'The Ultimate Ecosystem for Digital Growth & Development. We build high-performance software for the modern era.',
});

export default async function HomePage() {
    const allProducts = await getSaasProducts();
    const blogPosts = await getBlogPosts();

    // Filter products: One per tag, Live first
    const saasProducts = Object.values(
        allProducts.reduce((acc, p) => {
            const tag = p.tag;
            const current = acc[tag];
            const getPriority = (status: string) => status === 'Live' ? 3 : status === 'Beta' ? 2 : 1;
            
            if (!current || getPriority(p.status) > getPriority(current.status)) {
                acc[tag] = p;
            }
            return acc;
        }, {} as Record<string, any>)
    ).sort((a: any, b: any) => {
        const getPriority = (status: string) => status === 'Live' ? 3 : status === 'Beta' ? 2 : 1;
        if (getPriority(b.status) !== getPriority(a.status)) {
            return getPriority(b.status) - getPriority(a.status);
        }
        return a.name.localeCompare(b.name);
    });

    return (
        <div className="bg-white text-black selection:bg-black selection:text-white">
            {/* SEO Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Code Swayam",
                        "url": "https://codeswayam.com",
                        "logo": "https://codeswayam.com/logo.png",
                        "description": "Premium SaaS engineering and digital growth ecosystem."
                    })
                }}
            />

            {/* 1. HERO SECTION */}
            <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 px-6 overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.2em] mb-10 animate-reveal">
                        <Sparkles className="w-3 h-3" />
                        Code Swayam 2.0
                    </div>
                    <h1 className="text-6xl md:text-[110px] font-display font-bold leading-[0.85] tracking-[-0.04em] mb-12 max-w-5xl animate-reveal [animation-delay:100ms] uppercase">
                        Beyond Code. <br />
                        <span className="text-transparent [-webkit-text-stroke:1px_hsl(var(--primary))]">Pure Velocity.</span>
                    </h1>
                    <p className="text-lg md:text-2xl font-bold text-black/40 max-w-2xl mb-12 leading-tight animate-reveal [animation-delay:200ms]">
                        We engineer high-performance SaaS tools and custom software for teams that demand excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 animate-reveal [animation-delay:300ms]">
                        <Link href="/products" className="bg-primary text-primary-foreground px-12 py-6 rounded-full text-[12px] font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all flex items-center gap-3 shadow-2xl">
                            Explore SaaS
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/services" className="bg-background border border-border text-foreground px-12 py-6 rounded-full text-[12px] font-black uppercase tracking-widest hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                            Hire Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. FEATURED PRODUCTS (Editorial Grid) */}
            <section className="py-24 md:py-32 bg-secondary/50 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
                                OUR SOFTWARE <br />ECOSYSTEM
                            </h2>
                            <p className="text-lg font-bold text-black/40 leading-tight">
                                From automation to analytics, we build tools that empower thousands of users daily.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            {['All', 'Automation', 'Marketing', 'AI'].map((cat, i) => (
                                <button key={cat} className={`px-6 py-2.5 rounded-full border text-[11px] font-black uppercase tracking-widest transition-all ${i === 0 ? 'bg-primary border-primary text-primary-foreground shadow-lg' : 'border-border bg-background text-muted-foreground hover:border-primary hover:text-primary'}`}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="editorial-grid">
                        {/* Primary Featured Card (6 columns) */}
                        <div className="col-span-12 lg:col-span-6 group cursor-pointer">
                            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden bg-black text-white p-12 flex flex-col justify-end transition-all hover:scale-[0.99] premium-shadow">
                                <div className="absolute top-12 right-12">
                                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                                        <Zap className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50 mb-4 block">Featured Launch</span>
                                    <h3 className="text-5xl font-black tracking-tighter mb-6 text-white">Auraflow AI</h3>
                                    <p className="text-xl font-bold text-white/60 mb-8 max-w-md leading-tight">
                                        The next generation of LinkedIn automation. Powered by advanced AI agents to grow your network on autopilot.
                                    </p>
                                    <a href="https://auraflow.codeswayam.com" target="_blank" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                                        Launch Application <ArrowRight className="w-5 h-5" />
                                    </a>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-black/40 to-black/80" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary))_0%,transparent_50%)] opacity-20" />
                            </div>
                        </div>

                        {/* Secondary Cards (6 columns) */}
                        <div className="col-span-12 lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {saasProducts.slice(1, 5).map((p, i) => (
                                <div key={i} className="group cursor-pointer bg-white border border-black/5 rounded-3xl p-8 flex flex-col justify-between hover:border-black transition-all premium-shadow">
                                    <div>
                                        <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all">
                                            {i === 0 ? <Globe className="w-6 h-6" /> : i === 1 ? <Code className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
                                        </div>
                                        <h4 className="text-2xl font-black tracking-tighter mb-4">{p.name}</h4>
                                        <p className="text-sm font-bold text-black/40 leading-tight line-clamp-3">
                                            {p.description}
                                        </p>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-black/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                        <span className="text-[10px] font-black uppercase tracking-widest">Go to App</span>
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SERVICES (Black Section) */}
            <section className="py-24 md:py-40 bg-black text-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5">
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-10 text-white">
                                WE BUILD <br />MODERN <br />SYSTEMS.
                            </h2>
                            <p className="text-xl font-bold text-white/40 mb-12 leading-tight">
                                Custom development for businesses that need to move fast without breaking things.
                            </p>
                            <Link href="/contact-us" className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-12 py-6 rounded-full text-[12px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl">
                                Start a Project
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                        <div className="lg:col-span-6 lg:col-start-8 grid gap-12">
                            {[
                                { title: 'SaaS Engineering', desc: 'Scalable multi-tenant architectures built with Next.js and high-performance backends.' },
                                { title: 'AI Integration', desc: 'Custom AI agents and LLM orchestration to automate complex business workflows.' },
                                { title: 'Digital Design', desc: 'World-class UI/UX that converts visitors into loyal customers through editorial design.' }
                            ].map((s, i) => (
                                <div key={i} className="group border-b border-white/10 pb-12 last:border-0">
                                    <h3 className="text-3xl font-black tracking-tighter mb-4 text-white group-hover:text-white/60 transition-colors">{s.title}</h3>
                                    <p className="text-lg font-bold text-white/40 leading-tight">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. BLOG / INSIGHTS (White Section) */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-20">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6 uppercase">Insights</h2>
                            <p className="text-lg font-bold text-black/40 uppercase tracking-widest">Engineering. Growth. Strategy.</p>
                        </div>
                        <Link href="/blog" className="text-sm font-black uppercase tracking-widest hover:opacity-50 transition-opacity flex items-center gap-2">
                            View All <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {blogPosts.slice(0, 3).map((post, i) => (
                            <Link key={i} href={`/blog/${post.saas}/${post.slug}`} className="group">
                                <article className="flex flex-col h-full">
                                    <div className="aspect-[4/3] rounded-3xl bg-black/5 overflow-hidden mb-8 relative">
                                        <div className="absolute inset-0 flex items-center justify-center text-4xl font-black text-black/10 uppercase tracking-tighter">
                                            {post.tag || 'Insight'}
                                        </div>
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                                    </div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-[9px] font-black uppercase tracking-widest">
                                            {post.tag || 'Strategy'}
                                        </span>
                                        <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest">
                                            5 MIN READ
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-black tracking-tighter leading-tight group-hover:opacity-70 transition-opacity">
                                        {post.title}
                                    </h3>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

