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
    repo: "https://github.com/<your-username>/data-dashboard",
    live: "https://<your-username>.github.io/data-dashboard"
  },
  {
    title: "Task Manager",
    description: "Full-stack CRUD with SQLite and JWT auth.",
    stack: ["React", "Node", "SQLite"],
    repo: "https://github.com/<your-username>/task-manager"
  },
  {
    title: "Interactive Resume",
    description: "Resume site with PDF export and dark mode.",
    stack: ["React", "TypeScript", "MUI", "pdfmake"],
    repo: "https://github.com/<your-username>/resume-portfolio"
  }
];
