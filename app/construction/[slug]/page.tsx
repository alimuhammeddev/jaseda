import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { FAQList } from "../../components/FAQList";
import { HeroBanner } from "../../components/HeroBanner";
import { SectionHeading } from "../../components/SectionHeading";
import { constructionServices } from "../../data";

export function generateStaticParams() {
  return constructionServices.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = constructionServices.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
    alternates: { canonical: `/construction/${service.slug}` },
  };
}

export default async function ConstructionServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = constructionServices.find((item) => item.slug === slug);
  if (!service) notFound();
  const related = constructionServices.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <HeroBanner eyebrow={`Construction / ${service.title}`} title={<>{service.title}<br /><em>done with care.</em></>} copy={service.shortDescription} image={service.image} imageAlt={service.imageAlt} />
      <section className="section service-detail-intro">
        <div className="shell service-detail-grid">
          <div><p className="eyebrow">About this service</p><h2>Thoughtful work.<br /><em>Clear expectations.</em></h2></div>
          <div><p className="lead">{service.description}</p><p>Every property and brief is different. We’ll discuss the site, your priorities and the scope before confirming how we can help.</p><Link className="text-link" href="/contact">Discuss this service <ArrowRight size={16} /></Link></div>
        </div>
      </section>
      <section className="section service-detail-includes">
        <div className="shell detail-includes-grid">
          <div className="detail-image"><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 760px) 100vw, 48vw" /></div>
          <div>
            <p className="eyebrow">What we can discuss</p><h2>Built around<br /><em>your project.</em></h2>
            <ul className="check-list">{service.includes.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>
            <p className="eyebrow detail-subhead">A considered approach</p>
            <ul className="check-list">{service.benefits.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="service-detail-process">
        <div className="shell service-detail-process-grid">
          <div><p className="eyebrow eyebrow-light">How we work</p><h2>A clear brief.<br /><em>A considered plan.</em></h2></div>
          <ol className="process-list">
            <li><span>01</span><div><h3>Understand your requirements</h3><p>We discuss the property, desired outcome and key considerations.</p></div></li>
            <li><span>02</span><div><h3>Agree the scope</h3><p>We clarify what the service includes and how the work will be coordinated.</p></div></li>
            <li><span>03</span><div><h3>Plan the work</h3><p>We discuss timing and practical requirements before getting started.</p></div></li>
            <li><span>04</span><div><h3>Review together</h3><p>We review the agreed work and discuss any final details.</p></div></li>
          </ol>
        </div>
      </section>
      <section className="section related-services">
        <div className="shell">
          <SectionHeading eyebrow="Keep exploring" title={<>Related <em>construction services.</em></>} />
          <div className="related-grid">
            {related.map((item) => <Link key={item.slug} href={`/construction/${item.slug}`}><span>{item.title}</span><ArrowRight size={17} /></Link>)}
          </div>
        </div>
      </section>
      <section className="section faq-section">
        <div className="shell faq-layout">
          <div><p className="eyebrow">Good to know</p><h2>Questions, <em>answered.</em></h2><p>Have a question about this service? Contact us to discuss your brief.</p></div>
          <FAQList items={[
            { question: `What does ${service.title.toLowerCase()} include?`, answer: `The scope depends on your property and requirements. We’ll discuss the brief with you and agree what is included before the work is planned.` },
            { question: "Can I discuss my project before requesting a quote?", answer: "Yes. Contact our team with your project location and a short description of the work, and we can discuss the next step." },
            { question: "Where does Jaseda provide construction services?", answer: "Jaseda is based in London, United Kingdom. Contact the team to check availability for your project location." },
          ]} />
        </div>
      </section>
      <section className="detail-cta"><div className="shell detail-cta-inner"><div><p className="eyebrow eyebrow-light">Your next step</p><h2>Let’s talk about<br /><em>{service.title.toLowerCase()}.</em></h2></div><Link className="button button-gold" href="/contact?type=construction">Make an enquiry <ArrowRight size={17} /></Link></div></section>
    </>
  );
}
