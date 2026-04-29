// Sri Vijetha Logistics LLP — Logo Options
// Style: Circle background + bold geometric shape inside (inspired by FleetUp)
// Color: Muted green circle, white icon

const C = '#2e6347';   // circle fill
const C2 = '#245438';  // circle ring
const W = '#ffffff';   // icon color
const S = '#82b594';   // soft accent

const TEXT = { dark: '#1a3328', sub: '#4a7a60' };

function NameBlock({ size, theme }) {
  const dark = theme === 'dark';
  return (
    <div style={{ lineHeight: 1 }}>
      <div style={{ fontSize: 18 * size, fontWeight: 700, color: dark ? W : TEXT.dark, letterSpacing: '-0.4px', fontFamily: 'IBM Plex Sans, sans-serif' }}>
        Sri Vijetha
      </div>
      <div style={{ fontSize: 10 * size, fontWeight: 600, color: dark ? S : TEXT.sub, letterSpacing: 2, textTransform: 'uppercase', marginTop: 3 * size }}>
        Logistics <span style={{ opacity: 0.7 }}>LLP</span>
      </div>
    </div>
  );
}

function CircleLogo({ size, theme, children }) {
  const s = 58 * size;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 * size }}>
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <circle cx="50" cy="50" r="49" fill={C2} />
        <circle cx="50" cy="50" r="46" fill={C} />
        {children}
      </svg>
      <NameBlock size={size} theme={theme} />
    </div>
  );
}

// ── 1. Bold V — The road / the name / direction ───────────────
// The V in Vijetha. A bold chevron pointing down like a road
// vanishing to a destination. Clean, memorable, timeless.
export function Logo1({ size = 1, theme = 'light' }) {
  return (
    <CircleLogo size={size} theme={theme}>
      <path d="M22,28 L50,68 L78,28" fill="none" stroke={W} strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
    </CircleLogo>
  );
}

// ── 2. Navigator — FleetUp style cursor ───────────────────────
// A navigation cursor/arrow like a GPS pointer. Says: we know
// every route. Instantly reads as logistics & movement.
export function Logo2({ size = 1, theme = 'light' }) {
  return (
    <CircleLogo size={size} theme={theme}>
      {/* Cursor shape: concave left side, two straight edges to a point */}
      <path d="M62,16 L50,80 C38,68 18,48 18,36 C18,24 38,12 62,16 Z" fill={W} />
    </CircleLogo>
  );
}

// ── 3. Location Pin — We know the destination ─────────────────
// A GPS location pin = "we get it there." Every pharma company
// uses maps and pins — they'll read this immediately.
export function Logo3({ size = 1, theme = 'light' }) {
  return (
    <CircleLogo size={size} theme={theme}>
      {/* Pin body */}
      <path d="M50,16 C36,16 24,28 24,43 C24,62 50,84 50,84 C50,84 76,62 76,43 C76,28 64,16 50,16 Z" fill={W} />
      {/* Inner hole */}
      <circle cx="50" cy="42" r="13" fill={C} />
    </CircleLogo>
  );
}

// ── 4. Compass Arrow — Precision and direction ────────────────
// A compass needle pointing forward. Precision is critical in
// hazardous chemical transport. Elegant and trustworthy.
export function Logo4({ size = 1, theme = 'light' }) {
  return (
    <CircleLogo size={size} theme={theme}>
      {/* Long point (up-right) */}
      <path d="M50,50 L70,18 L58,46 Z" fill={W} />
      {/* Short point (down-left) — darker for depth */}
      <path d="M50,50 L30,82 L42,54 Z" fill={W} opacity="0.4" />
      {/* Left point */}
      <path d="M50,50 L18,38 L44,46 Z" fill={W} opacity="0.3" />
      {/* Right point */}
      <path d="M50,50 L82,62 L56,54 Z" fill={W} />
      {/* Centre dot */}
      <circle cx="50" cy="50" r="5" fill={C} />
      <circle cx="50" cy="50" r="2.5" fill={W} opacity="0.6" />
    </CircleLogo>
  );
}

// ── 5. Forward Arrow — Bold movement ──────────────────────────
// A single bold arrow pointing forward. No complexity.
// Confidence, speed, delivery. Reads at any size instantly.
export function Logo5({ size = 1, theme = 'light' }) {
  return (
    <CircleLogo size={size} theme={theme}>
      {/* Arrow shaft */}
      <rect x="18" y="43" width="46" height="14" rx="7" fill={W} />
      {/* Arrow head */}
      <path d="M56,24 L82,50 L56,76 Z" fill={W} />
    </CircleLogo>
  );
}

// ── 6. S-Mark — India's highways / the journey ───────────────
// A bold S-curve = India's winding road network. Also the first
// letter of "Sri." A road that flows — powerful and fluid.
export function Logo6({ size = 1, theme = 'light' }) {
  return (
    <CircleLogo size={size} theme={theme}>
      {/* Bold S-curve road */}
      <path d="M66,18 C66,18 66,36 50,50 C34,64 34,82 34,82"
        fill="none" stroke={W} strokeWidth="14" strokeLinecap="round" />
      {/* Start dot */}
      <circle cx="66" cy="18" r="7" fill={W} />
      {/* End dot */}
      <circle cx="34" cy="82" r="7" fill={W} />
    </CircleLogo>
  );
}

// ── PIN VARIANTS — Two connected location pins ───────────────
// Your idea: pickup pin → delivery pin → back again.
// The two-way route tells the full story of the business.

// Shared pin shape
function Pin({ cx, cy, r = 12, hole = 5, fill = W, bg = C }) {
  return (
    <>
      <path d={`M${cx},${cy - r} C${cx + r},${cy - r} ${cx + r * 1.3},${cy - r * 0.3} ${cx + r * 1.3},${cy} C${cx + r * 1.3},${cy + r} ${cx},${cy + r * 2.2} ${cx},${cy + r * 2.2} C${cx},${cy + r * 2.2} ${cx - r * 1.3},${cy + r} ${cx - r * 1.3},${cy} C${cx - r * 1.3},${cy - r * 0.3} ${cx - r},${cy - r} ${cx},${cy - r} Z`} fill={fill} />
      <circle cx={cx} cy={cy} r={hole} fill={bg} />
    </>
  );
}

// P1 — Side by side, double arc (top = outbound, bottom = return)
export function LogoP1({ size = 1, theme = 'light' }) {
  const s = 58 * size;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 * size }}>
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <circle cx="50" cy="50" r="49" fill={C2} />
        <circle cx="50" cy="50" r="46" fill={C} />
        {/* Left pin */}
        <Pin cx={27} cy={42} r={10} hole={4} />
        {/* Right pin */}
        <Pin cx={73} cy={42} r={10} hole={4} />
        {/* Outbound arc — curves UP (left → right) */}
        <path d="M27,32 Q50,14 73,32" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
        {/* Arrowhead at right end → */}
        <path d="M67,28 L73,32 L67,36" fill="none" stroke={W} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Return arc — curves DOWN (right → left) */}
        <path d="M73,64 Q50,80 27,64" fill="none" stroke={S} strokeWidth="3" strokeLinecap="round" strokeDasharray="4,3" />
        {/* Arrowhead at left end ← */}
        <path d="M33,68 L27,64 L33,60" fill="none" stroke={S} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <NameBlock size={size} theme={theme} />
    </div>
  );
}

// P2 — Diagonal pins, looping S-route (one journey, one return)
export function LogoP2({ size = 1, theme = 'light' }) {
  const s = 58 * size;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 * size }}>
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <circle cx="50" cy="50" r="49" fill={C2} />
        <circle cx="50" cy="50" r="46" fill={C} />
        {/* Top-left pin (origin) */}
        <Pin cx={28} cy={24} r={10} hole={4} />
        {/* Bottom-right pin (destination) */}
        <Pin cx={72} cy={62} r={10} hole={4} />
        {/* Outbound route: curves right */}
        <path d="M36,34 C55,30 68,42 68,60" fill="none" stroke={W} strokeWidth="3.5" strokeLinecap="round" />
        {/* Arrowhead at destination → ↓ */}
        <path d="M63,56 L68,62 L74,56" fill="none" stroke={W} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Return route: curves left */}
        <path d="M64,62 C45,68 32,56 28,38" fill="none" stroke={S} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4,3" />
        {/* Arrowhead back ↑ */}
        <path d="M32,44 L28,38 L24,44" fill="none" stroke={S} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <NameBlock size={size} theme={theme} />
    </div>
  );
}

// P3 — Two pins + oval loop (continuous cycle)
export function LogoP3({ size = 1, theme = 'light' }) {
  const s = 58 * size;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 * size }}>
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <circle cx="50" cy="50" r="49" fill={C2} />
        <circle cx="50" cy="50" r="46" fill={C} />
        {/* Oval loop */}
        <ellipse cx="50" cy="50" rx="28" ry="18" fill="none" stroke={W} strokeWidth="4" />
        {/* Arrowhead on top of ellipse → (going right) */}
        <path d="M46,32 L52,32 L49,28" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {/* Arrowhead on bottom of ellipse ← (going left) */}
        <path d="M54,68 L48,68 L51,72" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {/* Left pin (origin) */}
        <Pin cx={22} cy={46} r={9} hole={3.5} />
        {/* Right pin (destination) */}
        <Pin cx={78} cy={46} r={9} hole={3.5} />
      </svg>
      <NameBlock size={size} theme={theme} />
    </div>
  );
}

// P4 — Two pins stacked, bold double arrow between them
export function LogoP4({ size = 1, theme = 'light' }) {
  const s = 58 * size;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 * size }}>
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <circle cx="50" cy="50" r="49" fill={C2} />
        <circle cx="50" cy="50" r="46" fill={C} />
        {/* Top pin */}
        <Pin cx={50} cy={16} r={10} hole={4} />
        {/* Bottom pin */}
        <Pin cx={50} cy={66} r={10} hole={4} />
        {/* Arrow going DOWN (outbound: load → deliver) */}
        <line x1="44" y1="38" x2="44" y2="62" stroke={W} strokeWidth="3.5" strokeLinecap="round" />
        <path d="M40,57 L44,64 L48,57" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {/* Arrow going UP (return: reload → back) */}
        <line x1="56" y1="62" x2="56" y2="38" stroke={S} strokeWidth="3" strokeLinecap="round" strokeDasharray="4,3" />
        <path d="M52,43 L56,36 L60,43" fill="none" stroke={S} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <NameBlock size={size} theme={theme} />
    </div>
  );
}

export const PIN_LOGOS = [
  { component: LogoP1, id: 'P1', name: 'Side by Side + Double Arc',    meaning: 'Two pins, two arcs. Solid line = outbound. Dashed = return. Clean and clear.' },
  { component: LogoP2, id: 'P2', name: 'Diagonal + S-Route',            meaning: 'Origin top-left, destination bottom-right. The S-curve is the journey — both ways.' },
  { component: LogoP3, id: 'P3', name: 'Oval Loop (Continuous Cycle)',   meaning: 'The oval = the never-ending cycle of pickups and deliveries. Two pins, one route.' },
  { component: LogoP4, id: 'P4', name: 'Stacked + Two-Way Arrow',        meaning: 'Load → deliver (solid). Return → reload (dashed). The full operation in one mark.' },
];

export const ALL_LOGOS = [
  { component: Logo1, id: '1', name: 'Bold V',         meaning: 'The V in Vijetha = a road pointing to every destination. Bold, clean, timeless.' },
  { component: Logo2, id: '2', name: 'Navigator',      meaning: 'GPS cursor style — "we know every route." Instant logistics read. Similar to FleetUp.' },
  { component: Logo3, id: '3', name: 'Location Pin',   meaning: 'A map pin = "we get it there." Every pharma client uses GPS — they\'ll know this instantly.' },
  { component: Logo4, id: '4', name: 'Compass',        meaning: 'Compass needle = precision & direction. Critical for hazardous chemical transport.' },
  { component: Logo5, id: '5', name: 'Forward Arrow',  meaning: 'One bold arrow. No complexity. Confidence, speed, delivery. Reads at any size.' },
  { component: Logo6, id: '6', name: 'S-Mark Highway', meaning: 'Bold S-curve = India\'s road network + first letter of Sri. Fluid and powerful.' },
];

export default function Logo({ design = '1', size = 1, theme = 'light' }) {
  const map = { '1': Logo1, '2': Logo2, '3': Logo3, '4': Logo4, '5': Logo5, '6': Logo6 };
  const Component = map[design] || Logo1;
  return <Component size={size} theme={theme} />;
}
