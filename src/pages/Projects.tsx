// src/pages/Projects.tsx
import { projects } from "../data/projects";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Stack,
  Button,
} from "@mui/material";

export default function Projects() {
  return (
    <Box sx={{ maxWidth: 1100, mx: "auto" }}>
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          alignItems: "stretch",
        }}
      >
        {projects.map((p) => (
          <Card
            key={p.title}
            sx={{
              height: "100%",
              background: "background.paper",
              boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            }}
          >
            <CardContent>
              <Typography variant="h6">{p.title}</Typography>
              <Typography sx={{ mt: 1, mb: 1 }} color="text.secondary">
                {p.description}
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {p.stack.map((s: string) => (
                  <Chip key={s} label={s} size="small" variant="outlined" />
                ))}
              </Stack>
            </CardContent>
            <CardActions sx={{ pt: 0 }}>
              <Button size="small" href={p.repo} target="_blank" rel="noreferrer">
                GitHub
              </Button>
              {!!p.live && (
                <Button size="small" href={p.live} target="_blank" rel="noreferrer">
                  Live Link
                </Button>
              )}
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
