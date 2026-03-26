const badges = [
  {
    id: "locally-owned",
    label: "Locally Owned",
    description: "Based in Crettyard, Co. Laois",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "no-jargon",
    label: "No Jargon",
    description: "Plain English, always",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9" y1="10" x2="15" y2="10" />
      </svg>
    ),
  },
  {
    id: "practical-support",
    label: "Practical Support",
    description: "Solutions that actually work",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    id: "small-business-focused",
    label: "Small Business Focused",
    description: "Built for businesses like yours",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

export function TrustBadges() {
  return (
    <ul
      className="flex flex-wrap gap-3 list-none m-0 p-0"
      aria-label="Why choose Crettyard Digital"
    >
      {badges.map((badge) => (
        <li
          key={badge.id}
          className="flex items-center gap-2 bg-white/80 border border-border rounded-xl px-4 py-2.5 shadow-sm"
          data-testid={`badge-trust-${badge.id}`}
        >
          <span className="text-accent shrink-0">{badge.icon}</span>
          <div>
            <p className="font-headline font-bold text-primary text-[13px] leading-tight">{badge.label}</p>
            <p className="text-foreground/60 text-[11px] font-sans leading-tight">{badge.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
