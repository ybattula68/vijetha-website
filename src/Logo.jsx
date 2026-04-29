// Sri Vijetha Logistics — 6 Logo Design Options

// ── Logo 1: Circle with Tanker Truck ─────────────────────────
function Logo1({ size = 1, theme = 'light' }) {
  const dark = theme === 'dark';
  const bg = '#2d8a2d'; const ring = '#155215'; const wheel = '#0d4a0d';
  const text = dark ? '#fff' : '#1a4a1a'; const sub = dark ? '#a8e8a8' : '#2d7a2d';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 * size }}>
      <svg viewBox="0 0 100 100" width={56 * size} height={56 * size}>
        <circle cx="50" cy="50" r="49" fill={ring} />
        <circle cx="50" cy="50" r="45" fill={bg} />
        <rect x="12" y="62" width="76" height="3.5" rx="1.8" fill="#fff" opacity="0.9" />
        <rect x="12" y="44" width="22" height="18" rx="4" fill="#fff" />
        <rect x="16" y="47" width="14" height="10" rx="2.5" fill={bg} opacity="0.65" />
        <rect x="12" y="40" width="18" height="6" rx="3" fill="#fff" opacity="0.7" />
        <rect x="34" y="40" width="50" height="22" rx="11" fill="#fff" />
        <rect x="38" y="42" width="38" height="5" rx="2.5" fill="#fff" opacity="0.3" />
        <circle cx="22" cy="68" r="8.5" fill={wheel} /><circle cx="22" cy="68" r="4" fill="#fff" opacity="0.2" />
        <circle cx="58" cy="68" r="8.5" fill={wheel} /><circle cx="58" cy="68" r="4" fill="#fff" opacity="0.2" />
        <circle cx="74" cy="68" r="7" fill={wheel} /><circle cx="74" cy="68" r="3" fill="#fff" opacity="0.2" />
        <path d="M70 40 Q83 26 87 35 Q78 45 70 40 Z" fill="#7dcf7d" />
        <path d="M73 40 Q82 30 85 36 Q78 43 73 40 Z" fill="#4ab84a" opacity="0.7" />
      </svg>
      <div>
        <div style={{ fontSize: 20 * size, fontWeight: 700, color: text, letterSpacing: '-0.5px', lineHeight: 1.1, fontFamily: 'IBM Plex Sans, sans-serif' }}>Sri Vijetha</div>
        <div style={{ fontSize: 11 * size, fontWeight: 600, color: sub, letterSpacing: 2.5, textTransform: 'uppercase' }}>Logistics LLP</div>
      </div>
    </div>
  );
}

// ── Logo 2: Hexagon Shield with SV Monogram ──────────────────
function Logo2({ size = 1, theme = 'light' }) {
  const dark = theme === 'dark';
  const text = dark ? '#fff' : '#1a4a1a'; const sub = dark ? '#a8e8a8' : '#2d7a2d';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 * size }}>
      <svg viewBox="0 0 100 110" width={52 * size} height={58 * size}>
        {/* Hexagon */}
        <polygon points="50,2 93,26 93,74 50,98 7,74 7,26" fill="#155215" />
        <polygon points="50,8 87,29 87,71 50,92 13,71 13,29" fill="#2d8a2d" />
        {/* Inner ring */}
        <polygon points="50,14 81,32 81,68 50,86 19,68 19,32" fill="none" stroke="#7dcf7d" strokeWidth="1.5" opacity="0.4" />
        {/* SV text */}
        <text x="50" y="60" textAnchor="middle" fill="white" fontSize="32" fontWeight="700" fontFamily="Georgia, serif">SV</text>
        {/* Bottom tag */}
        <rect x="20" y="94" width="60" height="14" rx="7" fill="#7dcf7d" />
        <text x="50" y="104" textAnchor="middle" fill="#0d3d0d" fontSize="7.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">LOGISTICS LLP</text>
      </svg>
      <div>
        <div style={{ fontSize: 20 * size, fontWeight: 700, color: text, letterSpacing: '-0.5px', lineHeight: 1.1, fontFamily: 'IBM Plex Sans, sans-serif' }}>Sri Vijetha</div>
        <div style={{ fontSize: 11 * size, fontWeight: 600, color: sub, letterSpacing: 2.5, textTransform: 'uppercase' }}>Logistics LLP</div>
      </div>
    </div>
  );
}

// ── Logo 3: Leaf with Truck Silhouette ───────────────────────
function Logo3({ size = 1, theme = 'light' }) {
  const dark = theme === 'dark';
  const text = dark ? '#fff' : '#1a4a1a'; const sub = dark ? '#a8e8a8' : '#2d7a2d';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 * size }}>
      <svg viewBox="0 0 100 100" width={56 * size} height={56 * size}>
        {/* Leaf shape */}
        <path d="M50,4 C78,4 94,22 94,50 C94,78 78,96 50,96 C22,96 6,78 6,50 C6,22 22,4 50,4 Z" fill="#3dac3d" />
        <path d="M50,4 C78,4 94,22 94,50" fill="none" stroke="#7dcf7d" strokeWidth="2" opacity="0.5" />
        {/* Leaf vein */}
        <line x1="50" y1="10" x2="50" y2="90" stroke="#7dcf7d" strokeWidth="1.5" opacity="0.4" />
        <line x1="50" y1="30" x2="25" y2="55" stroke="#7dcf7d" strokeWidth="1" opacity="0.3" />
        <line x1="50" y1="30" x2="75" y2="55" stroke="#7dcf7d" strokeWidth="1" opacity="0.3" />
        <line x1="50" y1="50" x2="28" y2="68" stroke="#7dcf7d" strokeWidth="1" opacity="0.3" />
        <line x1="50" y1="50" x2="72" y2="68" stroke="#7dcf7d" strokeWidth="1" opacity="0.3" />
        {/* Truck silhouette (white) */}
        <rect x="22" y="52" width="56" height="3" rx="1.5" fill="white" opacity="0.9" />
        <rect x="22" y="40" width="16" height="12" rx="3" fill="white" opacity="0.9" />
        <rect x="38" y="38" width="38" height="14" rx="7" fill="white" opacity="0.9" />
        <circle cx="30" cy="57" r="6" fill="#155215" /><circle cx="30" cy="57" r="3" fill="white" opacity="0.3" />
        <circle cx="58" cy="57" r="6" fill="#155215" /><circle cx="58" cy="57" r="3" fill="white" opacity="0.3" />
        <circle cx="70" cy="57" r="5" fill="#155215" /><circle cx="70" cy="57" r="2.5" fill="white" opacity="0.3" />
      </svg>
      <div>
        <div style={{ fontSize: 20 * size, fontWeight: 700, color: text, letterSpacing: '-0.5px', lineHeight: 1.1, fontFamily: 'IBM Plex Sans, sans-serif' }}>Sri Vijetha</div>
        <div style={{ fontSize: 11 * size, fontWeight: 600, color: sub, letterSpacing: 2.5, textTransform: 'uppercase' }}>Logistics LLP</div>
      </div>
    </div>
  );
}

// ── Logo 4: Ethanol Flame / Drop ─────────────────────────────
function Logo4({ size = 1, theme = 'light' }) {
  const dark = theme === 'dark';
  const text = dark ? '#fff' : '#1a4a1a'; const sub = dark ? '#a8e8a8' : '#2d7a2d';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 * size }}>
      <svg viewBox="0 0 100 100" width={52 * size} height={52 * size}>
        {/* Flame / ethanol drop shape */}
        <path d="M50,5 C65,18 82,35 82,58 C82,76 68,92 50,92 C32,92 18,76 18,58 C18,35 35,18 50,5 Z" fill="#155215" />
        <path d="M50,10 C63,22 78,37 78,58 C78,74 65,88 50,88 C35,88 22,74 22,58 C22,37 37,22 50,10 Z" fill="#2d8a2d" />
        {/* Inner light */}
        <path d="M50,18 C60,28 70,40 70,56 C70,68 61,78 50,78 C39,78 30,68 30,56 C30,40 40,28 50,18 Z" fill="#3dac3d" opacity="0.5" />
        {/* SV monogram */}
        <text x="50" y="65" textAnchor="middle" fill="white" fontSize="26" fontWeight="700" fontFamily="Georgia, serif">SV</text>
        {/* Shine */}
        <ellipse cx="37" cy="32" rx="5" ry="8" fill="white" opacity="0.2" transform="rotate(-20 37 32)" />
      </svg>
      <div>
        <div style={{ fontSize: 20 * size, fontWeight: 700, color: text, letterSpacing: '-0.5px', lineHeight: 1.1, fontFamily: 'IBM Plex Sans, sans-serif' }}>Sri Vijetha</div>
        <div style={{ fontSize: 11 * size, fontWeight: 600, color: sub, letterSpacing: 2.5, textTransform: 'uppercase' }}>Logistics LLP</div>
      </div>
    </div>
  );
}

// ── Logo 5: Bold Wordmark with Underline ─────────────────────
function Logo5({ size = 1, theme = 'light' }) {
  const dark = theme === 'dark';
  const text = dark ? '#fff' : '#1a4a1a';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 * size }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 * size }}>
        {/* Small leaf icon */}
        <svg viewBox="0 0 30 30" width={28 * size} height={28 * size}>
          <path d="M15,2 Q28,2 28,15 Q28,28 15,28 Q2,15 15,2 Z" fill="#2d8a2d" />
          <line x1="15" y1="4" x2="15" y2="26" stroke="#7dcf7d" strokeWidth="1.2" opacity="0.6" />
          <line x1="15" y1="12" x2="6" y2="20" stroke="#7dcf7d" strokeWidth="0.8" opacity="0.5" />
          <line x1="15" y1="12" x2="24" y2="20" stroke="#7dcf7d" strokeWidth="0.8" opacity="0.5" />
        </svg>
        <div style={{ fontSize: 24 * size, fontWeight: 700, color: text, letterSpacing: '-1px', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1 }}>
          Sri Vijetha
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 * size, paddingLeft: (28 + 10) * size }}>
        <div style={{ width: 32 * size, height: 2.5, background: '#2d8a2d', borderRadius: 2 }} />
        <div style={{ fontSize: 13 * size, fontWeight: 700, color: '#2d8a2d', letterSpacing: 3, textTransform: 'uppercase', fontFamily: 'IBM Plex Sans, sans-serif' }}>
          Logistics LLP
        </div>
        <div style={{ flex: 1, height: 2.5, background: '#2d8a2d', borderRadius: 2 }} />
      </div>
    </div>
  );
}

// ── Logo 6: Route / Road Arrow ───────────────────────────────
function Logo6({ size = 1, theme = 'light' }) {
  const dark = theme === 'dark';
  const text = dark ? '#fff' : '#1a4a1a'; const sub = dark ? '#a8e8a8' : '#2d7a2d';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 * size }}>
      <svg viewBox="0 0 110 100" width={60 * size} height={54 * size}>
        {/* Arrow / road shape */}
        <path d="M5,30 L70,30 L70,15 L105,50 L70,85 L70,70 L5,70 Z" fill="#155215" />
        <path d="M5,36 L64,36 L64,22 L95,50 L64,78 L64,64 L5,64 Z" fill="#2d8a2d" />
        {/* Road lines inside arrow */}
        <line x1="20" y1="50" x2="55" y2="50" stroke="#7dcf7d" strokeWidth="2.5" strokeDasharray="8,5" opacity="0.7" />
        {/* Small truck on road */}
        <rect x="25" y="42" width="12" height="7" rx="2" fill="white" opacity="0.9" />
        <rect x="37" y="43" width="14" height="6" rx="3" fill="white" opacity="0.9" />
        <circle cx="29" cy="50" r="3.5" fill="#0d4a0d" />
        <circle cx="46" cy="50" r="3.5" fill="#0d4a0d" />
      </svg>
      <div>
        <div style={{ fontSize: 20 * size, fontWeight: 700, color: text, letterSpacing: '-0.5px', lineHeight: 1.1, fontFamily: 'IBM Plex Sans, sans-serif' }}>Sri Vijetha</div>
        <div style={{ fontSize: 11 * size, fontWeight: 600, color: sub, letterSpacing: 2.5, textTransform: 'uppercase' }}>Logistics LLP</div>
      </div>
    </div>
  );
}

// ── Export ───────────────────────────────────────────────────
export const LOGOS = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];
export const LOGO_NAMES = [
  'Circle Tanker',
  'Hexagon Shield',
  'Leaf Emblem',
  'Ethanol Drop',
  'Bold Wordmark',
  'Route Arrow',
];

export default function Logo({ design = 1, size = 1, theme = 'light' }) {
  const Component = LOGOS[design - 1] || Logo1;
  return <Component size={size} theme={theme} />;
}
