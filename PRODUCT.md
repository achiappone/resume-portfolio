# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Hiring managers, engineering leads and technical recruiters evaluating Anthony Chiappone for **Senior Software Engineer** roles. They arrive from a job application, LinkedIn or the GitHub profile, usually with a few minutes and a résumé open beside it. Their job: decide quickly whether he is a credible hands-on senior engineer, then find the evidence (shipped work, code, depth) to justify an interview.

## Product Purpose
A personal portfolio and résumé site that positions Anthony as a hands-on senior software engineer who builds software that talks to hardware. Success: a reviewer leaves convinced of real, shipped engineering depth and can reach the code, the PDF résumé or the contact link in one step.

## Positioning
Fifteen years inside professional lighting (Chauvet Professional), moving from technical writer to product engineer, product manager and senior product manager, while shipping production code: React Native apps that configure fixtures over BLE and NFC, RDM/DMX protocol work, ESP32 firmware, and the web tools and self-hosted infrastructure around them. Product leadership is presented as a strength of an engineer, not the headline.

## Operating Context
- Reviewed on desktop next to an ATS or résumé, and on phones from LinkedIn/email links.
- Linked from the GitHub profile README (github.com/achiappone) and job applications.
- Hosted on GitHub Pages at achiappone.github.io/resume-portfolio (base path `/resume-portfolio/`, SPA 404 fallback).

## Capabilities and Constraints
- Stack: React + TypeScript + Vite, react-router. MUI may be removed (approved 2026-10-05); custom CSS design system instead.
- Pages: About/Home, Projects, Résumé with PDF download/preview via pdfmake.
- Content source of truth: `src/data/resumeData.ts`, `src/data/projects.tsx`. Pages render from data.
- Deploy: push to `main` runs `.github/workflows/deploy.yml` to GitHub Pages.
- Employer work (the NFC/BLE fixture app, the wireless gateway RDM release, the lighting-control system designer) is proprietary: describe it, never link or show its code or internal screenshots.

## Brand Commitments
- Name: Anthony Chiappone. Title: Software Engineer · Senior Product Manager.
- Education: B.S., Engineering — DeVry University (not "Electrical Engineering").
- No mention of Claude, Claude Code or AI assistance anywhere visible.
- Professional, factual voice; first person on the site.

## Evidence on Hand
- 35 merged PRs on the NFC/BLE fixture app; co-developed RDM support (fixture-control app + SBC wireless DMX gateway); front-end UI and QA on the lighting-control system designer.
- Office Lighting: personal project (repo pd_lighting, private until its history rewrite is pushed); the user asked for it to be referenced.
- Public repos: DMX_Haze_Regulator, k2plus-dashboard, pve-stack, openMarineChipAjoi, k2_esp32_cam, NVWAPP, helm-design (hobby).
- Headshot: `src/assets/profileImage.jpg`.
- No testimonials, metrics dashboards, client logos or employer screenshots exist; do not fabricate any.

## Product Principles
1. Engineer first: lead with shipped technical work; product leadership supports it.
2. Evidence over adjectives: every claim points to a PR count, a protocol, a repo or a release.
3. One step to proof: code, résumé PDF and contact are always one click away.
4. Respect the reviewer's time: scannable in under a minute, deep on demand.
5. Proprietary work is described, never exposed.

## Accessibility & Inclusion
WCAG 2.2 AA: keyboard navigable, visible focus, sufficient contrast in light and dark, respects reduced motion.

## Naming
- Refer to the employer fixture-configuration app as "NFC/BLE" (never by its product name).
- Never use employer product names for the gateway work; say "fixture-control app and its wireless gateway" / "Wireless DMX Gateway — RDM Support"; the gateway hardware is "an SBC".
- Keep employer work generic and descriptive: no internal product names (system designer, not its brand name).
