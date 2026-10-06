import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../components/Icons";

const EMAIL = "anthonychiappone@gmail.com";
const LINKS = {
  github: "https://github.com/achiappone",
  linkedin: "https://www.linkedin.com/in/anthonychiappone",
};

export default function PortfolioLayout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <div className="shell">
      <a className="skip" href="#main">Skip to content</a>
      <header className="topbar">
        <NavLink to="/" className="brand" aria-label="Anthony Chiappone, home">A. Chiappone</NavLink>
        <nav className="nav" aria-label="Main">
          <NavLink to="/" end>System</NavLink>
          <NavLink to="/projects">Work</NavLink>
          <NavLink to="/resume">Résumé</NavLink>
        </nav>
        <div className="social">
          <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
          <a href={`mailto:${EMAIL}`} aria-label={`Email ${EMAIL}`}><MailIcon /></a>
        </div>
      </header>

      <main id="main" className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <p>Anthony Chiappone · Sunrise, FL</p>
        <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a> · <a href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a> · <a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
      </footer>
    </div>
  );
}
