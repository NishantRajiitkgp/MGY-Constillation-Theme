export type SectionId = 'home' | 'features' | 'how-it-works' | 'articles' | 'pricing';

export interface NavItem {
  id: SectionId;
  label: string;
  insightTitle: string;
  insightText: string;
}

export interface NodePoint {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export interface LinkConnection {
  source: number;
  target: number;
}

export interface GeometryState {
  nodes: NodePoint[];
  links: LinkConnection[];
}