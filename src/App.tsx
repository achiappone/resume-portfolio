import { useMemo, useState } from "react";
import { Routes, Route, Link, useLocation,Navigate } from "react-router-dom";
import { CssBaseline, AppBar, Toolbar, Typography, Container, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

export default function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar sx={{ gap: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Anthony Chiappone
          </Typography>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <IconButton color="inherit" onClick={() => setMode(m => (m === "light" ? "dark" : "light"))} aria-label="toggle theme">
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 4 }}>
        <Routes location={location}>
          {/* redirect root to /home */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          {/* catch-all -> home */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Typography
      component={Link}
      to={to}
      color="inherit"
      sx={{ textDecoration: "none", borderBottom: active ? "2px solid currentColor" : "none", pb: 0.25 }}
    >
      {children}
    </Typography>
  );
}
