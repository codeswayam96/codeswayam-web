import Link from 'next/link';

interface HeroSectionProps {
    badge?: string;
    subtitle?: string;
    title: string;
    titleHighlight?: string;
    description: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    backgroundVariant?: string;
    children?: React.ReactNode;
}

export function HeroSection({
    badge,
    subtitle,
    title,
    titleHighlight,
    description,
    primaryButtonText = 'Get Started',
    primaryButtonHref = '/signup',
    secondaryButtonText,
    secondaryButtonHref = '/about',
    children,
}: HeroSectionProps) {
    const badgeText = badge || subtitle;

    return (
        <section className="relative w-full min-h-[90vh] flex items-center pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">

            {/* Mesh gradient background */}
            <div className="absolute inset-0 mesh-bg" />

            {/* Dot grid overlay */}
            <div className="absolute inset-0 dot-grid opacity-40" />

            {/* Animated blobs */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full animate-blob-float"
                style={{
                    background: 'radial-gradient(circle at 40% 40%, hsl(258 90% 60% / 0.18) 0%, hsl(280 85% 65% / 0.10) 40%, transparent 70%)',
                    filter: 'blur(1px)',
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full"
                style={{
                    background: 'radial-gradient(circle at 60% 60%, hsl(210 100% 56% / 0.12) 0%, transparent 70%)',
                    animationDelay: '3s',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 flex flex-col items-center text-center w-full">

                {/* Badge */}
                {badgeText && (
                    <div className="animate-fade-up-1 mb-7 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 shadow-sm">
                        <span className="relative flex items-center justify-center w-4 h-4">
                            <span className="animate-ping-slow absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-60" />
                            <span className="relative w-2 h-2 rounded-full bg-green-500" />
                        </span>
                        <span className="text-sm font-semibold text-foreground/80">{badgeText}</span>
                    </div>
                )}

                {/* Headline */}
                <h1 className="animate-fade-up-2 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-foreground mb-6 max-w-5xl leading-[1.08]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {title}{' '}
                    {titleHighlight && (
                        <span className="gradient-text">{titleHighlight}</span>
                    )}
                </h1>

                {/* Description */}
                <p className="animate-fade-up-3 text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed font-medium">
                    {description}
                </p>

                {/* CTAs */}
                <div className="animate-fade-up-4 flex flex-col sm:flex-row items-center gap-4 w-full justify-center sm:w-auto">
                    <Link
                        href={primaryButtonHref}
                        className="btn-primary w-full sm:w-auto px-8 py-3.5 rounded-xl text-base"
                    >
                        {primaryButtonText}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                    {secondaryButtonText && (
                        <Link
                            href={secondaryButtonHref}
                            className="btn-outline w-full sm:w-auto px-8 py-3.5 rounded-xl text-base"
                        >
                            {secondaryButtonText}
                        </Link>
                    )}
                </div>

                {/* Slot for logos or extra content */}
                {children && (
                    <div className="animate-fade-up-5 w-full mt-16 flex justify-center">
                        {children}
                    </div>
                )}
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </section>
    );
}
