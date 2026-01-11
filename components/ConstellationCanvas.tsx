import React, { useMemo, useEffect, useState } from 'react';
import { SectionId, GeometryState } from '../types';
import { CONSTELLATION_STATES } from '../constants';

interface ConstellationCanvasProps {
  activeSection: SectionId;
  hoveredSection: SectionId | null;
}

const ConstellationCanvas: React.FC<ConstellationCanvasProps> = ({ activeSection, hoveredSection }) => {
  const [currentState, setCurrentState] = useState<GeometryState>(CONSTELLATION_STATES['home']);

  // Determine target state based on priority: Hover > Active
  const targetId = hoveredSection || activeSection;

  useEffect(() => {
    setCurrentState(CONSTELLATION_STATES[targetId]);
  }, [targetId]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none flex items-center justify-center opacity-80">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full max-w-[1200px] max-h-[1200px]"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Lines */}
        {currentState.links.map((link, i) => {
            const sourceNode = currentState.nodes[link.source];
            const targetNode = currentState.nodes[link.target];
            
            return (
              <line
                key={`link-${link.source}-${link.target}-${i}`}
                x1={sourceNode.x}
                y1={sourceNode.y}
                x2={targetNode.x}
                y2={targetNode.y}
                stroke="#7C3AED" 
                strokeWidth="0.15"
                strokeOpacity="0.4"
                className="transition-[x1,y1,x2,y2,opacity] duration-700 ease-in-out"
              />
            );
        })}

        {/* Nodes */}
        {currentState.nodes.map((node) => (
          <circle
            key={`node-${node.id}`}
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill="#18181B"
            fillOpacity={node.opacity}
            filter="url(#glow)"
            className="transition-[cx,cy,r,fill-opacity] duration-1000 cubic-bezier(0.4, 0, 0.2, 1)"
          />
        ))}
      </svg>
      
      {/* Central glow gradient behind the constellation */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-accent/5 blur-[100px] rounded-full"
        aria-hidden="true"
      />
    </div>
  );
};

export default ConstellationCanvas;