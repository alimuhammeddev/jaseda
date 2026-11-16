import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  HardHat,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { FAQList } from "./components/FAQList";
import { SectionHeading } from "./components/SectionHeading";
import { cleaningServices, constructionServices, teamMembers } from "./data";

const reasons = [
  {
    icon: ShieldCheck,
    title: "A focus on quality",
    description:
      "Careful workmanship and considered decisions shape every stage of the work.",
  },
  {
    icon: HardHat,
    title: "Professional expertise",
    description:
      "A practical, experienced team brings care and attention to construction and cleaning.",
  },
  {
    icon: ClipboardCheck,
    title: "Reliable delivery",
    description:
      "Clear communication and organised planning help keep work moving as agreed.",
  },
  {
    icon: HeartHandshake,
    title: "Client-centred approach",
    description:
      "We listen first, then shape our service around each client's requirements.",
  },
  {
    icon: Sparkles,
    title: "Health and safety focus",
    description:
      "A considered approach to safety supports the people and places involved in each job.",
  },
  {
    icon: Target,
    title: "Joined-up services",
    description:
      "Construction and cleaning expertise under one roof makes it easier to find the right support.",
  },
];

const process = [
  ["01", "Consultation", "We take time to understand your needs, priorities and project objectives."],
  ["02", "Planning", "We agree a clear scope of work and a practical plan for moving forward."],
  ["03", "Execution", "Our team coordinates the work with attention to quality, safety and detail."],
  ["04", "Completion", "We review the work together and discuss any final details with you."],
];

const questions = [
  {
    question: "What services does Jaseda provide?",
    answer:
      "Jaseda provides construction and property services alongside commercial, residential and specialist cleaning. Visit the relevant service page to explore the options.",
  },
  {
    question: "Can I discuss a project before requesting a quote?",
    answer:
      "Yes. Contact our team with a short description of the work and we can discuss the next steps.",
  },
  {
    question: "Where does Jaseda operate?",
    answer:
      "Jaseda is based in London, United Kingdom. Contact the team to discuss your project location and service availability.",
  },
  {
    question: "How do I request a quotation?",
    answer:
      "Use the contact page to tell us what service you need and where the work is based. The online enquiry form is being prepared for a secure backend connection; until then, please call or email us directly.",
  },
];

export const metadata = {
  title: "Construction, Property & Cleaning Services",
  description:
    "Jaseda Company Ltd delivers construction, property development and cleaning services with a focus on quality, clear communication and dependable work.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Jaseda Company Ltd | Building Excellence. Creating Lasting Value.",
    description:
      "Construction, property development and professional cleaning services from a London-based team.",
    url: "https://www.jasedas.com/",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <section className="hero hero-home">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85"
          alt="Modern glass-fronted commercial building against the sky"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="hero-content shell">
          <p className="eyebrow eyebrow-light"><span /> Jaseda Company Ltd · London</p>
          <h1>Building excellence.<br /><em>Creating lasting value.</em></h1>
          <p className="hero-copy">
            Professional construction, property and cleaning services, delivered
            with care, precision and reliability.
          </p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/construction">
              Explore our services <ArrowRight size={17} />
            </Link>
            <Link className="button button-outline-light" href="/contact">
              Discuss your project
            </Link>
          </div>
          <div className="hero-caption"><span>01</span> Considered work. Lasting spaces.</div>
        </div>
        <a className="scroll-cue" href="#introduction" aria-label="Scroll to company introduction">
          <span /> Scroll to explore
        </a>
        <div className="hero-index">CONSTRUCTION <i /> CLEANING <i /> PROPERTY</div>
      </section>

      <section className="section intro-section" id="introduction">
        <div className="shell intro-grid">
          <div className="intro-copy">
            <p className="eyebrow">Who we are</p>
            <h2>Building relationships through <em>quality and trust.</em></h2>
            <p className="lead">
              Jaseda Company Ltd brings construction and cleaning services
              together with a shared commitment to thoughtful work and a
              dependable client experience.
            </p>
            <p>
              From property projects to the places people work and live, we
              approach each brief with care, clear communication and attention
              to the details that matter.
            </p>
            <Link className="text-link" href="/about">Get to know Jaseda <ArrowRight size={16} /></Link>
          </div>
          <div className="intro-visual">
            <div className="image-frame">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85"
                alt="Construction professionals working together on a building site"
                fill
                sizes="(max-width: 760px) 100vw, 48vw"
              />
            </div>
            <div className="image-note"><span className="note-line" /><span>Work built on<br />good relationships</span></div>
            <div className="image-number">J<span>.</span></div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="shell">
          <SectionHeading
            eyebrow="What we do"
            title={<>Expertise across <em>everyday spaces.</em></>}
            copy="From the first conversation to the finishing details, our teams bring the right care and coordination to each brief."
          />
          <div className="division-grid">
            <Link href="/construction" className="division-card division-construction">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85"
                alt="Construction team at work on a building project"
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
              <div className="division-overlay" />
              <div className="division-content">
                <span className="division-number">01 / CONSTRUCTION</span>
                <h3>Spaces made<br /><em>to work beautifully.</em></h3>
                <p>Building, property development, project coordination and specialist trades.</p>
                <span className="division-link">Explore construction <ArrowUpRight size={18} /></span>
              </div>
            </Link>
            <Link href="/cleaning" className="division-card division-cleaning">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85"
                alt="Professional cleaner carefully maintaining an interior"
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
              <div className="division-overlay" />
              <div className="division-content">
                <span className="division-number">02 / CLEANING</span>
                <h3>Cleaner spaces.<br /><em>Better days.</em></h3>
                <p>Flexible cleaning solutions for homes, workplaces and specialist environments.</p>
                <span className="division-link">Explore cleaning <ArrowUpRight size={18} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section service-links-section">
        <div className="shell service-links-layout">
          <div className="service-links-intro">
            <p className="eyebrow">Our expertise</p>
            <h2>One team. <em>Two disciplines.</em></h2>
            <p>Find the service that fits your plans, or talk with us about a tailored requirement.</p>
            <Link className="text-link" href="/contact">Talk to our team <ArrowRight size={16} /></Link>
          </div>
          <div className="service-columns">
            <div className="service-list">
              <h3>Construction & property</h3>
              {constructionServices.slice(0, 5).map((service) => (
                <Link key={service.slug} href={`/construction/${service.slug}`}>
                  <span>{service.title}</span><ArrowUpRight size={16} />
                </Link>
              ))}
              <Link className="all-services" href="/construction">All construction services <ArrowRight size={15} /></Link>
            </div>
            <div className="service-list">
              <h3>Cleaning & facilities</h3>
              {cleaningServices.slice(0, 5).map((service) => (
                <Link key={service.slug} href={`/cleaning/${service.slug}`}>
                  <span>{service.title}</span><ArrowUpRight size={16} />
                </Link>
              ))}
              <Link className="all-services" href="/cleaning">All cleaning services <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="project-teaser">
        <div className="project-image">
          <Image
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1500&q=85"
            alt="Contemporary architectural exterior with carefully detailed facade"
            fill
            sizes="(max-width: 760px) 100vw, 56vw"
          />
        </div>
        <div className="project-copy">
          <p className="eyebrow eyebrow-light">Our projects</p>
          <p className="project-count">A considered<br />approach to every brief.</p>
          <h2>Good work leaves<br /><em>a lasting impression.</em></h2>
          <p>We’re preparing a portfolio of approved Jaseda projects. In the meantime, speak with our team about your plans and the service you need.</p>
          <Link className="button button-outline-light" href="/projects">Explore our approach <ArrowRight size={17} /></Link>
        </div>
      </section>

      <section className="section why-section">
        <div className="shell">
          <SectionHeading
            theme="light"
            eyebrow="The Jaseda difference"
            title={<>Good work starts with <em>good people.</em></>}
            copy="Our approach is grounded in the things that matter: care for the work, respect for people and a clear understanding of what each client needs."
          />
          <div className="reason-grid">
            {reasons.map(({ icon: Icon, title, description }, index) => (
              <article className="reason-item" key={title}>
                <span className="reason-icon"><Icon size={21} strokeWidth={1.5} /></span>
                <span className="reason-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="shell">
          <SectionHeading
            eyebrow="A clear way forward"
            title={<>From first conversation<br />to <em>finished work.</em></>}
            copy="Every project is different. A clear process helps us understand your needs and agree the right next step."
          />
          <div className="process-grid">
            {process.map(([number, title, description]) => (
              <article className="process-step" key={number}>
                <span className="process-number">{number}</span>
                <span className="process-rule" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-preview-section">
        <div className="shell">
          <div className="team-preview-heading">
            <SectionHeading
              eyebrow="The people behind the work"
              title={<>Meet the team <em>at Jaseda.</em></>}
              copy="A leadership team with clear responsibilities across the business."
            />
            <Link className="text-link desktop-only" href="/team">Meet the whole team <ArrowRight size={16} /></Link>
          </div>
          <div className="team-grid">
            {teamMembers.slice(0, 3).map((person, index) => (
              <article className="team-card" key={person.name}>
                <div className="team-initials">
                  <Image src={person.image} alt={person.name} fill sizes="(max-width: 600px) 100vw, 33vw" />
                  <span>0{index + 1}</span>
                </div>
                <p className="eyebrow">{person.role}</p>
                <h3>{person.name}</h3>
              </article>
            ))}
          </div>
          <Link className="text-link mobile-only" href="/team">Meet the whole team <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="quote-band">
        <div className="shell quote-band-content">
          <span className="quote-mark">“</span>
          <div>
            <p className="eyebrow">Built on relationships</p>
            <h2>We believe the best work comes from listening, <em>working together and taking pride in the details.</em></h2>
            <p>We share approved client stories as they become available. Until then, we’d be glad to talk through your requirements directly.</p>
          </div>
          <Link className="text-link" href="/contact">Start a conversation <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell faq-layout">
          <div>
            <p className="eyebrow">Good to know</p>
            <h2>Questions, <em>answered.</em></h2>
            <p>Can’t find what you’re looking for? Our team is happy to help.</p>
            <Link className="text-link" href="/contact">Get in touch <ArrowRight size={16} /></Link>
          </div>
          <FAQList items={questions} />
        </div>
      </section>

      <section className="closing-cta">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2200&q=85"
          alt="Architecturally detailed modern building in soft evening light"
          fill
          sizes="100vw"
          className="hero-image"
        />
        <div className="cta-shade" />
        <div className="shell closing-content">
          <p className="eyebrow eyebrow-light">Let’s make a start</p>
          <h2>Let’s build something<br /><em>exceptional together.</em></h2>
          <p>Planning a property project or looking for dependable cleaning support? Let’s talk about what you need.</p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/contact">Request an enquiry <ArrowRight size={17} /></Link>
            <Link className="button button-outline-light" href="/about">Discover Jaseda</Link>
          </div>
        </div>
      </section>
    </>
  );
}
