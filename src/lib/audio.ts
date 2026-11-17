let ctx: AudioContext | null = null;

function ac() {
  if (typeof window === 'undefined') return null;
  if (!ctx) ctx = new AudioContext();
  if (ctx.state === 'suspended') void ctx.resume();
  return ctx;
}

function tone(
  c: AudioContext,
  freq: number,
  t: number,
  dur: number,
  type: OscillatorType,
  gain: number,
) {
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g);
  g.connect(c.destination);
  o.start(t);
  o.stop(t + dur + 0.02);
}

export type Sfx = 'ok' | 'bad' | 'pass' | 'fail' | 'tap' | 'tick';

export function playSfx(kind: Sfx) {
  const c = ac();
  if (!c) return;
  const t = c.currentTime;
  if (kind === 'ok') {
    tone(c, 523.25, t, 0.09, 'sine', 0.07);
    tone(c, 659.25, t + 0.07, 0.1, 'sine', 0.06);
    tone(c, 783.99, t + 0.14, 0.16, 'sine', 0.05);
  } else if (kind === 'bad') {
    tone(c, 185, t, 0.14, 'triangle', 0.06);
    tone(c, 140, t + 0.1, 0.22, 'triangle', 0.05);
  } else if (kind === 'pass') {
    tone(c, 523, t, 0.1, 'sine', 0.06);
    tone(c, 659, t + 0.09, 0.1, 'sine', 0.06);
    tone(c, 784, t + 0.18, 0.12, 'sine', 0.06);
    tone(c, 1046, t + 0.3, 0.25, 'sine', 0.05);
  } else if (kind === 'fail') {
    tone(c, 220, t, 0.16, 'sine', 0.05);
    tone(c, 196, t + 0.14, 0.18, 'sine', 0.05);
    tone(c, 165, t + 0.3, 0.28, 'sine', 0.04);
  } else if (kind === 'tap') {
    tone(c, 880, t, 0.04, 'sine', 0.03);
  } else if (kind === 'tick') {
    tone(c, 1200, t, 0.03, 'square', 0.02);
  }
}
