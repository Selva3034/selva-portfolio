
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = {
  focusspace: {
    title: "FocusSpace",
    category: "PRODUCTIVITY · WEB APPLICATION",
    description:
      "A digital workspace for tasks, projects, notes, goals, and focus sessions.",
    overview:
      "FocusSpace brings productivity tools into one organized workspace with a modern interface designed to help users manage their daily work.",
    features: [
      "Task and project organization",
      "Focus timer and productivity tracking",
      "Notes and goal management",
      "Responsive workspace interface",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Selva3034",
  },
  "ai-prompt-cleaner": {
    title: "AI Prompt Cleaner",
    category: "AI TOOL · WEB APPLICATION",
    description:
      "Transforms rough prompts into clearer, structured instructions for AI tools.",
    overview:
      "AI Prompt Cleaner helps users refine their prompts into more useful instructions through a simple web interface.",
    features: [
      "Prompt input and refinement",
      "Structured prompt output",
      "Copy-friendly results",
      "Responsive interface",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
    github: "https://github.com/Selva3034/AI-Prompt-Cleaner",
  },
  "smart-energy-meter": {
    title: "Smart Energy Meter",
    category: "DATA SCIENCE · ENERGY ANALYTICS",
    description:
      "An energy dashboard for consumption prediction and unusual usage detection.",
    overview:
      "This project analyzes household electricity consumption data and visualizes patterns using prediction and anomaly-detection techniques.",
    features: [
      "Energy data preprocessing",
      "Consumption prediction",
      "Anomaly detection",
      "Interactive dashboard visualizations",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit"],
    github: "https://github.com/Selva3034",
  },
  "ai-virtual-mouse": {
    title: "AI Virtual Mouse",
    category: "COMPUTER VISION · DESKTOP APP",
    description:
      "Control mouse movements using hand gestures captured through a webcam.",
    overview:
      "This desktop application uses computer vision to track hand landmarks and map gestures to mouse actions.",
    features: [
      "Webcam-based hand tracking",
      "Gesture-controlled mouse movement",
      "Gesture recognition",
      "Desktop interface",
    ],
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy", "PyAutoGUI"],
    github: "https://github.com/Selva3034",
  },
};

type ProjectSlug = keyof typeof projects;

// Pre-render every project route at build time.
export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!Object.prototype.hasOwnProperty.call(projects, slug)) {
    notFound();
  }

  const project = projects[slug as ProjectSlug];

  return (
    <main className="min-h-screen bg-[#070711] px-6 py-10 text-white md:px-12 lg:px-20">
      <header className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">
          SELVA<span className="text-violet-400">.</span>
        </Link>

        <Link
          href="/#projects"
          className="text-sm text-zinc-400 hover:text-white"
        >
          ← All projects
        </Link>
      </header>

      <article className="mx-auto max-w-5xl py-20 sm:py-28">
        <p className="text-xs tracking-[0.3em] text-violet-300">
          {project.category}
        </p>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
          {project.title}
          <span className="text-violet-400">.</span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          {project.description}
        </p>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-violet-100"
        >
          View on GitHub ↗
        </a>

        <div className="my-14 h-px bg-white/10 sm:my-20" />

        <section>
          <h2 className="text-2xl font-semibold">Project overview</h2>
          <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
            {project.overview}
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Key features</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-zinc-300"
              >
                <span className="mr-3 text-violet-300">✦</span>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Technologies used</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-violet-400/20 bg-violet-500/[0.07] px-4 py-2 text-sm text-violet-200"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}