interface TestimonialCardProps {
    quote: string;
    author: string;
    role?: string;
    company?: string;
    image?: string;
    rating?: number;
}

export function TestimonialCard({ quote, author, role, company, image, rating = 5 }: TestimonialCardProps) {
    return (
        <div className="group relative rounded-2xl p-6 flex flex-col gap-5 bg-card border border-border
            transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-violet-100/50 hover:-translate-y-1">

            {/* Gradient corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-[6rem] rounded-tr-2xl
                bg-gradient-to-bl from-violet-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Quote icon */}
            <div className="w-8 h-8 text-primary/20">
                <svg viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8">
                    <path d="M10 8C5.6 8 2 11.6 2 16s3.6 8 8 8h1v-4h-1c-2.2 0-4-1.8-4-4s1.8-4 4-4c.6 0 1 0 1 0V8c0 0-.4 0-1 0zm12 0c-4.4 0-8 3.6-8 8s3.6 8 8 8h1v-4h-1c-2.2 0-4-1.8-4-4s1.8-4 4-4c.6 0 1 0 1 0V8c0 0-.4 0-1 0z"/>
                </svg>
            </div>

            {/* Stars */}
            <div className="flex gap-1">
                {Array.from({ length: rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4" viewBox="0 0 24 24"
                        fill="url(#star-grad)" stroke="none">
                        <defs>
                            <linearGradient id="star-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#f59e0b" />
                                <stop offset="100%" stopColor="#f97316" />
                            </linearGradient>
                        </defs>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                ))}
            </div>

            {/* Quote */}
            <blockquote className="text-sm leading-relaxed flex-1 text-foreground/80 font-medium">
                &ldquo;{quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
                {image ? (
                    <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-400 to-indigo-600 blur-[1px] scale-110 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                        <img src={image} alt={author}
                            className="relative w-10 h-10 rounded-full object-cover ring-2 ring-border group-hover:ring-primary/30 transition-all duration-300" />
                    </div>
                ) : (
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-primary font-bold text-sm
                        bg-gradient-to-br from-violet-100 to-indigo-100 border border-primary/20">
                        {author.charAt(0)}
                    </div>
                )}
                <div>
                    <div className="text-sm font-bold text-card-foreground">{author}</div>
                    {(role || company) && (
                        <div className="text-xs text-muted-foreground font-medium mt-0.5">
                            {role}{role && company ? ' · ' : ''}{company}
                        </div>
                    )}
                </div>
                {company && (
                    <div className="ml-auto px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-[10px] font-bold tracking-wide border border-border">
                        {company}
                    </div>
                )}
            </div>
        </div>
    );
}
