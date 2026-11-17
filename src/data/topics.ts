import type { Topic } from './types';

export const TOPICS: Topic[] = [
  { id: 'tramite', title: 'Trámite y licencia', short: 'Trámite', icon: '📋' },
  { id: 'categorias', title: 'Categorías', short: 'Categorías', icon: '🪪' },
  { id: 'velocidad', title: 'Velocidad', short: 'Velocidad', icon: '⚡' },
  { id: 'prioridad', title: 'Prioridad', short: 'Prioridad', icon: '🚦' },
  { id: 'semaforos', title: 'Semáforos y agentes', short: 'Semáforos', icon: '🔴' },
  { id: 'senales', title: 'Señales y marcas', short: 'Señales', icon: '🛑' },
  { id: 'maniobras', title: 'Maniobras', short: 'Maniobras', icon: '🔄' },
  { id: 'vehiculo', title: 'Luces y vehículo', short: 'Vehículo', icon: '🚗' },
  { id: 'usuarios', title: 'Peatones y accidentes', short: 'Usuarios', icon: '🚶' },
  { id: 'sanciones', title: 'Alcohol y sanciones', short: 'Sanciones', icon: '⚖️' },
];
