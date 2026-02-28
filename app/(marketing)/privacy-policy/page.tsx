import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Privacy Policy | Code Swayam",
    description: "Privacy Policy for Code Swayam SaaS Ecosystem.",
});

export default function PrivacyPolicyPage() {
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
                        Privacy Policy
                    </h1>
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white shadow-sm rounded-2xl border border-gray-100 my-12">
                <div className="prose prose-lg max-w-none prose-headings:text-black prose-a:text-[#00ADB5] prose-p:text-gray-600 prose-ul:text-gray-600">
                    <p className="text-gray-500 mb-6 font-medium italic">Last updated: {new Date().toLocaleDateString()}</p>

                    <section className="mb-10 p-6 rounded-xl border border-gray-50 bg-gray-50/50 hover:bg-gray-50 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-black">
                            <span className="bg-white text-[#00ADB5] border border-gray-200 px-3 py-1 rounded-lg text-sm font-bold shadow-sm">01</span>
                            Introduction
                        </h2>
                        <p className="leading-relaxed">
                            Welcome to Code Swayam. We respect your privacy and are committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit our website
                            (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section className="mb-10 p-6 rounded-xl border border-gray-50 bg-gray-50/50 hover:bg-gray-50 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-black">
                            <span className="bg-white text-[#00ADB5] border border-gray-200 px-3 py-1 rounded-lg text-sm font-bold shadow-sm">02</span>
                            The Data We Collect About You
                        </h2>
                        <p className="leading-relaxed mb-4">
                            Personal data, or personal information, means any information about an individual from which that person can be identified.
                            It does not include data where the identity has been removed (anonymous data).
                        </p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-[#00ADB5]">
                            <li><strong className="text-gray-900">Identity Data</strong> includes first name, maiden name, last name, username or similar identifier.</li>
                            <li><strong className="text-gray-900">Contact Data</strong> includes billing address, email address and telephone numbers.</li>
                            <li><strong className="text-gray-900">Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
                            <li><strong className="text-gray-900">Usage Data</strong> includes information about how you use our website, products and services.</li>
                        </ul>
                    </section>

                    <section className="mb-10 p-6 rounded-xl border border-gray-50 bg-gray-50/50 hover:bg-gray-50 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-black">
                            <span className="bg-white text-[#00ADB5] border border-gray-200 px-3 py-1 rounded-lg text-sm font-bold shadow-sm">03</span>
                            How We Use Your Personal Data
                        </h2>
                        <p className="leading-relaxed">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-[#00ADB5]">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal obligation.</li>
                        </ul>
                    </section>

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "WebPage",
                                "name": "Privacy Policy - Code Swayam",
                                "url": "https://codeswayam.com/privacy-policy",
                                "description": "Privacy Policy for Code Swayam SaaS Ecosystem.",
                            })
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
