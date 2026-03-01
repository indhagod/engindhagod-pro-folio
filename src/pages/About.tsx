import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, Target, Eye, Heart } from 'lucide-react';

const timeline = [
  { year: '2019', title: 'Started Web Development', desc: 'Began learning HTML, CSS, and JavaScript.' },
  { year: '2020', title: 'Freelance Designer', desc: 'Started graphic design and branding for local businesses.' },
  { year: '2021', title: 'Full-Stack Development', desc: 'Mastered React, Node.js, and MongoDB.' },
  { year: '2022', title: 'Multimedia & Marketing', desc: 'Expanded into video editing and digital marketing.' },
  { year: '2023–Present', title: 'Eng Indhagod Brand', desc: 'Building a tech startup-style personal brand.' },
];

const values = [
  { icon: Target, title: 'Mission', desc: 'To empower businesses with innovative digital solutions that drive growth and success.' },
  { icon: Eye, title: 'Vision', desc: 'To become a leading digital solutions provider in East Africa and beyond.' },
  { icon: Heart, title: 'Values', desc: 'Quality, innovation, reliability, and client-first approach in every project.' },
];

export default function About() {
  const heroAnim = useScrollAnimation();
  const timelineAnim = useScrollAnimation();
  const valuesAnim = useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div
          ref={heroAnim.ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wide">About Me</p>
          <h1 className="text-4xl md:text-5xl font-bold font-[Montserrat] mb-6">
            The Story Behind <span className="gradient-text">Eng Indhagod</span>
          </h1>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              I'm <strong className="text-foreground">Xasan Cabdi Yusuf</strong>, a passionate full-stack developer, graphic designer,
              multimedia creator, and digital marketing specialist based in Mogadishu, Somalia.
            </p>
            <p>
              With a background in Computer Applications from <strong className="text-foreground">Jamhuriya University</strong>,
              I bring a unique blend of technical expertise and creative vision to every project. I believe in building
              digital experiences that not only look stunning but also convert visitors into loyal customers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-muted/30">
        <div
          ref={valuesAnim.ref}
          className={`max-w-7xl mx-auto transition-all duration-700 ${valuesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-bold font-[Montserrat] text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div
          ref={timelineAnim.ref}
          className={`max-w-3xl mx-auto transition-all duration-700 ${timelineAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl font-bold font-[Montserrat] mb-10 text-center">My Journey</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex items-start mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <span className="text-sm font-bold text-primary">{item.year}</span>
                  <h4 className="font-semibold font-[Montserrat] mt-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-1.5 ring-4 ring-background" />
                <div className="md:hidden pl-10">
                  <span className="text-sm font-bold text-primary">{item.year}</span>
                  <h4 className="font-semibold font-[Montserrat] mt-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass rounded-2xl p-8 inline-block">
            <GraduationCap className="text-primary mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold font-[Montserrat] mb-2">Education</h3>
            <p className="text-foreground font-medium">Jamhuriya University</p>
            <p className="text-muted-foreground text-sm">Computer Applications</p>
          </div>
        </div>
      </section>
    </>
  );
}
