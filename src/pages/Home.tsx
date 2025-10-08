// src/pages/Home.tsx
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>About</Typography>
      <Typography>
        Anthony is a professional with several years experience. This experience includes technical field service and support, technical writing, product engineering, and product management.
        In recent years, Anthony has focused on software development, particularly in building user-friendly hardware and software products that solve real-world problems. He is well organized and detail-oriented,
        with a strong work ethic and a commitment to excellence.
      </Typography>

      {/* Add an empty line by splitting into a new Typography */}
      <Typography paragraph />

      <Typography paragraph>
        This portfolio showcases Anthony's software development projects. These are primarily
        Front-end and full-stack projects focused on React, TypeScript, data visualization, and PDF export.
      </Typography>
      
      <Typography paragraph>
        Software Skills include: React, TypeScript, React Native, Node.js, MobX-State-Tree, MySQL, C++, C#, Python, .NET, Networking.
        General Skills include: Project Management (Agile methodologies), Database Design, Product Management, Market Research, and Technical Writing.
      </Typography>

      <Typography paragraph>
        Additionally, Anthony has a background in product management for pro lighting/video systems. Anthony has extensive experience leading cross-functional teams to deliver products on time and on budget.
        He has also built internal apps for functional sales function purposes, and led software teams using Agile methodologies.
        Anthony is passionate about the work he does and is always looking for new challenges and opportunities to learn and grow.
      </Typography>

      <Typography variant="h4" gutterBottom>Personal Overview</Typography>
      <Typography>
        Anthony is a father of 2 wonderful children (Mila-10mon, Dylan-5yr), and a 70lb dog named Nala. Anthony enjoys spending time with friends and family, traveling, and exploring the outdoors. He likes to cook on the grill,
        enjoys a good hard apple cider, and loves going out on the water. His hobbies include woodworking, 3D printing, and tinkering with home improvements and DIY projects.
      </Typography>
    </Box>
  );
}
