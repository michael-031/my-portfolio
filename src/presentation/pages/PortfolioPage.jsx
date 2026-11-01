import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePortfolioData } from '../../application/hooks/usePortfolioData';
import { useActiveSection } from '../../application/hooks/useActiveSection';
import { useTheme } from '../../application/hooks/useTheme';
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
  const { isDark, toggleTheme } = useTheme('dark');

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
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject.project || selectedProject}
          initialSection={selectedProject.section ?? 0}
          onClose={() => setSelectedProject(null)}
          isDark={isDark}
        />
      )}

      <HeroParallaxWrapper products={parallaxProducts} onSelectProject={handleSelectProject}>
        <HeroSection profile={profile} onNavigate={scrollToSection} isDark={isDark} />
        <ProjectsHeaderSection onNavigate={scrollToSection} isDark={isDark} />
      </HeroParallaxWrapper>

      <ExperienceSection experiences={experiences} isDark={isDark} />

      <TechStackSection techItems={techStack.all} isDark={isDark} />

      <AboutSection gallery={profile.gallery} slogan={profile.aboutSlogan} isDark={isDark} />

      <ContactSection contact={profile.contact} socials={profile.socials} isDark={isDark} />
    </main>
  );
}
