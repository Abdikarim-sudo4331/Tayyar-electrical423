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
      id: "sunrise-apartments",
      title: "Sunrise Apartments",
      location: "Downtown District",
      units: 120,
      year: "2024",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete electrical installation for a 12-story luxury apartment complex featuring smart home integration and energy-efficient LED lighting throughout.",
      features: ["Smart Home Wiring", "Energy Efficient Systems", "Emergency Backup Power", "EV Charging Stations"],
      status: "Completed"
    },
    {
      id: "garden-view-residences",
      title: "Garden View Residences",
      location: "Suburban Area",
      units: 80,
      year: "2024",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive electrical renovation and upgrade for an existing apartment building, including panel upgrades and modern fixture installations.",
      features: ["Panel Upgrades", "Modern Fixtures", "Safety Compliance", "Tenant Coordination"],
      status: "In Progress"
    },
    {
      id: "university-commons",
      title: "University Commons",
      location: "University District",
      units: 200,
      year: "2023",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Large-scale electrical infrastructure for student housing complex with high-speed internet wiring and study area lighting optimization.",
      features: ["High-Speed Data Wiring", "Study Area Lighting", "Common Area Systems", "Maintenance Planning"],
      status: "Completed"
    }
  ],
  contact: {
    phone: "+254 768 817662",
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