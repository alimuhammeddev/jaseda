export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  includes: string[];
  benefits: string[];
};

export const constructionServices: Service[] = [
  {
    slug: "residential-building",
    title: "Residential Building",
    shortDescription: "Thoughtful building and improvement work for residential properties.",
    description: "From new residential building work to considered improvements, we work with clients to understand the brief and plan a practical route from concept to completion.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Contemporary residential architecture with a welcoming entrance",
    includes: ["Residential building work", "Property improvements", "Interior finishing", "Project coordination"],
    benefits: ["A clear conversation about your priorities", "A scope shaped around your property", "Careful coordination throughout the work"],
  },
  {
    slug: "commercial-development",
    title: "Commercial Development",
    shortDescription: "Practical construction support for commercial spaces and developments.",
    description: "We help clients plan and deliver commercial building work with attention to how a space will function, the project requirements and the people who use it.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Well-planned contemporary commercial interior",
    includes: ["Commercial building work", "Space improvements", "Interior fit-out coordination", "Project planning"],
    benefits: ["A scope aligned to your business needs", "Coordinated specialist trades", "A considered approach to delivery"],
  },
  {
    slug: "project-management",
    title: "Project Management",
    shortDescription: "Structured coordination to keep project requirements and teams aligned.",
    description: "Effective project management starts with understanding the outcome you need. We help establish the scope, organise the work and keep communication clear as a project progresses.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Project team reviewing plans and coordinating work",
    includes: ["Initial project discussions", "Scope and programme planning", "Trade and work coordination", "Progress communication"],
    benefits: ["A more organised project journey", "Clearer responsibilities and expectations", "Support with coordinating the work"],
  },
  {
    slug: "architecture-engineering",
    title: "Architecture & Engineering",
    shortDescription: "Design and technical planning support for property projects.",
    description: "We help clients explore the design and technical considerations that shape a property project. The right team and scope depend on the brief and project requirements.",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Architectural detail on a modern building",
    includes: ["Early-stage project discussions", "Design coordination", "Technical requirement planning", "Specialist support coordination"],
    benefits: ["A joined-up view of project needs", "Considered design and delivery conversations", "A scope tailored to your project"],
  },
  {
    slug: "drylining",
    title: "Drylining",
    shortDescription: "Drylining and interior wall finishing for building and renovation work.",
    description: "Our drylining service supports construction and renovation projects, with the work planned around the condition of the property and the finish required.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Interior construction work in progress",
    includes: ["Drylining installation", "Wall and ceiling preparation", "Tape and joint finishing", "Coordination with related trades"],
    benefits: ["A finish suited to the space", "Work coordinated with the wider project", "Clear scope before work begins"],
  },
  {
    slug: "painting-decorating",
    title: "Painting & Decorating",
    shortDescription: "Interior painting and decorating for residential and commercial spaces.",
    description: "Careful preparation and a considered finish make a difference to a room. We discuss the space, surfaces and finish you have in mind before agreeing the work.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Freshly decorated interior with a calm neutral finish",
    includes: ["Surface preparation", "Interior painting", "Decorative finishing", "Residential and commercial spaces"],
    benefits: ["Finishes considered for the space", "Preparation included in the agreed scope", "Work planned around your requirements"],
  },
  {
    slug: "carpentry",
    title: "Carpentry",
    shortDescription: "Carpentry and joinery support for property projects and interiors.",
    description: "From practical interior work to project-specific carpentry, we discuss the details and desired finish so the work fits the wider space and brief.",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Carpenter shaping timber for an interior project",
    includes: ["Interior carpentry", "Fittings and fixtures", "Timber finishing", "Coordination with other trades"],
    benefits: ["Work matched to the project scope", "Careful attention to fit and finish", "Clear planning with related trades"],
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    shortDescription: "Plumbing support for construction, renovation and property work.",
    description: "We discuss your plumbing requirements and the context of the work before agreeing a suitable scope, whether as part of a wider project or a specific property improvement.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Plumbing fixtures being installed as part of a property project",
    includes: ["Plumbing installation work", "Property improvement support", "Coordination with related trades", "Project-specific requirements"],
    benefits: ["A scope based on your property needs", "Work coordinated with the wider project", "Clear discussion before delivery"],
  },
  {
    slug: "electrical-services",
    title: "Electrical Services",
    shortDescription: "Electrical work coordinated with construction and property requirements.",
    description: "Electrical needs vary by property and project. We begin with the requirements and help identify an appropriate scope and coordination for the work.",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Electrical installation in a property under construction",
    includes: ["Project-specific electrical work", "Installation coordination", "Property improvement support", "Related trade planning"],
    benefits: ["Requirements considered at the outset", "Work planned alongside other trades", "A scope that fits the project"],
  },
];

export const cleaningServices: Service[] = [
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    shortDescription: "Cleaning support for offices, retail spaces and other workplaces.",
    description: "A clean workplace supports the people who use it every day. We discuss your premises, priorities and preferred schedule to shape a practical cleaning plan.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Professional cleaner maintaining a modern commercial space",
    includes: ["Workplace cleaning", "Shared areas and surfaces", "Flexible cleaning schedules", "Tailored cleaning plans"],
    benefits: ["A plan designed around your premises", "Scheduling discussed to suit your operation", "Clear expectations for the service"],
  },
  {
    slug: "residential-cleaning",
    title: "Residential Cleaning",
    shortDescription: "Home cleaning tailored to the spaces and routines that matter to you.",
    description: "We provide residential cleaning with an approach shaped around your home, priorities and preferred schedule, from regular upkeep to a one-off visit.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Careful cleaning of a bright home interior",
    includes: ["Regular home cleaning", "One-off cleaning visits", "Room-specific priorities", "Move-related cleaning discussions"],
    benefits: ["A service tailored to your home", "Flexible requirements discussed in advance", "A clear understanding of the work"],
  },
  {
    slug: "specialised-cleaning",
    title: "Specialised Cleaning",
    shortDescription: "Cleaning planned around specific environments and requirements.",
    description: "Some settings call for a more considered approach. We first discuss the space, the work required and any site-specific considerations before agreeing what can be provided.",
    image: "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Professional cleaning equipment ready for a detailed cleaning task",
    includes: ["Site-specific cleaning discussions", "Deep cleaning requirements", "Post-work cleaning enquiries", "Tailored scope planning"],
    benefits: ["Requirements discussed before scheduling", "A scope suited to the environment", "Clear coordination with the client"],
  },
  {
    slug: "environmental-cleaning",
    title: "Environmental Cleaning",
    shortDescription: "Cleaning support where site conditions call for careful planning.",
    description: "Environmental cleaning requirements differ from site to site. We discuss the location and needs before confirming an appropriate service scope.",
    image: "https://images.unsplash.com/photo-1528323273322-d81458248d40?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Clean outdoor environment with greenery and a cared-for public space",
    includes: ["Site condition discussions", "Cleaning scope planning", "Requirements assessment", "Service coordination"],
    benefits: ["An approach informed by the site", "Requirements clarified before work begins", "A considered plan for the requested service"],
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    shortDescription: "Detailed cleaning for spaces that need more than routine upkeep.",
    description: "Deep cleaning gives extra attention to areas that need a thorough refresh. We agree the priorities and scope with you before arranging the work.",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Fresh, carefully maintained interior after a detailed clean",
    includes: ["Detailed room cleaning", "Kitchen and bathroom priorities", "Move-in or move-out enquiries", "One-off cleaning visits"],
    benefits: ["A focus on your priority areas", "Scope agreed before the visit", "Suitable for a one-off refresh"],
  },
  {
    slug: "eco-friendly-cleaning",
    title: "Eco-friendly Cleaning",
    shortDescription: "Discuss cleaning options with environmental considerations in mind.",
    description: "If environmental considerations are important to your cleaning brief, let us know. We can discuss product and process requirements as part of planning your service.",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Reusable cleaning materials arranged in a bright room",
    includes: ["Cleaning preference discussions", "Product requirements", "Tailored service planning", "Scheduling around your premises"],
    benefits: ["Preferences considered at planning stage", "A service shaped around your requirements", "Clear discussion of available options"],
  },
];

export const teamMembers = [
  { name: "Frank Nii Tete Annan", role: "Chief Executive Officer", initials: "FA", image: "https://www.jasedas.com/images/frank.jpg" },
  { name: "Jacob Enwunli-Nwolley", role: "Health and Safety Executive", initials: "JE", image: "https://www.jasedas.com/images/jacob.jpeg" },
  { name: "Daniel Badu Agyekum", role: "Project / Commercial Manager", initials: "DA", image: "https://www.jasedas.com/images/daniel.jpg" },
  { name: "Joseph Abula", role: "General Manager", initials: "JA", image: "https://www.jasedas.com/images/joseph-abula.jpg" },
  { name: "Dylan Mohammed", role: "Head of Logistics", initials: "DM", image: "https://www.jasedas.com/images/dylan.jpg" },
];
