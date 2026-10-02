// src/pages/Home.tsx  (About content only)
import { Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";

const focusAreas = [
  { title: "Mobile apps for hardware", desc: "React Native apps that configure and diagnose devices over Bluetooth LE and NFC, on iOS and Android." },
  { title: "Protocols & control systems", desc: "DMX512, RDM (ANSI E1.20), Art-Net, sACN and OSC: the protocols professional lighting runs on." },
  { title: "Embedded & IoT", desc: "ESP32 / ESP32-S3 firmware, sensors over I2C, RS-485, Raspberry Pi and CAN-bus integrations." },
  { title: "Web tools & infrastructure", desc: "React + TypeScript tools, Node services, CI/CD with GitHub Actions, and self-hosted Linux infrastructure." },
];
const skillGroups = [
  { name: "Languages", items: ["TypeScript", "JavaScript", "Python", "C/C++", "C#"] },
  { name: "Frameworks", items: ["React", "React Native", "Node.js", "MobX-State-Tree", "Vite"] },
  { name: "Protocols", items: ["DMX512", "RDM", "Art-Net", "sACN", "OSC", "BLE", "NFC", "NMEA 2000", "WebRTC"] },
  { name: "Platforms & Ops", items: ["ESP32", "Raspberry Pi", "Linux", "Proxmox", "systemd", "Docker", "GitHub Actions"] },
  { name: "Product", items: ["Product Management", "Agile Delivery", "Requirements", "QA / Test Planning", "Technical Writing"] },
];

export default function Home() {
  return (
    <Box>
      <Card sx={{ mb: 2, background: "background.paper", boxShadow: "0 10px 30px rgba(0,0,0,0.35)" }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>About</Typography>
          <Typography color="text.secondary" paragraph>
            I&apos;m a software engineer and senior product manager with 15 years at Chauvet Professional, where I
            moved from technical writer to product engineer, product manager and senior product manager. I build
            software that talks to hardware: mobile apps that configure lighting fixtures over Bluetooth LE and NFC,
            RDM and DMX protocol support, ESP32 firmware, and the web tools and infrastructure around them.
          </Typography>
          <Typography color="text.secondary">
            I work on both sides of a product. I write requirements and run Agile delivery with the software team,
            and I also ship code with that team: 35 merged pull requests on the UNRIVAL fixture-configuration app,
            co-development of the RDM release for Connect FX and WellCom Server, plus front-end UI design and QA
            across these products.
          </Typography>
        </CardContent>
      </Card>

      {/* focus areas */}
      <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, mb: 2 }}>
        {focusAreas.map(s => (
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
          <Typography variant="h6" gutterBottom>Skills</Typography>
          <Stack spacing={2}>
            {skillGroups.map(g => (
              <Box key={g.name}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 0.75 }}>{g.name}</Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {g.items.map(i => <Chip key={i} label={i} size="small" variant="outlined" />)}
                </Stack>
              </Box>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
