import React from 'react';

export type FeatureColorTheme = 'primary' | 'green' | 'blue' | 'amber' | 'rose' | 'slate' | 'cyan' | 'purple';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    badges?: string[];
    statusBadge?: string;
    colorTheme?: FeatureColorTheme;
    className?: string;
    isActive?: boolean;
}

const themes: Record<FeatureColorTheme, {
    iconBg: string;
    iconText: string;
    glowColor: string;
    badgeBg: string;
    badgeText: string;
    dot: string;
}> = {
    primary: {
        iconBg: 'bg-violet-100',
        iconText: 'text-violet-600',
        glowColor: 'hover:shadow-violet-100/80',
        badgeBg: 'bg-violet-50 border-violet-200',
        badgeText: 'text-violet-700',
        dot: 'bg-violet-500',
    },
    green: {
        iconBg: 'bg-emerald-100',
        iconText: 'text-emerald-600',
        glowColor: 'hover:shadow-emerald-100/80',
        badgeBg: 'bg-emerald-50 border-emerald-200',
        badgeText: 'text-emerald-700',
        dot: 'bg-emerald-500',
    },
    blue: {
        iconBg: 'bg-blue-100',
        iconText: 'text-blue-600',
        glowColor: 'hover:shadow-blue-100/80',
        badgeBg: 'bg-blue-50 border-blue-200',
        badgeText: 'text-blue-700',
        dot: 'bg-blue-500',
    },
    amber: {
        iconBg: 'bg-amber-100',
        iconText: 'text-amber-600',
        glowColor: 'hover:shadow-amber-100/80',
        badgeBg: 'bg-amber-50 border-amber-200',
        badgeText: 'text-amber-700',
        dot: 'bg-amber-500',
    },
    rose: {
        iconBg: 'bg-rose-100',
        iconText: 'text-rose-600',
        glowColor: 'hover:shadow-rose-100/80',
        badgeBg: 'bg-rose-50 border-rose-200',
        badgeText: 'text-rose-700',
        dot: 'bg-rose-500',
    },
    slate: {
        iconBg: 'bg-slate-100',
        iconText: 'text-slate-600',
        glowColor: 'hover:shadow-slate-100/80',
        badgeBg: 'bg-slate-50 border-slate-200',
        badgeText: 'text-slate-700',
        dot: 'bg-slate-500',
    },
    cyan: {
        iconBg: 'bg-cyan-100',
        iconText: 'text-cyan-600',
        glowColor: 'hover:shadow-cyan-100/80',
        badgeBg: 'bg-cyan-50 border-cyan-200',
        badgeText: 'text-cyan-700',
        dot: 'bg-cyan-500',
    },
    purple: {
        iconBg: 'bg-purple-100',
        iconText: 'text-purple-600',
        glowColor: 'hover:shadow-purple-100/80',
        badgeBg: 'bg-purple-50 border-purple-200',
        badgeText: 'text-purple-700',
        dot: 'bg-purple-500',
    },
};

export function FeatureCard({
    icon,
    title,
    description,
    badges,
    statusBadge,
    colorTheme = 'primary',
    className = '',
    isActive = false
}: FeatureCardProps) {
    const t = themes[colorTheme];

    return (
        <div className={`group relative rounded-2xl p-6 bg-card border border-border flex flex-col
            transition-all duration-300 cursor-default
            hover:border-primary/30 hover:shadow-xl hover:shadow-violet-100/50 hover:-translate-y-1
            ${isActive ? 'border-primary/40 shadow-glow' : ''}
            ${className}`}>

            {/* Top gradient line */}
            <div className={`absolute top-0 left-6 right-6 h-[1px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300
                bg-gradient-to-r from-transparent via-primary/50 to-transparent`} />

            {/* Icon + status */}
            <div className="flex justify-between items-start mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${t.iconBg} ${t.iconText}
                    group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    {icon}
                </div>
                {statusBadge && (
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide ${t.badgeBg} ${t.badgeText} border`}>
                        {statusBadge}
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
            </div>

            {/* Badges */}
            {badges && badges.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {badges.map((badge, idx) => (
                        <span key={idx} className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide border ${t.badgeBg} ${t.badgeText}`}>
                            {badge}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}
