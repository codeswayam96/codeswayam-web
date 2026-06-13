import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { ContactUsClientPage } from './ContactUsClientPage';

export const metadata: Metadata = constructMetadata({
    title: 'Contact Us | Code Swayam',
    description: 'Get in touch with our expert engineering team. Let us build custom software, SaaS products, and AI applications for your company.',
    keywords: ['contact CodeSwayam', 'hire software developer', 'custom SaaS solutions', 'technical consultant team', 'software engineer office'],
    canonical: '/contact-us',
});

export default function ContactUsPage() {
    return <ContactUsClientPage />;
}
