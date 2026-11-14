import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PymeSolutions } from './components/PymeSolutions';
import { ProjectsBoard } from './components/ProjectsBoard';
import { StoryMission } from './components/StoryMission';
import { ContactPyme } from './components/ContactPyme';
import { RecruiterSheet } from './components/RecruiterSheet';
import { ProjectModal } from './components/ProjectModal';
import { Footer } from './components/Footer';
import type { Project } from './data/projects';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Sticky Marble Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Flagship Hero: The Venture & Mission */}
        <Hero 
          onContactClick={() => scrollToSection('contacto')}
          onExploreProjects={() => scrollToSection('tablero')}
          onViewStory={() => scrollToSection('historia')}
        />

        {/* PyME Digitalization Solutions & Real Transformation */}
        <PymeSolutions 
          onContactClick={() => scrollToSection('contacto')}
          onExploreProjects={() => scrollToSection('tablero')}
        />

        {/* Central Projects Board: Empirical Proof of Work & Engineering Depth */}
        <ProjectsBoard onSelectProject={(project) => setSelectedProject(project)} />

        {/* The Human Story & Long-Term Humanitarian Vision */}
        <StoryMission />

        

        {/* Recruiter & Professional Profile Summary */}
        <RecruiterSheet />

        {/* Contact & Free Diagnostic Form */}
        <ContactPyme />
      </main>

      {/* Footer */}
      <Footer />

      {/* Detailed Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

export default App;
