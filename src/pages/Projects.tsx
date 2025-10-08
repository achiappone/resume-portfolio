import { projects } from "../data/projects";
import { Grid, Card, CardContent, CardActions, Typography, Chip, Stack, Button } from "@mui/material";

export default function Projects() {
  return (
    <Grid container spacing={2}>
      {projects.map(p => (
        <Grid item xs={12} md={6} key={p.title}>
          <Card>
            <CardContent>
              <Typography variant="h6">{p.title}</Typography>
              <Typography sx={{ mt: 1, mb: 1 }}>{p.description}</Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {p.stack.map(s => (
                  <Chip key={s} label={s} size="small" />
                ))}
              </Stack>
            </CardContent>
            <CardActions>
              <Button size="small" href={p.repo} target="_blank" rel="noreferrer">GitHub</Button>
              {p.live && (
                <Button size="small" href={p.live} target="_blank" rel="noreferrer">Live Link</Button>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
