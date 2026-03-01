import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Skeleton } from '@/components/ui/skeleton';
import { Rocket } from 'lucide-react';

export default function Portfolio() {
  const heroAnim = useScrollAnimation();

  return (
    <section className="section-padding">
      <div
        ref={heroAnim.ref}
        className={`max-w-7xl mx-auto transition-all duration-700 ${heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Rocket className="text-primary" size={36} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-[Montserrat] mb-4">
            <span className="gradient-text">Coming Soon</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Amazing projects are currently under development. Stay tuned for an incredible showcase of work.
          </p>
        </div>

        {/* Skeleton Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <Skeleton className="h-48 w-full rounded-none" />
              <div className="p-5 space-y-3">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
