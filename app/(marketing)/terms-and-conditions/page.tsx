import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Terms & Conditions | Code Swayam",
    description: "Terms and Conditions for Code Swayam SaaS Ecosystem.",
});

export default function TermsAndConditionsPage() {
    return (
        <div className="bg-background text-foreground min-h-screen pt-32 pb-24 selection:bg-primary/20 selection:text-primary">
            {/* Editorial Header */}
            <section className="px-6 mb-24">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8 animate-reveal">
                        <span className="w-8 h-[1px] bg-primary"></span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Service Agreement</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.85] tracking-tight uppercase mb-12 animate-reveal [animation-delay:100ms]">
                        Terms & <br />
                        <span className="text-transparent [-webkit-text-stroke:1px_hsl(var(--primary))]">Conditions.</span>
                    </h1>
                    <p className="text-xl font-display font-medium text-muted-foreground max-w-2xl leading-tight animate-reveal [animation-delay:200ms]">
                        This agreement establishes the legal framework for using CodeSwayam products. By accessing our infrastructure, you agree to these professional standards.
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
                                    <h2 className="text-2xl font-display font-bold tracking-tight uppercase mb-6">Agreement to Terms</h2>
                                    <p className="text-lg font-medium text-muted-foreground leading-tight">
                                        By accessing or using our services, you agree to be bound by these Terms and Conditions and our Privacy Policy. 
                                        If you disagree with any part of the terms, then you may not access the service or our proprietary infrastructure.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="group">
                            <div className="flex items-start gap-6">
                                <span className="text-3xl font-display font-bold text-primary/20 group-hover:text-primary transition-colors">02</span>
                                <div>
                                    <h2 className="text-2xl font-display font-bold tracking-tight uppercase mb-6">Use License</h2>
                                    <p className="text-lg font-medium text-muted-foreground leading-tight mb-8">
                                        Permission is granted to temporarily download one copy of the materials on Code Swayam's website for personal, 
                                        non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            'Modification or copying of materials is strictly prohibited.',
                                            'Materials may not be used for unauthorized commercial purposes.',
                                            'Attempting to decompile or reverse engineer any software is forbidden.'
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
                                    <h2 className="text-2xl font-display font-bold tracking-tight uppercase mb-6">Disclaimer</h2>
                                    <p className="text-lg font-medium text-muted-foreground leading-tight">
                                        The materials on Code Swayam's website are provided on an 'as is' basis. 
                                        Code Swayam makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                                        including, without limitation, implied warranties or conditions of merchantability or fitness for a particular purpose.
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
                            "name": "Terms and Conditions - Code Swayam",
                            "url": "https://codeswayam.com/terms-and-conditions",
                            "description": "Terms and Conditions for Code Swayam SaaS Ecosystem.",
                        })
                    }}
                />
            </div>
        </div>
    );
}
