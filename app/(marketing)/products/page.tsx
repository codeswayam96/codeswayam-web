import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SaaS Products | Code Swayam',
    description: 'Explore Auraflow, ChatLift, MailTracker and our full portfolio of SaaS products hosted on subdomains.',
};

import { getSaasProducts } from '@/lib/data';

export default async function ProductsPage() {
    const products = await getSaasProducts();
    return (
        <div style={{ backgroundColor: '#FFFFFF', color: '#111827' }}>
            {/* Header */}
            <section className="relative overflow-hidden bg-gray-50 py-28 border-b border-gray-100">
                <div className="absolute inset-0 pointer-events-none flex justify-center pb-32" aria-hidden>
                    <div className="w-[600px] h-[300px] opacity-10 blur-[100px]"
                        style={{ background: '#00ADB5' }} />
                </div>
                <div className="relative max-w-5xl mx-auto px-6 text-center">
                    <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#00ADB5' }}>SaaS Portfolio</div>
                    <h1 className="text-5xl font-bold tracking-tight mb-6 text-black">
                        The Code Swayam Ecosystem
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto text-gray-500">
                        A unified suite of 20+ independent SaaS products. <br />Pick the specific tools your business needs to grow.
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((p) => (
                        <div key={p.name} className="flex flex-col bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                                    {p.tag}
                                </span>
                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${p.status === 'Live' ? 'bg-green-50 text-green-600' : p.status === 'Beta' ? 'bg-yellow-50 text-yellow-600' : 'bg-gray-50 text-gray-400'}`}>
                                    {p.status}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-black">{p.name}</h3>
                            <p className="text-sm leading-relaxed mb-8 flex-1 text-gray-500">
                                {p.description}
                            </p>
                            {p.status !== 'Soon' ? (
                                <a href={`https://${p.domain}`} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex justify-center w-full py-3 rounded-lg border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                                    Launch App &rarr;
                                </a>
                            ) : (
                                <span className="w-full py-3 text-center text-sm font-semibold text-gray-400 bg-gray-50 rounded-lg">
                                    In Development
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
