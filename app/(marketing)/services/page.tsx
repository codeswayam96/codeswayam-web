import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Code, Cpu, Database, Layout, Shield, Zap } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Expert Engineering Services | Code Swayam',
    description: 'Bespoke software development, cloud infrastructure, and AI integration services for ambitious teams.',
};

const services = [
    { icon: Layout, title: 'Interface Design', desc: 'High-end editorial UI/UX that converts visitors into customers through precise typography and grid systems.' },
    { icon: Code, title: 'SaaS Engineering', desc: 'Scalable multi-tenant architectures built with Next.js, optimizing for performance and global reach.' },
    { icon: Cpu, title: 'AI Integration', desc: 'Custom LLM orchestration and AI agents designed to automate complex business workflows.' },
    { icon: Database, title: 'Backend Systems', desc: 'Robust NestJS APIs and microservices designed for high-availability and extreme reliability.' },
    { icon: Shield, title: 'Identity & Auth', desc: 'Enterprise-grade SSO systems and cross-domain authentication flows for product ecosystems.' },
    { icon: Zap, title: 'Infrastructure', desc: 'Automated CI/CD pipelines and cloud orchestration on AWS, GCP, and edge platforms.' },
];

export default function ServicesPage() {
    return (
        <div className="bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-32 pb-24">
            {/* 1. EDITORIAL HERO */}
            <section className="px-6 mb-24 md:mb-40">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="flex justify-center mb-10 animate-reveal">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-primary"></span>
                            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-primary">Agency Services</span>
                            <span className="w-8 h-[1px] bg-primary"></span>
                        </div>
                    </div>
                    
                    <h1 className="text-6xl md:text-[9rem] font-display font-bold leading-[0.85] tracking-tight uppercase mb-12">
                        Precision <br />
                        <span className="text-transparent [-webkit-text-stroke:1px_hsl(var(--primary))]">Systems.</span>
                    </h1>
                    
                    <p className="max-w-2xl mx-auto text-xl md:text-2xl font-display font-medium text-muted-foreground leading-tight mb-16">
                        We bring world-class engineering to ambitious startups. 
                        From custom SaaS products to complex AI orchestrations, we build the systems that power the future.
                    </p>

                    <Link href="mailto:hello@codeswayam.com" className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-12 py-6 rounded-full text-[12px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl">
                        Book a Technical Audit
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* 2. SERVICES LIST (Editorial Grid) */}
            <section className="px-6 py-24 bg-secondary/30 border-y border-border">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                        {services.map((s, i) => (
                            <div key={i} className="group">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                                    <s.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-display font-bold tracking-tight mb-6">
                                    {s.title}
                                </h3>
                                <p className="text-lg font-medium text-muted-foreground leading-tight">
                                    {s.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CAPABILITIES (Black Section) */}
            <section className="px-6 py-40 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                        <div className="lg:col-span-5">
                            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[0.9] uppercase mb-10 text-white">
                                Engineering <br />
                                <span className="text-primary">Philosophy.</span>
                            </h2>
                            <p className="text-xl font-display font-medium text-white/40 mb-12 leading-tight">
                                We don't just write code. We architect scalable, future-proof systems that solve real business problems.
                            </p>
                            <div className="flex flex-col gap-6">
                                {[
                                    { t: 'Performance First', d: 'Every millisecond matters. We optimize for speed and efficiency at every level.' },
                                    { t: 'Type-Safe Core', d: 'Robust TypeScript implementations ensure long-term maintainability and fewer bugs.' },
                                    { t: 'Global Scale', d: 'Built-in support for internationalization, multi-region deployments, and edge computing.' }
                                ].map((cap, i) => (
                                    <div key={i} className="border-l-2 border-primary pl-8 py-2">
                                        <h4 className="text-xl font-bold mb-2 text-white">{cap.t}</h4>
                                        <p className="text-sm font-medium text-white/40 leading-relaxed">{cap.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-6 lg:col-start-8">
                            <div className="aspect-square bg-primary/5 rounded-[4rem] border border-white/10 p-12 flex flex-col justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary))_0%,transparent_70%)] opacity-20" />
                                <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8 relative z-10 text-white">
                                    Ready to build the future?
                                </h3>
                                <p className="text-lg font-medium text-white/60 mb-12 relative z-10">
                                    Let's discuss your technical requirements and build something extraordinary together.
                                </p>
                                <Link href="mailto:hello@codeswayam.com" className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full text-[12px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all relative z-10 self-start">
                                    Book a Call
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

