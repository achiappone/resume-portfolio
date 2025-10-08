// src/layouts/PortfolioLayout.tsx
import {
  Avatar, Box, Button, Card, CardContent, Divider, IconButton, Stack, Typography
} from "@mui/material";
import { Outlet, Link as RouterLink, useLocation } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import profileImage from "../assets/profileImage.jpg";

export default function PortfolioLayout() {
  const location = useLocation();

  const tabs = [
    { label: "About",     to: "/" },
    { label: "Resume",    to: "/resume" },
    { label: "Example Projects", to: "/projects" }, // your projects page
  ];

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" || location.pathname === "/home"
               : location.pathname.startsWith(to);

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", px: 2, py: 4 }}>
      {/* Two-column layout */}
      <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", md: "320px 1fr" } }}>
        {/* Left sidebar (persistent) */}
        <Box sx={{ position: { md: "sticky" }, top: { md: 24 }, alignSelf: "start" }}>
          <Card sx={{ background: "background.paper", boxShadow: "0 10px 30px rgba(0,0,0,0.35)" }}>
            <CardContent>
              <Stack spacing={2} alignItems="center" textAlign="center">
                <Avatar src={profileImage}
                        alt="Anthony Chiappone"
                        sx={(t) => ({ width:120, height: 120, border: `2px solid ${t.palette.primary.main}` })} />
                <Box>
                  <Typography variant="h6">Anthony Chiappone</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Senior Product Manager • Software Developer
                  </Typography>
                </Box>
                <Divider flexItem />
                <Stack direction="row" spacing={1}>
                  <IconButton href="https://github.com/achiappone" target="_blank" rel="noreferrer"><GitHubIcon /></IconButton>
                  <IconButton href="https://www.linkedin.com/in/anthonychiappone" target="_blank" rel="noreferrer"><LinkedInIcon /></IconButton>
                  <IconButton href="mailto:anthonychiappone@gmail.com"><MailOutlineIcon /></IconButton>
                </Stack>
                <Button fullWidth variant="outlined" href="/resume-portfolio"
                        sx={(t) => ({ borderColor: t.palette.primary.main, color: t.palette.primary.main })}>
                  Portfolio
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Box>

        {/* Right column: tab strip + page content */}
        <Box>
          {/* Tab strip (now real links) */}
          <Box
            sx={(t) => ({
              mb: 2, p: 1, border: `1px solid ${t.palette.divider}`, borderRadius: 2,
              background: `linear-gradient(180deg, ${t.palette.primary.main}20, transparent)`,
              display: "flex", gap: 1, flexWrap: "wrap",
            })}
          >
            {tabs.map(({ label, to }) => (
              <Button
                key={label}
                size="small"
                component={RouterLink}
                to={to}
                variant={isActive(to) ? "outlined" : "text"}
                sx={(t) => ({
                  borderColor: isActive(to) ? t.palette.primary.main : "transparent",
                  color: isActive(to) ? t.palette.primary.main : "inherit",
                })}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Where child pages render (About / Resume / Projects) */}
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
