import type { Lesson } from './types';

export const LESSONS: Lesson[] = [
  {
    slug: 'tramite',
    title: 'Trámite de la licencia',
    summary: 'Tres exámenes. El curso no sustituye al teórico del MININT.',
    blocks: [
      {
        heading: 'Qué hay que vencer',
        body: 'El aspirante se somete a examen médico, teórico y práctico. El médico lo regula el MINSAP (Res. 906/2022). El teórico y el práctico los hace el Ministerio del Interior.',
      },
      {
        heading: 'El curso no alcanza',
        body: 'Hace falta el curso de educación vial. Aprobarlo no sustituye el examen teórico oficial del MININT.',
      },
      {
        heading: 'Edad y revisiones',
        body: 'Edad mínima general: 18 años. A los 65 y a los 70 se presenta el examen de salud; después de los 70, cada dos años.',
      },
    ],
  },
  {
    slug: 'categorias',
    title: 'Categorías de licencia',
    summary: 'Qué puede manejar cada letra y qué vista piden.',
    blocks: [
      {
        heading: 'Las letras',
        body: 'A1: motos limitadas. A: motos. B: autos hasta 8 asientos (sin conductor) y 3 500 kg. C/C1: carga. D/D1: pasajeros. E: combinaciones. F: tractores y maquinaria.',
      },
      {
        heading: 'La vista (Res. 906/2022)',
        body: 'A: 0,8 y 0,5. B: 0,6 en ambos ojos. C: 1,0 y 0,8. Hay que distinguir rojo, verde y amarillo.',
      },
    ],
  },
  {
    slug: 'velocidad',
    title: 'Límites de velocidad',
    summary: 'Artículos 126 a 128, con las trampas del examen.',
    blocks: [
      {
        heading: 'Tabla del artículo 126',
        body: 'Urbana: 50 km/h para todos los vehículos de motor. Carretera: 90 ligeros y ómnibus; 80 carga; 70 remolque. Autopista: 100, 90 y 80. Equipos agrícolas/construcción: 20 km/h.',
      },
      {
        heading: 'Zona de niños no es 20',
        body: 'Art. 127: zona de niños → 40 km/h urbana y 60 rural. Los 20 km/h son la salida de garajes y el tope de tractores. Terraplén: máximo 60. Túnel: mínima 60.',
        trap: true,
      },
    ],
  },
  {
    slug: 'prioridad',
    title: 'Prioridad y derecho de paso',
    summary: 'Quién manda cuando todo se contradice.',
    blocks: [
      {
        heading: 'Orden del artículo 62',
        body: '1) Agentes, reguladores y guardacruceros. 2) Régimen provisional. 3) Semáforos. 4) Señales verticales. 5) Marcas horizontales.',
      },
      {
        heading: 'Sin señales',
        body: 'Se cede al que se aproxima por la derecha. En T, cede quien llega por el tramo que no continúa. Emergencia con sirena: derecha y detenerse.',
      },
    ],
  },
  {
    slug: 'semaforos',
    title: 'Semáforos y el agente',
    summary: 'Roja, ámbar, verde y los brazos.',
    blocks: [
      {
        heading: 'Luces',
        body: 'Roja: detenerse antes de la línea. Ámbar: detenerse si se puede con seguridad. Verde: pasar con precaución. Roja intermitente = PARE.',
      },
      {
        heading: 'El agente',
        body: 'Brazo vertical: alto para todos. Brazos horizontales: paran frente y espalda. El agente manda sobre el semáforo.',
      },
    ],
  },
  {
    slug: 'senales',
    title: 'Señales y marcas',
    summary: 'La forma dice el grupo antes de leer el dibujo.',
    blocks: [
      {
        heading: 'Formas',
        body: 'Peligro: triángulo rojo. PARE: octágono. Ceda: triángulo invertido. Prohibición: círculo orla roja. Obligación: círculo azul.',
      },
      {
        heading: 'Marcas',
        body: 'Línea continua: no invadir. Discontinua: se puede si es seguro. Detenerse ANTES de la línea de PARE. Cebra: prioridad al peatón.',
      },
    ],
  },
  {
    slug: 'maniobras',
    title: 'Maniobras y estacionamiento',
    summary: 'Señalizar, adelantar y dónde no parquear.',
    blocks: [
      {
        heading: 'Adelantar',
        body: 'Solo si se puede terminar con seguridad. Prohibido en curva, paso peatonal, paso a nivel, intersección y sobre línea continua.',
      },
      {
        heading: 'Estacionar',
        body: 'Doble sentido: contén derecho. Prohibido a menos de 4 m de hidrante, en parada de ómnibus, acera, cebra, cruce, puente y túnel.',
      },
    ],
  },
  {
    slug: 'vehiculo',
    title: 'Luces, carga y vehículo',
    summary: 'Ver y no deslumbrar.',
    blocks: [
      {
        heading: 'Luces',
        body: 'Posición visibles a ~300 m. Cruce ~40 m. Carretera ~100 m. Bajar a cruce al cruzarse o alcanzar a alguien.',
      },
      {
        heading: 'Cinturón, casco, teléfono',
        body: 'Cinturón obligatorio si el vehículo lo tiene. Casco en moto (conductor y acompañante). Teléfono en la mano: prohibido.',
      },
    ],
  },
  {
    slug: 'usuarios',
    title: 'Peatones y accidentes',
    summary: 'La cebra no se negocia. El artículo 69.',
    blocks: [
      {
        heading: 'Peatón',
        body: 'Cruza por esquina o paso marcado, no entre vehículos parqueados. En la cebra tiene prioridad.',
      },
      {
        heading: 'Accidente (art. 69)',
        body: 'Detenerse, auxiliar, no alterar evidencias y avisar a la autoridad. Si traslada a un herido, volver o presentarse en la unidad.',
      },
    ],
  },
  {
    slug: 'sanciones',
    title: 'Alcohol, puntos y sanciones',
    summary: 'Cero para profesionales. Negarse también cuenta.',
    blocks: [
      {
        heading: 'Alcohol',
        body: 'Tolerancia cero en transporte público, carga, vehículos estatales y profesionales. Negarse a la prueba se sanciona.',
        trap: true,
      },
      {
        heading: 'Puntos',
        body: 'El novel (menos de 2 años) llega al límite a los dos tercios. La causa principal de accidentes en el temario: factor humano.',
      },
    ],
  },
];

export const LESSON_MAP = Object.fromEntries(LESSONS.map((l) => [l.slug, l])) as Record<
  string,
  Lesson
>;
