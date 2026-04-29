// Sri Vijetha Logistics LLP — Logo Options
// Muted green palette — professional & modern

const G = {
  dark:   '#1e4433',
  mid:    '#2e6347',
  base:   '#3d7a58',
  muted:  '#5a9470',
  soft:   '#82b594',
  pale:   '#b8d9c5',
  white:  '#ffffff',
};

const TEXT = { dark: '#1a3328', mid: '#2e6347', sub: '#4a7a60' };

// ── Shared: company name block ────────────────────────────────
function NameBlock({ size, theme }) {
  const dark = theme === 'dark';
  return (
    <div style={{ lineHeight: 1 }}>
      <div style={{ fontSize: 18 * size, fontWeight: 700, color: dark ? G.white : TEXT.dark, letterSpacing: '-0.4px', fontFamily: 'IBM Plex Sans, sans-serif' }}>
        Sri Vijetha
      </div>
      <div style={{ fontSize: 10.5 * size, fontWeight: 600, color: dark ? G.soft : TEXT.sub, letterSpacing: 2, textTransform: 'uppercase', marginTop: 3 * size }}>
        Logistics <span style={{ opacity: 0.75 }}>LLP</span>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// OPTION 1 — INITIALS "SV"
// ═══════════════════════════════════════════════════════════════

// 1A: SV + Angular Diamond
export function Logo1A({ size = 1, theme = 'light' }) {
  const s = 52 * size;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 * size }}>
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <rect x="14" y="14" width="72" height="72" rx="3" transform="rotate(45 50 50)" fill={G.dark} />
        <rect x="18" y="18" width="64" height="64" rx="2" transform="rotate(45 50 50)" fill={G.mid} />
        <text x="50" y="58" textAnchor="middle" fill={G.white} fontSize="30" fontWeight="800" fontFamily="IBM Plex Sans, sans-serif" letterSpacing="-1">SV</text>
      </svg>
      <NameBlock size={size} theme={theme} />
    </div>
  );
}

// 1B: SV + Rounded Circle
export function Logo1B({ size = 1, theme = 'light' }) {
  const s = 52 * size;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 * size }}>
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <circle cx="50" cy="50" r="48" fill={G.dark} />
        <circle cx="50" cy="50" r="42" fill={G.mid} />
        <text x="50" y="59" textAnchor="middle" fill={G.white} fontSize="30" fontWeight="800" fontFamily="IBM Plex Sans, sans-serif" letterSpacing="-1">SV</text>
      </svg>
      <NameBlock size={size} theme={theme} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// OPTION 2 — MONOGRAM "SVL"
// ═══════════════════════════════════════════════════════════════

// 2A: SVL + Angular Hexagon
export function Logo2A({ size = 1, theme = 'light' }) {
  const s = 54 * size;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 * size }}>
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <polygon points="50,3 94,26.5 94,73.5 50,97 6,73.5 6,26.5" fill={G.dark} />
        <polygon points="50,9 88,29.5 88,70.5 50,91 12,70.5 12,29.5" fill={G.mid} />
        <text x="50" y="57" textAnchor="middle" fill={G.white} fontSize="24" fontWeight="800" fontFamily="IBM Plex Sans, sans-serif" letterSpacing="1">SVL</text>
        <line x1="28" y1="65" x2="72" y2="65" stroke={G.soft} strokeWidth="1.5" opacity="0.5" />
      </svg>
      <NameBlock size={size} theme={theme} />
    </div>
  );
}

// 2B: SVL + Rounded Square (app-icon style)
export function Logo2B({ size = 1, theme = 'light' }) {
  const s = 52 * size;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 * size }}>
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <rect x="2" y="2" width="96" height="96" rx="22" fill={G.dark} />
        <rect x="6" y="6" width="88" height="88" rx="19" fill={G.mid} />
        {/* Subtle inner highlight */}
        <rect x="6" y="6" width="88" height="40" rx="19" fill={G.white} opacity="0.04" />
        <text x="50" y="56" textAnchor="middle" fill={G.white} fontSize="24" fontWeight="800" fontFamily="IBM Plex Sans, sans-serif" letterSpacing="1">SVL</text>
        <rect x="28" y="63" width="44" height="2" rx="1" fill={G.soft} opacity="0.5" />
      </svg>
      <NameBlock size={size} theme={theme} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// OPTION 3 — ABSTRACT GEOMETRIC
// ═══════════════════════════════════════════════════════════════

// 3A: Angular — Two Chevrons (forward movement)
export function Logo3A({ size = 1, theme = 'light' }) {
  const s = 60 * size;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 * size }}>
      <svg viewBox="0 0 110 100" width={s} height={s * 100 / 110}>
        {/* Back chevron */}
        <path d="M8,16 L44,50 L8,84 L20,84 L56,50 L20,16 Z" fill={G.muted} />
        {/* Front chevron */}
        <path d="M38,16 L74,50 L38,84 L50,84 L86,50 L50,16 Z" fill={G.dark} />
        {/* Accent line */}
        <path d="M68,24 L98,50 L68,76" fill="none" stroke={G.soft} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      </svg>
      <NameBlock size={size} theme={theme} />
    </div>
  );
}

// 3B: Rounded — Interlocking arcs (flow, connection, trust)
export function Logo3B({ size = 1, theme = 'light' }) {
  const s = 56 * size;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 * size }}>
      <svg viewBox="0 0 100 100" width={s} height={s}>
        {/* Outer ring */}
        <circle cx="50" cy="50" r="48" fill="none" stroke={G.dark} strokeWidth="10" />
        {/* Inner circle filled */}
        <circle cx="50" cy="50" r="32" fill={G.mid} />
        {/* Arc top-right */}
        <path d="M50,2 A48,48 0 0,1 98,50" fill="none" stroke={G.muted} strokeWidth="10" strokeLinecap="round" />
        {/* Small center dot */}
        <circle cx="50" cy="50" r="10" fill={G.dark} />
        <circle cx="50" cy="50" r="5" fill={G.white} opacity="0.6" />
        {/* S-curve inside */}
        <path d="M35,38 Q50,38 50,50 Q50,62 65,62" fill="none" stroke={G.white} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      </svg>
      <NameBlock size={size} theme={theme} />
    </div>
  );
}

export const ALL_LOGOS = [
  { component: Logo1A, label: '1A — Initials "SV" · Angular Diamond', group: 'Option 1 · Initials  "SV"' },
  { component: Logo1B, label: '1B — Initials "SV" · Rounded Circle',  group: 'Option 1 · Initials  "SV"' },
  { component: Logo2A, label: '2A — Monogram "SVL" · Angular Hexagon', group: 'Option 2 · Monogram "SVL"' },
  { component: Logo2B, label: '2B — Monogram "SVL" · Rounded Square',  group: 'Option 2 · Monogram "SVL"' },
  { component: Logo3A, label: '3A — Abstract · Angular Chevrons',       group: 'Option 3 · Abstract Geometric' },
  { component: Logo3B, label: '3B — Abstract · Rounded Arcs',           group: 'Option 3 · Abstract Geometric' },
];

export default function Logo({ design = '1A', size = 1, theme = 'light' }) {
  const map = { '1A': Logo1A, '1B': Logo1B, '2A': Logo2A, '2B': Logo2B, '3A': Logo3A, '3B': Logo3B };
  const Component = map[design] || Logo1A;
  return <Component size={size} theme={theme} />;
}
