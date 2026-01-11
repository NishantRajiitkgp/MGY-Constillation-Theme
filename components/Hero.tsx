import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { SectionId } from '../types';

interface HeroProps {
  activeSection: SectionId;
  hoveredSection: SectionId | null;
  onExploreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ activeSection, hoveredSection, onExploreClick }) => {
  const targetId = hoveredSection || activeSection;
  const currentContent = NAV_ITEMS.find(n => n.id === targetId) || NAV_ITEMS[0];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 lg:px-20">
      
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-8 max-w-xl">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-500">
            Clarity,<br />
            without noise.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light max-w-md">
            Master your internal state. A unified platform for mindfulness, psychology, and productivity designed for deep work.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-4 rounded-full bg-accent hover:bg-accent/90 text-white font-medium flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-lg shadow-accent/20">
              <Play size={16} fill="currentColor" />
              <span>Start session</span>
            </button>
            <button 
                onClick={onExploreClick}
                className="px-8 py-4 rounded-full border border-gray-200 hover:bg-gray-100 text-gray-900 font-medium flex items-center justify-center gap-2 transition-all"
            >
              <span>Explore features</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Content - Insight Card */}
        <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="w-[380px] h-[420px] glass-card rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_40px_rgba(124,58,237,0.1)] group border-t border-white/50 bg-white/60">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        </div>
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Live Insight</span>
                    </div>
                    
                    <div className="space-y-2">
                        <h3 className="text-2xl font-serif text-gray-900 transition-all duration-500 min-h-[3rem] flex items-end">
                            {currentContent.insightTitle}
                        </h3>
                        <p className="text-gray-500 leading-relaxed transition-all duration-500 min-h-[4rem]">
                            {currentContent.insightText}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                     <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border border-white bg-gray-200" style={{ backgroundImage: `url(https://picsum.photos/32/32?random=${i})`, backgroundSize: 'cover' }} />
                        ))}
                     </div>
                     <span className="text-xs text-gray-400">+2k practicing now</span>
                </div>
            </div>
        </div>

      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] uppercase tracking-widest text-black">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-black to-transparent" />
      </div>

    </section>
  );
};

export default Hero;