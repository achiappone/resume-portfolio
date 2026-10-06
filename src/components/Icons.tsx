// Small stroke icon set (24px grid, 1.75 stroke) plus the GitHub and LinkedIn marks.
type P = { size?: number };
const base = (size = 18) => ({ width: size, height: size, viewBox: "0 0 24 24", "aria-hidden": true as const, focusable: "false" as const });

export const GitHubIcon = ({ size }: P) => (
  <svg {...base(size)} fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.12.64-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9l-.01 2.81c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/></svg>
);

export const LinkedInIcon = ({ size }: P) => (
  <svg {...base(size)} fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>
);

export const MailIcon = ({ size }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/></svg>
);

export const DownloadIcon = ({ size }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14"/></svg>
);

export const ArrowIcon = ({ size }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m0 0-5-5m5 5-5 5"/></svg>
);

export const EyeIcon = ({ size }: P) => (
  <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.75"/></svg>
);
