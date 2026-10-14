"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero3D from "./Hero3D";
import TechMarquee from "./TechMarquee";
import ShaderBackdrop from "./ShaderBackdrop";
import ProjectPreview from "./ProjectPreview";

const projects = [
  {
    number: "01",
    slug: "focusspace",
    title: "FocusSpace",
    category: "PRODUCTIVITY · NEXT.JS",
    description:
      "A digital workspace bringing tasks, projects, notes, and focus sessions together.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    color: "from-violet-500/30 via-indigo-500/10 to-transparent",
    symbol: "F",
  },
  {
    number: "02",
    slug: "ai-prompt-cleaner",
    title: "AI Prompt Cleaner",
    category: "AI TOOL · WEB APP",
    description:
      "Transforms rough prompts into clearer, structured instructions for better AI responses.",
    tags: ["JavaScript", "Python", "Flask"],
    color: "from-cyan-400/25 via-blue-500/10 to-transparent",
    symbol: "AI",
  },
  {
    number: "03",
    slug: "smart-energy-meter",
    title: "Smart Energy Meter",
    category: "DATA SCIENCE · PYTHON",
    description:
      "An energy dashboard with consumption prediction and unusual usage detection.",
    tags: ["Python", "Scikit-learn", "Streamlit"],
    color: "from-fuchsia-500/25 via-purple-500/10 to-transparent",
    symbol: "↗",
  },
  {
    number: "04",
    slug: "ai-virtual-mouse",
    title: "AI Virtual Mouse",
    category: "COMPUTER VISION · PYTHON",
    description:
      "Control mouse movements using hand gestures captured through a webcam.",
    tags: ["OpenCV", "MediaPipe", "PyAutoGUI"],
    color: "from-blue-500/25 via-violet-500/10 to-transparent",
    symbol: "◎",
  },
];
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "SQL",
  "Git & GitHub",
  "Machine Learning",
];
const navLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "#about .reveal",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#about",
            start: "top 78%",
            once: true,
          },
        }
      );
      gsap.fromTo(
        "#projects .project-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#projects",
            start: "top 78%",
            once: true,
          },
        }
      );
      gsap.fromTo(
        "#contact .contact-reveal",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#contact",
            start: "top 82%",
            once: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070711] text-white selection:bg-violet-500/40">
      <ShaderBackdrop />
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-260px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />
        <div className="absolute right-[-180px] top-[35%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute bottom-[-180px] left-[-150px] h-[400px] w-[400px] rounded-full bg-fuchsia-600/10 blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:60px_60px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>
      {/* Navigation */}
      <header className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 lg:px-16">
      <a
  href="#home"
  className="group flex shrink-0 items-center gap-3"
  aria-label="Selva Rathinam home"
>
  <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/30 bg-[#0b0b18] shadow-[0_0_25px_rgba(139,92,246,0.15)]">
    <span className="bg-gradient-to-r from-white via-violet-300 to-cyan-300 bg-clip-text text-2xl font-black tracking-tighter text-transparent">
      SR
    </span>
  </span>
  <span className="flex flex-col gap-1">
    <span className="text-sm font-semibold tracking-wide text-white">
      SelvaRathinam
    </span>
    <span className="text-xs text-zinc-400">
      Developer · Problem Solver
    </span>
  </span>
</a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-violet-400/40 bg-violet-500/10 px-5 py-2.5 text-sm text-violet-200 transition hover:bg-violet-500/20"
          >
            Let&apos;s talk ↗
          </a>
        </nav>
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 p-2 text-xl text-zinc-200 md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </header>
      {menuOpen && (
        <nav className="relative z-30 mx-6 flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#11111e] p-6 md:hidden">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-zinc-300 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
      {/* Hero */}
      <section
        id="home"
        className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-24"
      >
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-4 py-2 text-xs tracking-wide text-violet-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            OPEN TO OPPORTUNITIES
          </div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
            Hello, I&apos;m Selva
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[82px]">
            Building
            <br />
            digital things
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              that matter.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            Computer Science graduate and developer passionate about crafting
            thoughtful web experiences, useful applications, and creative
            technology.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-violet-100"
            >
              Explore my work ↓
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3.5 text-sm text-zinc-300 transition hover:border-violet-300/60 hover:text-white"
            >
              Get in touch
            </a>
            <a
              href="/resume.pdf"
              download="Selva-Resume.pdf"
              className="rounded-full border border-violet-400/30 px-6 py-3.5 text-sm text-violet-200 transition hover:bg-violet-500/10"
            >
              Download Resume ↓
            </a>
          </div>
          <div className="mt-12 flex items-center gap-5 text-zinc-500">
            <a
              href="https://github.com/Selva3034"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-bold transition hover:text-white"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.23-1.65-1.23-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.08 3.64 1.58.1-.72.4-1.22.7-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sm font-bold transition hover:text-white"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8 18H5V9h3v9ZM6.5 7.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 18h-3v-4.38c0-1.04-.02-2.38-1.45-2.38-1.45 0-1.67 1.13-1.67 2.3V18h-3V9h2.88v1.23h.04c.4-.71 1.38-1.46 2.84-1.46C18.68 8.77 19 10.7 19 13.2V18Z"
                />
              </svg>
            </a>
            <span className="h-px w-12 bg-white/15" />
            <span className="text-xs tracking-wider">BASED IN INDIA</span>
          </div>
        </div>
        <Hero3D />
      </section>
      <TechMarquee />
      {/* About */}
      <section
        id="about"
        className="relative z-10 border-y border-white/[0.07] bg-white/[0.015]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16 lg:py-24">
          <div className="reveal">
            <p className="mb-4 text-xs tracking-[0.3em] text-violet-300">
              / ABOUT ME
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Curious mind.
              <br />
              <span className="text-zinc-500">Builder&apos;s mindset.</span>
            </h2>
          </div>
          <div>
            <p className="reveal text-lg leading-8 text-zinc-300">
              I enjoy turning ideas into digital experiences that are both
              useful and visually engaging. My interests span frontend
              development, backend technologies, and applied machine learning.
            </p>
            <p className="reveal mt-5 leading-7 text-zinc-500">
              I believe great products come from curiosity, consistent
              learning, and attention to the small details that make technology
              easier to use.
            </p>
            <div className="reveal mt-9 flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs text-zinc-300 transition hover:border-violet-400/40 hover:text-violet-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Projects: cards open their individual detail pages */}
      <section
        id="projects"
        className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16 lg:py-28"
      >
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-xs tracking-[0.3em] text-violet-300">
              / SELECTED WORK
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Things I&apos;ve built<span className="text-violet-400">.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-zinc-500">
            Projects exploring web development, intelligent tools, and
            practical problem-solving.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (            
            <a
              key={project.slug}
              href={`/projects/${project.slug}`}
              onMouseMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                event.currentTarget.style.setProperty(
                  "--spotlight-x",
                  `${event.clientX - rect.left}px`
                );
                event.currentTarget.style.setProperty(
                  "--spotlight-y",
                  `${event.clientY - rect.top}px`
                );
              }}
              className="project-card project-card-premium group block overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0d0d19] transition duration-500 hover:-translate-y-1 hover:border-violet-400/40"
            >
              <div
                className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}
              >
                <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:18px_18px]" />
                <div className="absolute h-40 w-40 rounded-full bg-violet-500/20 blur-3xl transition duration-500 group-hover:scale-150" />
                <ProjectPreview slug={project.slug} />
                <span className="absolute left-5 top-5 text-xs tracking-widest text-white/50">
                  PROJECT {project.number}
                </span>
                <span className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] tracking-wider text-white/70">
                  VIEW DETAILS ↗
                </span>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-[10px] tracking-[0.2em] text-violet-300">
                  {project.category}
                </p>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-medium tracking-tight">
                    {project.title}
                  </h3>
                  <span className="text-xl text-zinc-500 transition group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-violet-300">
                    ↘
                  </span>
                </div>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/[0.05] px-2.5 py-1.5 text-[11px] text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 px-6 pb-20 md:px-10 lg:px-16 lg:pb-28"
      >
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.12] via-[#11111e] to-blue-500/[0.08] px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-violet-500/15 blur-[100px]" />
          <div className="relative">
            <p className="contact-reveal mb-5 text-xs tracking-[0.3em] text-violet-300">
              / HAVE A PROJECT IN MIND?
            </p>
            <h2 className="contact-reveal max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Let&apos;s create something
              <span className="text-violet-300"> meaningful.</span>
            </h2>
            <p className="contact-reveal mt-5 max-w-xl leading-7 text-zinc-400">
              Interested in working together, discussing an opportunity, or
              sharing an idea? I&apos;d be happy to connect.
            </p>
            

<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=selvarathinam825@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-purple-200"
>
  Contact me ↗
</a>

          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-7 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between md:px-10 lg:px-16">
          <p>© 2026 Selva. Designed & built with care.</p>
          <a href="#home" className="transition hover:text-white">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
