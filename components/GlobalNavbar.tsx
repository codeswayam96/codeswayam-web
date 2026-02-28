'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export function GlobalNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`w-full sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
            style={{
                backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0)',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.05)' : '1px solid transparent'
            }}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-2xl font-extrabold tracking-tight" style={{ color: '#222831' }}>
                        Code<span style={{ color: '#00ADB5' }}>Swayam</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 text-sm font-semibold" style={{ color: '#393E46' }}>
                    <Link href="/services" className="hover:text-[#00ADB5] transition-colors duration-200">IT Services</Link>
                    <Link href="/products" className="hover:text-[#00ADB5] transition-colors duration-200">Our SaaS</Link>
                    <Link href="/blog" className="hover:text-[#00ADB5] transition-colors duration-200">Blog</Link>
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        href={`${process.env.NEXT_PUBLIC_AUTH_URL || 'http://localhost:3002'}/login`}
                        className="text-sm font-semibold hover:text-[#00ADB5] transition-colors"
                        style={{ color: '#393E46' }}
                    >
                        Log In
                    </Link>
                    <Link
                        href={`${process.env.NEXT_PUBLIC_AUTH_URL || 'http://localhost:3002'}/signup`}
                        className="px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                        style={{ backgroundColor: '#222831', color: '#FFFFFF' }}
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile menu toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <span className="block w-6 h-0.5 rounded transition-all" style={{ backgroundColor: '#222831', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '' }} />
                    <span className="block w-6 h-0.5 rounded transition-all" style={{ backgroundColor: '#222831', opacity: menuOpen ? 0 : 1 }} />
                    <span className="block w-6 h-0.5 rounded transition-all" style={{ backgroundColor: '#222831', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : '' }} />
                </button>
            </div>

            {/* Mobile drawer */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full px-6 py-8 flex flex-col gap-6 text-base font-semibold border-b shadow-2xl"
                    style={{ backgroundColor: '#FFFFFF', color: '#222831', borderColor: 'rgba(0,0,0,0.05)' }}>
                    <Link href="/services" onClick={() => setMenuOpen(false)} className="hover:text-[#00ADB5] transition-colors">IT Services</Link>
                    <Link href="/products" onClick={() => setMenuOpen(false)} className="hover:text-[#00ADB5] transition-colors">Our SaaS</Link>
                    <Link href="/blog" onClick={() => setMenuOpen(false)} className="hover:text-[#00ADB5] transition-colors">Blog</Link>
                    <Link href={`${process.env.NEXT_PUBLIC_AUTH_URL || 'http://localhost:3002'}/signup`} className="px-5 py-3 rounded-xl font-bold text-center mt-2"
                        style={{ backgroundColor: '#222831', color: '#FFFFFF' }}>Get Started</Link>
                </div>
            )}
        </nav>
    );
}
