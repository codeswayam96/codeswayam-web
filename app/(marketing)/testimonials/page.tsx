import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/HeroSection';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { TestimonialCard } from '@/components/TestimonialCard';

export const metadata: Metadata = constructMetadata({
    title: 'Testimonials — Code Swayam',
    description: 'What our clients say about working with Code Swayam.',
});

const testimonials = [
    {
        quote: "Code Swayam transformed our entire product vision into reality. Their technical expertise and attention to detail is exceptional.",
        author: "Sarah Chen",
        role: "CEO & Founder",
        company: "TechStart Inc",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400",
        rating: 5,
    },
    {
        quote: "Working with them was a game-changer. They delivered a world-class SaaS platform on time and within budget.",
        author: "James Wilson",
        role: "CTO",
        company: "Digital Innovations",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400",
        rating: 5,
    },
    {
        quote: "Professional, knowledgeable, and genuinely invested in our success. Highly recommend for any serious project.",
        author: "Emily Rodriguez",
        role: "Product Manager",
        company: "CloudStart Labs",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400",
        rating: 5,
    },
    {
        quote: "The best decision we made was partnering with Code Swayam. Their infrastructure expertise is unmatched.",
        author: "Michael Park",
        role: "VP Engineering",
        company: "FinSecure Corp",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400",
        rating: 5,
    },
    {
        quote: "Exceptional team with deep technical knowledge. They became an extension of our team and delivered outstanding results.",
        author: "Jessica Lee",
        role: "Founder",
        company: "SalesPro",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400",
        rating: 5,
    },
    {
        quote: "Code quality is pristine, architecture is scalable, and their communication is crystal clear. A+ experience.",
        author: "David Kumar",
        role: "CTO",
        company: "DataFlow Solutions",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400",
        rating: 5,
    },
    {
        quote: "They understood our complex requirements and delivered a solution that exceeded expectations.",
        author: "Rachel Thompson",
        role: "CEO",
        company: "IntelliGrow",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400",
        rating: 5,
    },
    {
        quote: "Outstanding technical skills combined with excellent project management. Couldn't ask for better partners.",
        author: "Alex Chen",
        role: "Product Lead",
        company: "FitFlow",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400",
        rating: 5,
    },
    {
        quote: "Invested heavily in understanding our business before making technical recommendations. True partners.",
        author: "Nicole Zhang",
        role: "CFO",
        company: "Growth Metrics",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400",
        rating: 5,
    },
];

export default function TestimonialsPage() {
    return (
        <div className="w-full">
            {/* Hero */}
            <HeroSection
                title="Loved by Our Clients"
                subtitle="Testimonials"
                description="See what industry leaders and innovators say about working with Code Swayam."
                backgroundVariant="gradient-cyan"
            />

            {/* Testimonials Grid */}
            <Section variant="light" padding="xl">
                <Container maxWidth="2xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, i) => (
                            <TestimonialCard
                                key={i}
                                quote={testimonial.quote}
                                author={testimonial.author}
                                role={testimonial.role}
                                company={testimonial.company}
                                image={testimonial.image}
                                rating={testimonial.rating}
                            />
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Stats */}
            <Section variant="dark" padding="xl">
                <Container maxWidth="2xl">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Why Clients Choose Us</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-4xl font-bold text-cyan-400 mb-2">4.9★</div>
                                <p className="text-slate-300">Average Rating</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
                                <p className="text-slate-300">Would Recommend</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
                                <p className="text-slate-300">On-Time Delivery</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-cyan-400 mb-2">150+</div>
                                <p className="text-slate-300">Projects Completed</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
