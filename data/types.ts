export type TopicId =
  | 'tramite'
  | 'categorias'
  | 'velocidad'
  | 'prioridad'
  | 'semaforos'
  | 'senales'
  | 'maniobras'
  | 'vehiculo'
  | 'usuarios'
  | 'sanciones'
  | 'fotos';

export type Topic = {
  id: TopicId;
  title: string;
  short: string;
  icon: string;
};

export type LessonBlock = {
  heading: string;
  body: string;
  trap?: boolean;
};

export type Lesson = {
  slug: TopicId;
  title: string;
  summary: string;
  blocks: LessonBlock[];
};

export type Question = {
  id: string;
  topic: TopicId;
  prompt: string;
  options: string[];
  answer: number;
  explain: string;
  article: string;
  hot?: boolean;
  sign?: string;
  scene?: string;
};

export type SignGroup =
  | 'peligro'
  | 'prioridad'
  | 'prohibicion'
  | 'obligacion'
  | 'informacion'
  | 'marca';

export type Sign = {
  id: string;
  name: string;
  group: SignGroup;
  meaning: string;
  tip?: string;
  draw: string;
  mark?: string;
  glyph?: string;
  exam?: boolean; // sale mucho en el teórico
};

export type Scene = {
  id: string;
  title: string;
  caption: string;
  mood: 'day' | 'night' | 'rain' | 'alert' | 'rural';
};
