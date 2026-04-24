import type { Metadata } from 'next';
import Image from 'next/image';
import { constructMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/HeroSection';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = constructMetadata({
    title: 'Our Team — Code Swayam',
    description: 'Meet the talented team building the future of software development.',
});

const teamMembers = [
    {
        name: 'Rajesh Kumar',
        role: 'Founder & CEO',
        bio: '15+ years in SaaS & software development. Led teams at top tech companies.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400',
        social: { twitter: '#', linkedin: '#', github: '#' },
    },
    {
        name: 'Priya Singh',
        role: 'CTO & Co-Founder',
        bio: 'Full-stack architect. Expert in scalable systems & cloud infrastructure.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400',
        social: { twitter: '#', linkedin: '#', github: '#' },
    },
    {
        name: 'Amit Patel',
        role: 'Lead Software Architect',
        bio: 'Node.js expert. Built systems serving 10M+ users.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400',
        social: { twitter: '#', linkedin: '#', github: '#' },
    },
    {
        name: 'Sarah Johnson',
        role: 'Head of Design',
        bio: 'Product design leader. Passionate about UX and accessibility.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400',
        social: { twitter: '#', linkedin: '#' },
    },
    {
        name: 'David Lee',
        role: 'VP Engineering',
        bio: 'Led engineering teams across multiple startups.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400',
        social: { twitter: '#', linkedin: '#', github: '#' },
    },
    {
        name: 'Emily Chen',
        role: 'Product Manager',
        bio: 'Builds products users love. Growth & strategy expert.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400',
        social: { twitter: '#', linkedin: '#' },
    },
];

const values = [
    {
        title: 'Excellence',
        description: 'We strive for excellence in everything we do, from code quality to customer service.',
        icon: '🏆',
    },
    {
        title: 'Innovation',
        description: 'We embrace new technologies and constantly push the boundaries of what\'s possible.',
        icon: '💡',
    },
    {
        title: 'Integrity',
        description: 'We operate with complete transparency and make decisions guided by our values.',
        icon: '🛡️',
    },
    {
        title: 'Collaboration',
        description: 'We believe in the power of teamwork and foster a culture of open communication.',
        icon: '🤝',
    },
];

export default function TeamPage() {
    return (
        <div className="w-full">
            {/* Hero */}
            <HeroSection
                title="The people behind"
                titleHighlight="Code Swayam"
                subtitle="Our Team"
                description="Talented engineers, designers, and product minds building the future of software with passion and precision."
            />

            {/* Mission Section */}
            <Section variant="light" padding="xl">
                <Container maxWidth="2xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                        <div className="order-2 md:order-1 relative">
                            {/* Decorative background for the mission statement */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-indigo-500/5 rounded-3xl -z-10" />
                            <div className="section-badge mb-4"><span>🎯</span> Our Mission</div>
                            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                Building software that <span className="text-primary">matters.</span>
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-6 font-medium">
                                To empower businesses with world-class software solutions. We believe in building products that are not just functional, but delightful to use.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our team combines decades of experience in building scalable systems, beautiful interfaces, and products that users actually love.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 relative aspect-square rounded-3xl overflow-hidden shadow-2xl animate-float">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent z-10" />
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                alt="Team collaboration"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Values Grid */}
                    <div>
                        <div className="text-center mb-12">
                            <div className="section-badge mb-4"><span>✨</span> Core Principles</div>
                            <h3 className="text-3xl md:text-5xl font-black text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                What drives <span className="gradient-text-static">us</span>
                            </h3>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, i) => (
                                <div key={i} className="premium-card p-8 group hover:-translate-y-2 transition-transform duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                                        {value.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Team Roster */}
            <Section variant="dark" padding="xl">
                <Container maxWidth="2xl">
                    <div className="text-center mb-16">
                        <div className="section-badge border-white/20 text-white bg-white/10 mb-4"><span>👋</span> Say Hello</div>
                        <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            Leadership Team
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, i) => (
                            <div key={i} className="group glass-dark rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                                {/* Image Container with Gradient Overlay */}
                                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900/50">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent z-10 opacity-80" />
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    {/* Role Badge floating on image */}
                                    <div className="absolute bottom-4 left-6 z-20">
                                        <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-foreground text-xs font-bold shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                                            {member.role}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 relative">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-foreground transition-colors">{member.name}</h3>
                                    <p className="text-slate-300 text-sm mb-6 leading-relaxed line-clamp-2">{member.bio}</p>

                                    {/* Social Links */}
                                    <div className="flex gap-3 pt-4 border-t border-white/10">
                                        {member.social.twitter && (
                                            <a href={member.social.twitter} className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 11-13.6 7.74L13 17a5 5 0 1 1 0-10h2V3z" />
                                                </svg>
                                            </a>
                                        )}
                                        {member.social.linkedin && (
                                            <a href={member.social.linkedin} className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 3a9.75 9.75 0 0 1 3 9.5m-1.5 6.5H2M21 2h-2a4 4 0 0 0-4 4v7a4 4 0 0 0 4 4h2V2z" />
                                                </svg>
                                            </a>
                                        )}
                                        {member.social.github && (
                                            <a href={member.social.github} className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* CTA Section */}
            <CTASection
                headline="Join our mission"
                description="We're always looking for talented individuals to join our growing team. Check out our open positions."
                buttonText="View Careers"
                buttonHref="/careers"
                secondaryButtonText="Learn About Us"
                secondaryButtonHref="/about"
            />
        </div>
    );
}
