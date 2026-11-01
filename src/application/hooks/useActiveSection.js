import { useCallback, useEffect, useState } from 'react';

const DEFAULT_SECTIONS = ['projects', 'experience', 'tech-stack', 'about-me', 'contact-me'];

/**
 * Application Hook: useActiveSection
 * Tracks active scroll section and provides smooth section navigation.
 */
export function useActiveSection(sections = DEFAULT_SECTIONS) {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      let current = 'hero';
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = useCallback((e, id) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 72;
      const extraScrollDown = id === 'projects' ? 60 : 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset + extraScrollDown;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  return { activeSection, scrollToSection };
}
