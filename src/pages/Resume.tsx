import { useState } from "react";
import { resumeData } from "../data/resumeData";
import { downloadPdf, previewPdf } from "../lib/resumePdf";
import { DownloadIcon, EyeIcon } from "../components/Icons";

export default function Resume() {
  const [error, setError] = useState("");
  const download = () => { setError(""); downloadPdf().catch(() => setError("The PDF couldn't be generated. Try again in a moment.")); };
  const preview = async () => { setError(""); setError((await previewPdf()) ?? ""); };

  return (
    <>
      <header className="page-head page-head-split">
        <div>
          <h1 className="display display-sm">Résumé</h1>
          <p className="page-lede">{resumeData.title} · {resumeData.location}</p>
        </div>
        <div className="actions">
          <button type="button" className="btn btn-primary" onClick={download}><DownloadIcon />Download PDF</button>
          <button type="button" className="btn" onClick={preview}><EyeIcon />Preview</button>
          {error && <p className="form-error" role="alert">{error}</p>}
        </div>
      </header>

      <p className="summary">{resumeData.summary}</p>

      <section className="resume-block" aria-labelledby="exp-h">
        <h2 id="exp-h" className="section-title">Experience</h2>
        <ol className="roles">
          {resumeData.experience.map((e) => (
            <li key={e.role} className="role">
              <div className="role-head">
                <h3>{e.role}</h3>
                <span className="role-meta">{e.company} · {e.dates}</span>
              </div>
              <ul className="role-bullets">{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            </li>
          ))}
        </ol>
      </section>

      <div className="resume-cols">
        <section className="resume-block" aria-labelledby="skills-h">
          <h2 id="skills-h" className="section-title">Skills</h2>
          <ul className="tags tags-lg">{resumeData.skills.map((s) => <li key={s}>{s}</li>)}</ul>
        </section>
        <section className="resume-block" aria-labelledby="edu-h">
          <h2 id="edu-h" className="section-title">Education</h2>
          {resumeData.education.map((e) => <p key={e.school} className="edu"><strong>{e.school}</strong> · {e.details}</p>)}
        </section>
      </div>

      <section className="resume-block" aria-labelledby="proj-h">
        <h2 id="proj-h" className="section-title">Selected projects</h2>
        <ul className="role-bullets">
          {resumeData.projects.map((p) => <li key={p.name}><strong>{p.name}.</strong> {p.bullets.join(" ")}</li>)}
        </ul>
      </section>
    </>
  );
}
