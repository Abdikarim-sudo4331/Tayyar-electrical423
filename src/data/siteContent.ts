import { SiteContent } from '../types/cms';

export const defaultSiteContent: SiteContent = {
  hero: {
    title: "Bringing Power and\nReliability to Your World",
    subtitle: "Tayyar Electricals",
    description: "Expert solutions for your electrical wiring, installation, and repair needs.",
    ctaText: "Get Free Quote",
    ctaSecondaryText: "View Services"
  },
  about: {
    title: "About Tayyar Electricals",
    description: [
      "Tayyar Electricals Limited (TEL) is a registered Electrical Engineering company based in Nairobi, Kenya. TEL has been involved in many projects varying in magnitude, type and complexity.",
      "We have gained experience and confidence over the years through thorough handling and successful completion of all our projects, both in the private and public sectors. Our operations have covered construction and installation works for diverse industrial concerns as well as multistory commercial buildings and residential complexes. In addition, we have a fully-fledged maintenance department serving domestic and commercial needs.",
      "We believe that the ensuing benefits of our enhanced efficiency shall be reflected by quicker and more accurate response to inquiries and lower costs due to optimum material and time utilization. All of which we tailor to our esteemed clients."
    ],
    values: [
      "Safety is our top priority in every project",
      "Quality workmanship with attention to detail",
      "Transparent pricing with no hidden costs",
      "Reliable service and timely project completion",
      "Ongoing support and maintenance services"
    ],
    credentials: [
      {
        title: "Licensed Electrician",
        description: "Fully licensed and certified electrical contractor with state certification"
      },
      {
        title: "Insured & Bonded",
        description: "Comprehensive insurance coverage and bonding for your peace of mind"
      },
      {
        title: "Experienced Team",
        description: "15+ years of experience in residential and commercial electrical work"
      },
      {
        title: "Code Compliant",
        description: "All work meets or exceeds current electrical codes and safety standards"
      }
    ]
  },
  services: [
    {
      id: "residential-commercial",
      title: "Residential & Commercial",
      description: "Comprehensive electrical installation services for residential apartments, commercial buildings, shopping malls, and hospitals & health facilities.",
      features: ["Residential Apartments", "Commercial Buildings", "Shopping Malls", "Hospitals & Health Facilities"],
      color: "blue"
    },
    {
      id: "industrial-infrastructure",
      title: "Industrial & Infrastructure",
      description: "Specialized electrical installations for data centers, factories, warehouses, and learning institutions with advanced power systems.",
      features: ["Data Centers", "Factories", "Warehouses", "Learning Institutions"],
      color: "green"
    },
    {
      id: "power-systems",
      title: "Power Systems & Substations",
      description: "High voltage and low voltage substation installations, airfield lighting systems, and power reticulation for estates, towns & cities.",
      features: ["HV & LV Substations", "Airfield Lighting (AGL)", "Power Reticulations", "Estate Power Systems"],
      color: "orange"
    },
    {
      id: "maintenance-support",
      title: "Maintenance & Support",
      description: "Fully-fledged maintenance department serving domestic and commercial needs with comprehensive support services.",
      features: ["Preventive Maintenance", "Emergency Repairs", "Domestic Services", "Commercial Support"],
      color: "purple"
    }
  ],
  projects: [
    {
      id: "mama-sarah-apartments",
      title: "Residential Apartments on Plot No. LRN036/VII/201",
      location: "Nairobi",
      units: 0,
      year: "2024",
      image: "/Mama sarah.jpg",
      description: "Comprehensive electrical installation for residential apartments with advanced security and lighting systems. Client: Mama Sarah & Others.",
      features: ["Small power & Lighting", "Earthing & Lightning protection", "Cable Management systems", "Motion detection in parking", "Structural cabling", "CCTV provisions", "TV point provisions", "Façade lighting"],
      status: "Completed"
    },
    {
      id: "tamam-heights",
      title: "Tamam Heights",
      location: "Nairobi",
      units: 0,
      year: "2024",
      image: "/Tamam heights.jpg",
      description: "Mixed-use development containing shops and apartments with comprehensive electrical systems. Client: Abdi Salam & Others.",
      features: ["Small power & Lighting", "Earthing & Lightning protection", "Cable Management systems", "Motion detection in parking", "Structural cabling", "CCTV provisions", "TV point provisions", "Façade lighting"],
      status: "Completed"
    },
    {
      id: "amki-developments",
      title: "Amki Developments",
      location: "Parklands",
      units: 0,
      year: "2024",
      image: "/Amki developers.jpg",
      description: "Apartment development in Parklands where we serve as consultant in charge of design and supervision.",
      features: ["Small power & Lighting", "Earthing & Lightning protection", "Cable Management systems", "Motion detection in parking", "Structural cabling", "CCTV provisions", "TV point provisions", "Intercom provisions", "Façade lighting"],
      status: "Completed"
    },
    {
      id: "nasri-towers",
      title: "Nasri Towers",
      location: "Ushirika",
      units: 0,
      year: "2024",
      image: "/Nasri towers.jpg",
      description: "Mixed-use development at Ushirika containing apartments and a supermarket with advanced electrical systems.",
      features: ["Small power & Lighting", "Earthing & Lightning protection", "Cable Management systems", "Motion detection in parking", "Structural cabling", "CCTV provisions", "TV point provisions", "Façade lighting"],
      status: "Completed"
    },
    {
      id: "khaleel-towers",
      title: "Khaleel Towers",
      location: "Parklands",
      units: 0,
      year: "2024",
      image: "/Khaleel towers- Parklands.jpg",
      description: "Comprehensive electrical installation for residential apartments with advanced security and lighting systems. Client: Mama Sarah & Others.",
      features: ["Small power & Lighting", "Earthing & Lightning protection", "Cable Management systems", "Motion detection in parking", "Structural cabling", "CCTV provisions", "TV point provisions", "Façade lighting"],
      status: "Completed"
    },
    {
      id: "nomad-heights",
      title: "Nomad Heights",
      location: "Eastleigh",
      units: 0,
      year: "2024",
      image: "/Nomad Heights- Eastleigh.jpg",
      description: "Comprehensive electrical installation for residential apartments with advanced security and lighting systems. Client: Mama Sarah & Others.",
      features: ["Small power & Lighting", "Earthing & Lightning protection", "Cable Management systems", "Motion detection in parking", "Structural cabling", "CCTV provisions", "TV point provisions", "Façade lighting"],
      status: "Completed"
    },
    {
      id: "sagal-heights",
      title: "Sagal Heights",
      location: "Juja road",
      units: 0,
      year: "2024",
      image: "/Sagal Heights- Juja road.jpg",
      description: "Comprehensive electrical installation for residential apartments with advanced security and lighting systems. Client: Mama Sarah & Others.",
      features: ["Small power & Lighting", "Earthing & Lightning protection", "Cable Management systems", "Motion detection in parking", "Structural cabling", "CCTV provisions", "TV point provisions", "Façade lighting"],
      status: "Completed"
    },
    {
      id: "tamaam-ii-towers",
      title: "Tamaam II Towers",
      location: "Eastleigh",
      units: 0,
      year: "2024",
      image: "/Tamaam II Towers- Eastleigh.jpg",
      description: "Comprehensive electrical installation for residential apartments with advanced security and lighting systems. Client: Mama Sarah & Others.",
      features: ["Small power & Lighting", "Earthing & Lightning protection", "Cable Management systems", "Motion detection in parking", "Structural cabling", "CCTV provisions", "TV point provisions", "Façade lighting"],
      status: "Completed"
    },
  ],
  contact: {
    phone: "+254 727 381169",
    email: "info@tayyarelectricals.com",
    address: "Al Falaq Building S1 3rd Street, Eastleigh Nairobi Kenya",
    businessHours: "Mon-Fri: 7AM-6PM",
    emergencyAvailable: true
  },
  partners: [
    {
      id: "partner-network",
      name: "Partner Network",
      logo: "/partners.PNG",
      description: "Our trusted partner ecosystem"
    }
  ],
  company: {
    name: "Tayyar Electricals",
    tagline: "Professional Electrical Services",
    logo: "/Tayyar logo.jpg",
    socialMedia: {
      facebook: "https://web.facebook.com/Tayyar.elecric",
      linkedin: "https://www.linkedin.com/in/tayyar-electricals-623008259/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=ke"
    }
  }
};