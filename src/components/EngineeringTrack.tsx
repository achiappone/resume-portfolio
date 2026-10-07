import type { CSSProperties } from "react";
import { resumeData } from "../data/resumeData";

const FROM = 2019;
const toYear = (ym: string) => { const [y, m] = ym.split("-").map(Number); return y + (m - 1) / 12; };

// The software side of the career, on a real time scale from 2019 to today:
// each phase starts later and runs hotter, like a signal level rising.
export default function EngineeringTrack() {
  const now = new Date();
  const to = now.getFullYear() + now.getMonth() / 12;
  const pct = (y: number) => ((y - FROM) / (to - FROM)) * 100;
  const years = Array.from({ length: Math.floor(to) - FROM + 1 }, (_, i) => FROM + i);
  const fmt = (ym: string) => new Date(ym + "-01T12:00").toLocaleString("en-US", { month: "short", year: "numeric" });

  return (
    <div className="track" aria-labelledby="track-h">
      <h3 id="track-h" className="track-title">Engineering track <span>2019 – now</span></h3>
      <ol className="track-bars">
        {resumeData.engineeringTrack.map((p, i) => (
          <li key={p.label} className={`track-bar level-${i + 1}`} style={{ "--start": `${pct(toYear(p.start))}%` } as CSSProperties}>
            <span className="track-label"><strong>{p.label}</strong> <span>since {fmt(p.start)} · {p.detail}</span></span>
            <span className="track-fill" aria-hidden="true" />
          </li>
        ))}
      </ol>
      <div className="track-axis" aria-hidden="true">
        {years.map((y) => <span key={y} style={{ left: `${pct(y)}%` }}>{y}</span>)}
      </div>
    </div>
  );
}
