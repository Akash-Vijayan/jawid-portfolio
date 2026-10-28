import type { CSSProperties, ReactNode } from "react";

type CustomProperties = { [key: `--${string}`]: string | undefined };

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms (used for grids). */
  delay?: number;
  className?: string;
  id?: string;
  /** Extra inline styles — supports custom properties such as `--tint`. */
  style?: CSSProperties & CustomProperties;
};

/**
 * Wraps content so it fades/slides in when scrolled into view.
 * Without JavaScript the content simply stays visible (`html.js` gate in CSS).
 */
export function Reveal({ children, delay = 0, className, id, style }: RevealProps) {
  const merged: Record<string, string> = {};
  if (delay > 0) merged["--reveal-delay"] = `${delay}ms`;
  if (style) {
    for (const [key, value] of Object.entries(style)) {
      if (value !== undefined && value !== null) merged[key] = String(value);
    }
  }

  return (
    <div
      id={id}
      data-reveal=""
      className={className}
      style={Object.keys(merged).length ? (merged as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}