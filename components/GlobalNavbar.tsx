'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export function GlobalNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        setCurrentUrl(window.location.href);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getAuthUrl = (path: string) => {
        const baseUrl = process.env.NEXT_PUBLIC_APP_AUTH_URL || 'http://localhost:3002';
        if (!currentUrl) return `${baseUrl}${path}`;
        return `${baseUrl}${path}?redirect=${encodeURIComponent(currentUrl)}`;
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-8 pointer-events-none">
            <nav
                className={`
                    max-w-4xl mx-auto w-full pointer-events-auto transition-all duration-500 ease-in-out
                    flex items-center justify-between px-8 py-4
                    glass rounded-full premium-shadow border border-black/5 dark:border-white/10
                    ${scrolled ? 'scale-95 translate-y-[-10px]' : 'scale-100'}
                `}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group shrink-0">
                    <span className="text-lg font-display font-black tracking-tighter text-foreground uppercase">
                        CodeSwayam
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-8 text-[12px] font-bold uppercase tracking-widest text-muted-foreground">
                        <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                        <Link href="/products" className="hover:text-primary transition-colors">SaaS</Link>
                        <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                    </div>

                    <div className="h-4 w-px bg-border mx-2" />

                    <div className="flex items-center gap-4">
                        <Link
                            href={getAuthUrl('/login')}
                            className="text-[12px] font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                        >
                            Log In
                        </Link>
                        <Link
                            href={getAuthUrl('/signup')}
                            className="group flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-[12px] font-black uppercase tracking-widest transition-all hover:brightness-110 active:scale-95"
                        >
                            Get Started
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Mobile menu toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 text-foreground"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile drawer */}
            <div 
                className={`
                    md:hidden absolute top-24 left-6 right-6 p-8 glass rounded-[2rem] border border-black/5 dark:border-white/10 transition-all duration-300
                    ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
                `}
            >
                <div className="flex flex-col gap-6 text-sm font-black uppercase tracking-widest">
                    <Link href="/services" onClick={() => setMenuOpen(false)} className="py-2 border-b border-black/5 dark:border-white/5">Services</Link>
                    <Link href="/products" onClick={() => setMenuOpen(false)} className="py-2 border-b border-black/5 dark:border-white/5">SaaS</Link>
                    <Link href="/blog" onClick={() => setMenuOpen(false)} className="py-2 border-b border-black/5 dark:border-white/5">Blog</Link>
                    <div className="flex flex-col gap-4 pt-4">
                        <Link href={getAuthUrl('/login')} className="py-2">Log In</Link>
                        <Link href={getAuthUrl('/signup')} className="flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black py-4 rounded-2xl font-black">
                            Get Started
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
