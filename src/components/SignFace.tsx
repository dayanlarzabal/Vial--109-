import type { Sign } from '../data/types';

const RED = '#c1121f';
const BLUE = '#1d4e89';
const YELLOW = '#e2b304';
const INK = '#1a1a1a';
const PAPER = '#fffdf8';

function Glyph({ id }: { id?: string }) {
  if (!id) return null;
  const s = { stroke: INK, strokeWidth: 4, fill: 'none' as const, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (id) {
    case 'curve-r': return <path d="M28 72 Q28 28 55 28 Q78 28 78 55" {...s} />;
    case 'curve-l': return <path d="M72 72 Q72 28 45 28 Q22 28 22 55" {...s} />;
    case 'curves': return <path d="M22 70 Q30 30 50 50 Q70 70 78 30" {...s} />;
    case 'cross': return (<><line x1={50} y1={28} x2={50} y2={72} {...s} /><line x1={28} y1={50} x2={72} y2={50} {...s} /></>);
    case 't-cross': return (<><line x1={28} y1={42} x2={72} y2={42} {...s} /><line x1={50} y1={42} x2={50} y2={72} {...s} /></>);
    case 'roundabout': return (<><circle cx={50} cy={50} r={14} {...s} /><path d="M50 28 L55 36 M72 50 L64 45 M50 72 L45 64 M28 50 L36 55" {...s} /></>);
    case 'kids': return (<><circle cx={40} cy={38} r={5} fill={INK} /><path d="M40 44 L40 58 M40 50 L32 54 M40 50 L48 54 M40 58 L34 70 M40 58 L46 70" {...s} strokeWidth={3} /><circle cx={60} cy={40} r={4} fill={INK} /><path d="M60 45 L60 56 M60 50 L54 53 M60 50 L66 53 M60 56 L56 66 M60 56 L64 66" {...s} strokeWidth={3} /></>);
    case 'ped': return (<><circle cx={50} cy={34} r={6} fill={INK} /><path d="M50 42 L50 60 M50 48 L40 54 M50 48 L60 54 M50 60 L42 74 M50 60 L58 74" {...s} /></>);
    case 'bike': return (<><circle cx={34} cy={58} r={10} {...s} /><circle cx={66} cy={58} r={10} {...s} /><path d="M34 58 L48 40 L62 58 M48 40 L54 40" {...s} /></>);
    case 'animal': return (<><ellipse cx={50} cy={52} rx={16} ry={10} fill={INK} /><circle cx={62} cy={42} r={6} fill={INK} /></>);
    case 'works': return (<><rect x={36} y={40} width={28} height={28} rx={2} fill={INK} /><path d="M30 40 L70 40 L60 28 L40 28 Z" fill={INK} /></>);
    case 'rail': return (<><path d="M30 70 L50 30 L70 70" {...s} /><line x1={38} y1={55} x2={62} y2={55} {...s} /><line x1={34} y1={63} x2={66} y2={63} {...s} /></>);
    case 'rail-open': return (<><path d="M30 70 L50 30 L70 70" {...s} /><line x1={38} y1={55} x2={62} y2={55} {...s} /></>);
    case 'traffic-light': return (<><rect x={42} y={28} width={16} height={44} rx={4} fill={INK} /><circle cx={50} cy={38} r={4} fill={RED} /><circle cx={50} cy={50} r={4} fill={YELLOW} /><circle cx={50} cy={62} r={4} fill="#1b6b43" /></>);
    case 'slippery': return <path d="M30 68 Q40 40 50 55 Q60 70 70 38" {...s} />;
    case 'narrow': return (<><path d="M28 30 L40 50 L28 70" {...s} /><path d="M72 30 L60 50 L72 70" {...s} /></>);
    case 'narrow-r': return (<><line x1={32} y1={30} x2={32} y2={70} {...s} /><path d="M72 30 L58 50 L72 70" {...s} /></>);
    case 'two-way': return (<><path d="M40 70 L40 30 L34 38 M40 30 L46 38" {...s} /><path d="M60 30 L60 70 L54 62 M60 70 L66 62" {...s} /></>);
    case 'bump': return <path d="M24 62 Q50 30 76 62" {...s} />;
    case 'slope': return <path d="M26 68 L74 32 M74 32 L74 68" {...s} />;
    case 'wind': return (<><path d="M28 40 Q50 28 72 40" {...s} /><path d="M28 52 Q50 40 72 52" {...s} /><path d="M28 64 Q50 52 72 64" {...s} /></>);
    case 'rocks': return (<><path d="M34 40 L42 55 L28 55 Z" fill={INK} /><path d="M58 32 L70 52 L48 52 Z" fill={INK} /></>);
    case 'tunnel': return (<><path d="M28 72 V48 Q28 28 50 28 Q72 28 72 48 V72" {...s} /><line x1={50} y1={40} x2={50} y2={72} {...s} /></>);
    case 'no-moto': return (<><circle cx={38} cy={58} r={8} {...s} /><circle cx={62} cy={58} r={8} {...s} /><path d="M38 58 L50 40 L62 58" {...s} /></>);
    case 'no-car': return (<><rect x={30} y={42} width={40} height={18} rx={3} {...s} /><circle cx={38} cy={64} r={5} {...s} /><circle cx={62} cy={64} r={5} {...s} /></>);
    case 'no-truck': return (<><rect x={26} y={40} width={30} height={20} rx={2} {...s} /><rect x={56} y={46} width={18} height={14} rx={2} {...s} /></>);
    case 'no-ped': return (<><circle cx={50} cy={34} r={5} fill={INK} /><path d="M50 40 L50 58 M50 46 L42 52 M50 46 L58 52 M50 58 L44 70 M50 58 L56 70" {...s} strokeWidth={3} /></>);
    case 'no-overtake': return (<><rect x={28} y={40} width={18} height={14} rx={2} fill={INK} /><rect x={54} y={40} width={18} height={14} rx={2} fill={RED} /></>);
    case 'no-left': return <path d="M60 70 V40 H40 L48 32 M40 40 L48 48" {...s} />;
    case 'no-right': return <path d="M40 70 V40 H60 L52 32 M60 40 L52 48" {...s} />;
    case 'no-u': return <path d="M40 70 V40 Q40 28 50 28 Q60 28 60 40 V55 L52 48 M60 55 L68 48" {...s} />;
    case 'no-horn': return (<><circle cx={42} cy={50} r={8} {...s} /><path d="M50 42 L68 34 V66 L50 58" {...s} /></>);
    case 'arrow-up': return <path d="M50 72 V30 M50 30 L40 42 M50 30 L60 42" stroke="#fff" strokeWidth={6} fill="none" strokeLinecap="round" />;
    case 'arrow-right': return <path d="M28 50 H72 M72 50 L58 38 M72 50 L58 62" stroke="#fff" strokeWidth={6} fill="none" strokeLinecap="round" />;
    case 'arrow-left': return <path d="M72 50 H28 M28 50 L42 38 M28 50 L42 62" stroke="#fff" strokeWidth={6} fill="none" strokeLinecap="round" />;
    case 'roundabout-must': return (<><circle cx={50} cy={50} r={14} stroke="#fff" strokeWidth={5} fill="none" /><path d="M50 30 L55 38 M70 50 L62 45" stroke="#fff" strokeWidth={4} fill="none" /></>);
    case 'pass-right': return <path d="M36 70 V40 L52 50 L36 60 M52 50 H70" stroke="#fff" strokeWidth={5} fill="none" strokeLinecap="round" />;
    case 'bus': return (<><rect x={30} y={36} width={40} height={24} rx={4} stroke="#fff" strokeWidth={4} fill="none" /><circle cx={40} cy={64} r={4} fill="#fff" /><circle cx={60} cy={64} r={4} fill="#fff" /></>);
    case 'hospital': return (<><rect x={42} y={30} width={16} height={40} fill="#fff" /><rect x={30} y={42} width={40} height={16} fill="#fff" /></>);
    case 'parking': return <text x={50} y={62} textAnchor="middle" fill="#fff" fontSize={36} fontWeight={700}>P</text>;
    case 'motorway': return (<><path d="M30 70 L42 30 H58 L70 70" stroke="#fff" strokeWidth={4} fill="none" /><line x1={50} y1={40} x2={50} y2={62} stroke="#fff" strokeWidth={3} strokeDasharray="4 4" /></>);
    case 'end-motorway': return (<><path d="M30 70 L42 30 H58 L70 70" stroke="#fff" strokeWidth={4} fill="none" /><line x1={28} y1={72} x2={72} y2={28} stroke="#fff" strokeWidth={5} /></>);
    case 'fuel': return (<><rect x={34} y={32} width={24} height={40} rx={2} stroke="#fff" strokeWidth={4} fill="none" /><path d="M58 40 H66 V60" stroke="#fff" strokeWidth={4} fill="none" /></>);
    case 'phone': return <rect x={40} y={28} width={20} height={44} rx={4} stroke="#fff" strokeWidth={4} fill="none" />;
    case 'dead-end': return (<><path d="M50 28 V60" stroke="#fff" strokeWidth={5} /><line x1={36} y1={60} x2={64} y2={60} stroke="#fff" strokeWidth={5} /></>);
    case 'zebra': return (<>{[32,42,52,62].map((x)=>(<rect key={x} x={x} y={30} width={6} height={40} fill="#fff" />))}</>);
    case 'solid-line': return <line x1={50} y1={24} x2={50} y2={76} stroke="#fff" strokeWidth={5} />;
    case 'dash-line': return <line x1={50} y1={24} x2={50} y2={76} stroke="#fff" strokeWidth={5} strokeDasharray="8 8" />;
    case 'stop-line': return <line x1={28} y1={60} x2={72} y2={60} stroke="#fff" strokeWidth={6} />;
    case 'bus-lane': return <text x={50} y={58} textAnchor="middle" fill="#fff" fontSize={14} fontWeight={700}>BUS</text>;
    case 'hatch': return (<><line x1={30} y1={30} x2={70} y2={70} stroke="#fff" strokeWidth={3} /><line x1={40} y1={28} x2={72} y2={60} stroke="#fff" strokeWidth={3} /></>);
    case 'lane-arrow': return <path d="M50 70 V32 M50 32 L40 44 M50 32 L60 44" stroke="#fff" strokeWidth={5} fill="none" strokeLinecap="round" />;
    default: return <text x={50} y={58} textAnchor="middle" fill={INK} fontSize={22} fontWeight={800}>!</text>;
  }
}

export function SignFace({ sign, size = 96 }: { sign: Sign; size?: number }) {
  const n = sign.mark ?? '';
  let body: React.ReactNode;

  switch (sign.draw) {
    case 'pare':
      body = (<><polygon points="30,6 70,6 94,30 94,70 70,94 30,94 6,70 6,16" fill={RED} stroke="#fff" strokeWidth={3} /><text x={50} y={56} textAnchor="middle" fill="#fff" fontSize={16} fontWeight={700}>PARE</text></>);
      break;
    case 'ceda':
      body = (<><polygon points="50,8 94,88 6,88" fill={PAPER} stroke={RED} strokeWidth={7} strokeLinejoin="round" /><text x={50} y={66} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700}>CEDA</text></>);
      break;
    case 'priority':
      body = <polygon points="50,6 94,50 50,94 6,50" fill={YELLOW} stroke="#fff" strokeWidth={6} />;
      break;
    case 'end-priority':
      body = (<><polygon points="50,6 94,50 50,94 6,50" fill={YELLOW} stroke="#fff" strokeWidth={6} /><line x1={22} y1={78} x2={78} y2={22} stroke={INK} strokeWidth={6} /></>);
      break;
    case 'no-entry':
      body = (<><circle cx={50} cy={50} r={40} fill={RED} /><rect x={22} y={42} width={56} height={16} rx={2} fill="#fff" /></>);
      break;
    case 'no-all':
      body = <circle cx={50} cy={50} r={40} fill={PAPER} stroke={RED} strokeWidth={8} />;
      break;
    case 'no-park':
      body = (<><circle cx={50} cy={50} r={40} fill={BLUE} stroke={RED} strokeWidth={7} /><line x1={24} y1={24} x2={76} y2={76} stroke={RED} strokeWidth={8} strokeLinecap="round" /></>);
      break;
    case 'no-stop':
      body = (<><circle cx={50} cy={50} r={40} fill={BLUE} stroke={RED} strokeWidth={7} /><line x1={24} y1={24} x2={76} y2={76} stroke={RED} strokeWidth={7} strokeLinecap="round" /><line x1={76} y1={24} x2={24} y2={76} stroke={RED} strokeWidth={7} strokeLinecap="round" /></>);
      break;
    case 'speed':
      body = (<><circle cx={50} cy={50} r={40} fill={PAPER} stroke={RED} strokeWidth={8} /><text x={50} y={58} textAnchor="middle" fill={INK} fontSize={n.length > 2 ? 22 : 28} fontWeight={700}>{n}</text></>);
      break;
    case 'end-speed':
    case 'end-ban':
      body = (<><circle cx={50} cy={50} r={40} fill={PAPER} stroke={INK} strokeWidth={6} /><line x1={22} y1={78} x2={78} y2={22} stroke={INK} strokeWidth={6} /></>);
      break;
    case 'must':
      body = (<><circle cx={50} cy={50} r={40} fill={BLUE} /><Glyph id={sign.glyph ?? 'arrow-up'} /></>);
      break;
    case 'info':
      body = (<><rect x={12} y={18} width={76} height={64} rx={8} fill={BLUE} /><Glyph id={sign.glyph} /></>);
      break;
    case 'mark':
      body = (<><rect x={10} y={18} width={80} height={64} rx={8} fill="#2f3d32" /><Glyph id={sign.glyph} /></>);
      break;
    case 'ban':
      body = (<><circle cx={50} cy={50} r={40} fill={PAPER} stroke={RED} strokeWidth={7} /><Glyph id={sign.glyph} /><line x1={24} y1={24} x2={76} y2={76} stroke={RED} strokeWidth={7} strokeLinecap="round" /></>);
      break;
    case 'warn':
    default:
      body = (<><polygon points="50,8 92,86 8,86" fill={PAPER} stroke={RED} strokeWidth={6} strokeLinejoin="round" /><g transform="translate(0,-4)"><Glyph id={sign.glyph} /></g></>);
  }

  return (
    <svg className="sign-face" width={size} height={size} viewBox="0 0 100 100" role="img" aria-label={sign.name}>
      <title>{sign.name}</title>
      {body}
    </svg>
  );
}
