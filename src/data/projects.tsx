export type Project = {
  title: string;
  description: string;
  stack: string[];
  repo: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "Data Visualization Dashboard",
    description: "Upload CSV, filter, chart insights, export to PDF.",
    stack: ["React", "TypeScript", "Recharts", "pdfmake"],
    repo: "https://github.com/achiappone/data-dashboard",
    live: "https://achiappone.github.io/data-dashboard/"
  },
  {
    title: "Interactive Resume",
    description: "Resume site with PDF export and dark mode.",
    stack: ["React", "TypeScript", "MUI", "pdfmake"],
    repo: "https://github.com/achiappone/resume-portfolio"
  }
];
