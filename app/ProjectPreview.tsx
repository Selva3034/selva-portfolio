type ProjectPreviewProps = {
  slug: string;
};

const coverPosition: Record<string, string> = {
  focusspace: "0% 0%",
  "ai-prompt-cleaner": "100% 0%",
  "smart-energy-meter": "0% 100%",
  "ai-virtual-mouse": "100% 100%",
};

export default function ProjectPreview({ slug }: ProjectPreviewProps) {
  const position = coverPosition[slug] ?? "0% 0%";

  return (
    <div
      className="project-cover-image"
      role="img"
      aria-label={`${slug.replaceAll("-", " ")} project dashboard preview`}
      style={{
        backgroundImage: 'url("/projects/project-covers.png")',
        backgroundPosition: position,
      }}
    />
  );
}
