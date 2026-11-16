import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HeroBanner } from "../components/HeroBanner";
import { SectionHeading } from "../components/SectionHeading";
import { teamMembers } from "../data";

export const metadata = {
  title: "Our Team",
  description:
    "Meet the Jaseda Company Ltd leadership team and their roles across the business.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <HeroBanner eyebrow="Our team" title={<>The people behind<br /><em>the work.</em></>} copy="Meet the leadership team whose roles support Jaseda's construction, property and cleaning services." image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=85" imageAlt="Colleagues working together in a professional environment" action="Contact the team" />
      <section className="section team-page-section">
        <div className="shell">
          <SectionHeading eyebrow="Leadership & management" title={<>Experience, accountability <em>and teamwork.</em></>} copy="Our leadership team is made up of people with distinct responsibilities across the business." />
          <div className="team-page-grid">
            {teamMembers.map((person, index) => (
              <article className="team-profile-card" key={person.name}>
                <div className="team-profile-visual">
                  <Image src={person.image} alt={person.name} fill sizes="(max-width: 600px) 100vw, (max-width: 850px) 50vw, 33vw" />
                  <span className="team-profile-number">0{index + 1}</span>
                </div>
                <div className="team-profile-copy">
                  <p className="eyebrow">{person.role}</p>
                  <h3>{person.name}</h3>
                  <p>Our team brings experience and accountability to the work. Contact Jaseda to learn more about the people behind our services.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="team-note-section">
        <div className="shell team-note">
          <div><p className="eyebrow eyebrow-light">Work with Jaseda</p><h2>Let’s start with<br /><em>a conversation.</em></h2></div>
          <p>Whether you have a construction brief or a cleaning requirement, our team is ready to hear what you need.</p>
          <Link className="button button-gold" href="/contact">Get in touch <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
