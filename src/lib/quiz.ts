import { QUESTIONS } from '../data/questions';
import { SIGNS } from '../data/signs';
import { TOPICS } from '../data/topics';
import type { Question } from '../data/types';

export type QuizPack = {
  title: string;
  minutes: number;
  passRatio: number;
  questions: Question[];
};

function shuffle<T>(list: T[]): T[] {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function takeBalanced(pool: Question[], count: number) {
  const buckets = new Map<string, Question[]>();
  for (const item of shuffle(pool)) {
    const list = buckets.get(item.topic) ?? [];
    list.push(item);
    buckets.set(item.topic, list);
  }
  const keys = [...buckets.keys()];
  const out: Question[] = [];
  let guard = 0;
  while (out.length < count && keys.length && guard < count * 12) {
    const key = keys[guard % keys.length];
    const next = buckets.get(key)?.shift();
    if (next) out.push(next);
    guard += 1;
  }
  return out.slice(0, count);
}

function signQuestion(signId: string): Question | null {
  const sign = SIGNS.find((s) => s.id === signId);
  if (!sign) return null;
  const wrong = shuffle(SIGNS.filter((s) => s.id !== sign.id && s.group === sign.group)).slice(0, 3);
  const fallback = shuffle(SIGNS.filter((s) => s.id !== sign.id)).slice(0, 3);
  const distractors = (wrong.length >= 3 ? wrong : fallback).slice(0, 3);
  const options = shuffle([sign.name, ...distractors.map((s) => s.name)]);
  return {
    id: `sig-${sign.id}`,
    topic: 'senales',
    prompt: '¿Qué señal es esta?',
    options,
    answer: options.indexOf(sign.name),
    explain: `${sign.name}. ${sign.meaning}`,
    article: sign.group,
    sign: sign.id,
    hot: true,
  };
}

export function buildQuiz(mode: string, answers: Record<string, boolean>): QuizPack {
  const hot = QUESTIONS.filter((q) => q.hot);

  if (mode === 'simulacro') {
    const core = takeBalanced(hot, 22);
    const filler = takeBalanced(
      QUESTIONS.filter((q) => !core.includes(q)),
      8,
    );
    return {
      title: 'Simulacro (30)',
      minutes: 40,
      passRatio: 0.7,
      questions: shuffle([...core, ...filler]).slice(0, 30),
    };
  }
  if (mode === 'caen') {
    return {
      title: 'Las que casi siempre caen',
      minutes: 25,
      passRatio: 0.7,
      questions: takeBalanced(hot, 20),
    };
  }
  if (mode === 'rapido') {
    return {
      title: 'Práctica rápida',
      minutes: 12,
      passRatio: 0.7,
      questions: shuffle(QUESTIONS).slice(0, 10),
    };
  }
  if (mode === 'senales') {
    const ids = shuffle(SIGNS).slice(0, 15).map((s) => s.id);
    return {
      title: 'Identificar señales',
      minutes: 15,
      passRatio: 0.7,
      questions: ids.map((id) => signQuestion(id)).filter((q): q is Question => q !== null),
    };
  }
  if (mode === 'fotos') {
    const pool = QUESTIONS.filter((q) => q.scene);
    return {
      title: 'Situaciones reales',
      minutes: 15,
      passRatio: 0.7,
      questions: shuffle(pool).slice(0, Math.min(10, pool.length)),
    };
  }
  if (mode === 'fallos') {
    const missed = QUESTIONS.filter((q) => answers[q.id] === false);
    const pack = missed.length >= 5 ? missed : hot;
    return {
      title: missed.length >= 5 ? 'Repaso de fallos' : 'Adelanto (aún sin fallos)',
      minutes: 15,
      passRatio: 0.7,
      questions: shuffle(pack).slice(0, Math.min(15, pack.length)),
    };
  }
  if (mode.startsWith('tema-')) {
    const topic = mode.slice(5);
    const found = TOPICS.find((t) => t.id === topic);
    const pool = QUESTIONS.filter((q) => q.topic === topic);
    return {
      title: found?.title ?? 'Tema',
      minutes: 15,
      passRatio: 0.7,
      questions: shuffle(pool).slice(0, Math.min(12, pool.length || 1)),
    };
  }
  return {
    title: 'Práctica',
    minutes: 12,
    passRatio: 0.7,
    questions: shuffle(QUESTIONS).slice(0, 10),
  };
}
