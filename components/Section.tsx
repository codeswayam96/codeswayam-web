'use client';

import React from 'react';

type SectionVariant = 'light' | 'white' | 'muted' | 'dark' | 'gradient' | 'glass';
type SectionPadding = 'sm' | 'md' | 'lg' | 'xl';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: SectionVariant;
  padding?: SectionPadding;
  id?: string;
}

export function Section({
  children,
  className = '',
  variant = 'white',
  padding = 'lg',
  id,
}: SectionProps) {
  const paddingClasses: Record<SectionPadding, string> = {
    sm: 'py-10 md:py-14',
    md: 'py-14 md:py-20',
    lg: 'py-20 md:py-28',
    xl: 'py-24 md:py-36',
  };

  const variantClasses: Record<SectionVariant, string> = {
    light:    'bg-background',
    white:    'bg-background',
    muted:    'bg-muted/30 border-y border-border',
    dark:     'mesh-dark',
    gradient: 'mesh-bg',
    glass:    'bg-card/40 backdrop-blur-md border-y border-border',
  };

  return (
    <section
      id={id}
      className={`w-full relative ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </section>
  );
}
