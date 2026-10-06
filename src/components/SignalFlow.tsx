import { useState, type CSSProperties, type KeyboardEvent } from "react";
import { nodes, wires } from "../data/system";

// Wire ids name their two ends ("net-gw"), so a lit wire also lights both nodes it joins.
const ends = (wireId: string) => wireId.split("-");

// Phone order for the stacked chain: operator side first, fixtures last.
const CHAIN = ["design", "console", "net", "srv", "gw", "app", "haze", "fix", "cloud"];
// Signal type of each node's link in the chain, so the phone rail keeps the diagram's wire colours.
const RAIL: Record<string, string> = { design: "net", console: "net", net: "net", srv: "net", gw: "dmx", app: "ble", haze: "dmx", fix: "dmx", cloud: "cloud" };

// The career as one lighting-control system. Selecting a node lights its signal path,
// sends pulses along it, and opens the work that lives there in the side panel.
export default function SignalFlow() {
  const [active, setActive] = useState("app");
  const node = nodes.find((n) => n.id === active)!;
  const litWires = new Set(node.wires);
  const litNodes = new Set(node.wires.flatMap(ends));

  const onKey = (id: string) => (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(id); }
  };

  return (
    <div className="flow">
      <div className="flow-stage">
        <svg className="flow-svg" viewBox="0 0 760 480" role="group" aria-label="Signal-flow diagram of my work. Choose a node to see the project.">
          <defs>
            <pattern id="flow-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20 0H0V20" fill="none" className="flow-grid-line" />
            </pattern>
          </defs>
          <rect width="760" height="480" fill="url(#flow-grid)" />

          {wires.map((w) => (
            <path key={w.id} d={w.d} className={`wire wire-${w.kind}${litWires.has(w.id) ? " is-lit" : ""}`} />
          ))}
          {wires.map((w) => w.label && (
            <text key={`${w.id}-l`} className="wire-label" x={w.label.x} y={w.label.y} textAnchor={w.id === "gw-fix" ? "start" : "middle"}>{w.label.text}</text>
          ))}

          {/* Pulses travel each lit wire in signal order; hidden under reduced motion. */}
          {node.wires.map((id, i) => {
            const w = wires.find((x) => x.id === id)!;
            return (
              <circle key={`${active}-${id}`} r="4.5" className="pulse"
                style={{ offsetPath: `path('${w.d}')`, animationDelay: `${i * 0.45}s` } as CSSProperties} />
            );
          })}

          {nodes.map((n) => (
            <g key={n.id} className={`node${n.id === active ? " is-active" : ""}`} transform={`translate(${n.box.x},${n.box.y})`}
              tabIndex={0} role="button" aria-pressed={n.id === active} aria-label={`${n.name}: ${n.title}`}
              onClick={() => setActive(n.id)} onMouseEnter={() => setActive(n.id)} onFocus={() => setActive(n.id)} onKeyDown={onKey(n.id)}>
              <rect width={n.box.w} height={n.box.h} rx={n.shape === "cloud" ? n.box.h / 2 : 6} />
              {n.shape === "cloud" && (
                // Small cloud glyph, left of the label.
                <path className="cloud-glyph" transform={`translate(${n.box.w / 2 - 74},${n.box.h / 2 - 10})`}
                  d="M6 18h13a5 5 0 0 0 .6-9.96A7 7 0 0 0 6.2 9.5 4.3 4.3 0 0 0 6 18Z" />
              )}
              <text className="node-name" x={n.box.w / 2} y={n.box.h / 2 - 3} textAnchor="middle">{n.name}</text>
              <text className={`node-sub${n.subIsProtocol ? " is-proto" : ""}`} x={n.box.w / 2} y={n.box.h / 2 + 13} textAnchor="middle">{n.sub}</text>
            </g>
          ))}
        </svg>

        {/* Narrow screens: the same system as a vertical chain on a wire rail. */}
        <ol className="chain" aria-label="Parts of the system">
          {CHAIN.map((id) => {
            const n = nodes.find((x) => x.id === id)!;
            const state = id === active ? " is-active" : litNodes.has(id) ? " is-lit" : "";
            return (
              <li key={id} className={`chain-item${state}`} style={{ "--rail": `var(--${RAIL[id]})` } as CSSProperties}>
                <button type="button" aria-pressed={id === active} onClick={() => setActive(id)}>
                  <span className="chain-name">{n.name}</span>
                  <span className={`chain-sub${n.subIsProtocol ? " is-proto" : ""}`}>{n.sub}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="flow-legend" aria-hidden="true">
          <span className="lg-net">Network</span><span className="lg-dmx">DMX line</span><span className="lg-ble">Wireless · NFC</span><span className="lg-cloud">Cloud access</span>
        </div>
      </div>

      <aside className="flow-panel" aria-live="polite">
        <h2 className="panel-title">{node.title}</h2>
        <p className="panel-body">{node.body}</p>
        <ul className="tags">{node.tags.map((t) => <li key={t}>{t}</li>)}</ul>
        <p className={`panel-foot kind-${node.kind.toLowerCase()}`}>
          {node.kind}
          {node.link
            ? <> · <a href={node.link.href} target="_blank" rel="noreferrer">{node.link.text}</a></>
            : node.note && <> · {node.note}</>}
        </p>
      </aside>
    </div>
  );
}
