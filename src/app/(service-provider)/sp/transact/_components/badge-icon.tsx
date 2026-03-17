export function BadgeIcon({ type }: { type: "gold" | "warning" }) {
  if (type === "gold") {
    return (
      <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center">
        <svg viewBox="0 0 12 12" className="w-3 h-3 fill-white">
          <path d="M6 1l1.5 3h3l-2.4 1.8.9 3L6 7.2 3 8.8l.9-3L1.5 4h3z" />
        </svg>
      </span>
    );
  }
  return (
    <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-red-400 border-2 border-white flex items-center justify-center">
      <svg viewBox="0 0 12 12" className="w-3 h-3 fill-white">
        <path d="M6 1L1 10h10L6 1zm0 2.5l3.2 5.5H2.8L6 3.5zM5.5 6h1v2h-1V6zm0 2.5h1v1h-1v-1z" />
      </svg>
    </span>
  );
}
