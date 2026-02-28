import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Terms & Conditions | Code Swayam",
    description: "Terms and Conditions for Code Swayam SaaS Ecosystem.",
});

export default function TermsAndConditionsPage() {
    return (
        <div style={{ backgroundColor: '#F9FAFB', color: '#111827', minHeight: '100vh' }}>
            {/* Header */}
            <section className="relative overflow-hidden bg-white border-b border-gray-100">
                <div className="absolute inset-0 pointer-events-none" aria-hidden>
                    <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-5 blur-[80px]"
                        style={{ background: '#00ADB5' }} />
                </div>
                <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
                    <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#00ADB5' }}>Legal</div>
                    <h1 className="text-5xl font-bold tracking-tight mb-6 text-black">
                        Terms & Conditions
                    </h1>
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white shadow-sm rounded-2xl border border-gray-100 my-12">
                <div className="prose prose-lg max-w-none prose-headings:text-black prose-a:text-[#00ADB5] prose-p:text-gray-600 prose-ul:text-gray-600">
                    <p className="text-gray-500 mb-6 font-medium italic">Last updated: {new Date().toLocaleDateString()}</p>

                    <section className="mb-10 p-6 rounded-xl border border-gray-50 bg-gray-50/50 hover:bg-gray-50 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-black">
                            <span className="bg-white text-[#00ADB5] border border-gray-200 px-3 py-1 rounded-lg text-sm font-bold shadow-sm">01</span>
                            Agreement to Terms
                        </h2>
                        <p className="leading-relaxed">
                            By accessing or using our services, you agree to be bound by these Terms and Conditions and our Privacy Policy.
                            If you disagree with any part of the terms, then you may not access the service.
                        </p>
                    </section>

                    <section className="mb-10 p-6 rounded-xl border border-gray-50 bg-gray-50/50 hover:bg-gray-50 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-black">
                            <span className="bg-white text-[#00ADB5] border border-gray-200 px-3 py-1 rounded-lg text-sm font-bold shadow-sm">02</span>
                            Use License
                        </h2>
                        <p className="leading-relaxed mb-4">
                            Permission is granted to temporarily download one copy of the materials (information or software) on Code Swayam's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-[#00ADB5]">
                            <li><span className="text-gray-900">You may not modify or copy the materials.</span></li>
                            <li><span className="text-gray-900">You may not use the materials for any commercial purpose.</span></li>
                            <li><span className="text-gray-900">You may not attempt to decompile or reverse engineer any software contained on the website.</span></li>
                        </ul>
                    </section>

                    <section className="mb-10 p-6 rounded-xl border border-gray-50 bg-gray-50/50 hover:bg-gray-50 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-black">
                            <span className="bg-white text-[#00ADB5] border border-gray-200 px-3 py-1 rounded-lg text-sm font-bold shadow-sm">03</span>
                            Disclaimer
                        </h2>
                        <p className="leading-relaxed">
                            The materials on Code Swayam's website are provided on an 'as is' basis. Code Swayam makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "WebPage",
                                "name": "Terms and Conditions - Code Swayam",
                                "url": "https://codeswayam.com/terms-and-conditions",
                                "description": "Terms and Conditions for Code Swayam SaaS Ecosystem.",
                            })
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
