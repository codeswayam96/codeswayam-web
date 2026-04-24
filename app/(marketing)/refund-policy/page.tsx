import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Refund Policy | Code Swayam",
    description: "Refund Policy for Code Swayam SaaS Ecosystem.",
});

export default function RefundPolicyPage() {
    return (
        <div className="bg-background text-foreground min-h-screen pt-32 pb-24 selection:bg-primary/20 selection:text-primary">
            {/* Editorial Header */}
            <section className="px-6 mb-24">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8 animate-reveal">
                        <span className="w-8 h-[1px] bg-primary"></span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Transaction Protocol</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.85] tracking-tight uppercase mb-12 animate-reveal [animation-delay:100ms]">
                        Refund <br />
                        <span className="text-transparent [-webkit-text-stroke:1px_hsl(var(--primary))]">Policy.</span>
                    </h1>
                    <p className="text-xl font-display font-medium text-muted-foreground max-w-2xl leading-tight animate-reveal [animation-delay:200ms]">
                        Our commitment to your satisfaction is backed by a clear and fair refund framework. We ensure high standards for every digital transaction within the ecosystem.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-secondary/30 border border-border rounded-[2.5rem] p-10 md:p-16 backdrop-blur-sm">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-12 border-b border-border pb-6">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>

                    <div className="space-y-16">
                        <section className="group">
                            <div className="flex items-start gap-6">
                                <span className="text-3xl font-display font-bold text-primary/20 group-hover:text-primary transition-colors">01</span>
                                <div>
                                    <h2 className="text-2xl font-display font-bold tracking-tight uppercase mb-6">Our Guarantee</h2>
                                    <p className="text-lg font-medium text-muted-foreground leading-tight">
                                        We want you to be completely satisfied with your purchase. If you are not satisfied with our services for any reason, 
                                        you may be eligible for a refund under the professional terms outlined below.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="group">
                            <div className="flex items-start gap-6">
                                <span className="text-3xl font-display font-bold text-primary/20 group-hover:text-primary transition-colors">02</span>
                                <div>
                                    <h2 className="text-2xl font-display font-bold tracking-tight uppercase mb-6">Eligibility</h2>
                                    <p className="text-lg font-medium text-muted-foreground leading-tight mb-8">
                                        Standard eligibility criteria for different asset classes within the CodeSwayam network:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-8 rounded-3xl bg-white border border-border hover:border-primary transition-colors">
                                            <h4 className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">Digital Products</h4>
                                            <p className="text-sm font-medium text-muted-foreground">14-day money-back guarantee for uncompleted digital assets. Progress exceeding 20% voids eligibility.</p>
                                        </div>
                                        <div className="p-8 rounded-3xl bg-white border border-border hover:border-primary transition-colors">
                                            <h4 className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">SaaS Subscriptions</h4>
                                            <p className="text-sm font-medium text-muted-foreground">Subscriptions can be terminated anytime. Prorated refunds for active billing cycles are not issued.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="group">
                            <div className="flex items-start gap-6">
                                <span className="text-3xl font-display font-bold text-primary/20 group-hover:text-primary transition-colors">03</span>
                                <div>
                                    <h2 className="text-2xl font-display font-bold tracking-tight uppercase mb-6">Request Protocol</h2>
                                    <p className="text-lg font-medium text-muted-foreground leading-tight">
                                        To initiate a refund, please contact our support desk at <span className="text-primary font-bold">support@codeswayam.com</span> with your order reference. 
                                        We process all valid technical audits and requests within 5-7 business days.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": "Refund Policy - Code Swayam",
                            "url": "https://codeswayam.com/refund-policy",
                            "description": "Refund Policy for Code Swayam SaaS Ecosystem.",
                        })
                    }}
                />
            </div>
        </div>
    );
}
