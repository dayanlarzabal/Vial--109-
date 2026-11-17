import type { Scene } from './types';

export const SCENES: Scene[] = [
  {
    id: 'cruce',
    title: 'Cruce sin señales',
    caption: 'Intersección urbana sin semáforo ni señales verticales',
    mood: 'day',
  },
  {
    id: 'ninos',
    title: 'Zona de niños',
    caption: 'Escolares en la acera junto a la calzada',
    mood: 'day',
  },
  {
    id: 'noche',
    title: 'Noche con luces',
    caption: 'Vehículo de frente con luces altas',
    mood: 'night',
  },
  {
    id: 'lluvia',
    title: 'Calzada mojada',
    caption: 'Lluvia y reflejos en el asfalto',
    mood: 'rain',
  },
  {
    id: 'emergencia',
    title: 'Vehículo de emergencia',
    caption: 'Ambulancia con baliza y sirena',
    mood: 'alert',
  },
  {
    id: 'cebra',
    title: 'Paso de peatones',
    caption: 'Cebra marcada con peatón cruzando',
    mood: 'day',
  },
  {
    id: 'terraplen',
    title: 'Terraplén',
    caption: 'Camino de tierra rural',
    mood: 'rural',
  },
  {
    id: 'garaje',
    title: 'Salida de garaje',
    caption: 'Vehículo saliendo a la vía pública',
    mood: 'day',
  },
  {
    id: 'ferrocarril',
    title: 'Paso a nivel',
    caption: 'Cruce ferroviario con barreras',
    mood: 'alert',
  },
  {
    id: 'curva',
    title: 'Curva cerrada',
    caption: 'Curva a la derecha con poca visibilidad',
    mood: 'day',
  },
];

export const SCENE_MAP = Object.fromEntries(SCENES.map((s) => [s.id, s]));
