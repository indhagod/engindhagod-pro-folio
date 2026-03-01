import { Link } from 'react-router-dom';
import { Code, Palette, Video, TrendingUp, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

const services = [
  { icon: Code, title: 'Web Development', desc: 'Modern, responsive web apps built with cutting-edge technologies.' },
  { icon: Palette, title: 'Brand Identity', desc: 'Logos, branding, and print design that make your brand unforgettable.' },
  { icon: Video, title: 'Multimedia Creation', desc: 'Video editing, photography, and content that tells your story.' },
  { icon: TrendingUp, title: 'Digital Marketing', desc: 'Strategic campaigns that grow your audience and revenue.' },
];

const techStack = [
  'React', 'Node.js', 'JavaScript', 'TypeScript', 'MongoDB', 'Express',
  'Figma', 'Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects',
];

function CounterCard({ end, label, suffix = '' }: { end: number; label: string; suffix?: string }) {
  const { ref, isVisible } = useScrollAnimation();
  const count = useAnimatedCounter(end, 2000, 0, isVisible);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold font-[Montserrat] gradient-text">
        {count}{suffix}
      </div>
      <p className="text-muted-foreground mt-2 text-sm">{label}</p>
    </div>
  );
}

export default function Home() {
  const heroAnim = useScrollAnimation();
  const servicesAnim = useScrollAnimation();
  const skillsAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="section-padding min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div
          ref={heroAnim.ref}
          className={`max-w-7xl mx-auto w-full transition-all duration-700 ${heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 tracking-wide text-sm uppercase">Full-Stack Developer • Designer • Creator</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-[Montserrat] leading-tight mb-6">
              Hi, I'm{' '}
              <span className="gradient-text">Xasan Cabdi Yusuf</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              I design, build, and scale modern digital solutions for individuals, startups, and enterprises.
              <span className="block mt-2 text-foreground/80 font-medium italic">
                Building Digital Experiences That Inspire, Convert & Grow Businesses.
              </span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
              >
                Hire Me <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-border font-semibold hover:border-primary hover:text-primary transition-all hover:scale-105"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-muted/30">
        <div
          ref={servicesAnim.ref}
          className={`max-w-7xl mx-auto transition-all duration-700 ${servicesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[Montserrat] mb-4">What I Do</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">End-to-end digital solutions crafted with precision and passion.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group cursor-pointer"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold font-[Montserrat] mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counters */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <CounterCard end={5} suffix="+" label="Years Experience" />
          <CounterCard end={120} suffix="+" label="Projects Completed" />
          <CounterCard end={80} suffix="+" label="Happy Clients" />
          <CounterCard end={15} suffix="+" label="Awards Won" />
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="section-padding bg-muted/30">
        <div
          ref={skillsAnim.ref}
          className={`max-w-7xl mx-auto transition-all duration-700 ${skillsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-[Montserrat] mb-4">Tech Stack</h2>
            <p className="text-muted-foreground">Tools & technologies I work with daily.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 rounded-full glass text-sm font-medium hover:scale-105 transition-transform cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div
          ref={ctaAnim.ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${ctaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-[Montserrat] mb-4">
            Ready to build your next digital project?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">Let's turn your vision into reality.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
          >
            Let's Talk <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
