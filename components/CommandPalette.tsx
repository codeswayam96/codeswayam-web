'use client';

import { useEffect, useState, useCallback } from 'react';
import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';
import {
  Search,
  Home,
  Info,
  DollarSign,
  Package,
  Briefcase,
  Users,
  FileText,
  Mail,
  BookOpen,
  Shield,
  FileCheck,
  ChevronRight,
} from 'lucide-react';
import { useUIStore } from '@/lib/stores/ui-store';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface CommandItem {
  id: string;
  label: string;
  description?: string;
  href?: string;
  icon: typeof Home;
  keywords?: string[];
  action?: () => void;
}

const COMMAND_ITEMS: CommandItem[] = [
  // Pages
  {
    id: 'home',
    label: 'Home',
    description: 'Go to homepage',
    href: '/',
    icon: Home,
    keywords: ['home', 'start', 'main'],
  },
  {
    id: 'about',
    label: 'About Us',
    description: 'Learn about CodeSwayam',
    href: '/about',
    icon: Info,
    keywords: ['about', 'company', 'team', 'mission'],
  },
  {
    id: 'pricing',
    label: 'Pricing',
    description: 'View our pricing plans',
    href: '/pricing',
    icon: DollarSign,
    keywords: ['pricing', 'plans', 'cost', 'price'],
  },
  {
    id: 'products',
    label: 'Products',
    description: 'Browse our SaaS products',
    href: '/products',
    icon: Package,
    keywords: ['products', 'saas', 'tools', 'software'],
  },
  {
    id: 'services',
    label: 'Services',
    description: 'Explore our services',
    href: '/services',
    icon: Briefcase,
    keywords: ['services', 'consulting', 'development'],
  },
  {
    id: 'team',
    label: 'Our Team',
    description: 'Meet the team',
    href: '/team',
    icon: Users,
    keywords: ['team', 'people', 'staff', 'crew'],
  },
  {
    id: 'case-studies',
    label: 'Case Studies',
    description: 'Read our success stories',
    href: '/case-studies',
    icon: FileText,
    keywords: ['case studies', 'success', 'stories', 'portfolio'],
  },
  {
    id: 'testimonials',
    label: 'Testimonials',
    description: 'See what clients say',
    href: '/testimonials',
    icon: BookOpen,
    keywords: ['testimonials', 'reviews', 'feedback', 'clients'],
  },
  {
    id: 'blog',
    label: 'Blog',
    description: 'Read our latest articles',
    href: '/blog',
    icon: FileText,
    keywords: ['blog', 'articles', 'news', 'updates'],
  },
  {
    id: 'contact',
    label: 'Contact Us',
    description: 'Get in touch',
    href: '/contact-us',
    icon: Mail,
    keywords: ['contact', 'email', 'reach', 'support'],
  },

  // Legal Pages
  {
    id: 'privacy',
    label: 'Privacy Policy',
    description: 'View our privacy policy',
    href: '/privacy-policy',
    icon: Shield,
    keywords: ['privacy', 'policy', 'data'],
  },
  {
    id: 'terms',
    label: 'Terms & Conditions',
    description: 'View terms and conditions',
    href: '/terms-and-conditions',
    icon: FileCheck,
    keywords: ['terms', 'conditions', 'legal'],
  },
];

export function CommandPalette() {
  const router = useRouter();
  const { isCommandPaletteOpen, closeCommandPalette } = useUIStore();
  const [search, setSearch] = useState('');
  const [filteredItems, setFilteredItems] = useState<CommandItem[]>(COMMAND_ITEMS);

  // Keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        useUIStore.getState().toggleCommandPalette();
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Filter items based on search
  useEffect(() => {
    if (!search) {
      setFilteredItems(COMMAND_ITEMS);
      return;
    }

    const searchLower = search.toLowerCase();
    const filtered = COMMAND_ITEMS.filter((item) => {
      const labelMatch = item.label.toLowerCase().includes(searchLower);
      const descriptionMatch = item.description?.toLowerCase().includes(searchLower);
      const keywordsMatch = item.keywords?.some((keyword) =>
        keyword.toLowerCase().includes(searchLower)
      );

      return labelMatch || descriptionMatch || keywordsMatch;
    });

    setFilteredItems(filtered);
  }, [search]);

  const handleSelect = useCallback(
    (item: CommandItem) => {
      if (item.action) {
        item.action();
      } else if (item.href) {
        router.push(item.href);
      }
      closeCommandPalette();
      setSearch('');
    },
    [router, closeCommandPalette]
  );

  return (
    <Dialog open={isCommandPaletteOpen} onOpenChange={closeCommandPalette}>
      <DialogContent className="p-0 overflow-hidden max-w-2xl">
        <Command className="rounded-lg border-0 shadow-lg">
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Command.Input
              placeholder="Search pages, products, and more..."
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              value={search}
              onValueChange={setSearch}
            />
            <div className="ml-auto flex items-center gap-1">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">ESC</span>
              </kbd>
            </div>
          </div>

          <Command.List className="max-h-[400px] overflow-y-auto p-2">
            {filteredItems.length === 0 && (
              <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                No results found for "{search}"
              </Command.Empty>
            )}

            {filteredItems.length > 0 && (
              <Command.Group className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-muted-foreground">
                {filteredItems.map((item) => (
                  <Command.Item
                    key={item.id}
                    value={item.label}
                    onSelect={() => handleSelect(item)}
                    className="relative flex cursor-pointer select-none items-center rounded-md px-3 py-2.5 text-sm outline-none aria-selected:bg-primary/10 aria-selected:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <item.icon className="mr-3 h-4 w-4 shrink-0 opacity-70" />
                    <div className="flex-1">
                      <div className="font-medium">{item.label}</div>
                      {item.description && (
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      )}
                    </div>
                    <ChevronRight className="ml-auto h-4 w-4 opacity-40" />
                  </Command.Item>
                ))}
              </Command.Group>
            )}
          </Command.List>

          <div className="border-t px-3 py-2 text-xs text-muted-foreground flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                ↑↓
              </kbd>
              <span>Navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                ↵
              </kbd>
              <span>Select</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                ESC
              </kbd>
              <span>Close</span>
            </span>
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
