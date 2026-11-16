import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HeroBanner } from "../components/HeroBanner";
import { FAQList } from "../components/FAQList";
import { SectionHeading } from "../components/SectionHeading";
import { cleaningServices } from "../data";

export const metadata = {
  title: "Cleaning & Facilities Services",
  description:
    "Discover Jaseda's commercial, residential and specialist cleaning services, tailored to the needs of your home or workplace.",
  alternates: { canonical: "/cleaning" },
};

export default function CleaningPage() {
  return (
    <>
      <HeroBanner
        eyebrow="Cleaning & facilities"
        title={<>Professional cleaning.<br /><em>Thoughtfully delivered.</em></>}
        copy="Flexible cleaning support for homes, workplaces and specialist environments, shaped around the people and spaces that matter."
        image="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=2200&q=85"
        imageAlt="Professional cleaning tools prepared for a commercial interior"
        action="Request a cleaning enquiry"
      />
      <section className="section cleaning-intro">
        <div className="shell cleaning-intro-grid">
          <div><p className="eyebrow">A cleaner way forward</p><h2>Professional cleaning solutions. <em>Exceptional care.</em></h2><p className="lead">Every space has its own routine, priorities and expectations.</p><p>We begin by understanding your premises and the service you need. Together, we can discuss cleaning priorities, scheduling and a scope that works for your home or business.</p><Link className="text-link" href="/contact">Tell us what you need <ArrowRight size={16} /></Link></div>
          <div className="cleaning-detail-image"><Image src="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&w=1200&q=85" alt="Clean, bright interior being carefully maintained" fill sizes="(max-width: 760px) 100vw, 45vw" /></div>
        </div>
      </section>
      <section className="section cleaning-catalog-section">
        <div className="shell">
          <SectionHeading eyebrow="Our cleaning services" title={<>A clean that fits <em>your space.</em></>} copy="From regular maintenance to a more detailed one-off clean, explore the services we can discuss with you." />
          <div className="cleaning-service-grid">
            {cleaningServices.map((service, index) => (
              <Link className="cleaning-service-card" href={`/cleaning/${service.slug}`} key={service.slug}>
                <div className="cleaning-service-image"><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" /><span>0{index + 1}</span></div>
                <div><h3>{service.title}</h3><p>{service.shortDescription}</p><span className="text-link">Explore service <ArrowUpRight size={16} /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="cleaning-process-section">
        <div className="shell cleaning-process-layout">
          <div><p className="eyebrow">Our process</p><h2>Simple to plan.<br /><em>Careful to deliver.</em></h2><p>We plan cleaning around your space, your priorities and the service you need.</p><Link className="text-link" href="/contact">Plan your service <ArrowRight size={16} /></Link></div>
          <div className="cleaning-process-steps">
            <article><span>01</span><div><h3>Assess</h3><p>Understand the premises and identify your priorities.</p></div></article>
            <article><span>02</span><div><h3>Agree</h3><p>Confirm the scope, schedule and details of the service.</p></div></article>
            <article><span>03</span><div><h3>Clean</h3><p>Carry out the work with care and attention to the agreed requirements.</p></div></article>
            <article><span>04</span><div><h3>Review</h3><p>Discuss the completed service and any follow-up requirements.</p></div></article>
          </div>
        </div>
      </section>
      <section className="section faq-section">
        <div className="shell faq-layout">
          <div><p className="eyebrow">Good to know</p><h2>Cleaning, <em>clarified.</em></h2><p>Share your requirements with the team if you have a question about a specific service.</p></div>
          <FAQList items={[
            { question: "What types of cleaning do you provide?", answer: "Jaseda offers commercial, residential, specialised, environmental, deep and eco-friendly cleaning services. Visit the service pages to learn more." },
            { question: "Can I request a tailored cleaning plan?", answer: "Yes. Tell us about your premises, priorities and preferred schedule so we can discuss the right scope." },
            { question: "How do I request a cleaning quote?", answer: "Contact us with your location and the kind of cleaning support you need. The online enquiry form is not yet connected, so please call or email us directly." },
          ]} />
        </div>
      </section>
      <section className="section service-cta-row">
        <div className="shell">
          <div className="service-cta-panel service-cta-cleaning">
            <div><p className="eyebrow">Care for your space</p><h2>Let’s find the right<br /><em>cleaning plan for you.</em></h2></div>
            <div><p>Tell us about your home or workplace, and the kind of support you’re looking for.</p><Link className="button button-navy" href="/contact?type=cleaning">Request a cleaning enquiry <ArrowRight size={17} /></Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
