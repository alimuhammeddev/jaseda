import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { FAQList } from "../../components/FAQList";
import { HeroBanner } from "../../components/HeroBanner";
import { SectionHeading } from "../../components/SectionHeading";
import { cleaningServices } from "../../data";

export function generateStaticParams() {
  return cleaningServices.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = cleaningServices.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
    alternates: { canonical: `/cleaning/${service.slug}` },
  };
}

export default async function CleaningServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = cleaningServices.find((item) => item.slug === slug);
  if (!service) notFound();
  const related = cleaningServices.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <HeroBanner eyebrow={`Cleaning / ${service.title}`} title={<>{service.title}<br /><em>with care.</em></>} copy={service.shortDescription} image={service.image} imageAlt={service.imageAlt} />
      <section className="section service-detail-intro">
        <div className="shell service-detail-grid">
          <div><p className="eyebrow">About this service</p><h2>Clean spaces.<br /><em>Considered care.</em></h2></div>
          <div><p className="lead">{service.description}</p><p>We’ll discuss your space, preferred schedule and cleaning priorities before agreeing the scope of the service.</p><Link className="text-link" href="/contact?type=cleaning">Discuss this service <ArrowRight size={16} /></Link></div>
        </div>
      </section>
      <section className="section service-detail-includes">
        <div className="shell detail-includes-grid">
          <div className="detail-image"><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 760px) 100vw, 48vw" /></div>
          <div>
            <p className="eyebrow">A service shaped for your space</p><h2>Care where<br /><em>it matters most.</em></h2>
            <ul className="check-list">{service.includes.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>
            <p className="eyebrow detail-subhead">What to expect</p>
            <ul className="check-list">{service.benefits.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="cleaning-detail-process">
        <div className="shell service-detail-process-grid">
          <div><p className="eyebrow">How we work</p><h2>A clean plan<br /><em>from the start.</em></h2><p>We start with the premises and the result you need, then confirm the details before scheduling the work.</p></div>
          <ol className="process-list">
            <li><span>01</span><div><h3>Understand the space</h3><p>Discuss the premises and your cleaning priorities.</p></div></li>
            <li><span>02</span><div><h3>Agree the details</h3><p>Confirm the scope and preferred schedule.</p></div></li>
            <li><span>03</span><div><h3>Carry out the clean</h3><p>Complete the agreed service with care.</p></div></li>
            <li><span>04</span><div><h3>Review the result</h3><p>Discuss the service and any ongoing requirements.</p></div></li>
          </ol>
        </div>
      </section>
      <section className="section related-services">
        <div className="shell">
          <SectionHeading eyebrow="Keep exploring" title={<>Related <em>cleaning services.</em></>} />
          <div className="related-grid">
            {related.map((item) => <Link key={item.slug} href={`/cleaning/${item.slug}`}><span>{item.title}</span><ArrowRight size={17} /></Link>)}
          </div>
        </div>
      </section>
      <section className="section faq-section">
        <div className="shell faq-layout">
          <div><p className="eyebrow">Good to know</p><h2>Questions, <em>answered.</em></h2><p>Tell us about your space and we can help clarify the right cleaning service.</p></div>
          <FAQList items={[
            { question: `What does ${service.title.toLowerCase()} include?`, answer: "The service is planned around your premises and priorities. We’ll discuss and agree the scope with you before arranging the work." },
            { question: "Can I request a regular or one-off service?", answer: "Let us know your preferred schedule when you get in touch. We can discuss the requirements and available options." },
            { question: "Where does Jaseda provide cleaning services?", answer: "Jaseda is based in London, United Kingdom. Contact the team to check availability for your location." },
          ]} />
        </div>
      </section>
      <section className="detail-cta"><div className="shell detail-cta-inner"><div><p className="eyebrow eyebrow-light">Your next step</p><h2>Let’s talk about<br /><em>{service.title.toLowerCase()}.</em></h2></div><Link className="button button-gold" href="/contact?type=cleaning">Make an enquiry <ArrowRight size={17} /></Link></div></section>
    </>
  );
}
