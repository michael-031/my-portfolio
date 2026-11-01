import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePortfolioData } from '../../application/hooks/usePortfolioData';
import { useActiveSection } from '../../application/hooks/useActiveSection';
import SplashScreen from '../components/common/SplashScreen';
import Navbar from '../components/layout/Navbar';
import HeroParallaxWrapper from '../components/projects/HeroParallax';
import ProjectDetailModal from '../components/projects/ProjectDetailModal';
import HeroSection from '../sections/HeroSection';
import ProjectsHeaderSection from '../sections/ProjectsHeaderSection';
import ExperienceSection from '../sections/ExperienceSection';
import TechStackSection from '../sections/TechStackSection';
import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';

export default function PortfolioPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  const { profile, parallaxProducts, experiences, techStack } = usePortfolioData();
  const { activeSection, scrollToSection } = useActiveSection();

  const handleSelectProject = (project, section = 0) => {
    if (project) {
      setSelectedProject({ project, section });
    } else {
      setSelectedProject(null);
    }
  };

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <SplashScreen onFinish={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Navbar
        logo={profile.logo}
        navigation={profile.navigation}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject.project || selectedProject}
          initialSection={selectedProject.section ?? 0}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <HeroParallaxWrapper products={parallaxProducts} onSelectProject={handleSelectProject}>
        <HeroSection profile={profile} onNavigate={scrollToSection} />
        <ProjectsHeaderSection onNavigate={scrollToSection} />
      </HeroParallaxWrapper>

      <ExperienceSection experiences={experiences} />

      <TechStackSection techStack={techStack} />

      <AboutSection gallery={profile.gallery} slogan={profile.aboutSlogan} />

      <ContactSection
        contact={profile.contact}
        socials={profile.socials}
        onNavigate={scrollToSection}
      />
    </main>
  );
}
