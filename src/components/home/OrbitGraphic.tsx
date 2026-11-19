"use client";

import { motion } from "framer-motion";

const orbits = [
  { angle: 0, duration: "9s", color: "#39ff9c" },
  { angle: 60, duration: "12s", color: "#22e5ff" },
  { angle: 120, duration: "15s", color: "#a3ff6b" },
];

// An ellipse path (rx 200, ry 76) centred on 250,250 that electrons travel along.
const ELLIPSE_PATH = "M 50 250 a 200 76 0 1 0 400 0 a 200 76 0 1 0 -400 0";

const chips = [
  { label: "Next.js", className: "left-[4%] top-[18%]", delay: 0 },
  { label: "AI", className: "right-[6%] top-[30%]", delay: 0.8 },
  { label: "Cloud", className: "bottom-[16%] left-[12%]", delay: 1.6 },
  { label: "Mobile", className: "bottom-[24%] right-[4%]", delay: 2.2 },
];

/** Animated atom: the visual metaphor behind the Tritium name. */
export default function OrbitGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <svg viewBox="0 0 500 500" className="size-full" role="img" aria-label="Animated atom illustration">
        <defs>
          <radialGradient id="orb-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#39ff9c" />
            <stop offset="100%" stopColor="#22e5ff" stopOpacity="0" />
          </radialGradient>
          <filter id="orb-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* soft halo */}
        <circle cx="250" cy="250" r="110" fill="url(#orb-core)" opacity="0.35" filter="url(#orb-blur)" />

        {orbits.map((orbit) => (
          <g key={orbit.angle} transform={`rotate(${orbit.angle} 250 250)`}>
            <ellipse
              className="orbit-ring"
              cx="250"
              cy="250"
              rx="200"
              ry="76"
              fill="none"
              stroke={orbit.color}
              strokeOpacity="0.45"
              strokeWidth="1.2"
            />
            <circle r="7" fill={orbit.color} filter="url(#orb-blur)" opacity="0.9">
              <animateMotion dur={orbit.duration} repeatCount="indefinite" path={ELLIPSE_PATH} />
            </circle>
            <circle r="3.5" fill="#ffffff">
              <animateMotion dur={orbit.duration} repeatCount="indefinite" path={ELLIPSE_PATH} />
            </circle>
          </g>
        ))}

        {/* nucleus */}
        <circle cx="250" cy="250" r="26" fill="url(#orb-core)">
          <animate attributeName="r" values="24;30;24" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="250" r="9" fill="#ffffff" />
      </svg>

      {chips.map((chip) => (
        <motion.span
          key={chip.label}
          className={`absolute rounded-full border border-line bg-panel/80 px-4 py-1.5 font-mono text-xs tracking-wider text-bone shadow-[0_0_24px_-8px_rgba(57,255,156,0.6)] backdrop-blur ${chip.className}`}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: chip.delay }}
        >
          {chip.label}
        </motion.span>
      ))}
    </div>
  );
}
