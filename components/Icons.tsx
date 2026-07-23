/** Small, consistent inline icons — avoids emoji glyph rendering across OSes. */

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M5 11L11 5" />
      <path d="M5.5 5H11v5.5" />
    </svg>
  );
}

export function ArrowDown({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M8 3v10" />
      <path d="M3.5 8.5L8 13l4.5-4.5" />
    </svg>
  );
}
