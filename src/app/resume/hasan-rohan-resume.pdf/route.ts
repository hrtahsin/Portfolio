import { credentials, education, profile, projects, skillGroups } from "@/data/portfolio";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const resumeLines = [
  "Hasan Rohan Tahsin",
  "Software Engineer",
  `${siteConfig.email} | ${siteConfig.github} | ${siteConfig.linkedin}`,
  "",
  "Summary",
  profile.hero.summary,
  "",
  "Education",
  `${education.degree}, ${education.school}`,
  `${education.minor} | ${education.completed} | ${education.location}`,
  "",
  "Selected Projects",
  ...projects
    .filter((project) => project.featured)
    .map((project) => `${project.title} (${project.status.replace("-", " ")}): ${project.shortDescription}`),
  "",
  "Skills",
  ...skillGroups.map((group) => `${group.title}: ${group.skills.join(", ")}`),
  "",
  "Certifications and Learning",
  ...credentials.map((credential) =>
    credential.issuer ? `${credential.title} - ${credential.issuer}` : credential.title,
  ),
];

export function GET() {
  const pdf = createPdf(resumeLines);

  return new Response(pdf, {
    headers: {
      "Content-Disposition": 'inline; filename="hasan-rohan-tahsin-resume.pdf"',
      "Content-Type": "application/pdf",
    },
  });
}

function createPdf(lines: string[]) {
  const content = createPageContent(lines);
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    `<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
  ];

  let body = "%PDF-1.4\n";
  const offsets = [0];

  objects.forEach((object, index) => {
    offsets.push(body.length);
    body += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = body.length;
  body += `xref\n0 ${objects.length + 1}\n`;
  body += "0000000000 65535 f \n";
  offsets.slice(1).forEach((offset) => {
    body += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  body += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  return body;
}

function createPageContent(lines: string[]) {
  const escapedLines = lines.flatMap((line) => wrapLine(line, 92)).slice(0, 38);

  return [
    "BT",
    "/F1 18 Tf",
    "72 744 Td",
    `(${escapePdfText(escapedLines[0] ?? "")}) Tj`,
    "/F1 10 Tf",
    ...escapedLines.slice(1).flatMap((line) => ["0 -16 Td", `(${escapePdfText(line)}) Tj`]),
    "ET",
  ].join("\n");
}

function wrapLine(line: string, maxLength: number) {
  if (line.length <= maxLength) {
    return [line];
  }

  const words = line.split(" ");
  const wrapped: string[] = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;

    if (next.length > maxLength) {
      wrapped.push(current);
      current = word;
      return;
    }

    current = next;
  });

  if (current) {
    wrapped.push(current);
  }

  return wrapped;
}

function escapePdfText(text: string) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}
