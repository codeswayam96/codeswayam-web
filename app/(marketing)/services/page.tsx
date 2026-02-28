import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'IT Services | Code Swayam',
    description: 'Expert custom web development, backend engineering, and cloud infrastructure services by Code Swayam.',
};

const services = [
    { icon: '🖥️', title: 'Custom Web Apps', desc: 'We build rock-solid Next.js and React applications with a focus on performance, SEO, and scalable architecture.' },
    { icon: '⚙️', title: 'Backend Engineering', desc: 'Robust NestJS APIs, microservices, WebSocket integrations, and BullMQ background job queues.' },
    { icon: '☁️', title: 'Cloud Infrastructure', desc: 'End-to-end deployment, autoscaling, and CI/CD pipelines on AWS, GCP, or Vercel.' },
    { icon: '🔐', title: 'Auth & Security', desc: 'Multi-tenant SSO systems, OAuth integrations, and RBAC policies.' },
    { icon: '📊', title: 'Analytics & BI', desc: 'Custom dashboards, event tracking, and data pipeline engineering.' },
    { icon: '🤖', title: 'AI Integration', desc: 'LLM-powered features — from chatbots to document intelligence — integrated directly into your product.' },
];

export default function ServicesPage() {
    return (
        <div style={{ backgroundColor: '#F9FAFB', color: '#111827' }}>
            {/* Hero */}
            <section className="relative overflow-hidden bg-white border-b border-gray-100">
                <div className="absolute inset-0 pointer-events-none" aria-hidden>
                    <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-[80px]"
                        style={{ background: '#00ADB5' }} />
                </div>
                <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
                    <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#00ADB5' }}>Agency Services</div>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-8 text-black">
                        Engineering that <span style={{ color: '#00ADB5' }}>scales</span>
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto mb-10 text-gray-500">
                        End-to-end development services from a team that has shipped 20+ production SaaS products. We bring enterprise-grade engineering to ambitious startups.
                    </p>
                    <Link href="mailto:hello@codeswayam.com"
                        className="inline-block px-8 py-4 rounded-xl font-bold text-white shadow-lg hover:-translate-y-1 transition-transform"
                        style={{ backgroundColor: '#222831' }}>
                        Book a Technical Scoping Call
                    </Link>
                </div>
            </section>

            {/* Services Grid */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s) => (
                        <div key={s.title} className="rounded-2xl p-8 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-3xl mb-4 bg-gray-50 w-12 h-12 flex items-center justify-center rounded-lg">{s.icon}</div>
                            <h3 className="font-bold text-lg mb-3 text-gray-900">{s.title}</h3>
                            <p className="text-sm leading-relaxed text-gray-500">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Light CTA */}
            <section className="bg-white border-t border-gray-100 py-32 text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-6 text-gray-900">Need a custom feature?</h2>
                    <p className="text-lg text-gray-500 mb-10">
                        Whether you need a brand new SaaS product built from scratch or an extra hand scaling your current application — we've got you covered.
                    </p>
                    <Link href="mailto:hello@codeswayam.com"
                        className="inline-block px-8 py-4 rounded-xl font-bold text-white shadow-md hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: '#00ADB5' }}>
                        Get in touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
