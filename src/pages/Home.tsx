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
          <Typography color="text.secondary">
            {/* your paragraphs... */}
          </Typography>
          {/* rest of your About text... */}
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
