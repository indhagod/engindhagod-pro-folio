import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code, Palette, Video, TrendingUp, Check } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Full-Stack Web Development',
    desc: 'Custom web applications built with modern technologies for performance and scalability.',
    features: ['Frontend Development (React, HTML/CSS)', 'Backend APIs (Node.js, Express)', 'Database Design (MongoDB)', 'Hosting & Deployment', 'Performance Optimization', 'Responsive Design'],
  },
  {
    icon: Palette,
    title: 'Brand Identity & Printing',
    desc: 'Complete branding solutions that make your business stand out from the competition.',
    features: ['Logo Design', 'Brand Guidelines', 'Business Cards', 'Poster & Flyer Design', 'Large Format Printing', 'Packaging Design'],
  },
  {
    icon: Video,
    title: 'Multimedia & Content Creation',
    desc: 'High-quality visual content that captures attention and tells your brand story.',
    features: ['Professional Photography', 'Video Production', 'Video Editing (Premiere Pro)', 'Motion Graphics (After Effects)', 'Social Media Content', 'Photo Retouching (Lightroom)'],
  },
  {
    icon: TrendingUp,
    title: 'Sales & Digital Marketing',
    desc: 'Strategic marketing campaigns that grow your audience and drive revenue.',
    features: ['Social Media Management', 'Campaign Strategy', 'Brand Promotion', 'Content Marketing', 'Analytics & Reporting', 'Audience Growth'],
  },
];

export default function Services() {
  const heroAnim = useScrollAnimation();

  return (
    <section className="section-padding">
      <div
        ref={heroAnim.ref}
        className={`max-w-7xl mx-auto transition-all duration-700 ${heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wide">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold font-[Montserrat] mb-4">
            What I <span className="gradient-text">Offer</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Comprehensive digital solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-8 hover:scale-[1.02] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <service.icon className="text-primary" size={28} />
        </div>
        <div>
          <h3 className="text-xl font-bold font-[Montserrat] mb-1">{service.title}</h3>
          <p className="text-muted-foreground text-sm">{service.desc}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {service.features.map((f) => (
          <div key={f} className="flex items-center gap-2 text-sm">
            <Check size={14} className="text-accent flex-shrink-0" />
            <span className="text-muted-foreground">{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
