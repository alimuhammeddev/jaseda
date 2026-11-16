import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HeroBanner } from "../components/HeroBanner";
import { SectionHeading } from "../components/SectionHeading";
import { constructionServices } from "../data";

export const metadata = {
  title: "Construction & Property Development",
  description:
    "Explore Jaseda's construction and property services, from residential and commercial building to specialist trades and project management.",
  alternates: { canonical: "/construction" },
};

export default function ConstructionPage() {
  return (
    <>
      <HeroBanner
        eyebrow="Construction & property"
        title={<>From first idea<br /><em>to finished space.</em></>}
        copy="Construction and property support shaped around your brief, with considered planning, specialist services and attention to the details."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2200&q=85"
        imageAlt="Building under construction with a team at work"
        action="Discuss a project"
      />
      <section className="section">
        <div className="shell split-intro">
          <div><p className="eyebrow">A considered approach</p><h2>Delivering construction excellence <em>from concept to completion.</em></h2></div>
          <div><p className="lead">Every property project begins with a different set of priorities.</p><p>We take time to understand the requirements, define a clear scope and coordinate the work needed. Whether your brief is a specific trade or a wider development project, our team can help you explore the next step.</p><Link className="text-link" href="/contact">Talk through your brief <ArrowRight size={16} /></Link></div>
        </div>
      </section>
      <section className="section service-catalog-section">
        <div className="shell">
          <SectionHeading eyebrow="Our services" title={<>The right support for <em>your next project.</em></>} copy="Explore our construction and property services. Each service page describes what we can discuss and how to get started." />
          <div className="service-catalog-grid">
            {constructionServices.map((service, index) => (
              <Link className="catalog-card" href={`/construction/${service.slug}`} key={service.slug}>
                <div className="catalog-image"><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw" /><span>0{index + 1}</span></div>
                <div className="catalog-card-copy"><h3>{service.title}</h3><p>{service.shortDescription}</p><span className="text-link">Explore service <ArrowUpRight size={16} /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="process-band">
        <div className="shell process-band-grid">
          <div><p className="eyebrow eyebrow-light">Our approach</p><h2>Good work takes<br /><em>good preparation.</em></h2><p>We start with a conversation, confirm the scope and plan how to coordinate the work before moving forward.</p></div>
          <ol className="process-list">
            <li><span>01</span><div><h3>Understand</h3><p>Discuss your priorities, property and project objectives.</p></div></li>
            <li><span>02</span><div><h3>Plan</h3><p>Agree the scope of work, sequence and next steps.</p></div></li>
            <li><span>03</span><div><h3>Deliver</h3><p>Coordinate the work and keep communication clear.</p></div></li>
            <li><span>04</span><div><h3>Review</h3><p>Review the agreed work together at completion.</p></div></li>
          </ol>
        </div>
      </section>
      <section className="section service-cta-row">
        <div className="shell">
          <div className="service-cta-panel">
            <div><p className="eyebrow">Your project, your priorities</p><h2>Let’s talk about<br /><em>what you have in mind.</em></h2></div>
            <div><p>Share a few details with our team and we’ll discuss your requirements and the right next step.</p><Link className="button button-navy" href="/contact">Make an enquiry <ArrowRight size={17} /></Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
