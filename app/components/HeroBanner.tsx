import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroBanner({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
  action = "Talk to our team",
  href = "/contact",
  compact = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
  image: string;
  imageAlt: string;
  action?: string;
  href?: string;
  compact?: boolean;
}) {
  return (
    <section className={`hero page-hero${compact ? " page-hero-compact" : ""}`}>
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="hero-image" />
      <div className="hero-shade" />
      <div className="hero-content shell">
        <p className="eyebrow eyebrow-light"><span /> {eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-copy">{copy}</p>
        <div className="hero-actions">
          <Link className="button button-gold" href={href}>{action} <ArrowRight size={17} /></Link>
        </div>
      </div>
      <div className="hero-index">JASEDA COMPANY LTD <i /> LONDON, UK</div>
    </section>
  );
}
