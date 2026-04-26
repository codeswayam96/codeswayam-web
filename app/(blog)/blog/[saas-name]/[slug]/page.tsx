import { notFound } from 'next/navigation';
import { cmsClient } from '@/lib/cms/sanity';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, Clock, Share2, ArrowRight } from 'lucide-react';
export const dynamic = "force-dynamic";

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
        title: `${post.title} | Code Swayam`,
        description: (post.content || '').substring(0, 160),
        openGraph: { type: 'article', title: post.title },
    };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
    const resolvedParams = await params;
    const post = await cmsClient.fetchPostBySlug(resolvedParams['saas-name'], resolvedParams.slug);

    if (!post) notFound();

    return (
        <div className="bg-background text-foreground selection:bg-primary/20 selection:text-primary min-h-screen">
            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-border z-[60]">
                <div className="h-full bg-primary w-1/3 transition-all duration-300" />
            </div>

            <article className="max-w-7xl mx-auto px-6 py-32 md:py-52">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Left Sidebar (Sticky) */}
                    <div className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-40 flex flex-col gap-12">
                            <Link href="/blog" className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Editorial
                            </Link>
                            
                            <div className="flex flex-col gap-6 pt-10 border-t border-border">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">In This Article</h4>
                                <nav className="flex flex-col gap-4 text-sm font-medium">
                                    <a href="#overview" className="text-primary hover:opacity-70 transition-opacity">Overview</a>
                                    <a href="#technical-deep-dive" className="text-muted-foreground hover:text-foreground transition-colors">Technical Deep-Dive</a>
                                    <a href="#strategic-impact" className="text-muted-foreground hover:text-foreground transition-colors">Strategic Impact</a>
                                    <a href="#conclusion" className="text-muted-foreground hover:text-foreground transition-colors">Conclusion</a>
                                </nav>
                            </div>

                            <div className="flex flex-col gap-6 pt-10 border-t border-border">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">Share</h4>
                                <div className="flex gap-4">
                                    <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                                        <Share2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-8 lg:col-start-5">
                        <header className="mb-20 md:mb-32">
                            <div className="flex items-center gap-4 mb-12">
                                <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.2em]">
                                    {resolvedParams['saas-name']}
                                </span>
                                <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                                    <Clock className="w-3 h-3" />
                                    6 MIN READ
                                </div>
                            </div>

                            <h1 className="text-6xl md:text-[5.5rem] font-display font-bold tracking-tight leading-[0.95] mb-12 text-balance">
                                {post!.title}
                            </h1>
                            
                            <p className="text-2xl md:text-3xl font-display font-medium text-muted-foreground leading-tight text-balance">
                                {post!.excerpt || `Engineering perspective on scaling ${resolvedParams['saas-name']} for the global market and the technical challenges we overcame.`}
                            </p>

                            <div className="mt-16 pt-12 border-t border-border flex items-center gap-6">
                                <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center font-black text-xs">CS</div>
                                <div>
                                    <div className="text-[11px] font-black uppercase tracking-widest">CodeSwayam Team</div>
                                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">August 24, 2024</div>
                                </div>
                            </div>
                        </header>

                        {/* Article Content */}
                        <div className="prose prose-xl prose-primary dark:prose-invert max-w-none">
                            <div className="text-xl md:text-2xl font-sans font-normal leading-relaxed space-y-12 text-foreground/80">
                                <p id="overview" className="first-letter:text-8xl first-letter:font-display first-letter:font-bold first-letter:mr-4 first-letter:float-left first-letter:leading-none first-letter:text-primary">
                                    {post!.content}
                                </p>
                                
                                <div className="bg-secondary/50 p-12 rounded-[2.5rem] border border-border my-20">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-8 h-[1px] bg-primary"></div>
                                        <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Engineering Note</h4>
                                    </div>
                                    <p className="text-xl font-display font-medium leading-tight italic text-foreground">
                                        This technical insight is part of our "{resolvedParams['saas-name']}" architecture series. 
                                        We focus on building modular, type-safe systems that scale to millions of requests per second.
                                    </p>
                                </div>

                                <h2 id="technical-deep-dive" className="text-4xl font-display font-bold tracking-tight mt-20 mb-8">Technical Deep-Dive</h2>
                                <p>
                                    As we continue to evolve our stack, the principles of minimalism and performance remain at our core. 
                                    Every line of code we write for {resolvedParams['saas-name']} is vetted for high-availability and extreme efficiency.
                                </p>

                                <h2 id="strategic-impact" className="text-4xl font-display font-bold tracking-tight mt-20 mb-8">Strategic Impact</h2>
                                <p>
                                    Building for scale isn't just about code; it's about the strategic alignment of technology and business goals. 
                                    By focusing on modular architectures, we've reduced deployment times by 60% across the board.
                                </p>
                            </div>
                        </div>

                        {/* Footer CTA */}
                        <div className="mt-40 p-12 md:p-24 bg-primary rounded-[3rem] text-primary-foreground text-center flex flex-col items-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-10 leading-none uppercase z-10">
                                Ready to build?
                            </h3>
                            <p className="text-xl font-display font-medium text-primary-foreground/80 mb-12 max-w-lg z-10">
                                Join the CodeSwayam ecosystem and get access to the tools used by world-class engineering teams.
                            </p>
                            <Link href="https://auth.codeswayam.com/signup" className="bg-primary-foreground text-primary px-12 py-6 rounded-full text-[12px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-2xl z-10">
                                Get Started Free
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}

