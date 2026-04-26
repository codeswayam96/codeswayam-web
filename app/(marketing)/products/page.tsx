import type { Metadata } from 'next';
import { getSaasProducts } from '@/lib/data';
import { ArrowUpRight, Zap, Globe, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';
export const dynamic = "force-dynamic";


export const metadata: Metadata = {
    title: 'Software Ecosystem | Code Swayam',
    description: 'Explore our portfolio of high-performance SaaS applications and digital growth tools.',
};

export default async function ProductsPage() {
    const allProducts = await getSaasProducts();

    // Group by tag and pick the best one (Live > Beta > Soon)
    const products = Object.values(
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
        <div className="bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-32 pb-24">
            {/* 1. EDITORIAL HEADER */}
            <section className="px-6 mb-24 md:mb-40">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-center mb-10 animate-reveal">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-primary"></span>
                            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-primary">SaaS Ecosystem</span>
                            <span className="w-8 h-[1px] bg-primary"></span>
                        </div>
                    </div>
                    
                    <h1 className="text-6xl md:text-[9rem] font-display font-bold leading-[0.85] tracking-tight text-center uppercase mb-12">
                        Digital <br />
                        <span className="text-transparent [-webkit-text-stroke:1px_hsl(var(--primary))]">Inventory.</span>
                    </h1>
                    
                    <p className="max-w-2xl mx-auto text-center text-xl md:text-2xl font-display font-medium text-muted-foreground leading-tight">
                        A unified suite of high-performance tools engineered for the modern era. 
                        Each product is an independent ecosystem connected by a single identity.
                    </p>
                </div>
            </section>

            {/* 2. PRODUCT GRID (Editorial Style) */}
            <section className="px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((p, i) => (
                            <div key={p.id} className="group relative bg-secondary/30 rounded-[2.5rem] border border-border p-10 flex flex-col justify-between hover:border-primary transition-all duration-500 premium-shadow h-[500px] overflow-hidden">
                                {/* Product Icon/Symbol */}
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity translate-x-4 -translate-y-4">
                                    <Sparkles className="w-40 h-40" />
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                                            {i % 3 === 0 ? <Zap className="w-7 h-7" /> : i % 3 === 1 ? <Globe className="w-7 h-7" /> : <Shield className="w-7 h-7" />}
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="px-3 py-1 rounded-full bg-background border border-border text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                                                {p.tag}
                                            </span>
                                            <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${p.status === 'Live' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                                                {p.status}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="text-4xl font-display font-bold tracking-tight mb-6">
                                        {p.name}
                                    </h3>
                                    
                                    <p className="text-lg font-medium text-muted-foreground leading-tight line-clamp-4">
                                        {p.description}
                                    </p>
                                </div>

                                <div className="mt-auto">
                                    <div className="pt-8 border-t border-border flex justify-between items-end">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Domain</span>
                                            <span className="text-xs font-bold text-foreground">{p.domain}</span>
                                        </div>
                                        <Link 
                                            href={`https://${p.domain}`} 
                                            target="_blank"
                                            className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                                        >
                                            <ArrowUpRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CTA FOOTER SECTION */}
            <section className="px-6 py-40">
                <div className="max-w-5xl mx-auto bg-primary rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,white_0%,transparent_30%)] opacity-20" />
                    
                    <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tight text-primary-foreground leading-none mb-12 uppercase relative z-10">
                        Scale with <br />CodeSwayam.
                    </h2>
                    
                    <p className="text-xl md:text-2xl font-display font-medium text-primary-foreground/80 mb-16 max-w-2xl mx-auto relative z-10">
                        Join the ecosystem used by high-performance teams worldwide. 
                        One identity, infinite possibilities.
                    </p>

                    <Link 
                        href="https://auth.codeswayam.com/signup" 
                        className="inline-flex items-center gap-4 bg-primary-foreground text-primary px-12 py-6 rounded-full text-[12px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl relative z-10"
                    >
                        Create Free Account
                        <Zap className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

