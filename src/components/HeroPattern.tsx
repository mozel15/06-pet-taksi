export function HeroPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(250,204,21,0.2),transparent_40%),radial-gradient(circle_at_75%_80%,rgba(250,204,21,0.15),transparent_35%)]" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #0a0a0a 0px, #0a0a0a 12px, #facc15 12px, #facc15 24px)",
        }}
      />
      <div className="absolute -top-24 -right-16 h-80 w-80 rounded-full bg-brand-400/25 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl" />
    </div>
  );
}
