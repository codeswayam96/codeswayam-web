import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Privacy Policy | Code Swayam",
    description: "Privacy Policy for Code Swayam SaaS Ecosystem.",
});

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-background text-foreground min-h-screen pt-32 pb-24 selection:bg-primary/20 selection:text-primary">
            {/* Editorial Header */}
            <section className="px-6 mb-24">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8 animate-reveal">
                        <span className="w-8 h-[1px] bg-primary"></span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Compliance Hub</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.85] tracking-tight uppercase mb-12 animate-reveal [animation-delay:100ms]">
                        Privacy <br />
                        <span className="text-transparent [-webkit-text-stroke:1px_hsl(var(--primary))]">Policy.</span>
                    </h1>
                    <p className="text-xl font-display font-medium text-muted-foreground max-w-2xl leading-tight animate-reveal [animation-delay:200ms]">
                        We prioritize your data security and transparency. This document outlines our protocols for data handling and user protection across the entire CodeSwayam ecosystem.
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
                                    <h2 className="text-2xl font-display font-bold tracking-tight uppercase mb-6">Introduction</h2>
                                    <p className="text-lg font-medium text-muted-foreground leading-tight">
                                        Welcome to Code Swayam. We respect your privacy and are committed to protecting your personal data. 
                                        This privacy policy will inform you as to how we look after your personal data when you visit our website 
                                        and tell you about your privacy rights and how the law protects you.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="group">
                            <div className="flex items-start gap-6">
                                <span className="text-3xl font-display font-bold text-primary/20 group-hover:text-primary transition-colors">02</span>
                                <div>
                                    <h2 className="text-2xl font-display font-bold tracking-tight uppercase mb-6">Data Collection</h2>
                                    <p className="text-lg font-medium text-muted-foreground leading-tight mb-8">
                                        Personal data means any information about an individual from which that person can be identified. 
                                        We collect and process the following categories:
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            { label: 'Identity Data', val: 'First name, last name, and unique identifiers.' },
                                            { label: 'Contact Data', val: 'Billing address, email address, and phone numbers.' },
                                            { label: 'Technical Data', val: 'IP addresses, login credentials, and browser signatures.' },
                                            { label: 'Usage Data', val: 'Interaction logs and product engagement metrics.' }
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4 items-start border-l-2 border-primary/20 pl-6 py-1 hover:border-primary transition-colors">
                                                <div>
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary block mb-1">{item.label}</span>
                                                    <span className="text-md font-medium text-muted-foreground">{item.val}</span>
                                                </div>
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
                                    <h2 className="text-2xl font-display font-bold tracking-tight uppercase mb-6">Processing Rationale</h2>
                                    <p className="text-lg font-medium text-muted-foreground leading-tight mb-6">
                                        We process your data only when permitted by law. Common legal bases include:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-6 rounded-2xl bg-white border border-border">
                                            <h4 className="text-[10px] font-black uppercase tracking-widest mb-3">Contractual Necessity</h4>
                                            <p className="text-sm font-medium text-muted-foreground">Fulfilling our service obligations to you.</p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white border border-border">
                                            <h4 className="text-[10px] font-black uppercase tracking-widest mb-3">Legal Compliance</h4>
                                            <p className="text-sm font-medium text-muted-foreground">Meeting regulatory and statutory requirements.</p>
                                        </div>
                                    </div>
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
                            "name": "Privacy Policy - Code Swayam",
                            "url": "https://codeswayam.com/privacy-policy",
                            "description": "Privacy Policy for Code Swayam SaaS Ecosystem.",
                        })
                    }}
                />
            </div>
        </div>
    );
}
