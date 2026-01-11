import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Articles from './components/Articles';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ConstellationCanvas from './components/ConstellationCanvas';
import { NAV_ITEMS } from './constants';
import { SectionId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [hoveredSection, setHoveredSection] = useState<SectionId | null>(null);

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      // Find the section closest to the top-center of the viewport
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let current: SectionId = 'home';
      
      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.id as SectionId;
          }
        }
      });

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleNavClick = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
        setActiveSection(id);
    }
  };

  const handleExplore = () => handleNavClick('features');

  return (
    <div className="relative w-full min-h-screen font-sans selection:bg-accent/30 selection:text-white">
        {/* Background Visualization - Fixed */}
        <div className="fixed inset-0 z-0">
            <ConstellationCanvas 
                activeSection={activeSection} 
                hoveredSection={hoveredSection} 
            />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
            <Navbar 
                activeSection={activeSection} 
                onHover={setHoveredSection}
                onNavClick={handleNavClick}
            />
            
            <main>
                <Hero 
                    activeSection={activeSection}
                    hoveredSection={hoveredSection}
                    onExploreClick={handleExplore}
                />
                <Features />
                <HowItWorks />
                <Articles />
                <Pricing />
            </main>
            
            <Footer />
        </div>
    </div>
  );
};

export default App;