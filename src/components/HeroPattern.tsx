export function HeroPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Hafif damalı taksi deseni */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #0a0a0a 0px,
            #0a0a0a 14px,
            #facc15 14px,
            #facc15 28px
          )`,
        }}
      />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-400/35 blur-3xl" />
      <div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-cab-900/10 blur-3xl" />
    </div>
  );
}
