import { Team } from '../types';

export const TEAMS: Team[] = [
  { id: 't1', name: 'Halcones Rojos', shortName: 'HAL', image: 'halcones.png', color: '#ef4444' },
  { id: 't2', name: 'Toros Negros', shortName: 'TOR', image: 'toros.png', color: '#1f2937' },
  { id: 't3', name: 'Lobos Grises', shortName: 'LOB', image: 'lobos.png', color: '#6b7280' },
  { id: 't4', name: 'Rayos de Sol', shortName: 'RAY', image: 'rayos.png', color: '#eab308' },
  { id: 't5', name: 'Guerreros', shortName: 'GUE', image: 'guerreros.png', color: '#2563eb' },
  { id: 't6', name: 'Dragones', shortName: 'DRA', image: 'dragones.png', color: '#16a34a' },
  { id: 't7', name: 'Tiburones', shortName: 'TIB', image: 'tiburones.png', color: '#06b6d4' },
  { id: 't8', name: 'Panteras', shortName: 'PAN', image: 'panteras.png', color: '#9333ea' },
  { id: 't9', name: 'Águilas Doradas', shortName: 'AGU', image: 'aguilas.png', color: '#d97706' },
  { id: 't10', name: 'Cobra Kai', shortName: 'COB', image: 'cobras.png', color: '#0f172a' },
  { id: 't11', name: 'Titanes', shortName: 'TIT', image: 'titanes.png', color: '#4f46e5' },
];

// Helper to get team by ID
export const getTeamById = (id: string): Team | undefined => {
  return TEAMS.find(t => t.id === id);
};