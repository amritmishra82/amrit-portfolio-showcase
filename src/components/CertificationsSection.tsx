
import { Award } from "lucide-react";

const certifications = [
  {
    name: "DSA Self-Paced",
    date: "July 2024"
  },
  {
    name: "CompTIA Security+",
    date: "May 2024"
  },
  {
    name: "Cloud Computing (NPTEL)",
    date: "2023"
  }
];

export function CertificationsSection() {
  return (
    <section className="mb-16">
      <h2 className="section-title">Certifications</h2>
      <ul className="space-y-4">
        {certifications.map((cert, index) => (
          <li 
            key={cert.name} 
            className="list-item animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center">
              <Award className="text-portfolio-gold mr-2" size={18} />
              <span className="font-medium">{cert.name}</span>
              <span className="ml-2 text-sm text-gray-500">- {cert.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
