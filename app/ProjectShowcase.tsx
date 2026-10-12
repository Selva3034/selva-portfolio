"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Code2,
  Hand,
  LayoutDashboard,
  MousePointer2,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "FocusSpace",
    description:
      "A digital workspace with focus timers, tasks, goals and productivity analytics.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    type: "PRODUCTIVITY WORKSPACE",
    theme: "focus",
  },
  {
    number: "02",
    name: "AI Prompt Cleaner",
    description:
      "Transforms rough prompts into clear, structured instructions for better AI responses.",
    technologies: ["JavaScript", "Python", "Flask"],
    type: "AI TOOL · WEB APP",
    theme: "prompt",
  },
  {
    number: "03",
    name: "Smart Energy Meter",
    description:
      "An energy dashboard with consumption prediction and unusual usage detection.",
    technologies: ["Python", "Machine Learning", "Streamlit"],
    type: "DATA SCIENCE · PYTHON",
    theme: "energy",
  },
  {
    number: "04",
    name: "AI Virtual Mouse",
    description:
      "Control mouse movements using hand gestures captured through a webcam.",
    technologies: ["Python", "OpenCV", "MediaPipe"],
    type: "COMPUTER VISION · PYTHON",
    theme: "mouse",
  },
];

function FocusPreview() {
  return (
    <div className="preview-window focus-preview">
      <aside className="preview-sidebar">
        <div className="preview-brand">
          <Sparkles size={15} /> FocusSpace
        </div>
        {["Home", "Focus Timer", "Tasks", "Projects", "Notes", "Goals", "Analytics"].map(
          (item, index) => (
            <div className={`preview-nav ${index === 0 ? "active" : ""}`} key={item}>
              <span>{["⌂", "◷", "✓", "▦", "▤", "◎", "⌁"][index]}</span>
              {item}
            </div>
          )
        )}
      </aside>

      <div className="preview-main">
        <div className="preview-topline">
          <div>
            <span className="preview-muted">Good morning, Selva</span>
            <h3>Stay focused today.</h3>
            <p className="preview-muted">Small steps make big progress.</p>
          </div>
          <span className="preview-date">MON · 12 OCT</span>
        </div>

        <div className="focus-dashboard">
          <div className="mini-panel timer-panel">
            <span className="mini-label">POMODORO TIMER</span>
            <div className="timer-ring">
              <strong>25:00</strong>
              <span>Focus session</span>
            </div>
            <div className="timer-controls">
              <span>↺</span>
              <span className="play-control">▶</span>
              <span>⚙</span>
            </div>
          </div>

          <div className="focus-right">
            <div className="mini-panel task-panel">
              <div className="mini-panel-title">Today's tasks</div>
              <div className="task-progress"><span /></div>
              {["Complete project UI", "Practice JavaScript", "Review documentation"].map(
                (task, index) => (
                  <div className="mini-task" key={task}>
                    <CheckCircle2
                      size={13}
                      className={index === 0 ? "success-icon" : ""}
                    />
                    {task}
                  </div>
                )
              )}
            </div>

            <div className="mini-panel streak-panel">
              <div>
                <span className="mini-label">FOCUS STREAK</span>
                <strong>12 days</strong>
              </div>
              <div className="mini-bars">
                {[25, 40, 30, 55, 43, 70, 52, 84, 62, 100].map((height, i) => (
                  <span key={i} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PromptPreview() {
  return (
    <div className="preview-window prompt-preview">
      <aside className="preview-sidebar">
        <div className="preview-brand">
          <Sparkles size={15} /> Prompt Cleaner
        </div>
        {["Home", "Clean Prompt", "History", "Examples", "Settings"].map(
          (item, index) => (
            <div className={`preview-nav ${index === 0 ? "active" : ""}`} key={item}>
              <span>{["⌂", "✦", "◷", "◇", "⚙"][index]}</span>
              {item}
            </div>
          )
        )}
      </aside>

      <div className="preview-main prompt-main">
        <span className="preview-muted">YOUR AI WORKSPACE</span>
        <h3>
          Transform your ideas
          <br />
          <span className="gradient-text">into better prompts.</span>
        </h3>
        <p className="preview-muted">Clear instructions. Better results.</p>

        <div className="prompt-editor-grid">
          <div className="prompt-editor">
            <strong>Your prompt</strong>
            <div className="fake-textarea">
              Build a modern responsive website with a clean interface...
            </div>
            <span className="editor-option">General purpose⌄</span>
          </div>
          <div className="prompt-editor">
            <strong>Cleaned prompt</strong>
            <div className="fake-textarea cleaned-text">
              Define the target audience, visual style, core features and
              responsive requirements...
            </div>
            <span className="editor-option purple-option">
              <Sparkles size={11} /> Optimized
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EnergyPreview() {
  return (
    <div className="preview-window energy-preview">
      <aside className="preview-sidebar">
        <div className="preview-brand">
          <Zap size={15} /> Energy Meter
        </div>
        {["Dashboard", "Prediction", "Anomalies", "Data Analysis", "Reports"].map(
          (item, index) => (
            <div className={`preview-nav ${index === 0 ? "active" : ""}`} key={item}>
              <span>{["▦", "⌁", "△", "▥", "▤"][index]}</span>
              {item}
            </div>
          )
        )}
      </aside>

      <div className="preview-main energy-main">
        <div className="preview-topline">
          <div>
            <span className="preview-muted">ENERGY ANALYTICS</span>
            <h3>Consumption overview</h3>
          </div>
          <span className="preview-date">2026⌄</span>
        </div>

        <div className="energy-stats">
          <div className="mini-panel">
            <span className="mini-label">TOTAL USAGE</span>
            <strong>342.8 <small>kWh</small></strong>
            <span className="positive"><TrendingUp size={11} /> 12%</span>
          </div>
          <div className="mini-panel">
            <span className="mini-label">PREDICTED</span>
            <strong>298.4 <small>kWh</small></strong>
            <span className="blue-text">Forecast</span>
          </div>
          <div className="mini-panel">
            <span className="mini-label">ANOMALIES</span>
            <strong className="red-text">05</strong>
            <span className="preview-muted">Detected</span>
          </div>
        </div>

        <div className="mini-panel chart-panel">
          <div className="mini-panel-title">Energy consumption trend</div>
          <div className="chart-graph">
            <div className="chart-grid-lines" />
            <svg viewBox="0 0 520 150" preserveAspectRatio="none" aria-label="Illustrative energy consumption chart">
              <defs>
                <linearGradient id="energyFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity=".4" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 115 L35 100 L60 112 L90 75 L120 89 L150 57 L180 81 L210 47 L245 64 L280 35 L310 70 L345 44 L380 57 L410 25 L450 43 L480 15 L520 30 L520 150 L0 150 Z"
                fill="url(#energyFill)"
              />
              <path
                d="M0 115 L35 100 L60 112 L90 75 L120 89 L150 57 L180 81 L210 47 L245 64 L280 35 L310 70 L345 44 L380 57 L410 25 L450 43 L480 15 L520 30"
                fill="none"
                stroke="#9b6cff"
                strokeWidth="3"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M0 126 L35 118 L60 121 L90 103 L120 111 L150 92 L180 103 L210 79 L245 88 L280 70 L310 93 L345 78 L380 90 L410 64 L450 79 L480 58 L520 65"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
          <div className="chart-legend">
            <span><i className="legend-purple" /> Actual usage</span>
            <span><i className="legend-cyan" /> Predicted usage</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MousePreview() {
  return (
    <div className="preview-window mouse-preview">
      <aside className="preview-sidebar">
        <div className="preview-brand">
          <MousePointer2 size={15} /> Virtual Mouse
        </div>
        {["Home", "Gestures", "Settings", "About"].map((item, index) => (
          <div className={`preview-nav ${index === 0 ? "active" : ""}`} key={item}>
            <span>{["⌂", "✋", "⚙", "ⓘ"][index]}</span>
            {item}
          </div>
        ))}
        <div className="camera-status"><span /> CAMERA READY</div>
      </aside>

      <div className="preview-main mouse-main">
        <div className="preview-topline">
          <div>
            <span className="preview-muted">GESTURE CONTROL</span>
            <h3>Hands-free navigation</h3>
          </div>
          <span className="live-label"><span /> LIVE</span>
        </div>

        <div className="mouse-dashboard">
          <div className="hand-camera">
            <div className="camera-corner corner-tl" />
            <div className="camera-corner corner-tr" />
            <div className="camera-corner corner-bl" />
            <div className="camera-corner corner-br" />
            <Hand size={95} strokeWidth={1.1} />
            <span className="hand-detected"><CheckCircle2 size={12} /> Hand detected</span>
          </div>

          <div className="gesture-panel mini-panel">
            <div className="mini-panel-title">Gesture controls</div>
            {[
              ["✋", "Move cursor"],
              ["◉", "Left click"],
              ["✋", "Right click"],
              ["↕", "Scroll"],
            ].map(([symbol, label]) => (
              <div className="gesture-row" key={label}>
                <span>{symbol}</span>{label}
              </div>
            ))}
          </div>
        </div>

        <div className="mouse-stats">
          <div className="mini-panel"><Code2 size={15} /><span>FPS <strong>30</strong></span></div>
          <div className="mini-panel"><Hand size={15} /><span>Tracking <strong>Active</strong></span></div>
        </div>
      </div>
    </div>
  );
}

function ProjectPreview({ theme }: { theme: string }) {
  switch (theme) {
    case "focus":
      return <FocusPreview />;
    case "prompt":
      return <PromptPreview />;
    case "energy":
      return <EnergyPreview />;
    default:
      return <MousePreview />;
  }
}

export default function ProjectShowcase() {
  return (
    <section id="projects" className="showcase-section">
      <div className="showcase-heading">
        <div>
          <div className="section-eyebrow"><span /> SELECTED WORK</div>
          <h2>Things I’ve built<span className="heading-period">.</span></h2>
        </div>
        <p>
          A selection of projects exploring web development, intelligent tools,
          and practical problem-solving.
        </p>
      </div>

      <div className="showcase-grid">
        {projects.map((project) => (
          <article className={`showcase-card ${project.theme}`} key={project.number}>
            <div className="showcase-preview">
              <ProjectPreview theme={project.theme} />
              <span className="project-number">PROJECT {project.number}</span>
              <a
                className="project-external"
                href={
                  project.theme === "focus"
                    ? "https://github.com/Selva3034"
                    : "https://github.com/Selva3034"
                }
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.name} links`}
              >
                <ArrowUpRight size={19} />
              </a>
            </div>

            <div className="showcase-card-content">
              <div className="project-category">{project.type}</div>
              <div className="project-title-row">
                <h3>{project.name}</h3>
                <ArrowUpRight className="project-title-arrow" size={17} />
              </div>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
