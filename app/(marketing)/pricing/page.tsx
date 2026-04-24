import React, { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';

const pricingTiers = [
    {
        name: 'Starter',
        price: '29',
        description: 'Perfect for individuals and small teams',
        features: [
            'Up to 5 projects',
            '10GB storage',
            'Basic analytics',
            'Community support',
        ],
        ctaText: 'Get Started',
    },
    {
        name: 'Professional',
        price: '79',
        description: 'For growing teams and ambitious projects',
        features: [
            'Unlimited projects',
            '500GB storage',
            'Advanced analytics',
            'Priority email support',
            'API access',
            'Custom integrations',
        ],
        ctaText: 'Start Free Trial',
        highlighted: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For large organizations with custom needs',
        features: [
            'Unlimited everything',
            'Dedicated support',
            'Custom SLA',
            'Advanced security & compliance',
            'Dedicated account manager',
            'Custom onboarding',
        ],
        ctaText: 'Contact Sales',
    },
];

export default function PricingPage() {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <div className="bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-32 pb-24">
            {/* 1. EDITORIAL HEADER */}
            <section className="px-6 mb-24 md:mb-40">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="flex justify-center mb-10 animate-reveal">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-primary"></span>
                            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-primary">Pricing Plans</span>
                            <span className="w-8 h-[1px] bg-primary"></span>
                        </div>
                    </div>
                    
                    <h1 className="text-6xl md:text-[9rem] font-display font-bold leading-[0.85] tracking-tight uppercase mb-12">
                        Simple <br />
                        <span className="text-transparent [-webkit-text-stroke:1px_hsl(var(--primary))]">Investment.</span>
                    </h1>
                    
                    <p className="max-w-2xl mx-auto text-xl md:text-2xl font-display font-medium text-muted-foreground leading-tight mb-16">
                        Choose the perfect plan for your team. 
                        Transparent pricing with no hidden fees. All plans include a 14-day free trial.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex justify-center mb-24">
                        <div className="inline-flex items-center p-1.5 rounded-full border border-border bg-secondary/50">
                            <button
                                onClick={() => setIsAnnual(false)}
                                className={`px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${!isAnnual ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setIsAnnual(true)}
                                className={`flex items-center gap-2 px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${isAnnual ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
                            >
                                Annually
                                <span className="bg-primary-foreground/20 px-2 py-0.5 rounded-full text-[9px]">Save 20%</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PRICING GRID */}
            <section className="px-6 mb-40">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                        {pricingTiers.map((tier, i) => (
                            <div key={i} className={`flex flex-col p-12 rounded-[3rem] border transition-all duration-500 ${tier.highlighted ? 'bg-primary text-primary-foreground border-primary shadow-2xl scale-105 z-10' : 'bg-secondary/30 border-border hover:border-primary'}`}>
                                <h3 className={`text-2xl font-display font-bold uppercase tracking-tight mb-2 ${tier.highlighted ? 'text-primary-foreground' : 'text-foreground'}`}>
                                    {tier.name}
                                </h3>
                                <div className="mb-8">
                                    <span className="text-6xl font-display font-bold tracking-tighter">
                                        {tier.price === 'Custom' ? 'Custom' : `$${isAnnual ? Math.floor(parseInt(tier.price) * 0.8) : tier.price}`}
                                    </span>
                                    {tier.price !== 'Custom' && <span className={`text-sm font-bold uppercase tracking-widest ml-2 ${tier.highlighted ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>/ Month</span>}
                                </div>
                                <p className={`text-sm font-medium mb-10 leading-tight ${tier.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                                    {tier.description}
                                </p>
                                
                                <div className="flex-1 space-y-4 mb-12">
                                    {tier.features.map((feature, j) => (
                                        <div key={j} className="flex items-center gap-3">
                                            <Check className={`w-4 h-4 shrink-0 ${tier.highlighted ? 'text-primary-foreground' : 'text-primary'}`} />
                                            <span className="text-[13px] font-medium leading-none">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link 
                                    href={tier.price === 'Custom' ? 'mailto:sales@codeswayam.com' : 'https://auth.codeswayam.com/signup'}
                                    className={`w-full py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest text-center transition-all active:scale-[0.98] ${tier.highlighted ? 'bg-white text-primary hover:bg-white/90' : 'bg-primary text-primary-foreground hover:brightness-110 shadow-lg'}`}
                                >
                                    {tier.ctaText}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. TRUST SECTION */}
            <section className="px-6 py-40 border-t border-border bg-secondary/10">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight uppercase mb-20">
                        Secure. Scalable. <br />
                        <span className="text-primary">Reliable.</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {[
                            { icon: Shield, t: 'Bank-Level Security', d: 'Enterprise-grade encryption and SSO integration for all plans.' },
                            { icon: Zap, t: '99.9% Uptime', d: 'High-availability infrastructure ensuring your tools are always online.' },
                            { icon: Sparkles, t: 'Global CDN', d: 'Content delivered from the edge for sub-100ms latency worldwide.' },
                            { icon: Check, t: 'Compliance Ready', d: 'GDPR, SOC2, and HIPAA ready environments for enterprise needs.' }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-lg font-bold mb-3">{item.t}</h4>
                                <p className="text-sm font-medium text-muted-foreground leading-tight">
                                    {item.d}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

