
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <div className="hero-gradient rounded-2xl p-8 sm:p-12 md:p-16 mb-12 text-white shadow-lg animate-fade-in">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        Mishra Amrit Lalji
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-8">
        Bridging logic and creativity through code
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="secondary" className="contact-button bg-white text-portfolio-purple hover:bg-opacity-90" asChild>
          <a href="mailto:amritmishra035@gmail.com">
            <Mail size={18} />
            <span>Email</span>
          </a>
        </Button>
        <Button variant="outline" className="contact-button border-white text-white hover:bg-white hover:text-portfolio-purple" asChild>
          <a href="https://www.linkedin.com/in/mishra-amrit-lalji" target="_blank" rel="noopener noreferrer">
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </Button>
        <Button variant="outline" className="contact-button border-white text-white hover:bg-white hover:text-portfolio-purple" asChild>
          <a href="https://github.com/amritmishra82" target="_blank" rel="noopener noreferrer">
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </Button>
      </div>
    </div>
  );
}
