import { Link } from "react-router-dom";
import SignalFlow from "../components/SignalFlow";
import EngineeringTrack from "../components/EngineeringTrack";
import { ArrowIcon, GitHubIcon } from "../components/Icons";
import { resumeData } from "../data/resumeData";
import Headshot from "../components/Headshot";

export default function Home() {
  return (
    <>
      <section className="hero">
        <Headshot className="hero-photo" />
        <div className="hero-text">
          <h1 className="display">Anthony Chiappone</h1>
          <p className="hero-role">Software engineer for systems that drive light.</p>
          <p className="hero-lede">
            Fifteen years in professional lighting. I build the mobile apps, protocol layers, firmware and
            infrastructure that sit between an operator and a fixture. Choose any part of the system below to see what I built there.
          </p>
        </div>
        <div className="actions">
          <a className="btn btn-primary" href="https://github.com/achiappone" target="_blank" rel="noreferrer"><GitHubIcon />GitHub</a>
        </div>
      </section>

      <SignalFlow />

      <section className="path" aria-labelledby="path-h">
        <div className="section-head">
          <h2 id="path-h" className="section-title">Career path</h2>
          <Link className="text-link" to="/resume" viewTransition>Full résumé <ArrowIcon size={16} /></Link>
        </div>
        <ol className="path-list">
          {[...resumeData.experience].reverse().map((e) => (
            <li key={e.role}>
              <span className="path-dates">{e.dates.replace("–", " – ")}</span>
              <span className="path-role">{e.role}</span>
              <span className="path-co">{e.company}</span>
            </li>
          ))}
        </ol>
        <EngineeringTrack />
      </section>
    </>
  );
}
