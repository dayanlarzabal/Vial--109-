import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SignFace } from './SignFace';
import { SceneArt } from './SceneArt';
import { playSfx } from '../lib/audio';
import { buildQuiz, type QuizPack } from '../lib/quiz';
import { useProgress } from '../lib/store';
import { SIGN_MAP } from '../data/signs';
import { SCENE_MAP } from '../data/scenes';

function clock(total: number) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function QuizView({ mode }: { mode: string }) {
  const sound = useProgress((s) => s.sound);
  const record = useProgress((s) => s.record);
  const recordMock = useProgress((s) => s.recordMock);
  const [pack, setPack] = useState<QuizPack | null>(null);
  const [index, setIndex] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [left, setLeft] = useState(-1);
  const [misses, setMisses] = useState<number[]>([]);
  const scoreRef = useRef(0);
  const closed = useRef(false);

  useEffect(() => {
    const next = buildQuiz(mode, useProgress.getState().answers);
    setPack(next);
    setIndex(0);
    setPick(null);
    setScore(0);
    scoreRef.current = 0;
    setDone(false);
    setLeft(next.minutes * 60);
    setMisses([]);
    closed.current = false;
  }, [mode]);

  function close(finalScore: number) {
    if (closed.current || !pack) return;
    closed.current = true;
    setDone(true);
    recordMock({ at: Date.now(), score: finalScore, total: pack.questions.length, mode });
    if (useProgress.getState().sound) {
      playSfx(finalScore / pack.questions.length >= pack.passRatio ? 'pass' : 'fail');
    }
  }

  useEffect(() => {
    if (!pack || done || left !== 0) return;
    close(scoreRef.current);
  }, [left, pack, done]);

  useEffect(() => {
    if (!pack || done || left < 0) return;
    const id = window.setInterval(() => {
      setLeft((v) => {
        if (v <= 1) return 0;
        if (v <= 11 && useProgress.getState().sound) playSfx('tick');
        return v - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [pack, done]);

  if (!pack) return <p className="muted">Preparando la prueba…</p>;

  const current = pack.questions[index];
  if (!current) {
    return (
      <div className="card">
        <p>No hay preguntas para este modo.</p>
        <Link className="btn" to="/examen" style={{ marginTop: 12 }}>
          Volver
        </Link>
      </div>
    );
  }

  const sign = current.sign ? SIGN_MAP[current.sign] : undefined;
  const scene = current.scene ? SCENE_MAP[current.scene] : undefined;
  const passed = score / pack.questions.length >= pack.passRatio;

  function choose(option: number) {
    if (pick !== null || done) return;
    const ok = option === current.answer;
    setPick(option);
    if (ok) {
      scoreRef.current += 1;
      setScore(scoreRef.current);
    } else {
      setMisses((list) => [...list, index]);
    }
    record(current.id, ok);
    if (sound) playSfx(ok ? 'ok' : 'bad');
  }

  function next() {
    if (index + 1 >= pack.questions.length) {
      close(scoreRef.current);
      return;
    }
    setIndex((v) => v + 1);
    setPick(null);
  }

  if (done) {
    return (
      <div className="q-enter">
        <p className="muted" style={{ fontSize: 14 }}>
          {pack.title}
        </p>
        <div
          className={`card result-stamp ${passed ? 'result-ok' : 'result-bad'}`}
        >
          {passed ? 'Aprobado' : 'A repasar'} · {score}/{pack.questions.length}
        </div>
        <p className="muted" style={{ marginTop: 12 }}>
          Corte de práctica: {Math.round(pack.passRatio * 100)}%. El examen oficial lo califica el MININT.
        </p>
        <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
          {pack.questions.map((item, i) => (
            <div key={`${item.id}-${i}`} className="card fade-in">
              <p style={{ fontWeight: 600, margin: 0 }}>{item.prompt}</p>
              <p
                style={{
                  margin: '6px 0 0',
                  fontSize: 14,
                  color: misses.includes(i) ? 'var(--primary)' : 'var(--ok)',
                }}
              >
                {misses.includes(i) ? `Correcta: ${item.options[item.answer]}` : 'Bien'}
              </p>
              <p className="muted" style={{ margin: '4px 0 0', fontSize: 13 }}>
                {item.explain} · {item.article}
              </p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
          <Link className="btn" to="/examen">
            Otra prueba
          </Link>
          <Link className="btn btn-ghost" to="/avance">
            Ver avance
          </Link>
        </div>
      </div>
    );
  }

  const width = `${((index + (pick !== null ? 1 : 0)) / pack.questions.length) * 100}%`;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: 14, marginBottom: 12 }}>
        <span style={{ fontWeight: 600 }}>{pack.title}</span>
        <span className={left < 60 ? 'timer-urgent' : 'muted'} style={{ fontWeight: left < 60 ? 700 : 400 }}>
          {clock(left)}
        </span>
      </div>
      <div className="bar" style={{ marginBottom: 16 }} aria-hidden>
        <span style={{ width }} />
      </div>
      <div key={`${current.id}-${index}`} className="q-enter">
        <p className="muted" style={{ fontSize: 13, margin: 0 }}>
          {index + 1} / {pack.questions.length}
          {current.hot ? ' · cae mucho' : ''}
        </p>
        <h1 style={{ marginTop: 8, fontSize: 22 }}>{current.prompt}</h1>
        {scene ? (
          <div style={{ marginTop: 14 }}>
            <SceneArt scene={scene} height={168} />
          </div>
        ) : null}
        {sign ? (
          <div className="sign-pop" style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
            <SignFace sign={sign} size={140} />
          </div>
        ) : null}
        <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
          {current.options.map((option, i) => {
            let cls = 'option';
            if (pick !== null && i === current.answer) cls += ' good';
            else if (pick !== null && i === pick) cls += ' bad';
            return (
              <button key={option} type="button" className={cls} onClick={() => choose(i)}>
                {option}
              </button>
            );
          })}
        </div>
        {pick !== null ? (
          <div className={`card feedback-pop ${pick === current.answer ? 'feedback-ok' : 'feedback-bad'}`} style={{ marginTop: 16 }}>
            <p style={{ fontWeight: 700, margin: 0 }}>{pick === current.answer ? 'Correcto' : 'No es esa'}</p>
            <p style={{ margin: '6px 0 0', fontSize: 14 }}>{current.explain}</p>
            <p className="muted" style={{ margin: '4px 0 0', fontSize: 13 }}>
              {current.article}
            </p>
            <button type="button" className="btn" style={{ marginTop: 12 }} onClick={next}>
              {index + 1 === pack.questions.length ? 'Ver resultado' : 'Siguiente'}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
