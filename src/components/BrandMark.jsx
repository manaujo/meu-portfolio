import { useId } from "react";

/**
 * Logomarca: camadas de página + interface (tema web / landing).
 *
 * Variantes:
 * - default — esmeralda / ciano (base)
 * - aurum — premium: gradiente champanhe → esmeralda, cromo com 3 pontos, brilho suave
 * - lumen — premium: platina / vidro escuro, contorno luminoso e tipografia de interface refinada
 */
/** Atalhos para as versões premium (mesma API de className). */
export function BrandMarkAurum(props) {
  return <BrandMark {...props} variant="aurum" />;
}

export function BrandMarkLumen(props) {
  return <BrandMark {...props} variant="lumen" />;
}

export function BrandMark({ className = "h-9 w-9 shrink-0", variant = "default" }) {
  const uid = useId().replace(/:/g, "");

  if (variant === "aurum") {
    return <BrandMarkAurumSvg className={className} uid={uid} />;
  }
  if (variant === "lumen") {
    return <BrandMarkLumenSvg className={className} uid={uid} />;
  }

  const grad = `bm-grad-${uid}`;
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={grad} x1="6" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34d399" />
          <stop offset="0.5" stopColor="#2dd4bf" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect
        x="5"
        y="13"
        width="26"
        height="20"
        rx="5"
        stroke={`url(#${grad})`}
        strokeOpacity="0.28"
        strokeWidth="1.25"
      />
      <rect
        x="8"
        y="9"
        width="26"
        height="20"
        rx="5"
        stroke={`url(#${grad})`}
        strokeOpacity="0.45"
        strokeWidth="1.25"
      />
      <rect
        x="11"
        y="5"
        width="26"
        height="20"
        rx="5"
        fill={`url(#${grad})`}
        fillOpacity="0.14"
        stroke={`url(#${grad})`}
        strokeWidth="1.35"
      />
      <line
        x1="14"
        y1="10"
        x2="34"
        y2="10"
        stroke={`url(#${grad})`}
        strokeOpacity="0.55"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <rect x="15" y="14" width="18" height="3" rx="1" fill={`url(#${grad})`} fillOpacity="0.35" />
      <rect x="15" y="19" width="12" height="2.25" rx="0.75" fill={`url(#${grad})`} fillOpacity="0.22" />
      <rect x="15" y="23" width="14" height="2.25" rx="0.75" fill={`url(#${grad})`} fillOpacity="0.18" />
    </svg>
  );
}

function BrandMarkAurumSvg({ className, uid }) {
  const g = `bm-au-g-${uid}`;
  const gSoft = `bm-au-gs-${uid}`;
  const fGlow = `bm-au-fg-${uid}`;

  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={g} x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fefce8" />
          <stop offset="0.25" stopColor="#d4a574" />
          <stop offset="0.55" stopColor="#34d399" />
          <stop offset="1" stopColor="#0d9488" />
        </linearGradient>
        <linearGradient id={gSoft} x1="11" y1="5" x2="37" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fef3c7" stopOpacity="0.35" />
          <stop offset="1" stopColor="#34d399" stopOpacity="0.12" />
        </linearGradient>
        <filter id={fGlow} x="-35%" y="-35%" width="170%" height="170%">
          <feGaussianBlur stdDeviation="0.85" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect
        x="5"
        y="13"
        width="26"
        height="20"
        rx="5.5"
        stroke={`url(#${g})`}
        strokeOpacity="0.22"
        strokeWidth="1"
      />
      <rect
        x="7.5"
        y="10"
        width="26"
        height="20"
        rx="5.5"
        stroke={`url(#${g})`}
        strokeOpacity="0.38"
        strokeWidth="1"
      />
      <rect
        x="10"
        y="6"
        width="26"
        height="20"
        rx="5.5"
        fill={`url(#${gSoft})`}
        stroke={`url(#${g})`}
        strokeWidth="1.15"
        filter={`url(#${fGlow})`}
      />
      <circle cx="15.2" cy="9.35" r="0.85" fill={`url(#${g})`} fillOpacity="0.9" />
      <circle cx="17.8" cy="9.35" r="0.85" fill={`url(#${g})`} fillOpacity="0.65" />
      <circle cx="20.4" cy="9.35" r="0.85" fill={`url(#${g})`} fillOpacity="0.4" />
      <line
        x1="23.5"
        y1="9.35"
        x2="33"
        y2="9.35"
        stroke={`url(#${g})`}
        strokeOpacity="0.35"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <rect x="14" y="13.5" width="18" height="2.75" rx="0.85" fill={`url(#${g})`} fillOpacity="0.42" />
      <rect x="14" y="17.5" width="11" height="2" rx="0.6" fill={`url(#${g})`} fillOpacity="0.22" />
      <rect x="14" y="20.75" width="13" height="2" rx="0.6" fill={`url(#${g})`} fillOpacity="0.16" />
      <rect x="14" y="24" width="9" height="2.25" rx="0.65" fill={`url(#${g})`} fillOpacity="0.55" />
    </svg>
  );
}

function BrandMarkLumenSvg({ className, uid }) {
  const g = `bm-lm-g-${uid}`;
  const gInner = `bm-lm-gi-${uid}`;
  const fOuter = `bm-lm-fo-${uid}`;

  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={g} x1="8" y1="6" x2="32" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f1f5f9" />
          <stop offset="0.35" stopColor="#94a3b8" />
          <stop offset="0.7" stopColor="#34d399" />
          <stop offset="1" stopColor="#14b8a6" />
        </linearGradient>
        <linearGradient id={gInner} x1="12" y1="8" x2="34" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0f172a" stopOpacity="0.95" />
          <stop offset="1" stopColor="#020617" stopOpacity="0.98" />
        </linearGradient>
        <filter id={fOuter} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0 0.2  0 0 0 0 0.93  0 0 0 0 0.75  0 0 0 0.45 0"
            result="glow"
          />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect
        x="5"
        y="13"
        width="26"
        height="20"
        rx="6"
        stroke={`url(#${g})`}
        strokeOpacity="0.18"
        strokeWidth="0.85"
      />
      <rect
        x="7.5"
        y="9.5"
        width="26"
        height="20"
        rx="6"
        stroke={`url(#${g})`}
        strokeOpacity="0.28"
        strokeWidth="0.85"
      />
      <g filter={`url(#${fOuter})`}>
        <rect
          x="10"
          y="6"
          width="26"
          height="20"
          rx="6"
          fill={`url(#${gInner})`}
          stroke={`url(#${g})`}
          strokeWidth="1.2"
        />
      </g>
      <rect
        x="11.2"
        y="7.1"
        width="23.6"
        height="17.8"
        rx="5"
        stroke="white"
        strokeOpacity="0.06"
        strokeWidth="0.65"
      />
      <line
        x1="14.5"
        y1="10.25"
        x2="31.5"
        y2="10.25"
        stroke={`url(#${g})`}
        strokeOpacity="0.5"
        strokeWidth="0.65"
        strokeLinecap="round"
      />
      <rect x="14.5" y="12.75" width="17" height="2.5" rx="0.5" fill={`url(#${g})`} fillOpacity="0.38" />
      <rect x="14.5" y="16.25" width="10.5" height="1.85" rx="0.45" fill="white" fillOpacity="0.08" />
      <rect x="14.5" y="19.15" width="12" height="1.85" rx="0.45" fill="white" fillOpacity="0.06" />
      <rect x="14.5" y="22" width="8" height="2" rx="0.5" fill={`url(#${g})`} fillOpacity="0.5" />
    </svg>
  );
}
