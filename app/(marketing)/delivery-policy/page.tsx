import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Delivery Policy | Code Swayam",
    description: "Delivery Policy for Code Swayam SaaS Ecosystem.",
});

export default function DeliveryPolicyPage() {
    return (
        <div className="bg-background text-foreground min-h-screen pt-32 pb-24 selection:bg-primary/20 selection:text-primary">
            {/* Editorial Header */}
            <section className="px-6 mb-24">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8 animate-reveal">
                        <span className="w-8 h-[1px] bg-primary"></span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Fulfillment Systems</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.85] tracking-tight uppercase mb-12 animate-reveal [animation-delay:100ms]">
                        Delivery <br />
                        <span className="text-transparent [-webkit-text-stroke:1px_hsl(var(--primary))]">Policy.</span>
                    </h1>
                    <p className="text-xl font-display font-medium text-muted-foreground max-w-2xl leading-tight animate-reveal [animation-delay:200ms]">
                        Our digital fulfillment infrastructure ensures instantaneous access to your assets. We maintain high-availability delivery systems for the entire SaaS ecosystem.
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
                                    <h2 className="text-2xl font-display font-bold tracking-tight uppercase mb-6">Digital Distribution</h2>
                                    <p className="text-lg font-medium text-muted-foreground leading-tight">
                                        All CodeSwayam products—including software licenses, API access, and digital coursework—are purely digital. 
                                        Delivery is executed instantaneously upon successful technical verification of payment.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="group">
                            <div className="flex items-start gap-6">
                                <span className="text-3xl font-display font-bold text-primary/20 group-hover:text-primary transition-colors">02</span>
                                <div>
                                    <h2 className="text-2xl font-display font-bold tracking-tight uppercase mb-6">Access Protocol</h2>
                                    <p className="text-lg font-medium text-muted-foreground leading-tight mb-8">
                                        Upon fulfillment, your assets are distributed via the following global channels:
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            'Encrypted email confirmation with direct technical access links.',
                                            'Automated activation within your centralized Account Dashboard.',
                                            'Instantaneous permission propagation across the CodeSwayam ecosystem.'
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4 items-center border-l-2 border-primary/20 pl-6 py-2 hover:border-primary transition-colors">
                                                <span className="text-md font-medium text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="group">
                            <div className="flex items-start gap-6">
                                <span className="text-3xl font-display font-bold text-primary/20 group-hover:text-primary transition-colors">03</span>
                                <div>
                                    <h2 className="text-2xl font-display font-bold tracking-tight uppercase mb-6">Distribution Support</h2>
                                    <p className="text-lg font-medium text-muted-foreground leading-tight">
                                        If digital delivery is not confirmed within 24 hours, please audit your communication filters. 
                                        For manual verification, reach out to our engineering support at <span className="text-primary font-bold">support@codeswayam.com</span>.
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
                            "name": "Delivery Policy - Code Swayam",
                            "url": "https://codeswayam.com/delivery-policy",
                            "description": "Delivery Policy for Code Swayam SaaS Ecosystem.",
                        })
                    }}
                />
            </div>
        </div>
    );
}
