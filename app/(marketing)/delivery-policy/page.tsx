import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Delivery Policy | Code Swayam",
    description: "Delivery Policy for Code Swayam SaaS Ecosystem.",
});

export default function DeliveryPolicyPage() {
    return (
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white/5 shadow-2xl rounded-2xl border border-white/10 my-12 backdrop-blur-md">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Delivery Policy
            </h1>

            <div className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-blue-400">
                <p className="text-gray-300 mb-6 text-lg">Last updated: {new Date().toLocaleDateString()}</p>

                <section className="mb-10 hover:bg-white/5 p-6 rounded-xl transition-colors duration-300">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="bg-blue-500/20 text-blue-400 p-2 rounded-lg text-sm">01</span>
                        Digital Product Delivery
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        All our products (courses, software subscriptions) are digital and delivered immediately upon successful payment confirmation.
                    </p>
                </section>

                <section className="mb-10 hover:bg-white/5 p-6 rounded-xl transition-colors duration-300">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="bg-purple-500/20 text-purple-400 p-2 rounded-lg text-sm">02</span>
                        Accessing Your Purchase
                    </h2>
                    <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-4">
                        <li>You will receive an email confirmation with a link to access your product.</li>
                        <li>Your product will also be available globally across the Code Swayam ecosystem by logging into your account dashboard.</li>
                    </ul>
                </section>

                <section className="mb-10 hover:bg-white/5 p-6 rounded-xl transition-colors duration-300">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="bg-green-500/20 text-green-400 p-2 rounded-lg text-sm">03</span>
                        Delivery Issues
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        If you do not receive an email or cannot access your purchase within 24 hours of payment, please check your spam folder. If the problem persists, contact our support team at <a href="mailto:support@codeswayam.com">support@codeswayam.com</a>. We will verify your payment and manually grant access.
                    </p>
                </section>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": "Delivery Policy - Code Swayam",
                            "url": "https://codeswayam.com/delivery-policy",
                            "description": "Delivery Policy for Code Swayam SaaS Ecosystem.",
                        })
                    }}
                />
            </div>
        </div>
    );
}
