// src/pages/Home.tsx
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
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
  { title: "Web Development", desc: "React, TypeScript, Node and PDF workflows." },
  { title: "Mobile Apps", desc: "React Native with state, storage, and export." },
  { title: "Data & Docs", desc: "Dashboards, pdfmake exports, and automation." },
];

const skills = [
  { name: "React / TypeScript", value: 90 },
  { name: "Node / APIs", value: 75 },
  { name: "MobX-State-Tree", value: 80 },
  { name: "MySQL", value: 70 },
  { name: "Product Management", value: 90 },
];

export default function Home() {
  // Accent color that reads well on your existing dark background
  const accent = "#e3b341";

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", px: 2, py: 3 }}>
      <Grid container spacing={2}>
        {/* LEFT SIDEBAR */}
        <Grid item xs={12} md={4} lg={3} sx={{ position: { md: "sticky" }, top: { md: 24 }, alignSelf: "start" }}>
          <Card
            sx={{
              background: "#161a22",
              border: "1px solid rgba(227,179,65,0.15)",
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Stack spacing={2} alignItems="center" textAlign="center">
                <Avatar
                  src="/avatar.png" // place a headshot at public/avatar.png
                  sx={{ width: 96, height: 96, border: `2px solid ${accent}` }}
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
                <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
                  <Button fullWidth variant="outlined" href="/resume-portfolio" sx={{ borderColor: accent, color: accent }}>
                    Portfolio
                  </Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* MAIN COLUMN */}
        <Grid item xs={12} md={8} lg={9}>
          {/* Top Nav (visual only; wire up as needed) */}
          <Box
            sx={{
              mb: 2,
              p: 1,
              border: "1px solid rgba(227,179,65,0.15)",
              borderRadius: 2,
              background:
                "linear-gradient(180deg, rgba(227,179,65,0.06), rgba(227,179,65,0.00))",
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            {["About", "Resume", "Portfolio", "Blog", "Contact"].map((label, i) => (
              <Button
                key={label}
                size="small"
                variant={i === 0 ? "outlined" : "text"}
                sx={{
                  borderColor: i === 0 ? accent : "transparent",
                  color: i === 0 ? accent : "inherit",
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* About Section */}
          <Card
            sx={{
              mb: 2,
              background: "#161a22",
              border: "1px solid rgba(227,179,65,0.15)",
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Typography variant="h4" gutterBottom>
                About
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Anthony is a professional with several years experience. This experience includes
                technical field service and support, technical writing, product engineering, and product
                management. In recent years, Anthony has focused on software development, particularly in
                building user-friendly hardware and software products that solve real-world problems. He is
                well organized and detail-oriented, with a strong work ethic and a commitment to excellence.
              </Typography>

              <Box sx={{ my: 2 }} />

              <Typography paragraph sx={{ color: "text.secondary", mb: 1.5 }}>
                This portfolio showcases Anthony&apos;s software development projects. These are primarily
                front-end and full-stack projects focused on React, TypeScript, data visualization, and PDF export.
              </Typography>

              <Typography paragraph sx={{ color: "text.secondary", mb: 1.5 }}>
                Software skills include: React, TypeScript, React Native, Node.js, MobX-State-Tree, MySQL, C++, C#,
                Python, .NET, Networking. General skills include: Project Management (Agile methodologies), Database
                Design, Product Management, Market Research, and Technical Writing.
              </Typography>

              <Typography sx={{ color: "text.secondary" }}>
                Additionally, Anthony has a background in product management for pro lighting/video systems. He has
                extensive experience leading cross-functional teams to deliver products on time and on budget. He has
                also built internal apps for sales workflows and led software teams using Agile methodologies. Anthony
                is passionate about the work he does and is always looking for new challenges and opportunities to
                learn and grow.
              </Typography>
            </CardContent>
          </Card>

          {/* Service Cards */}
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {services.map((s) => (
              <Grid key={s.title} item xs={12} sm={6} md={6} lg={3}>
                <Card
                  sx={{
                    height: "100%",
                    background: "#161a22",
                    border: "1px solid rgba(227,179,65,0.15)",
                    borderRadius: 2,
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">{s.title}</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
                      {s.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Skills */}
          <Card
            sx={{
              background: "#161a22",
              border: "1px solid rgba(227,179,65,0.15)",
              borderRadius: 2,
            }}
          >
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
                      sx={{
                        height: 8,
                        borderRadius: 999,
                        background: "#202532",
                        "& .MuiLinearProgress-bar": { backgroundColor: accent },
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>

          {/* Personal Overview (optional card) */}
          <Card
            sx={{
              mt: 2,
              background: "#161a22",
              border: "1px solid rgba(227,179,65,0.15)",
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Personal Overview
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Anthony is a father of 2 wonderful children (Mila-10mon, Dylan-5yr), and a 70lb dog named Nala.
                Anthony enjoys spending time with friends and family, traveling, and exploring the outdoors. He likes
                to cook on the grill, enjoys a good hard apple cider, and loves going out on the water. His hobbies
                include woodworking, 3D printing, and tinkering with home improvements and DIY projects.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
