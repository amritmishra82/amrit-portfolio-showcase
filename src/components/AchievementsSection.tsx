
import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "Published research on cryptographic integration for secure digital communication",
    date: "June 2023"
  },
  {
    title: "Participated in a Community Development Program",
    date: "June 2023"
  }
];

export function AchievementsSection() {
  return (
    <section className="mb-16">
      <h2 className="section-title">Achievements</h2>
      <ul className="space-y-4">
        {achievements.map((achievement, index) => (
          <li 
            key={index} 
            className="list-item animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center">
              <Trophy className="text-portfolio-gold mr-2" size={18} />
              <span className="font-medium">{achievement.title}</span>
              <span className="ml-2 text-sm text-gray-500">- {achievement.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
