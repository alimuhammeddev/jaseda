import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { HeroBanner } from "../components/HeroBanner";

export const metadata = {
  title: "Contact Jaseda",
  description:
    "Contact Jaseda Company Ltd in London to discuss construction, property or cleaning services.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <HeroBanner eyebrow="Contact Jaseda" title={<>Let’s talk about<br /><em>what you need.</em></>} copy="Tell us a little about your project or service requirement. We’ll be glad to hear from you." image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=85" imageAlt="City commercial buildings in London light" action="Email our team" href="mailto:info@jaseda.com" />
      <section className="section contact-section">
        <div className="shell contact-layout">
          <div className="contact-details">
            <p className="eyebrow">Get in touch</p>
            <h2>Start with<br /><em>a conversation.</em></h2>
            <p className="lead">Share what you’re looking for and the team will help you discuss the right next step.</p>
            <div className="contact-detail-list">
              <a href="tel:+447413330344"><span><Phone size={18} /></span><div><small>Call us</small><strong>+44 (0) 7413 330344</strong></div></a>
              <a href="mailto:info@jaseda.com"><span><Mail size={18} /></span><div><small>Email us</small><strong>info@jaseda.com</strong></div></a>
              <div><span><MapPin size={18} /></span><div><small>Based in</small><strong>London, United Kingdom</strong></div></div>
            </div>
            <div className="map-preview">
              <Image src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1100&q=80" alt="London cityscape at dusk" fill sizes="(max-width: 760px) 100vw, 40vw" />
              <span><MapPin size={16} /> London, United Kingdom</span>
            </div>
            <p className="map-note">Please contact us to confirm project and service availability in your area.</p>
          </div>
          <div className="contact-form-panel">
            <p className="eyebrow">Business enquiry</p>
            <h2>Tell us a little<br /><em>about your project.</em></h2>
            <p className="form-intro">The form is ready for a secure CRM or API connection. Until that is configured, submissions will not be sent; please use the phone or email above.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
