import Link from 'next/link';

export function GlobalFooter() {
    return (
        <footer style={{ backgroundColor: '#222831', color: '#FFFFFF' }}>
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">

                    {/* Column 1: Brand & Bio */}
                    <div>
                        <div className="text-2xl font-extrabold tracking-tight mb-4 text-white">
                            Code<span style={{ color: '#00ADB5' }}>Swayam</span>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                            The central hub for building, launching, and scaling your SaaS products.
                            We operate an ecosystem of 20+ applications, build custom software, and teach modern development.
                        </p>
                    </div>

                    {/* Column 2: Products */}
                    <div>
                        <h4 className="text-sm font-bold mb-5" style={{ color: '#00ADB5' }}>Products</h4>
                        <div className="flex flex-col gap-3 text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
                            <a href="https://auraflow.codeswayam.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Auraflow</a>
                            <a href="https://chatlift.codeswayam.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ChatLift</a>
                            <a href="https://mailtracker.codeswayam.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">MailTracker</a>
                            <Link href="/products" className="hover:text-white transition-colors mt-2 text-xs opacity-70">View all 20+ Tools &rarr;</Link>
                        </div>
                    </div>

                    {/* Column 3: Services & Learn */}
                    <div>
                        <h4 className="text-sm font-bold mb-5" style={{ color: '#00ADB5' }}>Services & Learn</h4>
                        <div className="flex flex-col gap-3 text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
                            <Link href="/services" className="hover:text-white transition-colors">IT Consulting</Link>
                            <Link href="/services" className="hover:text-white transition-colors">Custom Backends</Link>
                            <Link href="/blog" className="hover:text-white transition-colors">Engineering Blog</Link>
                        </div>
                    </div>

                    {/* Column 4: Company */}
                    <div>
                        <h4 className="text-sm font-bold mb-5" style={{ color: '#00ADB5' }}>Company</h4>
                        <div className="flex flex-col gap-3 text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
                            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                            <Link href="/contact-us" className="hover:text-white transition-colors">Contact</Link>
                            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        &copy; {new Date().getFullYear()} Code Swayam Inc. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>𝕏</div>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>in</div>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>GH</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
