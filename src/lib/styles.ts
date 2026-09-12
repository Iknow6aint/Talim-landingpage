import type { CSSProperties } from "react";

/** Staggers a scroll-driven `data-rise` reveal so neighbouring cards arrive in sequence. */
export function revealRange(start: number, end: number): CSSProperties {
  return { animationRange: `entry ${start}% cover ${end}%` } as CSSProperties;
}

/** Faint white graph-paper lines used behind the blue and navy panels. */
export function gridLines(alpha: number, size: number): CSSProperties {
  const line = `rgba(255,255,255,${alpha})`;
  return {
    backgroundImage: `linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px)`,
    backgroundSize: `${size}px ${size}px`,
  };
}
