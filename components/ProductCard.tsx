import Link from 'next/link';

interface ProductCardProps {
    title: string;
    description: string;
    features?: string[];
    ctaText?: string;
    ctaHref?: string;
    badges?: string[];
    isActive?: boolean;
}

export function ProductCard({ title, description, features, ctaText = 'Launch App', ctaHref = '#', badges, isActive = false }: ProductCardProps) {
    return (
        <div className={`group relative rounded-2xl p-6 bg-card border flex flex-col
            transition-all duration-300 hover:-translate-y-1
            ${isActive
                ? 'border-primary/40 shadow-glow'
                : 'border-border hover:border-primary/30 hover:shadow-xl hover:shadow-violet-100/50'
            }`}>

            {/* Gradient top border accent */}
            {isActive && (
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            )}

            {/* Header */}
            <div className="flex justify-between items-start mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110
                    ${isActive ? 'bg-primary/15 text-primary' : 'bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                </div>
                {isActive && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wide border border-emerald-200">
                        Live
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1">
                <h3 className="text-lg font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground mb-5 flex-1">
                    {description}
                </p>

                {features && features.length > 0 && (
                    <ul className="mb-5 space-y-2">
                        {features.slice(0, 3).map((f, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                                    <svg className="w-2.5 h-2.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                {f}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Badges */}
            {badges && badges.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4 pb-4 border-t border-border">
                    {badges.map((badge, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 rounded-full border border-violet-100 bg-violet-50 text-violet-700 text-[11px] font-bold tracking-wide">
                            {badge}
                        </span>
                    ))}
                </div>
            )}

            <Link href={ctaHref}
                className={`w-full py-3 mt-2 text-sm font-semibold rounded-xl text-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring
                    ${isActive
                        ? 'btn-primary'
                        : 'bg-muted text-foreground border border-border hover:bg-primary/5 hover:border-primary/30 hover:text-primary'
                    }`}>
                {ctaText} →
            </Link>
        </div>
    );
}
