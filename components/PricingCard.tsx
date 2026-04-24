'use client';

import React from 'react';
import Link from 'next/link';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaText?: string;
  ctaHref?: string;
  highlighted?: boolean;
}

export function PricingCard({
  name,
  price,
  description,
  features,
  ctaText = 'Get Started',
  ctaHref = '#',
  highlighted = false,
}: PricingCardProps) {
  return (
    <div className={`relative p-8 rounded-2xl transition-all duration-300 h-full flex flex-col
      ${highlighted
        ? 'border border-primary/40 shadow-glow bg-card scale-[1.03] md:scale-[1.06]'
        : 'border border-border bg-card hover:border-primary/25 hover:shadow-xl hover:shadow-violet-100/50 hover:-translate-y-1'
      }`}>

      {/* Featured badge */}
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="px-5 py-1.5 btn-primary rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
            Most Popular ✦
          </span>
        </div>
      )}

      {/* Gradient top line for highlighted */}
      {highlighted && (
        <div className="absolute top-0 left-8 right-8 h-px
          bg-gradient-to-r from-transparent via-primary to-transparent" />
      )}

      {/* Plan name */}
      <div className="mb-2">
        <span className={`section-badge ${highlighted ? 'bg-primary/15 border-primary/30' : ''}`}>
          {name}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-6 mt-2">{description}</p>

      {/* Price */}
      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          {price !== 'Custom' && (
            <span className="text-2xl font-bold text-muted-foreground">$</span>
          )}
          <span className={`text-5xl font-black tracking-tight ${highlighted ? 'gradient-text-static' : 'text-foreground'}`}>
            {price}
          </span>
          {price !== 'Custom' && (
            <span className="text-muted-foreground text-sm font-medium ml-1">/mo</span>
          )}
        </div>
        {price !== 'Custom' && (
          <p className="text-xs text-muted-foreground mt-1.5">
            Billed monthly · Save 20% annually
          </p>
        )}
      </div>

      {/* CTA */}
      <Link href={ctaHref}
        className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-300 mb-8 inline-flex items-center justify-center gap-2 text-sm
          ${highlighted ? 'btn-primary' : 'bg-muted text-foreground border border-border hover:border-primary/30 hover:bg-primary/5 hover:text-primary'}`}>
        {ctaText}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>

      {/* Features */}
      <div className="space-y-3.5 flex-1">
        <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-4">
          What's included
        </p>
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center
              ${highlighted ? 'bg-primary/15' : 'bg-emerald-50'}`}>
              <svg className={`w-2.5 h-2.5 ${highlighted ? 'text-primary' : 'text-emerald-600'}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-sm text-muted-foreground">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
