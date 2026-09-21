import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  FileText,
  Bot,
  Zap,
  ArrowUpRight,
  Shield,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { BrandFooterSection } from '@codeswayam/ui';

export const metadata: Metadata = constructMetadata({
  title: 'Free Online Developer & Productivity Tools Directory | Code Swayam',
  description:
    'Explore 150+ free online developer, media, and document tools by Code Swayam. Compress JPG to 20KB, reduce PDF to 100KB, convert WebP, merge PDFs, and run AI automations with zero watermarks.',
  keywords: [
    'free online tools',
    'compress image online',
    'compress jpg to 20kb',
    'compress pdf to 100kb',
    'merge pdf free',
    'convert webp to jpg',
    'pdf to word converter',
    'remove background ai',
    'codeswayam tools',
    'pixelforge',
    'pdfcraft',
  ],
  canonical: '/tools',
});

interface ToolItem {
  name: string;
  description: string;
  url: string;
  badge?: string;
  highlight?: boolean;
}

interface ToolCategoryGroup {
  title: string;
  subhead: string;
  brand: string;
  brandUrl: string;
  icon: typeof Sparkles;
  color: string;
  tools: ToolItem[];
}

const DIRECTORY_CATEGORIES: ToolCategoryGroup[] = [
  {
    title: 'Image Processing & Compression Suite',
    subhead: 'Browser-based & sharp-accelerated image manipulation with zero quality loss and instant deletion.',
    brand: 'PixelForge',
    brandUrl: 'https://pixelforge.codeswayam.com',
    icon: Sparkles,
    color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    tools: [
      {
        name: 'Compress JPG to 20KB',
        description: 'Exact 20KB file size reduction tailored for UPSC, SSC, and state PSC job exam portals.',
        url: 'https://pixelforge.codeswayam.com/compress-jpg-to-20kb',
        badge: 'Gov Portal Favorite',
        highlight: true,
      },
      {
        name: 'Compress Image to 50KB',
        description: 'Optimal compression for signature uploads, KYC documents, and banking verification.',
        url: 'https://pixelforge.codeswayam.com/compress-image-to-50kb',
        badge: 'Popular',
      },
      {
        name: 'Compress Image to 100KB',
        description: 'Balanced size reduction preserving high-DPI clarity for ID cards and certificates.',
        url: 'https://pixelforge.codeswayam.com/compress-image-to-100kb',
      },
      {
        name: 'WebP to JPG Converter',
        description: 'Instant lossless conversion from modern WebP to universal JPEG format.',
        url: 'https://pixelforge.codeswayam.com/webp-to-jpg',
        badge: 'High Speed',
      },
      {
        name: 'JPG to PNG Converter',
        description: 'Transform compressed JPEGs into lossless PNG graphics with alpha channel support.',
        url: 'https://pixelforge.codeswayam.com/jpg-to-png',
      },
      {
        name: 'HEIC to JPG Converter',
        description: 'Batch convert Apple iPhone HEIC and HEIF photos to standard web-ready JPGs.',
        url: 'https://pixelforge.codeswayam.com/heic-to-jpg',
      },
      {
        name: 'AI Background Remover',
        description: 'Intelligent edge-detection neural network removes backgrounds in one second.',
        url: 'https://pixelforge.codeswayam.com/remove-background',
        badge: 'AI Powered',
      },
      {
        name: 'Passport Size Photo Maker',
        description: 'Crop, resize, and set custom solid backgrounds for official 2x2 inch and 35x45mm specs.',
        url: 'https://pixelforge.codeswayam.com/passport-size-photo',
      },
      {
        name: 'Resize Image to A4',
        description: 'Scale photos and scanned documents to standard 210 x 297mm dimensions at 300 DPI.',
        url: 'https://pixelforge.codeswayam.com/resize-image-to-a4',
      },
    ],
  },
  {
    title: 'PDF Engineering & Document Suite',
    subhead: 'Military-grade PDF processing with 256-bit AES encryption, ISO 32000-1 compliance, and zero watermarks.',
    brand: 'PDFCraft',
    brandUrl: 'https://pdfcraft.codeswayam.com',
    icon: FileText,
    color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    tools: [
      {
        name: 'Compress PDF to 100KB',
        description: 'Precision stream downsampling to satisfy strict government scholarship and recruitment portals.',
        url: 'https://pdfcraft.codeswayam.com/compress-pdf-to-100kb',
        badge: 'Top Choice',
        highlight: true,
      },
      {
        name: 'Compress PDF to 200KB',
        description: 'Reduce document size while keeping legal marksheet text and signatures legible.',
        url: 'https://pdfcraft.codeswayam.com/compress-pdf-to-200kb',
      },
      {
        name: 'Compress PDF to 1MB',
        description: 'Squeeze heavy multi-page brochures, bank statements, and slide decks down to under 1MB.',
        url: 'https://pdfcraft.codeswayam.com/compress-pdf-to-1mb',
      },
      {
        name: 'Merge PDF Online',
        description: 'Combine multiple PDF files into a single organized document with custom page reordering.',
        url: 'https://pdfcraft.codeswayam.com/merge-pdf',
        badge: 'Essential',
      },
      {
        name: 'Split PDF Pages',
        description: 'Extract individual pages or separate custom page ranges into independent PDF files.',
        url: 'https://pdfcraft.codeswayam.com/split-pdf',
      },
      {
        name: 'PDF to Word (DOCX)',
        description: 'Convert PDF tables, layout columns, and typography into fully editable Microsoft Word files.',
        url: 'https://pdfcraft.codeswayam.com/pdf-to-word',
      },
      {
        name: 'Word to PDF Converter',
        description: 'Turn DOCX documents into clean, non-editable, universal PDF files with embedded fonts.',
        url: 'https://pdfcraft.codeswayam.com/word-to-pdf',
      },
      {
        name: 'Protect PDF (AES-256)',
        description: 'Add military-grade password encryption and restrict printing or copying permissions.',
        url: 'https://pdfcraft.codeswayam.com/protect-pdf',
        badge: 'Security',
      },
      {
        name: 'Unlock PDF',
        description: 'Remove owner passwords and unlock read/print restrictions from authorized files.',
        url: 'https://pdfcraft.codeswayam.com/unlock-pdf',
      },
      {
        name: 'PDF to PDF/A Archival',
        description: 'Convert standard documents into ISO 19005 compliant PDF/A for long-term court & legal archival.',
        url: 'https://pdfcraft.codeswayam.com/pdf-to-pdfa',
      },
    ],
  },
  {
    title: 'Artificial Intelligence & Model Gateways',
    subhead: 'State-of-the-art multi-model studio, text-to-image synthesis, and automated cognitive workflows.',
    brand: 'Neural AI',
    brandUrl: 'https://neural.codeswayam.com',
    icon: Bot,
    color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    tools: [
      {
        name: 'Neural AI Studio',
        description: 'Chat with top LLMs, compare multi-model outputs side-by-side, and craft custom prompts.',
        url: 'https://neural.codeswayam.com',
        badge: 'Next-Gen',
        highlight: true,
      },
      {
        name: 'AI Image Generation',
        description: 'Synthesize photorealistic 4K imagery and illustrations from natural language prompts.',
        url: 'https://neural.codeswayam.com/image-generation',
      },
      {
        name: 'Cognitive Automations',
        description: 'Design autonomous multi-step agentic workflows and scheduled background executions.',
        url: 'https://neural.codeswayam.com/automations',
      },
      {
        name: 'Unified AI API Gateway',
        description: 'A single high-throughput endpoint to query OpenAI, Anthropic, and open-weight models.',
        url: 'https://neural.codeswayam.com/api-keys',
      },
    ],
  },
];

export default function ToolsDirectoryPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Code Swayam Free Tools Directory',
    description:
      'A directory of 150+ free online developer, media, and document tools by Code Swayam.',
    url: 'https://codeswayam.com/tools',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Code Swayam',
      url: 'https://codeswayam.com',
    },
    hasPart: DIRECTORY_CATEGORIES.flatMap((cat) =>
      cat.tools.map((t) => ({
        '@type': 'WebApplication',
        name: t.name,
        url: t.url,
        description: t.description,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'All',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div className="bg-background text-foreground selection:bg-primary/20 selection:text-primary pt-32 pb-24">
        {/* ── HEADER ── */}
        <section className="px-6 mb-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest mb-6">
              <Layers className="w-3.5 h-3.5" />
              150+ Free Tools · Zero Ads · Zero Watermarks
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight uppercase leading-[0.95] mb-6">
              The Code Swayam <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-emerald-400">
                Tools Directory.
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore our unified network of free, high-performance web applications. Engineered with modern WebAssembly and sharp GPU acceleration for instant client-side and ephemeral processing.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>100% Free Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>Privacy First · Auto-Deleted</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Instant In-Browser Execution</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── CATEGORY DIRECTORY ── */}
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {DIRECTORY_CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <section key={category.title} className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center border ${category.color}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                        {category.brand}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-black tracking-tight text-foreground">
                      {category.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
                      {category.subhead}
                    </p>
                  </div>

                  <a
                    href={category.brandUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border hover:border-primary/50 text-xs font-black uppercase tracking-wider text-foreground hover:text-primary transition-all shrink-0"
                  >
                    Launch {category.brand}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {category.tools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.url}
                      className={`group p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between h-full min-h-[230px] ${
                        tool.highlight
                          ? 'border-primary/40 bg-primary/5 hover:border-primary hover:shadow-lg'
                          : 'border-border bg-card hover:border-primary/40 hover:-translate-y-1 hover:shadow-md'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                            {category.brand}
                          </span>
                          {tool.badge && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-primary/20 text-primary">
                              {tool.badge}
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                          {tool.name}
                        </h3>

                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {tool.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                          Free Online
                        </span>
                        <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground group-hover:brightness-110 text-xs font-bold transition-all shadow-sm">
                          <span>Use Tool</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* ── BRAND MESH FOOTER SECTION ── */}
        <BrandFooterSection currentApp="codeswayam" className="mt-24" />
      </div>
    </>
  );
}
