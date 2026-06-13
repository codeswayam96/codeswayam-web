import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { PricingClientPage } from './PricingClientPage';

export const metadata: Metadata = constructMetadata({
    title: 'SaaS Pricing Plans | Code Swayam',
    description: 'Simple, transparent investment options for startups and enterprises. Choose from Starter, Professional, or Enterprise tiers.',
    keywords: ['CodeSwayam pricing', 'Starter plan', 'Professional plan', 'Enterprise pricing model', 'flexible software billing'],
    canonical: '/pricing',
});

export default function PricingPage() {
    return <PricingClientPage />;
}
