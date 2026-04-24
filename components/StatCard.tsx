interface StatCardProps {
    value: string;
    label: string;
    sublabel?: string;
    icon?: React.ReactNode;
}

export function StatCard({ value, label, sublabel }: StatCardProps) {
    return (
        <div className="group text-center p-7 rounded-2xl bg-card border border-border
            transition-all duration-300 hover:border-primary/30
            hover:shadow-xl hover:shadow-violet-100/50 hover:-translate-y-1">

            {/* Value */}
            <div className="text-4xl md:text-5xl font-black mb-2 gradient-text-static tracking-tight">
                {value}
            </div>

            {/* Label */}
            <div className="text-sm font-bold text-foreground mb-0.5">{label}</div>

            {/* Sublabel */}
            {sublabel && (
                <div className="text-xs text-muted-foreground font-medium">{sublabel}</div>
            )}

            {/* Bottom accent line */}
            <div className="mt-4 h-0.5 rounded-full bg-gradient-to-r from-transparent via-primary/30 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
    );
}
