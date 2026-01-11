import { NavItem, SectionId, GeometryState, LinkConnection } from './types';

export const NAV_ITEMS: NavItem[] = [
  { 
    id: 'home', 
    label: 'Home', 
    insightTitle: 'Daily Guidance', 
    insightText: 'The mind is a reservoir of clarity. Still the water, and you will see the bottom.' 
  },
  { 
    id: 'features', 
    label: 'Features', 
    insightTitle: 'System Design', 
    insightText: 'Modular tools for psychology, productivity, and focus working in unison.' 
  },
  { 
    id: 'how-it-works', 
    label: 'How it works', 
    insightTitle: 'The Journey', 
    insightText: 'A linear progression from chaotic noise to deliberate, structured action.' 
  },
  { 
    id: 'articles', 
    label: 'Articles', 
    insightTitle: 'Deep Reading', 
    insightText: 'Curated wisdom from the intersection of modern science and ancient practice.' 
  },
  { 
    id: 'pricing', 
    label: 'Pricing', 
    insightTitle: 'Commitment', 
    insightText: 'Invest in your own clarity. Simple plans for serious practitioners.' 
  },
];

// We use a fixed number of nodes to allow for smooth morphing.
// Let's use 12 nodes.
const NODE_COUNT = 12;

// Helper to generate a random number within range
const random = (min: number, max: number) => Math.random() * (max - min) + min;

// 1. HOME: Organic / Balanced / Random but centered
const generateHomeState = (): GeometryState => {
  const nodes = Array.from({ length: NODE_COUNT }).map((_, i) => ({
    id: i,
    x: 50 + Math.cos(i * 137.5) * random(15, 35), // Phylotaxis-like spiral distribution
    y: 50 + Math.sin(i * 137.5) * random(15, 30),
    size: random(1, 2.5),
    opacity: random(0.4, 0.9),
  }));

  // Connect near nodes loosely
  const links: LinkConnection[] = [
    { source: 0, target: 1 }, { source: 1, target: 2 }, { source: 2, target: 4 },
    { source: 3, target: 5 }, { source: 5, target: 8 }, { source: 6, target: 9 },
    { source: 7, target: 10 }, { source: 0, target: 5 }, { source: 2, target: 7 }
  ];

  return { nodes, links };
};

// 2. FEATURES: 2x3 Grid (Structured)
const generateFeaturesState = (): GeometryState => {
  const nodes = Array.from({ length: NODE_COUNT }).map((_, i) => {
    // We only need 6 for the grid, others fade out or act as decorators
    if (i < 6) {
      const col = i % 3;
      const row = Math.floor(i / 3);
      return {
        id: i,
        x: 35 + col * 15,
        y: 40 + row * 20,
        size: 3,
        opacity: 1,
      };
    }
    // Decorator nodes
    return {
      id: i,
      x: random(20, 80),
      y: random(20, 80),
      size: 0.5,
      opacity: 0.1,
    };
  });

  const links: LinkConnection[] = [
    // Grid connections
    { source: 0, target: 1 }, { source: 1, target: 2 },
    { source: 3, target: 4 }, { source: 4, target: 5 },
    { source: 0, target: 3 }, { source: 1, target: 4 }, { source: 2, target: 5 }
  ];

  return { nodes, links };
};

// 3. HOW IT WORKS: Diagonal Path (Timeline)
const generateHowItWorksState = (): GeometryState => {
  const nodes = Array.from({ length: NODE_COUNT }).map((_, i) => {
    if (i < 4) {
        // Main diagonal line
        return {
            id: i,
            x: 30 + i * 14,
            y: 70 - i * 14,
            size: i === 0 || i === 3 ? 4 : 2, // Start and end are bigger
            opacity: 1,
        };
    }
    // Scattered around the path
    return {
        id: i,
        x: 30 + (i % 4) * 14 + random(-5, 5),
        y: 70 - (i % 4) * 14 + random(-5, 5),
        size: 0.8,
        opacity: 0.2,
    };
  });

  const links: LinkConnection[] = [
    { source: 0, target: 1 }, { source: 1, target: 2 }, { source: 2, target: 3 }
  ];

  return { nodes, links };
};

// 4. ARTICLES: Vertical Columns (Editorial)
const generateArticlesState = (): GeometryState => {
  const nodes = Array.from({ length: NODE_COUNT }).map((_, i) => {
     // Two columns
     const col = i % 2; 
     const row = Math.floor(i / 2);
     return {
         id: i,
         x: 45 + col * 10,
         y: 30 + row * 12,
         size: 1.5,
         opacity: row < 5 ? 0.8 : 0.2, // Fade out bottom ones if too many
     };
  });

  const links: LinkConnection[] = [
      { source: 0, target: 2 }, { source: 2, target: 4 }, { source: 4, target: 6 },
      { source: 1, target: 3 }, { source: 3, target: 5 }, { source: 5, target: 7 }
  ];

  return { nodes, links };
};

// 5. PRICING: Triangle (Stability)
const generatePricingState = (): GeometryState => {
    const nodes = Array.from({ length: NODE_COUNT }).map((_, i) => {
        if (i < 3) {
            // Main triangle vertices
            const angle = -Math.PI / 2 + (i * 2 * Math.PI) / 3; // Start top center
            return {
                id: i,
                x: 50 + Math.cos(angle) * 20,
                y: 55 + Math.sin(angle) * 20,
                size: 4,
                opacity: 1,
            }
        }
        // Fillers inside
        return {
            id: i,
            x: 50 + random(-8, 8),
            y: 55 + random(-5, 10),
            size: 0.5,
            opacity: 0.15,
        }
    });

    const links: LinkConnection[] = [
        { source: 0, target: 1 }, { source: 1, target: 2 }, { source: 2, target: 0 }
    ];

    return { nodes, links };
}

export const CONSTELLATION_STATES: Record<SectionId, GeometryState> = {
    'home': generateHomeState(),
    'features': generateFeaturesState(),
    'how-it-works': generateHowItWorksState(),
    'articles': generateArticlesState(),
    'pricing': generatePricingState(),
};