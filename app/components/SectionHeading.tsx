import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  theme = "dark",
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  theme?: "dark" | "light";
}) {
  return (
    <div className={`section-heading section-heading-${theme}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-heading-copy">{copy}</p>}
    </div>
  );
}
