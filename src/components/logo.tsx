export function Logo({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={`shrink-0 fill-brand ${className}`}
    >
      <rect x="1" y="2" width="3.5" height="12" rx="0.5" />
      <rect x="6.25" y="6" width="3.5" height="8" rx="0.5" />
      <rect x="11.5" y="5" width="3.5" height="3.5" rx="0.5" />
      <rect x="11.5" y="10.5" width="3.5" height="3.5" rx="0.5" />
    </svg>
  );
}
