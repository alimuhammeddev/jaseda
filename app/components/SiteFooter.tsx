import Link from "next/link";
import { ArrowUpRight, Building2, Mail, MapPin, Phone } from "lucide-react";
import { cleaningServices, constructionServices } from "../data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-about">
          <Link className="brand brand-footer" href="/">
            <span className="brand-mark"><Building2 size={22} strokeWidth={1.6} /></span>
            <span className="brand-name">JASEDA<span>COMPANY LTD</span></span>
          </Link>
          <p>Construction, property and cleaning services, approached with care and delivered with pride.</p>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <Link href="/about">About Jaseda</Link>
          <Link href="/construction">Construction</Link>
          <Link href="/cleaning">Cleaning</Link>
          <Link href="/projects">Our projects</Link>
          <Link href="/team">Our team</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-column">
          <h3>Construction</h3>
          {constructionServices.slice(0, 4).map((service) => (
            <Link key={service.slug} href={`/construction/${service.slug}`}>{service.title}</Link>
          ))}
          <Link className="footer-more" href="/construction">View all services <ArrowUpRight size={13} /></Link>
        </div>
        <div className="footer-column">
          <h3>Cleaning</h3>
          {cleaningServices.slice(0, 4).map((service) => (
            <Link key={service.slug} href={`/cleaning/${service.slug}`}>{service.title}</Link>
          ))}
          <Link className="footer-more" href="/cleaning">View all services <ArrowUpRight size={13} /></Link>
        </div>
        <div className="footer-contact">
          <h3>Get in touch</h3>
          <a href="tel:+447413330344"><Phone size={15} /> +44 (0) 7413 330344</a>
          <a href="mailto:info@jaseda.com"><Mail size={15} /> info@jaseda.com</a>
          <span><MapPin size={15} /> London, United Kingdom</span>
          <Link className="footer-contact-link" href="/contact">Start an enquiry <ArrowUpRight size={15} /></Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© Jaseda Company Ltd. All rights reserved.</span>
        <span className="footer-location">London · United Kingdom</span>
      </div>
    </footer>
  );
}
