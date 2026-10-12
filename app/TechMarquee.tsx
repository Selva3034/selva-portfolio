"use client";

import "./tech-marquee.css";

const technologies = [
  { name: "JavaScript", mark: "JS", tone: "yellow" },
  { name: "TypeScript", mark: "TS", tone: "blue" },
  { name: "React", mark: "R", tone: "cyan" },
  { name: "Next.js", mark: "N", tone: "white" },
  { name: "Python", mark: "Py", tone: "yellow" },
  { name: "Tailwind CSS", mark: "TW", tone: "cyan" },
  { name: "Three.js", mark: "3D", tone: "white" },
  { name: "GSAP", mark: "G", tone: "green" },
  { name: "Flask", mark: "F", tone: "white" },
  { name: "OpenCV", mark: "CV", tone: "green" },
  { name: "MediaPipe", mark: "MP", tone: "blue" },
  { name: "Scikit-learn", mark: "ML", tone: "orange" },
  { name: "Git & GitHub", mark: "GH", tone: "white" },
];

function LogoRow({ reverse = false }: { reverse?: boolean }) {
  // Repeating the same list creates a seamless loop without a JS animation timer.
  const items = [...technologies, ...technologies];

  return (
    <div
      className={`tech-marquee__track${reverse ? " tech-marquee__track--reverse" : ""}`}
      aria-hidden="true"
    >
      {items.map((tech, index) => (
        <div className="tech-marquee__item" key={`${tech.name}-${index}`}>
          <span className={`tech-marquee__mark tech-marquee__mark--${tech.tone}`}>
            {tech.mark}
          </span>
          <span>{tech.name}</span>
          <span className="tech-marquee__separator" aria-hidden="true">✳</span>
        </div>
      ))}
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="tech-marquee" aria-label="Technologies I work with">
      <div className="tech-marquee__heading">
        <span className="tech-marquee__eyebrow">
          <span className="tech-marquee__eyebrow-line" />
          THE TOOLS BEHIND THE WORK
        </span>
        <p>Curious by nature. Always building.</p>
      </div>

      <div className="tech-marquee__viewport">
        <LogoRow />
        <LogoRow reverse />
      </div>
      <p className="tech-marquee__note">
        From polished interfaces to practical Python applications.
      </p>
    </section>
  );
}
