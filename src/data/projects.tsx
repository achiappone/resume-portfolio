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
  },
    {
    title: "Task Manager",
    description: "Simple Kanban with drag-and-drop and local save.",
    stack: ["React", "TypeScript", "Zustand", "dnd-kit"],
    repo: "https://github.com/achiappone/task-manager-lite",
    live: "https://achiappone.github.io/task-manager-lite/"
  }
];
