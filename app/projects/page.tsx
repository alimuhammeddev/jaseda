import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HeroBanner } from "../components/HeroBanner";
import { SectionHeading } from "../components/SectionHeading";

export const metadata = {
  title: "Our Projects",
  description:
    "Explore Jaseda Company Ltd's project approach and contact the team to discuss construction or cleaning requirements.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <HeroBanner eyebrow="Our projects" title={<>Every brief has<br /><em>its own story.</em></>} copy="A thoughtful project begins with listening, clear planning and care for the details that shape the finished space." image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2200&q=85" imageAlt="Carefully designed modern architectural space" action="Discuss your project" />
      <section className="section projects-intro">
        <div className="shell projects-intro-layout">
          <div><p className="eyebrow">An evolving portfolio</p><h2>Real work.<br /><em>Shared with care.</em></h2></div>
          <p className="lead">We’re preparing project stories for publication once the details and images have been approved.</p>
        </div>
      </section>
      <section className="project-empty">
        <div className="project-empty-image"><Image src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=85" alt="Modern architecture framed against the sky" fill sizes="(max-width: 760px) 100vw, 60vw" /></div>
        <div className="project-empty-copy"><span className="eyebrow">A note on our portfolio</span><h2>Good work deserves<br /><em>an honest story.</em></h2><p>We don’t publish project names, client details or outcomes without verified information. Our portfolio is being prepared; in the meantime, our team can talk you through how we approach a new brief.</p><Link className="text-link" href="/contact">Talk to our team <ArrowRight size={16} /></Link></div>
      </section>
      <section className="section project-categories">
        <div className="shell">
          <SectionHeading eyebrow="Where we work" title={<>Explore our <em>areas of expertise.</em></>} copy="Our services span construction, property and cleaning. Explore a service area to learn more." />
          <div className="related-grid">
            <Link href="/construction"><span>Construction & property</span><ArrowUpRight size={17} /></Link>
            <Link href="/cleaning"><span>Cleaning & facilities</span><ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
