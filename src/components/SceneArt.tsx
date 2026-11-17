import type { Scene } from '../data/types';

const PALETTES: Record<Scene['mood'], { sky: string; road: string; accent: string }> = {
  day: { sky: '#87b7e8', road: '#4a4a4a', accent: '#6f9e4a' },
  night: { sky: '#1a2332', road: '#2a2a2a', accent: '#3d4a3a' },
  rain: { sky: '#6a7a8a', road: '#3a3a42', accent: '#4a5a4a' },
  alert: { sky: '#d4a574', road: '#4a4a4a', accent: '#6f9e4a' },
  rural: { sky: '#8ec5e8', road: '#8b7355', accent: '#5a8f3e' },
};

export function SceneArt({ scene, height = 160 }: { scene: Scene; height?: number }) {
  const p = PALETTES[scene.mood];
  const isNight = scene.mood === 'night';
  const isRain = scene.mood === 'rain';
  const isAlert = scene.mood === 'alert';

  return (
    <div className="scene-art" style={{ height }}>
      <svg viewBox="0 0 320 160" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`sky-${scene.id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={p.sky} />
            <stop offset="100%" stopColor={isNight ? '#0d1218' : p.sky} stopOpacity={isNight ? 1 : 0.85} />
          </linearGradient>
        </defs>
        <rect width="320" height="160" fill={`url(#sky-${scene.id})`} />
        {/* ground */}
        <rect y="110" width="320" height="50" fill={p.accent} />
        <path d="M0 120 L120 120 L160 160 L0 160 Z" fill={p.road} />
        <path d="M200 120 L320 120 L320 160 L160 160 Z" fill={p.road} />
        <path d="M120 120 L200 120 L160 160 Z" fill={p.road} />
        {/* center line */}
        <line
          x1="160"
          y1="120"
          x2="160"
          y2="160"
          stroke={isNight ? '#c9a227' : '#e8e0c8'}
          strokeWidth="2"
          strokeDasharray="6 6"
        />

        {scene.id === 'cebra' && (
          <>
            {[130, 140, 150, 160, 170, 180].map((x) => (
              <rect key={x} x={x} y="128" width="6" height="28" fill="#f5f0e6" opacity="0.95" />
            ))}
            <circle cx="155" cy="118" r="5" fill="#1a1a1a" />
            <path d="M155 124 L155 138 M155 128 L148 132 M155 128 L162 132 M155 138 L150 148 M155 138 L160 148" stroke="#1a1a1a" strokeWidth="2.5" fill="none" />
          </>
        )}

        {scene.id === 'ninos' && (
          <>
            <rect x="40" y="70" width="50" height="50" fill="#c4a574" />
            <polygon points="40,70 65,50 90,70" fill="#8b3a3a" />
            <circle cx="200" cy="100" r="6" fill="#1a1a1a" />
            <path d="M200 107 L200 122 M200 112 L193 116 M200 112 L207 116 M200 122 L195 132 M200 122 L205 132" stroke="#1a1a1a" strokeWidth="2.5" fill="none" />
            <circle cx="220" cy="102" r="5" fill="#1a1a1a" />
            <path d="M220 108 L220 120 M220 112 L215 115 M220 112 L225 115 M220 120 L217 130 M220 120 L223 130" stroke="#1a1a1a" strokeWidth="2" fill="none" />
            <rect x="248" y="85" width="36" height="12" rx="2" fill="#c1121f" />
            <text x="266" y="95" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">
              40
            </text>
          </>
        )}

        {scene.id === 'emergencia' && (
          <>
            <rect x="120" y="85" width="70" height="28" rx="4" fill="#f5f5f5" />
            <rect x="175" y="90" width="22" height="18" rx="2" fill="#e8f0ff" />
            <circle cx="135" cy="116" r="7" fill="#1a1a1a" />
            <circle cx="175" cy="116" r="7" fill="#1a1a1a" />
            <rect x="145" y="78" width="16" height="8" rx="2" fill="#c1121f" className="pulse-light" />
            <path d="M100 100 Q110 90 120 100" stroke="#c1121f" strokeWidth="2" fill="none" opacity="0.6" />
          </>
        )}

        {scene.id === 'noche' && (
          <>
            <circle cx="280" cy="30" r="12" fill="#e8e0a0" opacity="0.9" />
            <rect x="130" y="95" width="55" height="20" rx="3" fill="#2a3540" />
            <circle cx="140" cy="118" r="6" fill="#111" />
            <circle cx="175" cy="118" r="6" fill="#111" />
            <ellipse cx="125" cy="105" rx="14" ry="6" fill="#ffe08a" opacity="0.85" className="headlight" />
            <ellipse cx="125" cy="112" rx="18" ry="5" fill="#ffe08a" opacity="0.4" className="headlight" />
          </>
        )}

        {scene.id === 'lluvia' && (
          <>
            {[40, 80, 120, 180, 220, 260, 300].map((x, i) => (
              <line
                key={x}
                x1={x}
                y1={20 + (i % 3) * 8}
                x2={x - 4}
                y2={50 + (i % 3) * 8}
                stroke="#cfe0f0"
                strokeWidth="1.5"
                opacity="0.7"
                className="rain-drop"
              />
            ))}
            <rect x="140" y="95" width="50" height="18" rx="3" fill="#3a4550" />
            <ellipse cx="160" cy="130" rx="40" ry="4" fill="#6a8aaa" opacity="0.35" />
          </>
        )}

        {scene.id === 'terraplen' && (
          <>
            <path d="M0 120 Q80 110 160 122 Q240 134 320 118" fill="none" stroke="#6b5344" strokeWidth="14" />
            <circle cx="60" cy="90" r="18" fill="#3d6b2f" />
            <circle cx="250" cy="85" r="22" fill="#2f5a28" />
            <circle cx="280" cy="95" r="14" fill="#3d6b2f" />
          </>
        )}

        {scene.id === 'garaje' && (
          <>
            <rect x="30" y="60" width="70" height="60" fill="#6a6a6a" />
            <rect x="40" y="75" width="50" height="45" fill="#1a1a1a" />
            <rect x="150" y="100" width="48" height="16" rx="2" fill="#c1121f" opacity="0.9" />
            <circle cx="160" cy="120" r="5" fill="#222" />
            <circle cx="188" cy="120" r="5" fill="#222" />
          </>
        )}

        {scene.id === 'ferrocarril' && (
          <>
            <line x1="40" y1="100" x2="280" y2="100" stroke="#555" strokeWidth="4" />
            <line x1="40" y1="110" x2="280" y2="110" stroke="#555" strokeWidth="4" />
            {[60, 100, 140, 180, 220, 260].map((x) => (
              <line key={x} x1={x} y1="96" x2={x} y2="114" stroke="#777" strokeWidth="3" />
            ))}
            <rect x="70" y="70" width="8" height="40" fill="#c1121f" />
            <rect x="78" y="70" width="40" height="8" fill="#c1121f" transform="rotate(-25 78 74)" />
            <circle cx="200" cy="80" r="6" fill={isAlert ? '#c1121f' : '#666'} className="pulse-light" />
          </>
        )}

        {scene.id === 'cruce' && (
          <>
            <rect x="145" y="100" width="40" height="14" rx="2" fill="#2a6fbb" />
            <circle cx="155" cy="118" r="5" fill="#222" />
            <circle cx="175" cy="118" r="5" fill="#222" />
            <rect x="210" y="105" width="36" height="12" rx="2" fill="#c45c26" />
            <text x="160" y="50" textAnchor="middle" fill={isNight ? '#ddd' : '#333'} fontSize="11" fontWeight="600">
              ¿quién cede?
            </text>
          </>
        )}

        {scene.id === 'curva' && (
          <>
            <path d="M20 130 Q100 130 140 90 Q180 50 300 50" fill="none" stroke={p.road} strokeWidth="18" />
            <path d="M20 130 Q100 130 140 90 Q180 50 300 50" fill="none" stroke="#e8e0c8" strokeWidth="2" strokeDasharray="8 10" />
            <polygon points="200,40 220,70 180,70" fill="#fffdf8" stroke="#c1121f" strokeWidth="3" />
            <text x="200" y="62" textAnchor="middle" fill="#1a1a1a" fontSize="14" fontWeight="800">
              !
            </text>
          </>
        )}
      </svg>
      <div className="scene-caption">{scene.caption}</div>
    </div>
  );
}
