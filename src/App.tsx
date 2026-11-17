import { NavLink, Route, Routes, Link, useParams } from 'react-router-dom';
import { useProgress } from './lib/store';
import { QUESTIONS } from './data/questions';
import { SIGNS, SIGN_GROUPS } from './data/signs';
import { LESSONS, LESSON_MAP } from './data/lessons';
import { TOPICS } from './data/topics';
import { SignFace } from './components/SignFace';
import { QuizView } from './components/QuizView';
import { useMemo, useState } from 'react';

function Shell({ children }: { children: React.ReactNode }) {
  const sound = useProgress((s) => s.sound);
  const toggle = useProgress((s) => s.toggleSound);

  return (
    <div className="shell">
      <header className="topbar">
        <Link to="/" className="brand">
          <span className="brand-mark">109</span>
          <span>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 18, fontWeight: 700 }}>Vial 109</div>
            <div className="muted" style={{ fontSize: 12 }}>
              Licencia · Cuba
            </div>
          </span>
        </Link>
        <button type="button" className="icon-btn" onClick={toggle} aria-label={sound ? 'Silenciar' : 'Sonido'}>
          {sound ? '🔊' : '🔇'}
        </button>
      </header>
      <main className="page">{children}</main>
      <nav className="bottom-nav" aria-label="Principal">
        <NavLink to="/" end className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>
          <span>🏠</span>
          Inicio
        </NavLink>
        <NavLink to="/estudiar" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>
          <span>📖</span>
          Leyes
        </NavLink>
        <NavLink to="/senales" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>
          <span>🛑</span>
          Señales
        </NavLink>
        <NavLink to="/examen" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>
          <span>📝</span>
          Examen
        </NavLink>
        <NavLink to="/avance" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>
          <span>📊</span>
          Avance
        </NavLink>
      </nav>
    </div>
  );
}

function Home() {
  const answers = useProgress((s) => s.answers);
  const mocks = useProgress((s) => s.mocks);
  const known = Object.values(answers).filter(Boolean).length;
  const hotLeft = QUESTIONS.filter((q) => q.hot && answers[q.id] !== true).length;
  const last = mocks[0];

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div>
        <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: 'var(--primary)' }}>
          Ley 109 · Código de Seguridad Vial
        </p>
        <h1 style={{ marginTop: 6, fontSize: 32 }}>El teórico, con las que de verdad caen.</h1>
        <p className="muted">
          {QUESTIONS.length} preguntas, {SIGNS.length} señales. El simulacro prioriza prioridad, luces, velocidad y
          alcohol.
        </p>
      </div>
      <div className="grid3">
        <div className="card">
          <div className="muted" style={{ fontSize: 12 }}>
            Aciertos
          </div>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 24 }}>{known}</div>
        </div>
        <div className="card">
          <div className="muted" style={{ fontSize: 12 }}>
            Por afianzar
          </div>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 24 }}>{hotLeft}</div>
        </div>
        <div className="card">
          <div className="muted" style={{ fontSize: 12 }}>
            Señales
          </div>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 24 }}>{SIGNS.length}</div>
        </div>
      </div>
      <Link className="btn btn-block" to="/prueba/caen">
        Las que casi siempre caen
      </Link>
      <div className="grid2">
        <Link className="btn btn-ghost" to="/prueba/simulacro">
          Simulacro 30
        </Link>
        <Link className="btn btn-ghost" to="/prueba/senales">
          Quiz señales
        </Link>
        <Link className="btn btn-ghost" to="/senales">
          Catálogo
        </Link>
        <Link className="btn btn-ghost" to="/prueba/rapido">
          Rápida 10
        </Link>
        <Link className="btn btn-ghost" to="/prueba/fotos">
          Situaciones
        </Link>
      </div>
      {last ? (
        <p className="muted" style={{ fontSize: 14, margin: 0 }}>
          Última prueba: {last.score}/{last.total}
          {last.score / last.total >= 0.7 ? ' · por encima del corte' : ' · por debajo del corte'}
        </p>
      ) : null}
      <div className="trap" style={{ fontSize: 14 }}>
        <strong>Trampa del examen:</strong> en zona de niños el tope es 40 km/h en ciudad y 60 en rural, no 20. Los 20
        km/h son salida de garaje y tractores.
      </div>
      <p className="muted" style={{ fontSize: 12 }}>
        Material de estudio. El examen oficial lo hace el MININT. Cifras según Ley 109 (edición anotada).
      </p>
    </div>
  );
}

function Estudiar() {
  const answers = useProgress((s) => s.answers);
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <h1 style={{ fontSize: 28 }}>Leyes</h1>
      <p className="muted">Diez bloques cortos. Lo marcado como trampa es lo que más se confunde.</p>
      {LESSONS.map((lesson) => {
        const related = QUESTIONS.filter((q) => q.topic === lesson.slug);
        const ok = related.filter((q) => answers[q.id] === true).length;
        return (
          <Link key={lesson.slug} to={`/leccion/${lesson.slug}`} className="card list-link">
            <div>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 18 }}>{lesson.title}</div>
              <div className="muted" style={{ fontSize: 13, marginTop: 4 }}>
                {lesson.summary}
              </div>
            </div>
            <span className="badge">
              {ok}/{related.length}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

function Leccion() {
  const { slug = '' } = useParams();
  const lesson = LESSON_MAP[slug];
  if (!lesson) {
    return (
      <div className="card">
        <p>Lección no encontrada.</p>
        <Link className="btn" to="/estudiar">
          Volver
        </Link>
      </div>
    );
  }
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <Link to="/estudiar" className="muted" style={{ fontSize: 14 }}>
        ← Lecciones
      </Link>
      <h1 style={{ fontSize: 28 }}>{lesson.title}</h1>
      <p className="muted">{lesson.summary}</p>
      {lesson.blocks.map((b) =>
        b.trap ? (
          <div key={b.heading} className="trap">
            <h2 style={{ fontSize: 17 }}>{b.heading}</h2>
            <p style={{ margin: '6px 0 0', fontSize: 14 }}>{b.body}</p>
          </div>
        ) : (
          <section key={b.heading}>
            <h2 style={{ fontSize: 18 }}>{b.heading}</h2>
            <p style={{ marginTop: 6 }}>{b.body}</p>
          </section>
        ),
      )}
      <Link className="btn" to={`/prueba/tema-${lesson.slug}`}>
        Practicar este tema
      </Link>
    </div>
  );
}

function Senales() {
  const [group, setGroup] = useState<string>('all');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(SIGNS[0]?.id ?? '');
  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SIGNS.filter(
      (s) => (group === 'all' || s.group === group) && (!q || `${s.name} ${s.meaning}`.toLowerCase().includes(q)),
    );
  }, [group, query]);
  const current = list.find((s) => s.id === selected) ?? list[0];

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div>
        <h1 style={{ fontSize: 28 }}>Señales</h1>
        <p className="muted">{SIGNS.length} señales · toca una para ver el significado</p>
      </div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar señal"
        aria-label="Buscar señal"
        style={{
          minHeight: 44,
          borderRadius: 999,
          border: '1px solid var(--line)',
          background: 'var(--surface)',
          padding: '0 16px',
          fontSize: 16,
        }}
      />
      <div className="chip-row">
        {SIGN_GROUPS.map((g) => (
          <button
            key={g.id}
            type="button"
            className={`chip${group === g.id ? ' on' : ''}`}
            onClick={() => setGroup(g.id)}
          >
            {g.label}
          </button>
        ))}
      </div>
      {current ? (
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SignFace sign={current} size={130} />
          </div>
          <h2 style={{ marginTop: 10, fontSize: 22 }}>{current.name}</h2>
          <p className="muted">{current.meaning}</p>
          {current.tip ? <div className="trap" style={{ marginTop: 12, textAlign: 'left', fontSize: 14 }}>{current.tip}</div> : null}
        </div>
      ) : (
        <p className="muted">Ninguna señal con ese texto.</p>
      )}
      <div className="sign-grid">
        {list.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`sign-tile${s.id === current?.id ? ' on' : ''}`}
            onClick={() => setSelected(s.id)}
          >
            <SignFace sign={s} size={64} />
            <span style={{ fontSize: 12, fontWeight: 600, textAlign: 'center' }}>{s.name}</span>
          </button>
        ))}
      </div>
      <Link className="btn" to="/prueba/senales">
        Quiz de señales
      </Link>
    </div>
  );
}

function Examen() {
  const hot = QUESTIONS.filter((q) => q.hot).length;
  const modes = [
    { mode: 'caen', title: 'Las que caen', text: '20 preguntas que se repiten en casi todos los temarios.' },
    { mode: 'simulacro', title: 'Simulacro', text: '30 preguntas, 40 min, corte 70%.' },
    { mode: 'senales', title: 'Señales', text: `Identificar ${SIGNS.length} del catálogo (12 por ronda).` },
    { mode: 'rapido', title: 'Rápida', text: '10 preguntas, sin ceremonia.' },
    { mode: 'fotos', title: 'Situaciones', text: 'Escenas de la vía: cebra, niños, lluvia, emergencia…' },
    { mode: 'fallos', title: 'Mis fallos', text: 'Solo lo que ya marcó mal en este dispositivo.' },
  ];

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <h1 style={{ fontSize: 28 }}>Examen</h1>
      <p className="muted">
        Banco: {QUESTIONS.length} preguntas, {hot} frecuentes. Al responder suena un tono (se silencia arriba).
      </p>
      {modes.map((m) => (
        <Link key={m.mode} to={`/prueba/${m.mode}`} className="card list-link">
          <div>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 18 }}>{m.title}</div>
            <div className="muted" style={{ fontSize: 13, marginTop: 4 }}>
              {m.text}
            </div>
          </div>
          <span className="badge">→</span>
        </Link>
      ))}
      <h2 style={{ fontSize: 18, marginTop: 8 }}>Por tema</h2>
      {TOPICS.map((t) => (
        <Link key={t.id} to={`/prueba/tema-${t.id}`} className="card list-link">
          <span>{t.title}</span>
          <span className="badge">→</span>
        </Link>
      ))}
    </div>
  );
}

function Prueba() {
  const { mode = 'rapido' } = useParams();
  return (
    <div>
      <Link to="/examen" className="muted" style={{ fontSize: 14, display: 'inline-block', marginBottom: 12 }}>
        ← Salir de la prueba
      </Link>
      <QuizView key={mode} mode={mode} />
    </div>
  );
}

function Avance() {
  const answers = useProgress((s) => s.answers);
  const mocks = useProgress((s) => s.mocks);
  const reset = useProgress((s) => s.reset);

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <h1 style={{ fontSize: 28 }}>Avance</h1>
      <p className="muted">Queda guardado en este dispositivo.</p>
      {TOPICS.map((t) => {
        const related = QUESTIONS.filter((q) => q.topic === t.id);
        const ok = related.filter((q) => answers[q.id] === true).length;
        const bad = related.filter((q) => answers[q.id] === false).length;
        const width = related.length ? `${(ok / related.length) * 100}%` : '0%';
        return (
          <div key={t.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
              <span style={{ fontFamily: 'Georgia, serif', fontSize: 16 }}>{t.short}</span>
              <span className="badge">
                {ok} bien · {bad} mal
              </span>
            </div>
            <div className="bar" style={{ marginTop: 8 }}>
              <span style={{ width }} />
            </div>
          </div>
        );
      })}
      <h2 style={{ fontSize: 18 }}>Últimas pruebas</h2>
      {mocks.length === 0 ? <p className="muted">Todavía no hay un simulacro guardado.</p> : null}
      {mocks.slice(0, 8).map((m) => (
        <div key={m.at} className="card list-link">
          <span>
            {m.mode} · {new Date(m.at).toLocaleDateString('es-CU')}
          </span>
          <span className={`badge${m.score / m.total >= 0.7 ? ' ok' : ''}`}>
            {m.score}/{m.total}
          </span>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-ghost"
        onClick={() => {
          if (window.confirm('¿Borrar el progreso de este dispositivo?')) reset();
        }}
      >
        Reiniciar progreso
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estudiar" element={<Estudiar />} />
        <Route path="/leccion/:slug" element={<Leccion />} />
        <Route path="/senales" element={<Senales />} />
        <Route path="/examen" element={<Examen />} />
        <Route path="/prueba/:mode" element={<Prueba />} />
        <Route path="/avance" element={<Avance />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Shell>
  );
}
