import React from 'react';
import { NAV_ITEMS } from '../constants';
import { SectionId } from '../types';
import clsx from 'clsx';

interface NavbarProps {
  activeSection: SectionId;
  onHover: (id: SectionId | null) => void;
  onNavClick: (id: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onHover, onNavClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6">
      <div className="glass-card px-8 py-4 rounded-full flex items-center gap-8 transition-all duration-300">
        <div 
            className="font-serif font-semibold text-xl tracking-tight text-gray-900 cursor-pointer mr-4"
            onClick={() => onNavClick('home')}
        >
            MGY
        </div>
        
        <div className="hidden md:flex gap-1 items-center">
            {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                    <button
                        key={item.id}
                        onMouseEnter={() => onHover(item.id)}
                        onMouseLeave={() => onHover(null)}
                        onClick={() => onNavClick(item.id)}
                        className={clsx(
                            "relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full",
                            isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
                        )}
                    >
                        {item.label}
                        {isActive && (
                            <span className="absolute inset-0 rounded-full bg-black/5 -z-10 transition-all duration-500" />
                        )}
                    </button>
                );
            })}
        </div>
        
        <button className="hidden md:block ml-4 px-5 py-2 rounded-full bg-gray-900 text-white text-xs font-semibold hover:bg-gray-800 transition-colors tracking-wide">
            Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;