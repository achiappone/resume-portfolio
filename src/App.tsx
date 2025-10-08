// src/App.tsx
import { useMemo, useState } from "react";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import { CssBaseline, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material/styles";

import PortfolioLayout from "./layouts/PortfolioLayout"; // <-- persistent left ribbon + tabs
import Home from "./pages/Home";       // right-side "About" content
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function getTheme(mode: PaletteMode) {
  return createTheme({
    palette: {
      mode,
      primary: { main: mode === "dark" ? "#e3b341" : "#b58300" },
      background: mode === "dark"
        ? { default: "#0f1115", paper: "#161a22" }
        : { default: "#fafafa", paper: "#ffffff" },
      text: mode === "dark"
        ? { primary: "#e7eaf0", secondary: "#a9b0bd" }
        : { primary: "#1d2433", secondary: "#4b5565" },
      divider: mode === "dark" ? "rgba(227,179,65,0.18)" : "rgba(0,0,0,0.12)",
    },
    shape: { borderRadius: 16 },
    typography: {
      fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
    },
    components: {
      MuiCard: { styleOverrides: { root: { border: "1px solid rgba(227,179,65,0.12)" } } },
      MuiLinearProgress: { styleOverrides: { root: { height: 8, borderRadius: 999 } } },
      MuiButton: { styleOverrides: { root: { textTransform: "none", fontWeight: 600 } } },
    },
  });
}

export default function App() {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const theme = useMemo(() => getTheme(mode), [mode]);
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <AppBar position="sticky" color="default" enableColorOnDark sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Toolbar sx={{ gap: 2 }}>
          {/*<Typography variant="h6" sx={{ flexGrow: 1 }}>
            Anthony Chiappone
          </Typography>
          {/* Top nav now points at the same routes rendered inside the layout */}
          {/*<TopNavLink to="/">Home</TopNavLink>*/}
          {/*<TopNavLink to="/projects">Projects</TopNavLink>*/}
          {/*<TopNavLink to="/resume">Resume</TopNavLink>*/}
          <IconButton
            color="inherit"
            onClick={() => setMode((m) => (m === "light" ? "dark" : "light"))}
            aria-label="toggle theme"
          >
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* No Container here — the layout handles its own width/padding */}
      <Routes location={location}>
        {/* Everything below shares the persistent left panel + tab strip */}
        <Route path="/" element={<PortfolioLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
        </Route>

        {/* Keep /home working as an alias */}
        <Route path="/home" element={<Navigate to="/" replace />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ThemeProvider>
  );
}

function TopNavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isHome = to === "/";
  const active = isHome
    ? location.pathname === "/" || location.pathname === "/home"
    : location.pathname.startsWith(to);

  return (
    <Typography
      component={Link}
      to={to}
      color="inherit"
      sx={{
        textDecoration: "none",
        borderBottom: active ? "2px solid currentColor" : "none",
        pb: 0.25,
      }}
    >
      {children}
    </Typography>
  );
}
