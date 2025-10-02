import { useEffect, useState } from 'react';

export default function Countdown({ target }: { target: number }) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  let diff = Math.max(0, target - now);
  const d = Math.floor(diff / (1000 * 60 * 60 * 24)); diff %= (1000 * 60 * 60 * 24);
  const h = Math.floor(diff / (1000 * 60 * 60));      diff %= (1000 * 60 * 60);
  const m = Math.floor(diff / (1000 * 60));           diff %= (1000 * 60);
  const s = Math.floor(diff / 1000);
  const Cell = ({ lbl, val }: { lbl: string; val: number }) => (
    <div className="tile" role="group" aria-label={lbl}>
      <div className="num">{String(val).padStart(2, '0')}</div>
      <div className="lbl">{lbl}</div>
    </div>
  );
  return (
    <div className="countdown" aria-label="Countdown">
      <Cell lbl="วัน" val={d} /><Cell lbl="ชั่วโมง" val={h} /><Cell lbl="นาที" val={m} /><Cell lbl="วินาที" val={s} />
    </div>
  );
}
