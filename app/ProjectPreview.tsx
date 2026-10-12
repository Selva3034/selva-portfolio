
type ProjectPreviewProps = {
  slug: string;
};

function WindowDots() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-2 w-2 rounded-full bg-rose-400" />
      <span className="h-2 w-2 rounded-full bg-amber-300" />
      <span className="h-2 w-2 rounded-full bg-emerald-400" />
    </div>
  );
}

function FocusSpacePreview() {
  return (
    <div className="preview-app preview-focus">
      <div className="preview-topbar">
        <WindowDots />
        <span>FOCUSSPACE</span>
        <span className="preview-avatar">S</span>
      </div>

      <div className="preview-layout">
        <aside className="preview-sidebar">
          <span className="preview-side-active">Overview</span>
          <span>My tasks</span>
          <span>Projects</span>
          <span>Notes</span>
        </aside>

        <div className="preview-main">
          <p className="preview-eyebrow">MONDAY, 9:41 AM</p>
          <h3>Your focus space.</h3>

          <div className="preview-stats">
            <div>
              <span>Focus time</span>
              <strong>02:45</strong>
            </div>
            <div>
              <span>Tasks done</span>
              <strong>08/12</strong>
            </div>
          </div>

          <div className="preview-task-heading">
            <span>Today&apos;s tasks</span>
            <span>View all ↗</span>
          </div>

          <div className="preview-task">
            <span className="preview-check">✓</span>
            <span>Build portfolio UI</span>
            <span className="preview-tag">Done</span>
          </div>
          <div className="preview-task">
            <span className="preview-empty-check" />
            <span>Review project details</span>
          </div>
          <div className="preview-task">
            <span className="preview-empty-check" />
            <span>Plan next sprint</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PromptCleanerPreview() {
  return (
    <div className="preview-app preview-prompt">
      <div className="preview-topbar">
        <WindowDots />
        <span>PROMPT STUDIO</span>
        <span className="preview-status">● READY</span>
      </div>

      <div className="preview-main">
        <p className="preview-eyebrow">AI WORKSPACE / PROMPT REFINER</p>
        <h3>Make every prompt better.</h3>
        <p className="preview-muted">
          Turn rough ideas into clear instructions.
        </p>

        <div className="preview-editor">
          <div className="preview-editor-label">YOUR ORIGINAL PROMPT</div>
          <p>
            Make me a website for my portfolio with cool animations and
            projects...
          </p>
        </div>

        <div className="preview-transform">↓ REFINED OUTPUT</div>

        <div className="preview-editor preview-editor-result">
          <div className="preview-editor-label">IMPROVED PROMPT</div>
          <p>
            Create a responsive developer portfolio with accessible navigation,
            polished project cards, and smooth animations.
          </p>
        </div>

        <div className="preview-bottom-row">
          <span>Clarity improved</span>
          <strong>+92%</strong>
        </div>
      </div>
    </div>
  );
}

function EnergyMeterPreview() {
  return (
    <div className="preview-app preview-energy">
      <div className="preview-topbar">
        <WindowDots />
        <span>ENERGY INSIGHTS</span>
        <span className="preview-status">● LIVE VIEW</span>
      </div>

      <div className="preview-main">
        <p className="preview-eyebrow">HOUSEHOLD ANALYTICS</p>
        <h3>Power consumption</h3>

        <div className="preview-energy-stats">
          <div>
            <span>Today's usage</span>
            <strong>18.6 <small>kWh</small></strong>
            <em>↓ 8.4% vs yesterday</em>
          </div>
          <div className="preview-energy-badge">
            <span>Predicted</span>
            <strong>22.1 kWh</strong>
          </div>
        </div>

        <div className="preview-chart">
          <div className="preview-chart-label">
            <span>Usage overview</span>
            <span>24 hours</span>
          </div>
          <div className="preview-bars">
            {[30, 42, 35, 58, 45, 72, 53, 83, 61, 45, 68, 92, 57, 72, 48, 65].map(
              (height, index) => (
                <span
                  key={index}
                  style={{ height: `${height}%` }}
                  className={index === 11 ? "preview-bar-highlight" : ""}
                />
              )
            )}
          </div>
          <div className="preview-chart-axis">
            <span>12 AM</span>
            <span>6 AM</span>
            <span>12 PM</span>
            <span>6 PM</span>
          </div>
        </div>

        <div className="preview-alert">
          <span>!</span>
          <div>
            <strong>Usage anomaly detected</strong>
            <p>Unusual consumption flagged for review</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VirtualMousePreview() {
  return (
    <div className="preview-app preview-mouse">
      <div className="preview-topbar">
        <WindowDots />
        <span>GESTURE CONTROL</span>
        <span className="preview-status">● CAMERA ON</span>
      </div>

      <div className="preview-main">
        <p className="preview-eyebrow">AI VIRTUAL MOUSE</p>
        <h3>Hands-free control.</h3>

        <div className="preview-camera">
          <div className="preview-camera-grid" />
          <div className="preview-hand">
            <span className="preview-finger preview-finger-one" />
            <span className="preview-finger preview-finger-two" />
            <span className="preview-finger preview-finger-three" />
            <span className="preview-finger preview-finger-four" />
            <span className="preview-palm" />
          </div>
          <span className="preview-landmark landmark-one" />
          <span className="preview-landmark landmark-two" />
          <span className="preview-landmark landmark-three" />
          <span className="preview-camera-label">HAND TRACKING ACTIVE</span>
          <span className="preview-cursor">↖</span>
        </div>

        <div className="preview-gesture-stats">
          <div>
            <span>Gesture</span>
            <strong>Index finger</strong>
          </div>
          <div>
            <span>Tracking</span>
            <strong className="preview-tracking">98.4%</strong>
          </div>
          <div>
            <span>Mode</span>
            <strong>Move cursor</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectPreview({ slug }: ProjectPreviewProps) {
  switch (slug) {
    case "focusspace":
      return <FocusSpacePreview />;

    case "ai-prompt-cleaner":
      return <PromptCleanerPreview />;

    case "smart-energy-meter":
      return <EnergyMeterPreview />;

    case "ai-virtual-mouse":
      return <VirtualMousePreview />;

    default:
      return (
        <div className="preview-app preview-fallback">
          <WindowDots />
          <p>PROJECT PREVIEW</p>
        </div>
      );
  }
}
