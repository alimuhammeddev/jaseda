import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Handshake, ShieldCheck, Sparkles } from "lucide-react";
import { HeroBanner } from "../components/HeroBanner";
import { SectionHeading } from "../components/SectionHeading";
import { teamMembers } from "../data";

export const metadata = {
  title: "About Jaseda",
  description:
    "Learn about Jaseda Company Ltd, a London-based construction and cleaning company guided by quality, integrity and client care.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: ShieldCheck, title: "Integrity", copy: "We value honest communication and a considered, responsible approach to our work." },
  { icon: Sparkles, title: "Quality", copy: "We take pride in the details and aim to deliver work that meets the agreed brief." },
  { icon: Handshake, title: "Client care", copy: "We listen, communicate and build our service around each client's needs." },
  { icon: Eye, title: "Continuous improvement", copy: "We stay open to better ways of working and learning from each project." },
];

export default function AboutPage() {
  return (
    <>
      <HeroBanner
        eyebrow="About Jaseda"
        title={<>Building trust.<br /><em>Building spaces.</em></>}
        copy="We bring construction and cleaning services together with a shared commitment to thoughtful work, clear communication and care for the people who use each space."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=85"
        imageAlt="Light-filled contemporary commercial space"
        action="Meet the team"
        href="/team"
      />
      <section className="section">
        <div className="shell about-story-grid">
          <div className="about-story-image">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85"
              alt="Architectural plans and construction materials on a work surface"
              fill
              sizes="(max-width: 760px) 100vw, 48vw"
            />
            <span className="about-image-tag">A company built around people</span>
          </div>
          <div className="about-story-copy">
            <p className="eyebrow">Who we are</p>
            <h2>One clear purpose:<br /><em>work that matters.</em></h2>
            <p className="lead">Jaseda Company Ltd is a London-based construction and cleaning company.</p>
            <p>We work across property, construction and cleaning, helping clients create and care for practical, welcoming spaces. Our approach is straightforward: understand the brief, agree the scope and give the work the attention it deserves.</p>
            <p>From early conversations to the final details, we believe professionalism is built through reliability, integrity and strong working relationships.</p>
            <Link className="text-link" href="/contact">Talk to Jaseda <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
      <section className="mission-band">
        <div className="shell mission-grid">
          <div>
            <p className="eyebrow eyebrow-light">Our mission</p>
            <h2>Quality work.<br /><em>Lasting relationships.</em></h2>
            <p>To deliver construction and cleaning solutions with integrity, innovation and quality—exceeding our clients’ expectations and contributing to healthier, safer and more sustainable communities.</p>
          </div>
          <div className="mission-divider" />
          <div>
            <p className="eyebrow eyebrow-light">Our vision</p>
            <h2>A trusted name<br /><em>in every space.</em></h2>
            <p>To be a trusted leader in construction and cleaning services, recognised for our commitment to excellence, client satisfaction and community well-being.</p>
          </div>
        </div>
      </section>
      <section className="section values-section">
        <div className="shell">
          <SectionHeading
            eyebrow="What guides us"
            title={<>A few principles. <em>Held to every day.</em></>}
            copy="The way we work matters as much as the work itself."
          />
          <div className="values-grid">
            {values.map(({ icon: Icon, title, copy }, index) => (
              <article className="value-card" key={title}>
                <span className="value-index">0{index + 1}</span>
                <Icon size={22} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section about-people">
        <div className="shell about-people-layout">
          <div>
            <p className="eyebrow">The people behind the work</p>
            <h2>Clear roles.<br /><em>Shared responsibility.</em></h2>
            <p className="lead">Our leadership team brings together responsibilities across the business.</p>
            <Link className="text-link" href="/team">Meet our team <ArrowRight size={16} /></Link>
          </div>
          <div className="about-people-list">
            {teamMembers.map((person, index) => (
              <div className="about-person-row" key={person.name}>
                <span>0{index + 1}</span><strong>{person.name}</strong><span>{person.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="closing-cta closing-cta-short">
        <Image
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2200&q=85"
          alt="Modern building facade with clean architectural lines"
          fill
          sizes="100vw"
          className="hero-image"
        />
        <div className="cta-shade" />
        <div className="shell closing-content">
          <p className="eyebrow eyebrow-light">A good place to begin</p>
          <h2>Tell us what you’re<br /><em>looking to achieve.</em></h2>
          <Link className="button button-gold" href="/contact">Start a conversation <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
