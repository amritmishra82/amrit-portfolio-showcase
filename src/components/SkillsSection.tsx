
import { useEffect, useState } from "react";

const skills = [
  { name: 'C++', color: 'bg-blue-100' },
  { name: 'JavaScript', color: 'bg-yellow-100' },
  { name: 'C', color: 'bg-blue-50' },
  { name: 'PHP', color: 'bg-purple-100' },
  { name: 'HTML & CSS', color: 'bg-orange-100' },
  { name: 'Bootstrap', color: 'bg-purple-50' },
  { name: 'NodeJS', color: 'bg-green-100' },
  { name: 'React', color: 'bg-cyan-100' },
  { name: 'MySQL', color: 'bg-blue-200' },
  { name: 'MongoDB', color: 'bg-green-200' }
];

export function SkillsSection() {
  const [visibleSkills, setVisibleSkills] = useState<string[]>([]);

  useEffect(() => {
    // Simulate staggered animation by showing skills one by one
    const timer = setTimeout(() => {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setVisibleSkills(prev => [...prev, skill.name]);
        }, index * 100);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="mb-16">
      <h2 className="section-title">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={skill.name}
            className={`skill-card ${skill.color} flex items-center justify-center h-24 text-center ${
              visibleSkills.includes(skill.name) ? 'animate-slide-in opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
