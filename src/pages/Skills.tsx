import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Development',
    color: 'primary',
    skills: [
      { name: 'HTML & CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 88 },
      { name: 'TypeScript', level: 80 },
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 82 },
      { name: 'MongoDB', level: 78 },
    ],
  },
  {
    title: 'Design',
    color: 'accent',
    skills: [
      { name: 'Adobe Illustrator', level: 92 },
      { name: 'Adobe Photoshop', level: 90 },
      { name: 'Figma', level: 85 },
    ],
  },
  {
    title: 'Multimedia',
    color: 'primary',
    skills: [
      { name: 'Premiere Pro', level: 88 },
      { name: 'After Effects', level: 82 },
      { name: 'Lightroom', level: 90 },
    ],
  },
];

function SkillBar({ name, level, isVisible }: { name: string; level: number; isVisible: boolean }) {
  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const heroAnim = useScrollAnimation();

  return (
    <section className="section-padding">
      <div
        ref={heroAnim.ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wide">Skills</p>
          <h1 className="text-4xl md:text-5xl font-bold font-[Montserrat] mb-4">
            My <span className="gradient-text">Expertise</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            A diverse skill set spanning development, design, and multimedia.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((cat) => (
            <SkillCategory key={cat.title} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ category }: { category: typeof skillCategories[0] }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <h3 className="text-xl font-bold font-[Montserrat] mb-6 gradient-text inline-block">{category.title}</h3>
      <div className="space-y-5">
        {category.skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} isVisible={isVisible} />
        ))}
      </div>
    </div>
  );
}
