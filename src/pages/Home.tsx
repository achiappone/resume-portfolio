// src/pages/Home.tsx  (About content only)
import { Box, Card, CardContent, LinearProgress, Stack, Typography } from "@mui/material";

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
    <Box>
      <Card sx={{ mb: 2, background: "background.paper", boxShadow: "0 10px 30px rgba(0,0,0,0.35)" }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>About</Typography>
          <Typography color="text.secondary" paragraph>
            Anthony is a professional with several years experience. This experience includes technical field service and
            support, technical writing, product engineering, and product management. In recent years, Anthony has focused
            on software development, particularly in building user-friendly hardware and software products that solve
            real-world problems. He is well organized and detail-oriented, with a strong work ethic and a commitment to
            excellence.
          </Typography>

          <Typography color="text.secondary" paragraph>
            This portfolio showcases Anthony&apos;s software development projects. These are primarily front-end and
            full-stack projects focused on React, TypeScript, data visualization, and PDF export.
          </Typography>

          <Typography color="text.secondary" paragraph>
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

      {/* services grid */}
      <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, mb: 2 }}>
        {services.map(s => (
          <Card key={s.title} sx={{ background: "background.paper", boxShadow: "0 10px 30px rgba(0,0,0,0.35)" }}>
            <CardContent>
              <Typography variant="h6">{s.title}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }} color="text.secondary">{s.desc}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* skills */}
      <Card sx={{ background: "background.paper", boxShadow: "0 10px 30px rgba(0,0,0,0.35)" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>My Skills</Typography>
          <Stack spacing={2}>
            {skills.map(s => (
              <Box key={s.name}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                  <Typography variant="body2">{s.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{s.value}%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={s.value}
                  sx={(t) => ({ background: "#202532", "& .MuiLinearProgress-bar": { backgroundColor: t.palette.primary.main } })}
                />
              </Box>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
