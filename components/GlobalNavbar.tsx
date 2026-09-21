'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useCSWUser, logout, clearToken } from '@codeswayam/auth';

export function GlobalNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentUrl, setCurrentUrl] = useState('');
    const [mounted, setMounted] = useState(false);

    const { isSignedIn, isLoaded } = useCSWUser();

    useEffect(() => {
        setMounted(true);
        setCurrentUrl(window.location.href);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getAuthUrl = (path: string) => {
        const baseUrl = process.env.NEXT_PUBLIC_APP_AUTH_URL || 'http://localhost:3003';
        if (!currentUrl) return `${baseUrl}${path}`;
        return `${baseUrl}${path}?redirect=${encodeURIComponent(currentUrl)}`;
    };

    const handleLogout = async () => {
        await logout();
        clearToken();
        window.location.href = '/';
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 px-6 pointer-events-none transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
            <nav
                className={`
                    max-w-5xl mx-auto w-full pointer-events-auto transition-all duration-500 ease-in-out
                    flex items-center justify-between px-6 md:px-8 py-3.5
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
                <div className="hidden md:flex items-center gap-6">
                    <div className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wider text-muted-foreground">
                        <Link href="/services" className="px-3.5 py-1.5 rounded-full hover:bg-muted/60 hover:text-foreground transition-all">Services</Link>
                        <Link href="/products" className="px-3.5 py-1.5 rounded-full hover:bg-muted/60 hover:text-foreground transition-all">SaaS</Link>
                        <Link href="/tools" className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-black hover:bg-primary hover:text-primary-foreground transition-all">Tools</Link>
                        <Link href="/blog" className="px-3.5 py-1.5 rounded-full hover:bg-muted/60 hover:text-foreground transition-all">Blog</Link>
                    </div>

                    <div className="h-4 w-px bg-border mx-1" />

                    <div className="flex items-center gap-2">
                        {!mounted || !isLoaded ? (
                            <div className="w-20" />
                        ) : isSignedIn ? (
                            <>
                                <Link
                                    href="/dashboard"
                                    className="px-4 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground text-[11px] font-black uppercase tracking-wider transition-all"
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all cursor-pointer border-none bg-transparent"
                                >
                                    Log Out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href={getAuthUrl('/login')}
                                    className="px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-foreground hover:text-primary hover:bg-muted/60 transition-all"
                                >
                                    Log In
                                </Link>
                                <Link
                                    href={getAuthUrl('/signup')}
                                    className="group flex items-center gap-1.5 bg-primary text-primary-foreground px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all hover:brightness-110 active:scale-95 shadow-sm"
                                >
                                    Get Started
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </>
                        )}
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
                    
                    <div className="flex flex-col gap-4 pt-4 border-t border-black/5 dark:border-white/5">
                        {!mounted || !isLoaded ? (
                            <div className="h-10" />
                        ) : isSignedIn ? (
                            <>
                                <Link href="/dashboard" onClick={() => setMenuOpen(false)} className="py-2 text-[12px] font-bold uppercase tracking-widest">Dashboard</Link>
                                <button onClick={() => { setMenuOpen(false); handleLogout(); }} className="py-2 text-[12px] font-bold uppercase tracking-widest text-left text-muted-foreground hover:text-rose-600 border-none bg-transparent">Log Out</button>
                            </>
                        ) : (
                            <>
                                <Link href={getAuthUrl('/login')} className="py-2">Log In</Link>
                                <Link href={getAuthUrl('/signup')} className="flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black py-4 rounded-2xl font-black">
                                    Get Started
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
