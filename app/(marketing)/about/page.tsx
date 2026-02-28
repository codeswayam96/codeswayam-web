import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "About Us | Code Swayam",
    description: "Learn more about the team and mission behind Code Swayam.",
});

export default function AboutUsPage() {
    return (
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white shadow-sm border border-gray-100 rounded-2xl my-16 text-center">
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#00ADB5' }}>Our Mission</div>

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-8">
                Empowering Builders
            </h1>

            <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed mb-12 max-w-2xl text-left">
                <p>
                    At Code Swayam, we believe that software should be accessible, scalable, and beautifully designed.
                    We built this ecosystem not only to serve our own ambitious software products, but to provide an incubator
                    for developers and entrepreneurs looking to scale.
                </p>
                <p>
                    Whether you need a full SaaS platform engineered from the ground up, or a simple marketing tool to boost your audience,
                    our suite of tailored solutions has you covered. Thank you for being part of the journey.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 border-t border-gray-100 pt-12">
                <div className="flex flex-col items-center">
                    <div className="text-4xl font-black text-gray-900 mb-2">20+</div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">SaaS Products</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-4xl font-black text-gray-900 mb-2">10k+</div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">Active Users</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-4xl font-black text-gray-900 mb-2">99.9%</div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">Uptime SLA</div>
                </div>
            </div>
        </div>
    );
}
