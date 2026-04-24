import { Skeleton } from '@/components/ui/skeleton';

export function HeroSkeleton() {
  return (
    <section className="relative min-h-[600px] py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <Skeleton className="h-8 w-64 rounded-full" />
          </div>

          {/* Heading */}
          <div className="space-y-4 mb-6">
            <Skeleton className="h-16 w-full max-w-3xl mx-auto" />
            <Skeleton className="h-16 w-4/5 mx-auto" />
          </div>

          {/* Description */}
          <div className="space-y-3 mb-10">
            <Skeleton className="h-6 w-3/4 mx-auto" />
            <Skeleton className="h-6 w-2/3 mx-auto" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Skeleton className="h-12 w-40 rounded-lg" />
            <Skeleton className="h-12 w-40 rounded-lg" />
          </div>

          {/* Stats or Social Proof */}
          <div className="flex flex-wrap justify-center gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="text-center">
                <Skeleton className="h-10 w-24 mx-auto mb-2" />
                <Skeleton className="h-4 w-32" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
