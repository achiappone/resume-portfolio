// src/pages/Home.tsx
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const services = [
  { title: "Web Design", desc: "Clean, accessible UI with modern patterns." },
  { title: "Web Development", desc: "React, TypeScript, Node, PDF workflows." },
  { title: "Mobile Apps", desc: "React Native, state and storage, PDF export." },
  { title: "Data & Docs", desc: "Dashboards, automation, and pdfmake exports." },
];

const skills = [
  { name: "React / TypeScript", value: 90 },
  { name: "Node / APIs", value: 75 },
  { name: "MobX-State-Tree", value: 80 },
  { name: "MySQL", value: 70 },
  { name: "Product Management", value: 90 },
];

export default function Home() {
  return (
    <Box sx={{ maxWidth: 1100, mx: "auto" }}>
      {/* Two-column layout via CSS Grid */}
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", md: "320px 1fr" },
        }}
      >
        {/* Left profile panel */}
        <Box sx={{ position: { md: "sticky" }, top: { md: 24 }, alignSelf: "start" }}>
          <Card sx={{ background: "background.paper", boxShadow: "0 10px 30px rgba(0,0,0,0.35)" }}>
            <CardContent>
              <Stack spacing={2} alignItems="center" textAlign="center">
                <Avatar
                  src="/avatar.png" // place a headshot in public/avatar.png (or remove src)
                  sx={(t) => ({ width: 96, height: 96, border: `2px solid ${t.palette.primary.main}` })}
                />
                <Box>
                  <Typography variant="h6">Anthony Chiappone</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Senior Product Manager • Software Developer
                  </Typography>
                </Box>
                <Divider flexItem />
                <Stack direction="row" spacing={1}>
                  <IconButton href="https://github.com/achiappone" target="_blank" rel="noreferrer">
                    <GitHubIcon />
                  </IconButton>
                  <IconButton href="https://www.linkedin.com/in/anthonychiappone" target="_blank" rel="noreferrer">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton href="mailto:achiappone@chauvetlighting.com">
                    <MailOutlineIcon />
                  </IconButton>
                </Stack>
                <Button
                  fullWidth
                  variant="outlined"
                  href="/resume-portfolio"
                  sx={(t) => ({ borderColor: t.palette.primary.main, color: t.palette.primary.main })}
                >
                  Portfolio
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Box>

        {/* Right content panel */}
        <Box>
          {/* Tab strip (visual only) */}
          <Box
            sx={(t) => ({
              mb: 2,
              p: 1,
              border: `1px solid ${t.palette.divider}`,
              borderRadius: 2,
              background: `linear-gradient(180deg, ${t.palette.primary.main}20, transparent)`,
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
            })}
          >
            {["About", "Resume", "Portfolio", "Blog", "Contact"].map((label, i) => (
              <Button
                key={label}
                size="small"
                variant={i === 0 ? "outlined" : "text"}
                sx={(t) => ({
                  borderColor: i === 0 ? t.palette.primary.main : "transparent",
                  color: i === 0 ? t.palette.primary.main : "inherit",
                })}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* About */}
          <Card sx={{ mb: 2, background: "background.paper", boxShadow: "0 10px 30px rgba(0,0,0,0.35)" }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                About
              </Typography>

              <Typography color="text.secondary">
                Anthony is a professional with several years experience. This experience includes technical field service
                and support, technical writing, product engineering, and product management. In recent years, Anthony has
                focused on software development, particularly in building user-friendly hardware and software products
                that solve real-world problems. He is well organized and detail-oriented, with a strong work ethic and a
                commitment to excellence.
              </Typography>

              <Box sx={{ my: 2 }} />

              <Typography paragraph color="text.secondary" sx={{ mb: 1.5 }}>
                This portfolio showcases Anthony&apos;s software development projects. These are primarily front-end and
                full-stack projects focused on React, TypeScript, data visualization, and PDF export.
              </Typography>

              <Typography paragraph color="text.secondary" sx={{ mb: 1.5 }}>
                Software Skills include: React, TypeScript, React Native, Node.js, MobX-State-Tree, MySQL, C++, C#, Python,
                .NET, Networking. General Skills include: Project Management (Agile methodologies), Database Design, Product
                Management, Market Research, and Technical Writing.
              </Typography>

              <Typography color="text.secondary">
                Additionally, Anthony has a background in product management for pro lighting/video systems. Anthony has
                extensive experience leading cross-functional teams to deliver products on time and on budget. He has also
                built internal apps for functional sales function purposes, and led software teams using Agile methodologies.
                Anthony is passionate about the work he does and is always looking for new challenges and opportunities to
                learn and grow.
              </Typography>
            </CardContent>
          </Card>

          {/* What I'm Doing (cards grid) */}
          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              mb: 2,
            }}
          >
            {services.map((s) => (
              <Card key={s.title} sx={{ height: "100%", background: "background.paper", boxShadow: "0 10px 30px rgba(0,0,0,0.35)" }}>
                <CardContent>
                  <Typography variant="h6">{s.title}</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }} color="text.secondary">
                    {s.desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Skills */}
          <Card sx={{ background: "background.paper", boxShadow: "0 10px 30px rgba(0,0,0,0.35)" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                My Skills
              </Typography>
              <Stack spacing={2}>
                {skills.map((s) => (
                  <Box key={s.name}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                      <Typography variant="body2">{s.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {s.value}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={s.value}
                      sx={(t) => ({
                        background: "#202532",
                        "& .MuiLinearProgress-bar": { backgroundColor: t.palette.primary.main },
                      })}
                    />
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>

          {/* Personal Overview */}
          <Card sx={{ mt: 2, background: "background.paper", boxShadow: "0 10px 30px rgba(0,0,0,0.35)" }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Personal Overview
              </Typography>
              <Typography color="text.secondary">
                Anthony is a father of 2 wonderful children (Mila-10mon, Dylan-5yr), and a 70lb dog named Nala. Anthony
                enjoys spending time with friends and family, traveling, and exploring the outdoors. He likes to cook on
                the grill, enjoys a good hard apple cider, and loves going out on the water. His hobbies include
                woodworking, 3D printing, and tinkering with home improvements and DIY projects.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
