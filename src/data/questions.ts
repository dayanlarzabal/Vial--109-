import type { Question, TopicId } from './types';

function q(
  id: string,
  topic: TopicId,
  prompt: string,
  options: [string, string, string, string],
  answer: 0 | 1 | 2 | 3,
  explain: string,
  article: string,
  extra?: { hot?: boolean; sign?: string; scene?: string },
): Question {
  return { id, topic, prompt, options, answer, explain, article, ...extra };
}

export const QUESTIONS: Question[] = [
  // —— TRÁMITE (salen siempre) ——
  q('tr-1', 'tramite', '¿Qué exámenes debe superar el aspirante a la licencia?', ['Solo el práctico', 'Médico, teórico y práctico', 'Solo el teórico del MININT', 'Únicamente el curso'], 1, 'Son tres: médico (MINSAP), teórico y práctico (MININT).', 'Art. 270', { hot: true }),
  q('tr-2', 'tramite', '¿Quién realiza los exámenes teórico y práctico?', ['El MINSAP', 'Cada instructor', 'El Ministerio del Interior', 'El MITRANS'], 2, 'El MININT examina teoría y práctica.', 'Arts. 272–274', { hot: true }),
  q('tr-3', 'tramite', 'Aprobar el curso de educación vial…', ['Sustituye el teórico oficial', 'Alcanza para manejar sin licencia', 'No sustituye el teórico ni el práctico del MININT', 'Equivale a la categoría B'], 2, 'El curso es requisito, no el examen oficial.', 'Trámite', { hot: true }),
  q('tr-4', 'tramite', '¿Cuál es la edad mínima general para la licencia?', ['16 años', '17 años', '18 años', '21 años'], 2, 'Hay que haber cumplido 18 años.', 'Requisitos', { hot: true }),
  q('tr-5', 'tramite', 'La licencia de conducción es…', ['Del vehículo', 'Personal e intransferible', 'Válida para un familiar un día', 'Un permiso del instructor'], 1, 'Solo conduce quien figura en ella.', 'Licencia', { hot: true }),
  q('tr-6', 'tramite', 'Después de los 70 años, el examen de salud se presenta…', ['Cada 5 años', 'Cada dos años', 'Nunca más', 'Solo si hay accidente'], 1, 'A los 65 y 70; después de los 70, cada dos años.', 'Revisiones', { hot: true }),
  q('tr-7', 'tramite', 'El examen médico del aspirante lo regula…', ['El MININT', 'El MINSAP', 'El instructor particular', 'El MITRANS'], 1, 'MINSAP (Res. 906/2022); MININT hace teórico y práctico.', 'Trámite', { hot: true }),

  // —— CATEGORÍAS ——
  q('cat-1', 'categorias', 'La categoría B autoriza…', ['Cualquier ómnibus', 'Autos hasta 8 asientos sin el conductor y hasta 3 500 kg', 'Motos de cualquier cilindrada', 'Camiones articulados'], 1, 'Ocho plazas sin el conductor y masa máxima 3 500 kg.', 'Art. 264', { hot: true }),
  q('cat-2', 'categorias', 'La agudeza visual mínima para la categoría B es…', ['0,6 en los dos ojos', '1,0 y 0,8', '0,8 y 0,5', 'Basta distinguir la luz'], 0, 'B: 0,6 y 0,6. A: 0,8 y 0,5. C: 1,0 y 0,8.', 'Res. 906/2022', { hot: true }),
  q('cat-3', 'categorias', 'Para obtener la categoría C hace falta…', ['Solo el médico especial', 'Experiencia previa en B', 'Tener ya la E', 'No se exige experiencia'], 1, 'C pide tiempo mínimo en B.', 'Art. 265', { hot: true }),
  q('cat-4', 'categorias', 'Además de la agudeza, el aspirante debe distinguir…', ['Solo blanco y negro', 'Rojo, verde y amarillo', 'Solo el azul', 'No se evalúan colores'], 1, 'Colores del semáforo.', 'Res. 906/2022', { hot: true }),
  q('cat-5', 'categorias', 'La categoría A autoriza a conducir…', ['Solo bicicletas', 'Motocicletas', 'Camiones de carga', 'Ómnibus'], 1, 'A: motos. A1: motos limitadas.', 'Art. 264', { hot: true }),
  q('cat-6', 'categorias', 'La categoría D se relaciona con…', ['Tractores', 'Transporte de pasajeros', 'Solo motos', 'Maquinaria agrícola'], 1, 'D/D1: pasajeros. C/C1: carga.', 'Art. 264', { hot: true }),

  // —— VELOCIDAD (trampas del examen) ——
  q('vel-1', 'velocidad', 'En zona urbana, el límite general es…', ['40 km/h solo para autos', '50 km/h para todos los vehículos de motor', '60 km/h', '90 km/h'], 1, 'El 50 urbano vale para todos los vehículos de motor.', 'Art. 126', { hot: true }),
  q('vel-2', 'velocidad', 'En zona de niños el máximo es…', ['20 km/h en cualquier lugar', '40 km/h en urbana y 60 km/h en rural', '50 km/h siempre', '10 km/h'], 1, 'Trampa clásica: 20 no es la escuela.', 'Art. 127', { hot: true }),
  q('vel-3', 'velocidad', 'Al salir de un garaje no se superan…', ['40 km/h', '50 km/h', '20 km/h', '60 km/h'], 2, '20 km/h a la salida de garajes y parqueos interiores.', 'Art. 127', { hot: true }),
  q('vel-4', 'velocidad', 'En camino de tierra o terraplén el máximo es…', ['90 km/h', '50 km/h', '60 km/h', '40 km/h'], 2, 'Terraplén: máximo 60 km/h.', 'Art. 127', { hot: true }),
  q('vel-5', 'velocidad', 'En autopista, un auto ligero puede llegar a…', ['90 km/h', '120 km/h', '100 km/h', '80 km/h'], 2, '100 km/h ligeros y ómnibus en autopista.', 'Art. 126', { hot: true }),
  q('vel-6', 'velocidad', 'En carretera, ligeros y ómnibus pueden circular hasta…', ['80 km/h', '100 km/h', '90 km/h', '70 km/h'], 2, 'Carretera: 90 ligeros/ómnibus; 80 carga; 70 remolque.', 'Art. 126', { hot: true }),
  q('vel-7', 'velocidad', 'Dentro de un túnel, la velocidad mínima es…', ['40 km/h', '50 km/h', '60 km/h', 'No hay mínima'], 2, 'Mínima 60 km/h en túnel.', 'Art. 127', { hot: true }),
  q('vel-8', 'velocidad', 'Los equipos agrícolas y de construcción circulan como máximo a…', ['40 km/h', '50 km/h', '20 km/h', '60 km/h'], 2, 'Tope 20 km/h para esos equipos.', 'Art. 126', { hot: true }),
  q('vel-9', 'velocidad', 'Aunque no haya señal, el conductor debe…', ['Ir siempre al máximo permitido', 'Modular la velocidad según vía, clima y visibilidad', 'Ignorar el clima', 'Solo mirar el velocímetro'], 1, 'Deber de moderación (art. 128).', 'Art. 128', { hot: true }),
  q('vel-10', 'velocidad', 'En autopista, un vehículo de carga (sin remolque) puede llegar a…', ['100 km/h', '90 km/h', '80 km/h', '70 km/h'], 1, 'Autopista: 100 ligeros/ómnibus, 90 carga, 80 con remolque.', 'Art. 126', { hot: true }),

  // —— PRIORIDAD ——
  q('pr-1', 'prioridad', '¿Qué manda por encima de todo?', ['La marca del piso', 'El semáforo en verde', 'El agente, regulador o guardacrucero', 'La señal de PARE'], 2, 'Orden: agente → provisional → semáforo → verticales → marcas.', 'Art. 62', { hot: true }),
  q('pr-2', 'prioridad', 'En un cruce sin señales, se cede…', ['Al de la izquierda', 'Al más grande', 'Al que se aproxima por la derecha', 'Al que toque bocina'], 2, 'Regla de la derecha.', 'Art. 79', { hot: true }),
  q('pr-3', 'prioridad', 'En una intersección en T sin señales, cede…', ['Quien va por la vía que sigue', 'Quien llega por el tramo que no continúa', 'Siempre el de la izquierda', 'Nadie'], 1, 'El que se le acaba la calle cede.', 'Art. 79', { hot: true }),
  q('pr-4', 'prioridad', 'Ante una ambulancia con sirena y baliza…', ['Sigue si el semáforo está en verde', 'Se arrima a la derecha y se detiene', 'Acelera', 'Se pega detrás'], 1, 'Derecha y detención.', 'Art. 67', { hot: true }),
  q('pr-5', 'prioridad', 'Si el agente ordena alto y el semáforo está en verde…', ['Manda el semáforo', 'Manda el agente', 'Usted elige', 'Manda la marca'], 1, 'El agente es el primer nivel.', 'Art. 62', { hot: true }),
  q('pr-6', 'prioridad', 'Al incorporarse desde un estacionamiento o vía secundaria…', ['Tiene prioridad', 'Debe ceder a quien ya circula', 'Solo cede a ómnibus', 'Toca bocina y entra'], 1, 'Quien se incorpora cede.', 'Prioridad', { hot: true }),
  q('pr-7', 'prioridad', 'En una glorieta, por regla general…', ['Entra quien quiera', 'Cede quien se incorpora a la circulación de la glorieta', 'Siempre tiene prioridad el de la izquierda', 'No hay reglas'], 1, 'Se cede a quien ya está en la circulatoria.', 'Glorietas', { hot: true }),

  // —— SEMÁFOROS ——
  q('se-1', 'semaforos', 'La luz roja fija obliga a…', ['Pasar si el cruce está vacío', 'Detenerse antes de la línea o del paso de peatones', 'Solo reducir a 20 km/h', 'Ceder solo a ómnibus'], 1, 'Detención antes de la línea.', 'Art. 150', { hot: true }),
  q('se-2', 'semaforos', 'La luz ámbar fija significa…', ['Acelere', 'Deténgase si puede hacerlo con seguridad', 'El semáforo está roto', 'Tiene prioridad'], 1, 'Si no puede parar seguro, termine el cruce.', 'Arts. 150–151', { hot: true }),
  q('se-3', 'semaforos', 'Una luz roja intermitente equivale a…', ['Vía libre', 'Un PARE: detenerse y ceder', 'Bajar a 40 km/h', 'Semáforo apagado'], 1, 'Roja intermitente = PARE.', 'Semáforos', { hot: true }),
  q('se-4', 'semaforos', 'El agente levanta el brazo en vertical. Usted…', ['Sigue si no oyó el silbato', 'Se detiene de inmediato', 'Solo se detiene si está de frente', 'Reduce y pasa'], 1, 'Brazo arriba: alto general.', 'Art. 63', { hot: true }),
  q('se-5', 'semaforos', 'Con los dos brazos del agente en horizontal, se detienen…', ['Solo los de la izquierda', 'Quienes vienen de frente y de espalda', 'Todo el mundo', 'Nadie'], 1, 'Frente y espalda paran; los de lado pueden seguir.', 'Art. 63', { hot: true }),
  q('se-6', 'semaforos', 'Luz verde intermitente advierte…', ['Que acelere al máximo', 'Que el paso autorizado termina pronto', 'Que hay obras', 'Que el semáforo falló'], 1, 'Va a cambiar; prepárese a detenerse.', 'Semáforos', { hot: true }),
  q('se-7', 'semaforos', 'Si el semáforo está apagado y no hay agente…', ['Pase sin mirar', 'Actúe como en cruce sin señales (ceda a la derecha)', 'Es obligatorio detenerse 1 minuto', 'Solo pasan los ómnibus'], 1, 'Sin luz ni agente: reglas de prioridad del cruce.', 'Art. 62–79', { hot: true }),

  // —— SEÑALES ——
  q('sn-1', 'senales', 'Las señales de peligro tienen forma de…', ['Círculo azul', 'Triángulo con borde rojo', 'Octágono', 'Rectángulo verde'], 1, 'Triángulo, borde rojo.', 'Señalización', { hot: true, sign: 'curva-derecha' }),
  q('sn-2', 'senales', 'La señal de PARE obliga a…', ['Reducir sin detenerse', 'Una detención total', 'Solo ceder a peatones', 'Tocar bocina'], 1, 'Octágono rojo: parar del todo.', 'PARE', { hot: true, sign: 'pare' }),
  q('sn-3', 'senales', 'Ceda el paso y PARE se diferencian en que…', ['Son iguales', 'CEDA permite seguir si no estorba; PARE exige parar siempre', 'CEDA es más estricta', 'PARE solo vale de noche'], 1, 'Triángulo invertido ≠ detención obligatoria si el paso está libre.', 'Prioridad', { hot: true, sign: 'ceda' }),
  q('sn-4', 'senales', 'Una línea continua en el eje…', ['Permite adelantar con precaución', 'No se invade ni se adelanta sobre ella', 'Es decorativa', 'Indica carril de ómnibus'], 1, 'Continua: no cruzarla.', 'Marcas', { hot: true, sign: 'linea-continua' }),
  q('sn-5', 'senales', 'El disco rojo con barra blanca horizontal significa…', ['Prohibido estacionar', 'Acceso prohibido en ese sentido', 'Fin de prohibición', 'Hospital'], 1, 'No entrar.', 'Señalización', { hot: true, sign: 'no-entrar' }),
  q('sn-6', 'senales', 'La señal de niños advierte…', ['Límite fijo de 20 km/h', 'Zona escolar: 40 urbana / 60 rural', 'Prohibido circular', 'Solo peatones'], 1, 'No confundir con el 20 de garajes.', 'Art. 127', { hot: true, sign: 'ninos' }),
  q('sn-7', 'senales', 'Las señales de obligación son, por lo general…', ['Triángulos rojos', 'Círculos azules con pictograma blanco', 'Octágonos', 'Cuadrados amarillos'], 1, 'Fondo azul = obligación.', 'Señalización', { hot: true, sign: 'sentido-obligatorio' }),
  q('sn-8', 'senales', 'Prohibido estacionar se diferencia de prohibido detenerse en que…', ['Son iguales', 'Detenerse es más estricto: no parar ni estacionar', 'Estacionar es más estricto', 'Solo valen de noche'], 1, 'Cruz sobre azul = no detenerse.', 'Estacionamiento', { hot: true, sign: 'no-detener' }),
  q('sn-9', 'senales', 'La línea de detención indica…', ['Dónde adelantar', 'Dónde debe parar el vehículo ante PARE o luz roja', 'El carril de ómnibus', 'Una zona de estacionamiento'], 1, 'Se detiene ANTES de esa línea.', 'Marcas', { hot: true, sign: 'linea-pare' }),

  // —— MANIOBRAS ——
  q('man-1', 'maniobras', 'Antes de girar o cambiar de carril hay que…', ['Solo mirar el espejo interior', 'Señalizar con anticipación y comprobar que cabe', 'Tocar bocina tres veces', 'Detenerse siempre'], 1, 'Seña, espejos y ángulo muerto.', 'Maniobras', { hot: true }),
  q('man-2', 'maniobras', 'En vía de doble sentido, el estacionamiento se hace…', ['A la izquierda', 'Junto al contén derecho, salvo señal contraria', 'En el centro', 'En diagonal'], 1, 'Doble sentido: lado derecho.', 'Art. 137', { hot: true }),
  q('man-3', 'maniobras', 'Está prohibido estacionar a menos de…', ['10 m de cualquier esquina', '4 m de un hidrante', '1 m de un hidrante', 'No hay distancia'], 1, '4 m del hidrante, parada de ómnibus, cebra, etc.', 'Art. 139', { hot: true }),
  q('man-4', 'maniobras', 'Adelantar es correcto cuando…', ['Hay línea continua pero el otro va lento', 'Puede terminar la maniobra y volver sin peligro', 'Es en una curva cerrada', 'Es sobre un paso de peatones'], 1, 'Si no ve el final, no empieza.', 'Adelantamiento', { hot: true }),
  q('man-5', 'maniobras', 'Está prohibido adelantar…', ['Solo de noche', 'En curvas, pasos peatonales, pasos a nivel e intersecciones', 'Solo en autopista', 'Nunca está prohibido'], 1, 'Zonas típicas de prohibición.', 'Adelantamiento', { hot: true }),
  q('man-6', 'maniobras', 'El cambio de sentido (giro en U)…', ['Siempre está permitido', 'Se prohíbe donde haya señal o riesgo (puentes, curvas, poca visibilidad)', 'Solo se prohíbe a motos', 'Es obligatorio en glorietas'], 1, 'Señal de prohibición o peligro de la maniobra.', 'Maniobras', { hot: true }),

  // —— VEHÍCULO / LUCES ——
  q('ve-1', 'vehiculo', 'Las luces de carretera se cambian a cruce cuando…', ['Nunca', 'Se cruza o se alcanza a alguien a quien puedan deslumbrar', 'Solo en túnel', 'Lo pide el pasajero'], 1, 'No deslumbrar.', 'Art. 185', { hot: true }),
  q('ve-2', 'vehiculo', 'Las luces de posición deben percibirse a unos…', ['40 m', '100 m', '300 m', '10 m'], 2, 'Posición ~300 m; cruce ~40 m; carretera ~100 m.', 'Luces', { hot: true }),
  q('ve-3', 'vehiculo', 'El cinturón de seguridad…', ['Es opcional en ciudad', 'Lo usan conductor y pasajeros cuando el vehículo lo tiene', 'Solo el conductor', 'Solo en autopista'], 1, 'Si hay cinturón, se abrocha.', 'Vehículo', { hot: true }),
  q('ve-4', 'vehiculo', 'Hablar por el teléfono en la mano mientras conduce…', ['Se permite en rojo', 'Está prohibido', 'Se permite bajo 40 km/h', 'Solo se prohíbe a profesionales'], 1, 'Distracción del conductor.', 'Distracción', { hot: true }),
  q('ve-5', 'vehiculo', 'En motocicleta, el casco…', ['Es opcional bajo 40 km/h', 'Es obligatorio para conductor y acompañante', 'Solo para el conductor', 'Solo en carretera'], 1, 'Casco para ambos.', 'Motos', { hot: true }),
  q('ve-6', 'vehiculo', 'Las luces de cruce iluminan de forma eficaz unos…', ['300 m', '40 m', '10 m', '200 m'], 1, 'Cruce ≈ 40 m; carretera ≈ 100 m.', 'Luces', { hot: true }),

  // —— USUARIOS ——
  q('us-1', 'usuarios', 'En un paso de peatones marcado, el peatón…', ['Cruza bajo su riesgo', 'Tiene prioridad', 'Solo de noche', 'Debe correr'], 1, 'La cebra da prioridad al peatón.', 'Peatones', { hot: true, sign: 'paso-peatones' }),
  q('us-2', 'usuarios', 'Cruzar la calzada entre autos parqueados…', ['Es lo más seguro', 'Está prohibido', 'Solo se prohíbe a adultos', 'Es obligatorio si no hay cebra'], 1, 'Se cruza por esquina o cebra.', 'Art. 146', { hot: true }),
  q('us-3', 'usuarios', 'Si usted participa en un accidente debe…', ['Irse si el golpe fue leve', 'Detenerse, auxiliar, no alterar evidencias y avisar', 'Mover siempre los autos', 'Esperar a que el otro avise'], 1, 'Artículo 69.', 'Art. 69', { hot: true }),
  q('us-4', 'usuarios', 'La causa principal de accidentes según el temario es…', ['El mal estado de las vías', 'El factor humano', 'Las fallas mecánicas', 'El clima'], 1, 'Velocidad, alcohol, distracción, no ceder.', 'Seguridad vial', { hot: true }),
  q('us-5', 'usuarios', 'Si traslada a un herido del accidente…', ['Ya no debe presentarse', 'Debe volver o presentarse en la unidad policial', 'Solo avisa por teléfono y se va', 'No tiene deber alguno'], 1, 'Permanece la obligación de cooperar.', 'Art. 69', { hot: true }),

  // —— SANCIONES / ALCOHOL ——
  q('sa-1', 'sanciones', 'Conducir un ómnibus o vehículo de carga bajo efectos del alcohol…', ['Se tolera hasta 0,5 g/L', 'Está prohibido: tolerancia cero', 'Solo se sanciona si hay accidente', 'Se permite fuera de la ciudad'], 1, 'Profesional, carga, público y estatal: cero.', 'Arts. 93 y 288', { hot: true }),
  q('sa-2', 'sanciones', 'Negarse a la prueba de alcohol…', ['Es un derecho sin consecuencia', 'Se sanciona y puede llevar a suspensión', 'Solo obliga a repetirla al día siguiente', 'Anula la multa'], 1, 'La negativa agrava el expediente.', 'Arts. 70 y 288', { hot: true }),
  q('sa-3', 'sanciones', 'Un conductor novel llega al tope de puntos…', ['Igual que cualquiera', 'Antes: a los dos tercios del límite', 'Nunca acumula puntos', 'Solo de noche'], 1, 'El novel tiene menos margen.', 'Art. 288', { hot: true }),
  q('sa-4', 'sanciones', 'La Ley 109 se denomina…', ['Código Penal del tránsito', 'Código de Seguridad Vial', 'Ley de licencias del MITRANS', 'Reglamento de la PNR'], 1, 'Código de Seguridad Vial.', 'Art. 1', { hot: true }),
  q('sa-5', 'sanciones', 'Conducir sin licencia…', ['Solo genera una advertencia', 'Está prohibido y se sanciona', 'Se permite si va acompañado', 'Solo importa en autopista'], 1, 'Sin licencia no se conduce.', 'Sanciones', { hot: true }),

  // —— ESCENAS ——
  q('ft-1', 'fotos', 'En este cruce sin señales, ¿quién tiene prioridad?', ['El más rápido', 'El que se aproxima por la derecha', 'El de mayor tamaño', 'Nadie'], 1, 'Sin señales: ceda al de la derecha.', 'Art. 79', { hot: true, scene: 'cruce' }),
  q('ft-2', 'fotos', 'En zona de niños, el límite correcto es…', ['20 km/h siempre', '40 km/h en ciudad y 60 en zona rural', '50 km/h', '10 km/h'], 1, 'Trampa del teórico: no es 20.', 'Art. 127', { hot: true, scene: 'ninos' }),
  q('ft-3', 'fotos', 'De noche, al cruzarse con otro vehículo…', ['Se mantienen las luces altas', 'Se cambia a luces de cruce', 'Se apagan las luces', 'Se toca la bocina'], 1, 'Evitar deslumbrar.', 'Art. 185', { hot: true, scene: 'noche' }),
  q('ft-4', 'fotos', 'Con lluvia y calzada mojada debe…', ['Mantener la misma velocidad', 'Reducir y aumentar la distancia', 'Usar solo luces de posición', 'Adelantar con rapidez'], 1, 'Más distancia de frenado.', 'Art. 128', { hot: true, scene: 'lluvia' }),
  q('ft-5', 'fotos', 'Ante una ambulancia con baliza y sirena…', ['Sigue si tiene verde', 'Se arrima a la derecha y se detiene', 'Acelera para abrirle paso adelante', 'Se queda en el carril'], 1, 'Emergencia: derecha y alto.', 'Art. 67', { hot: true, scene: 'emergencia' }),
  q('ft-6', 'fotos', 'En el paso de peatones marcado…', ['El auto tiene prioridad si va rápido', 'El peatón tiene prioridad', 'Solo de noche el peatón manda', 'Se toca bocina y se pasa'], 1, 'Prioridad del peatón en cebra.', 'Peatones', { hot: true, scene: 'cebra' }),
  q('ft-7', 'fotos', 'En un terraplén el máximo es…', ['90 km/h', '50 km/h', '60 km/h', '100 km/h'], 2, 'Camino de tierra: 60 km/h.', 'Art. 127', { hot: true, scene: 'terraplen' }),
  q('ft-8', 'fotos', 'Al salir de un garaje a la vía…', ['Máximo 40 km/h', 'Máximo 20 km/h', 'Máximo 50 km/h', 'Sin límite si no hay peatones'], 1, 'Salida de garaje: 20 km/h.', 'Art. 127', { hot: true, scene: 'garaje' }),
  q('ft-9', 'fotos', 'En un paso a nivel con barreras bajas…', ['Se pasa con precaución', 'Se detiene y espera', 'Se rodea la barrera', 'Solo paran los camiones'], 1, 'Barrera baja o luces: alto.', 'Paso a nivel', { hot: true, scene: 'ferrocarril' }),
  q('ft-10', 'fotos', 'Ante una curva cerrada con poca visibilidad…', ['Se mantiene la velocidad', 'Se reduce antes de entrar', 'Se usa el claxon y se acelera', 'Se invade el sentido contrario'], 1, 'Adaptar velocidad a la visibilidad.', 'Art. 128', { hot: true, scene: 'curva' }),
];
