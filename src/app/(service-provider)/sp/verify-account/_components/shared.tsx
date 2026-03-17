export function CrownSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 60" className={className} fill="none">
      <path d="M40 8 L10 32 L18 48 H62 L70 32 Z" fill="#181D27" stroke="#181D27" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="40" cy="6" r="5" fill="#181D27" />
      <circle cx="8" cy="32" r="5" fill="#181D27" />
      <circle cx="72" cy="32" r="5" fill="#181D27" />
      <rect x="14" y="48" width="52" height="7" rx="3.5" fill="#181D27" />
    </svg>
  );
}

export function BrandLabel() {
  return (
    <p className="font-work-sans font-bold text-lg text-[#181D27] mt-2 mb-6">
      AristoAccess<span className="text-[#16A34A]">+</span>
    </p>
  );
}
