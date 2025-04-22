
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech CSE",
    institution: "Lovely Professional University, Punjab",
    year: "Expected Dec 2024"
  },
  {
    degree: "Intermediate",
    institution: "Lokmanya Inter College, UP",
    year: "2022"
  },
  {
    degree: "Matriculation",
    institution: "St. Joseph's School, Mumbai",
    year: "2020"
  }
];

export function EducationSection() {
  return (
    <section className="mb-16">
      <h2 className="section-title">Education</h2>
      <div className="space-y-6">
        {education.map((item, index) => (
          <div 
            key={item.degree}
            className="flex gap-4 items-start animate-fade-in"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="p-3 bg-portfolio-light rounded-full">
              <GraduationCap className="text-portfolio-purple" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{item.degree}</h3>
              <p className="text-gray-600">{item.institution}</p>
              <p className="text-sm text-gray-500">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
