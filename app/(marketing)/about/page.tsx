import { constructMetadata } from "@/lib/seo";
import { Sparkles, Users, Zap } from "lucide-react";

export const metadata = constructMetadata({
    title: "Our Mission | Code Swayam",
    description: "Learn more about the team and mission behind Code Swayam.",
});

export default function AboutUsPage() {
    return (
        <div className="bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-32 pb-24 min-h-screen">
            {/* 1. EDITORIAL HEADER */}
            <section className="px-6 mb-24 md:mb-40 text-center">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-center mb-10 animate-reveal">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-primary"></span>
                            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-primary">Our Mission</span>
                            <span className="w-8 h-[1px] bg-primary"></span>
                        </div>
                    </div>
                    
                    <h1 className="text-6xl md:text-[9rem] font-display font-bold leading-[0.85] tracking-tight uppercase mb-12">
                        Empowering <br />
                        <span className="text-transparent [-webkit-text-stroke:1px_hsl(var(--primary))]">Builders.</span>
                    </h1>
                </div>
            </section>

            {/* 2. CORE PHILOSOPHY */}
            <section className="px-6 mb-40">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-2xl prose-invert mx-auto text-muted-foreground leading-tight font-display font-medium text-center space-y-12">
                        <p>
                            At Code Swayam, we believe that software should be accessible, scalable, and beautifully designed.
                            We built this ecosystem to provide an incubator for developers and entrepreneurs looking to scale.
                        </p>
                        <p>
                            Whether you need a full SaaS platform engineered from the ground up, or a simple marketing tool to boost your audience, 
                            our suite of tailored solutions has you covered.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. STATS GRID */}
            <section className="px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Zap, label: 'SaaS Products', val: '20+' },
                        { icon: Users, label: 'Active Users', val: '10k+' },
                        { icon: Sparkles, label: 'Uptime SLA', val: '99.9%' }
                    ].map((s, i) => (
                        <div key={i} className="group p-12 rounded-[3rem] bg-secondary/30 border border-border flex flex-col items-center text-center hover:border-primary transition-all duration-500">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                                <s.icon className="w-8 h-8" />
                            </div>
                            <div className="text-6xl font-display font-bold tracking-tighter mb-2">{s.val}</div>
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

