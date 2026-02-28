import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Refund Policy | Code Swayam",
    description: "Refund Policy for Code Swayam SaaS Ecosystem.",
});

export default function RefundPolicyPage() {
    return (
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white/5 shadow-2xl rounded-2xl border border-white/10 my-12 backdrop-blur-md">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Refund Policy
            </h1>

            <div className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-blue-400">
                <p className="text-gray-300 mb-6 text-lg">Last updated: {new Date().toLocaleDateString()}</p>

                <section className="mb-10 hover:bg-white/5 p-6 rounded-xl transition-colors duration-300">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="bg-blue-500/20 text-blue-400 p-2 rounded-lg text-sm">01</span>
                        Our Guarantee
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        We want you to be completely satisfied with your purchase. If you are not satisfied with our services for any reason, you may be eligible for a refund under the terms outlined below.
                    </p>
                </section>

                <section className="mb-10 hover:bg-white/5 p-6 rounded-xl transition-colors duration-300">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="bg-purple-500/20 text-purple-400 p-2 rounded-lg text-sm">02</span>
                        Eligibility for Refunds
                    </h2>
                    <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-4">
                        <li><strong className="text-gray-200">Digital Courses:</strong> We offer a 14-day money-back guarantee on all uncompleted digital courses. If you have progressed past 20% of the course, standard refunds do not apply.</li>
                        <li><strong className="text-gray-200">Subscription Services:</strong> Subscriptions can be canceled at any time. We do not provide prorated refunds for canceled subscriptions. You will retain access until the end of your billing cycle.</li>
                    </ul>
                </section>

                <section className="mb-10 hover:bg-white/5 p-6 rounded-xl transition-colors duration-300">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="bg-green-500/20 text-green-400 p-2 rounded-lg text-sm">03</span>
                        How to Request a Refund
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        To request a refund, please contact our support team at <a href="mailto:support@codeswayam.com">support@codeswayam.com</a> with your order number and the reason for your request. We aim to process all valid refund requests within 5-7 business days.
                    </p>
                </section>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": "Refund Policy - Code Swayam",
                            "url": "https://codeswayam.com/refund-policy",
                            "description": "Refund Policy for Code Swayam SaaS Ecosystem.",
                        })
                    }}
                />
            </div>
        </div>
    );
}
