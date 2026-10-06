// Résumé PDF, generated in the browser from resumeData with pdfmake (loaded on demand).
import type { Content, TDocumentDefinitions } from "pdfmake/interfaces";
import { resumeData } from "../data/resumeData";

type PdfMake = typeof import("pdfmake/build/pdfmake");
type Interop<T> = T & { default?: T };

export const buildDoc = (): TDocumentDefinitions => ({
  content: [
    { text: resumeData.name, style: "name" },
    { text: `${resumeData.title} • ${resumeData.location} • ${resumeData.email}`, margin: [0, 0, 0, 12] },
    { text: resumeData.summary, style: "summary", margin: [0, 0, 0, 16] },
    { text: "Skills", style: "h2" },
    { ul: resumeData.skills, margin: [0, 0, 0, 14] },
    { text: "Experience", style: "h2" },
    ...resumeData.experience.flatMap((exp): Content[] => [
      { text: `${exp.role} — ${exp.company} (${exp.dates})`, bold: true, margin: [0, 6, 0, 2] },
      { ul: exp.bullets, margin: [0, 0, 0, 10] }
    ]),
    { text: "Projects", style: "h2" },
    ...resumeData.projects.flatMap((p): Content[] => [
      { text: p.name, bold: true, margin: [0, 6, 0, 2] },
      { ul: p.bullets, margin: [0, 0, 0, 10] }
    ]),
    { text: "Education", style: "h2" },
    ...resumeData.education.map((e): Content => ({ text: `${e.school} — ${e.details}`, margin: [0, 2, 0, 2] }))
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
  // CJS/ESM interop: Vite may hand back either the module or { default: module }
  const pdfMake = (pdfMakeModule as Interop<PdfMake>).default ?? pdfMakeModule;
  const fonts = pdfFontsModule as Interop<{ pdfMake?: { vfs: PdfMake["vfs"] }; vfs?: PdfMake["vfs"] }>;
  const f = fonts.default ?? fonts;
  pdfMake.vfs = f.pdfMake ? f.pdfMake.vfs : f.vfs!;
  return pdfMake;
};

export const downloadPdf = async () => {
  const pdfMake = await loadPdfMake();
  pdfMake.createPdf(buildDoc()).download("Anthony_Chiappone_Resume.pdf");
};

/** Opens the PDF in a new tab. Resolves to an error message for the page to show, or null. */
export const previewPdf = async (): Promise<string | null> => {
  const win = window.open("", "_blank");
  if (!win) return "Your browser blocked the new tab. Allow pop-ups for this site, or use Download.";
  try {
    const pdfMake = await loadPdfMake();
    pdfMake.createPdf(buildDoc()).open({}, win);
    return null;
  } catch {
    try {
      const pdfMake = await loadPdfMake();
      pdfMake.createPdf(buildDoc()).getBlob((blob: Blob) => { win.location = URL.createObjectURL(blob); });
      return null;
    } catch {
      win.close();
      return "The preview couldn't be generated. Use Download instead.";
    }
  }
};
