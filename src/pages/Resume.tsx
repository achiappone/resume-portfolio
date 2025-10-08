import { Box, Button, Typography, Stack, Chip } from "@mui/material";
import { resumeData } from "../data/resumeData";

export default function Resume() {
  const buildDoc = () => ({
    content: [
      { text: resumeData.name, style: "name" },
      { text: `${resumeData.title} • ${resumeData.location} • ${resumeData.email}`, margin: [0, 0, 0, 12] },
      { text: resumeData.summary, style: "summary", margin: [0, 0, 0, 16] },
      { text: "Skills", style: "h2" },
      { ul: resumeData.skills, margin: [0, 0, 0, 14] },
      { text: "Experience", style: "h2" },
      ...resumeData.experience.flatMap(exp => [
        { text: `${exp.role} — ${exp.company} (${exp.dates})`, bold: true, margin: [0, 6, 0, 2] },
        { ul: exp.bullets, margin: [0, 0, 0, 10] }
      ]),
      { text: "Projects", style: "h2" },
      ...resumeData.projects.flatMap(p => [
        { text: p.name, bold: true, margin: [0, 6, 0, 2] },
        { ul: p.bullets, margin: [0, 0, 0, 10] }
      ]),
      { text: "Education", style: "h2" },
      ...resumeData.education.map(e => ({ text: `${e.school} — ${e.details}`, margin: [0, 2, 0, 2] }))
    ],
    styles: {
      name: { fontSize: 20, bold: true, margin: [0, 0, 0, 8] },
      h2: { fontSize: 14, bold: true, margin: [0, 14, 0, 6] },
      summary: { fontSize: 10, lineHeight: 1.6 }
    },
    defaultStyle: { fontSize: 10 }
  });

  const loadPdfMake = async () => {
    const pdfMakeModule = await import("pdfmake/build/pdfmake");
    const pdfFontsModule = await import("pdfmake/build/vfs_fonts");
    const pdfMake = (pdfMakeModule as any).default ?? (pdfMakeModule as any);
    const fonts = (pdfFontsModule as any).default ?? (pdfFontsModule as any);
    (pdfMake as any).vfs = fonts.pdfMake ? fonts.pdfMake.vfs : fonts.vfs;
    return pdfMake;
  };

  const downloadPdf = async () => {
    const pdfMake = await loadPdfMake();
    (pdfMake as any).createPdf(buildDoc()).download("Anthony_Chiappone_Resume.pdf");
  };

  const previewPdf = async () => {
    const win = window.open("", "_blank");
    if (!win) {
      alert("Please allow popups to preview the PDF.");
      return;
    }
    try {
      const pdfMake = await loadPdfMake();
      (pdfMake as any).createPdf(buildDoc()).open({}, win);
    } catch (e) {
      try {
        const pdfMake = await loadPdfMake();
        (pdfMake as any).createPdf(buildDoc()).getBlob((blob: Blob) => {
          const url = URL.createObjectURL(blob);
          win.location = url;
        });
      } catch {
        win.close();
        alert("Could not preview the PDF.");
      }
    }
  };

  return (
    <Box sx={{ maxWidth: 1000, mx: "auto", p: 2 }}>
      <Stack spacing={3} alignItems="flex-start">
        {/* Header */}
        <Typography variant="h4" gutterBottom sx={{ mb: 0 }}>
          Resume
        </Typography>

        {/* Summary */}
        <Typography sx={{ lineHeight: 1.75 }}>
          {resumeData.summary}
        </Typography>

        {/* Skills Chips */}
        <Stack
          direction="row"
          flexWrap="wrap"
          useFlexGap
          gap={1.25}      // horizontal gap
          rowGap={1.25}   // vertical gap between chip rows
        >
          {resumeData.skills.map((s) => (
            <Chip key={s} label={s} />
          ))}
        </Stack>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Button
            variant="contained"
            onClick={() => downloadPdf().catch(console.error)}
          >
            Download PDF
          </Button>
          <Button
            variant="outlined"
            onClick={() => previewPdf().catch(console.error)}
          >
            Preview PDF
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
