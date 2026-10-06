import { projects, type Project } from "../data/projects";
import Headshot from "../components/Headshot";

const GROUPS: { label: Project["label"]; title: string; note: string }[] = [
  { label: "Professional", title: "Professional work", note: "Built at Chauvet Professional. The code is proprietary, so it is described here and not linked." },
  { label: "Personal", title: "Personal projects", note: "Open source on GitHub." },
  { label: "Hobby", title: "Hobby", note: "" },
];

export default function Projects() {
  return (
    <>
      <header className="page-head page-head-id">
        <Headshot className="headshot-sm" />
        <div className="page-head">
          <h1 className="display display-sm">Work</h1>
          <p className="page-lede">Software for professional lighting at work, and hardware-adjacent projects on my own time.</p>
        </div>
      </header>

      {GROUPS.map((g) => {
        const items = projects.filter((p) => p.label === g.label);
        if (!items.length) return null;
        return (
          <section key={g.label} className="ledger" aria-labelledby={`g-${g.label}`}>
            <div className="section-head">
              <h2 id={`g-${g.label}`} className="section-title">{g.title}</h2>
              {g.note && <p className="section-note">{g.note}</p>}
            </div>
            <ul className="ledger-list">
              {items.map((p) => (
                <li key={p.title} className="ledger-row">
                  <h3 className="ledger-title">{p.title}</h3>
                  <p className="ledger-body">{p.description}</p>
                  <ul className="tags">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
                  <div className="ledger-links">
                    {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Code</a>}
                    {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live</a>}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
}
