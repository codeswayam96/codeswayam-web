import Link from 'next/link';
import type { Metadata } from 'next';
import DashboardMockup from '@/components/DashboardMockup';

import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
    title: 'Code Swayam — Build. Launch. Scale.',
    description: 'The Ultimate Ecosystem for Digital Growth & Development.',
});

import { getSaasProducts, getBlogPosts } from '@/lib/data';

const services = [
    { title: 'Custom SaaS Architecture', desc: 'End-to-end development using scalable multi-tenant architectures and modern frameworks.' },
    { title: 'Advanced Backend Engineering', desc: 'Secure, high-performance backends utilizing Node.js, NestJS, and optimized relational databases.' },
    { title: 'Full-Stack Web Development', desc: 'Lightning-fast, SEO-optimized web applications built with the MERN stack and Next.js.' },
    { title: 'UI/UX Design', desc: 'User-centric, conversion-focused interfaces that look beautiful and perform flawlessly.' },
];

export default async function HomePage() {
    const saasProducts = await getSaasProducts();
    const blogPosts = await getBlogPosts();

    return (
        <div style={{ backgroundColor: '#FFFFFF', color: '#111827' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Code Swayam",
                        "url": "https://codeswayam.com",
                        "logo": "https://codeswayam.com/logo.png",
                        "sameAs": [
                            "https://twitter.com/codeswayam",
                            "https://github.com/codeswayam96"
                        ],
                        "description": "The Ultimate Ecosystem for Digital Growth & Development."
                    })
                }}
            />

            {/* 1. THE NEW CENTERED SAAS HERO SECTION */}
            <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden text-center bg-white border-b border-gray-100 flex flex-col items-center">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-[0.15] blur-[100px] pointer-events-none animate-pulse-glow"
                    style={{ background: 'radial-gradient(circle, #00ADB5 0%, transparent 70%)' }}></div>

                <div className="relative max-w-5xl mx-auto px-6 z-30 w-full flex flex-col items-center">

                    {/* Announcement Pill */}
                    <Link href="/blog" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors mb-8 shadow-sm tracking-tight animate-fade-up">
                        <span className="flex h-2 w-2 rounded-full bg-[#00ADB5]"></span>
                        Introducing Code Swayam 2.0 <span className="text-gray-400">&rarr;</span>
                    </Link>

                    {/* Massive Centered Headline */}
                    <h1 className="text-6xl md:text-[80px] font-bold leading-[1.05] mb-8 text-[#111827] max-w-4xl tracking-tighter animate-fade-up-delayed">
                        The Ultimate Ecosystem for <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#222831] via-[#00ADB5] to-[#222831]">Digital Growth</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed tracking-tight animate-fade-up-delayed-2">
                        Discover powerful SaaS tools, hire elite IT talent for your next custom build, or level up your coding skills.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto tracking-tight animate-fade-up-delayed-2">
                        <Link href="/products"
                            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white shadow-lg hover:-translate-y-0.5 transition-transform"
                            style={{ backgroundColor: '#222831' }}>
                            Explore Our Products
                        </Link>

                        {/* Hover Preview Wrapper for IT Services */}
                        <div className="relative group/btn w-full sm:w-auto">
                            <Link href="/services"
                                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-gray-700 bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                View IT Services <span className="text-gray-400 ml-1">→</span>
                            </Link>

                            {/* Beautiful Hover Preview Panel (Hidden on very small mobile) */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[380px] bg-white border border-gray-100 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.02)] opacity-0 invisible group-hover/btn:opacity-100 group-hover/btn:visible group-hover/btn:translate-y-0 translate-y-4 transition-all duration-300 ease-out z-50 p-5 text-left hidden sm:block before:absolute before:-top-4 before:left-0 before:w-full before:h-4">
                                {/* Arrow pointing up */}
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45 rounded-tl-sm"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="flex h-2 w-2 rounded-full bg-[#00ADB5]"></span>
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Our Expertise</h4>
                                    </div>
                                    <div className="space-y-4">
                                        {services.slice(0, 3).map((s, idx) => (
                                            <Link key={idx} href="/services" className="flex gap-4 items-start group/item">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[#00ADB5] group-hover/item:scale-110 group-hover/item:bg-[#00ADB5] group-hover/item:text-white transition-all duration-300 shadow-sm">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        {idx === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>}
                                                        {idx === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>}
                                                        {idx === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>}
                                                    </svg>
                                                </div>
                                                <div className="flex-1 cursor-pointer">
                                                    <div className="text-sm font-bold text-gray-900 mb-1 group-hover/item:text-[#00ADB5] transition-colors">{s.title}</div>
                                                    <div className="text-xs text-gray-500 leading-relaxed line-clamp-2">{s.desc}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <Link href="/services" className="mt-5 pt-4 border-t border-gray-50 flex justify-between items-center text-xs font-bold text-gray-400 pb-1 group/link cursor-pointer hover:text-gray-600">
                                        <span>Click to view all services</span>
                                        <span className="text-[#00ADB5] flex items-center gap-1 group-hover/link:translate-x-1 transition-transform">Explore &rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dashboard Mockup Illustration */}
                <div className="relative mt-24 max-w-5xl mx-auto px-6 w-full z-20 animate-fade-up-delayed-2">
                    <DashboardMockup />
                </div>
            </section>

            {/* 2. THE SAAS PORTFOLIO */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4" style={{ color: '#111827' }}>Software Built to Scale Your Business.</h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">From social media dominance to workflow automation, explore our suite of interconnected tools.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {saasProducts.filter(p => p.featured === true || p.featured === 'true').slice(0, 3).map((p, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow flex flex-col">
                                <div className="text-4xl mb-6 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center border border-gray-100">
                                    {p.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-black">{p.name}</h3>
                                <p className="text-gray-500 mb-8 flex-1 leading-relaxed">{p.description}</p>
                                <a href={`https://${p.domain}`} target="_blank" rel="noopener noreferrer"
                                    className="font-bold inline-flex items-center gap-2 group" style={{ color: '#00ADB5' }}>
                                    Launch App <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link href="/products" className="inline-flex items-center gap-2 font-bold text-gray-800 hover:text-[#00ADB5] transition-colors">
                            View all 20+ SaaS Products →
                        </Link>
                    </div>
                </div>
            </section>

            {/* 3. PREMIUM IT SERVICES */}
            <section className="py-24" style={{ backgroundColor: '#222831', color: '#FFFFFF' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 justify-between items-start">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                                Enterprise-Grade <br /><span style={{ color: '#00ADB5' }}>IT & Development</span> Services.
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-10 border-l-2 pl-4 border-gray-700">
                                We don't just build our own products; we build yours. Partner with us for robust, scalable custom software.
                            </p>
                            <Link href="mailto:hello@codeswayam.com" className="inline-flex py-4 px-8 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg hover:-translate-y-1">
                                Start Your Custom Project
                            </Link>
                        </div>

                        <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
                            {services.map((s, i) => (
                                <div key={i} className="bg-[#393E46] p-8 rounded-2xl border border-gray-700">
                                    <div className="text-[#00ADB5] mb-4">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* 5. THE CENTRAL INSIGHTS HUB (SEO BLOG) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="text-4xl font-bold mb-4" style={{ color: '#111827' }}>Latest Insights & Engineering Updates.</h2>
                            <p className="text-lg text-gray-500">From code to conversion — strategies from our engineering team.</p>
                        </div>
                        <Link href="/blog" className="hidden sm:inline-flex items-center gap-2 font-bold text-[#00ADB5] hover:underline">
                            Read the Blog →
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12 sm:mb-0">
                        {blogPosts.filter(p => p.featured === true || p.featured === 'true').slice(0, 3).map((post, i) => (
                            <Link key={i} href={`/blog/${post.saas}/${post.slug}`} className="block group">
                                <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                                    {/* Mock image area */}
                                    <div className="h-48 bg-gray-100 w-full relative overflow-hidden flex items-center justify-center">
                                        <span className="text-gray-300 text-5xl">✦</span>
                                        <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-transparent mix-blend-multiply group-hover:scale-105 transition-transform duration-500"></div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <span className="text-xs font-bold text-[#00ADB5] mb-3 uppercase tracking-wider">{post.tag}</span>
                                        <h3 className="text-xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-[#00ADB5] transition-colors">{post.title}</h3>
                                        <div className="mt-auto text-sm font-bold text-gray-400 group-hover:text-gray-600 transition-colors">
                                            Read article <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 text-center sm:hidden">
                        <Link href="/blog" className="inline-flex items-center gap-2 font-bold text-[#00ADB5]">
                            Read the Blog →
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
