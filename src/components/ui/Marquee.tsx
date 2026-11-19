export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden border-y border-line bg-ink/60 py-6 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
      aria-label="Technologies we work with"
    >
      {/* Moves right to left: translateX goes from 0 to -50% */}
      <div className="marquee-track flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center whitespace-nowrap font-display text-xl font-medium text-mist/80 sm:text-2xl"
          >
            <span className="px-8">{item}</span>
            <span aria-hidden="true" className="text-tritium">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
