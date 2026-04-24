import type { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/HeroSection';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';

export const metadata: Metadata = constructMetadata({
    title: 'Case Studies — Code Swayam',
    description: 'See how we helped leading companies transform their business with custom software solutions.',
});

const caseStudies = [
    {
        title: 'E-Commerce Platform Scaling',
        company: 'TechRetail Inc',
        client: 'Sarah Chen',
        clientRole: 'CEO',
        description: 'How we helped scale an e-commerce platform from 100K to 10M+ monthly users.',
        results: { metric1: '10M+', metric1Label: 'Monthly Users', metric2: '99.99%', metric2Label: 'Uptime' },
        tags: ['Backend Architecture', 'Database Optimization', 'DevOps'],
        color: 'from-cyan-500',
    },
    {
        title: 'Real-time Analytics Engine',
        company: 'DataFlow Solutions',
        client: 'James Wilson',
        clientRole: 'CTO',
        description: 'Built a real-time analytics engine processing 1B events daily with sub-second latency.',
        results: { metric1: '1B', metric1Label: 'Events/Day', metric2: '50ms', metric2Label: 'Avg Latency' },
        tags: ['Real-time Processing', 'Big Data', 'Cloud Infrastructure'],
        color: 'from-purple-500',
    },
    {
        title: 'AI-Powered SaaS Platform',
        company: 'IntelliGrow',
        client: 'Emily Rodriguez',
        clientRole: 'Founder',
        description: 'Developed a machine learning platform for business intelligence with custom ML models.',
        results: { metric1: '500K+', metric1Label: 'Active Users', metric2: '95%', metric2Label: 'Accuracy' },
        tags: ['Machine Learning', 'Full-Stack Development', 'API Design'],
        color: 'from-emerald-500',
    },
    {
        title: 'Mobile App Development',
        company: 'FitFlow',
        client: 'Alex Thompson',
        clientRole: 'Product Manager',
        description: 'Built a cross-platform fitness app with real-time sync and offline capabilities.',
        results: { metric1: '4.8★', metric1Label: 'App Rating', metric2: '500K', metric2Label: 'Downloads' },
        tags: ['React Native', 'Mobile App', 'Cloud Sync'],
        color: 'from-amber-500',
    },
    {
        title: 'Enterprise Dashboard',
        company: 'FinSecure Corp',
        client: 'Michael Park',
        clientRole: 'VP Engineering',
        description: 'Developed a comprehensive enterprise dashboard for financial data visualization.',
        results: { metric1: '100+', metric1Label: 'Enterprise Clients', metric2: '24/7', metric2Label: 'Monitoring' },
        tags: ['Data Visualization', 'Enterprise', 'Security'],
        color: 'from-pink-500',
    },
    {
        title: 'Multi-tenant CRM System',
        company: 'SalesPro',
        client: 'Jessica Lee',
        clientRole: 'CEO',
        description: 'Built a scalable multi-tenant CRM system for sales teams across 50+ countries.',
        results: { metric1: '10K+', metric1Label: 'Organizations', metric2: '40%', metric2Label: 'Time Saved' },
        tags: ['Multi-tenant Architecture', 'SaaS', 'Localization'],
        color: 'from-blue-500',
    },
];

export default function CaseStudiesPage() {
    return (
        <div className="w-full">
            {/* Hero */}
            <HeroSection
                title="Success Stories"
                subtitle="Case Studies"
                description="Discover how we've helped companies transform their business with innovative software solutions."
                backgroundVariant="gradient-cyan"
            />

            {/* Case Studies Grid */}
            <Section variant="light" padding="xl">
                <Container maxWidth="2xl">
                    <div className="grid gap-8">
                        {caseStudies.map((study, i) => (
                            <Link key={i} href={`/case-studies/${study.company.toLowerCase().replace(/\s+/g, '-')}`}>
                                <div className="group relative overflow-hidden rounded-2xl border border-slate-200 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl bg-white">
                                    {/* Gradient accent */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${study.color} to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                    <div className="relative p-8 md:p-10">
                                        {/* Header */}
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors mb-2">
                                                    {study.title}
                                                </h3>
                                                <p className="text-lg text-slate-600 font-semibold">{study.company}</p>
                                            </div>
                                            <svg className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </div>

                                        {/* Description */}
                                        <p className="text-slate-600 mb-6 leading-relaxed">
                                            {study.description}
                                        </p>

                                        {/* Results */}
                                        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 py-6 border-y border-slate-200">
                                            <div>
                                                <div className="text-3xl font-bold text-cyan-600 mb-1">{study.results.metric1}</div>
                                                <p className="text-sm text-slate-600">{study.results.metric1Label}</p>
                                            </div>
                                            <div>
                                                <div className="text-3xl font-bold text-purple-600 mb-1">{study.results.metric2}</div>
                                                <p className="text-sm text-slate-600">{study.results.metric2Label}</p>
                                            </div>
                                        </div>

                                        {/* Tags & CTA */}
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">
                                            <div className="flex flex-wrap gap-2">
                                                {study.tags.map((tag, j) => (
                                                    <span key={j} className="px-3 py-1 bg-cyan-500/10 text-cyan-600 text-sm font-medium rounded-full">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <span className="text-sm font-semibold text-cyan-600 group-hover:translate-x-2 transition-transform whitespace-nowrap">
                                                Read case study →
                                            </span>
                                        </div>

                                        {/* Client Info */}
                                        <div className="mt-6 pt-6 border-t border-slate-200 flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-cyan-100" />
                                            <div>
                                                <p className="font-semibold text-slate-900 text-sm">{study.client}</p>
                                                <p className="text-xs text-slate-500">{study.clientRole} at {study.company}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Stats Section */}
            <Section variant="dark" padding="xl">
                <Container maxWidth="2xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold text-cyan-400 mb-2">150+</div>
                            <p className="text-slate-300">Projects Delivered</p>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-cyan-400 mb-2">100+</div>
                            <p className="text-slate-300">Happy Clients</p>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-cyan-400 mb-2">500M+</div>
                            <p className="text-slate-300">Users Served</p>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-cyan-400 mb-2">15+</div>
                            <p className="text-slate-300">Years Experience</p>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
