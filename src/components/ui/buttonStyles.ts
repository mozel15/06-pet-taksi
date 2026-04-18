export type ButtonVariant = "whatsapp" | "primary" | "outline" | "ghost";

const variants: Record<ButtonVariant, string> = {
  whatsapp:
    "bg-[#25D366] text-white shadow-lg shadow-emerald-950/20 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]",
  primary:
    "bg-brand-400 text-cab-950 shadow-soft hover:bg-brand-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400",
  outline:
    "border border-cab-600 bg-transparent text-cab-100 hover:border-brand-400 hover:text-brand-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400",
  ghost:
    "text-cab-200 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400",
};

const base =
  "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition disabled:pointer-events-none disabled:opacity-50";

export function buttonClass(variant: ButtonVariant = "primary", extra = "") {
  return `${base} ${variants[variant]} ${extra}`.trim();
}
