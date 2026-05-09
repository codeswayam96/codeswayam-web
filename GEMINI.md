# CodeSwayam Web Standards & Instructions

## 🎯 Purpose
The main marketing website and blog for CodeSwayam. It serves as the landing page for all products and provides SEO-optimized content and lead generation.

## 🛠 Tech Stack
- **Framework**: Next.js 16 (App Router), React 19
- **Animations**: Framer Motion
- **Carousel**: Embla Carousel
- **Forms**: React Hook Form, Zod
- **Styling**: Tailwind CSS v4, Radix UI
- **SEO**: next-sitemap

## 📂 Key Directories & Files
- `app/(marketing)/`: Landing pages, features, pricing, and contact.
- `app/(blog)/`: Blog listing and individual post pages.
- `components/`: Local UI components (Hero, Features, Pricing cards).
- `next-sitemap.config.js`: Configuration for automatic sitemap generation.

## 📐 Local Conventions
- **SEO**: Every page in `app/` should have a defined `Metadata` object.
- **Interactivity**: Use Framer Motion for scroll animations and transitions to maintain a premium feel.
- **Port**: This application runs on port **3001**.

## 🔄 Specific Workflows
- **Development**: `npm run dev` (starts on port 3001).
- **Production Build**: `npm run build` (includes sitemap generation).

## 🔐 Environment Variables
- `NEXT_PUBLIC_API_BASE_URL`: For contact forms or dynamic pricing data.
- `NEXT_PUBLIC_GA_ID`: Google Analytics tracking ID.
