import Link from 'next/link';
import { Container } from './Container';

interface CTASectionProps {
    headline: string;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    variant?: string;
}

export function CTASection({
    headline,
    description,
    buttonText = 'Get Started',
    buttonHref = '#',
    secondaryButtonText,
    secondaryButtonHref = '#',
}: CTASectionProps) {
    return (
        <section className="relative overflow-hidden py-28 px-5">
            {/* Dark mesh background */}
            <div className="absolute inset-0 mesh-dark" />
            <div className="absolute inset-0 dot-grid opacity-20" />

            {/* Glow blobs */}
            <div className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 rounded-full
                bg-violet-600/20 blur-3xl animate-blob-float" />
            <div className="pointer-events-none absolute -bottom-24 right-1/4 w-80 h-80 rounded-full
                bg-indigo-500/15 blur-3xl" style={{ animationDelay: '4s' }} />

            <Container maxWidth="2xl">
                <div className="relative z-10 max-w-4xl mx-auto text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                        bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest mb-7
                        border border-white/15 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                        Ready to level up?
                    </div>

                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {headline}
                    </h2>

                    {description && (
                        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-white/65">
                            {description}
                        </p>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={buttonHref}
                            className="btn-primary px-9 py-4 rounded-xl text-base animate-glow-pulse">
                            {buttonText}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                        {secondaryButtonText && (
                            <Link href={secondaryButtonHref}
                                className="btn-ghost-dark px-9 py-4 rounded-xl text-base">
                                {secondaryButtonText}
                            </Link>
                        )}
                    </div>

                    {/* Trust signals */}
                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-5 justify-center items-center text-white/50 font-medium">
                        {['No credit card required', '14-day free trial', '24/7 expert support'].map((t) => (
                            <div key={t} className="flex items-center gap-2 text-sm">
                                <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                {t}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
