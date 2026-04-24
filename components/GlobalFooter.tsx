import Link from 'next/link';
import { ArrowRight, Twitter, Github, Linkedin } from 'lucide-react';

export function GlobalFooter() {
    return (
        <footer className="bg-foreground text-background selection:bg-primary selection:text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-primary blur-sm" />
            <div className="max-w-7xl mx-auto px-6 py-24 md:py-40 relative z-10">
                
                {/* Massive CTA Section */}
                <div className="flex flex-col items-center text-center mb-32 md:mb-40">
                    <h2 className="text-5xl md:text-8xl font-display font-bold tracking-[-0.04em] mb-12 max-w-5xl leading-none uppercase text-background">
                        Build your next <br /> <span className="text-primary">SaaS engine</span>.
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                        <Link 
                            href="https://auth.codeswayam.com/signup" 
                            className="bg-primary text-primary-foreground px-12 py-6 rounded-full text-sm font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-2xl"
                        >
                            Start Building Now
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                        <p className="text-background/40 text-[11px] font-black uppercase tracking-[0.2em]">
                            Join 200+ world-class teams
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 border-t border-background/10 pt-20">
                    
                    {/* Brand Column */}
                    <div className="md:col-span-4">
                        <Link href="/" className="text-2xl font-display font-black tracking-tighter uppercase mb-8 block">
                            CodeSwayam
                        </Link>
                        <p className="text-background/60 text-lg font-sans leading-relaxed max-w-sm">
                            The ecosystem for builders. We ship high-performance SaaS tools and help companies scale through modern engineering.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-2 md:col-start-6">
                        <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-background/40 mb-8">Products</h4>
                        <ul className="flex flex-col gap-5 text-[12px] font-bold uppercase tracking-widest">
                            <li><a href="https://auraflow.codeswayam.com" className="hover:text-primary transition-colors">Auraflow</a></li>
                            <li><a href="https://chatlift.codeswayam.com" className="hover:text-primary transition-colors">ChatLift</a></li>
                            <li><a href="https://mailtracker.codeswayam.com" className="hover:text-primary transition-colors">MailTracker</a></li>
                            <li><Link href="/products" className="text-background/40 hover:text-primary transition-colors">View All &rarr;</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-background/40 mb-8">Company</h4>
                        <ul className="flex flex-col gap-5 text-[12px] font-bold uppercase tracking-widest">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="/contact-us" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Editorial</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-background/40 mb-8">Legal</h4>
                        <ul className="flex flex-col gap-5 text-[12px] font-bold uppercase tracking-widest">
                            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy</Link></li>
                            <li><Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-32 pt-10 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-background/5">
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-background/30">
                        &copy; {new Date().getFullYear()} Code Swayam Inc. Built with &hearts; for the ecosystem.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-background/30 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="text-background/30 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="text-background/30 hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

