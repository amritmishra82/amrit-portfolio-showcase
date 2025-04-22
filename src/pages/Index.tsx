
import { AchievementsSection } from "@/components/AchievementsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { EducationSection } from "@/components/EducationSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SkillsSection } from "@/components/SkillsSection";
import { useEffect } from "react";

const Index = () => {
  // Update document title
  useEffect(() => {
    document.title = "Mishra Amrit Lalji - Portfolio";
  }, []);
  
  return (
    <div className="min-h-screen bg-background pb-16">
      <ScrollToTop />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          <div>
            <SkillsSection />
            <ProjectsSection />
          </div>
          
          <div>
            <EducationSection />
            <CertificationsSection />
            <AchievementsSection />
          </div>
        </div>
        
        <footer className="mt-16 text-center text-gray-500 text-sm border-t pt-6">
          <p>© {new Date().getFullYear()} Mishra Amrit Lalji. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
