export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaSecondaryText: string;
  };
  about: {
    title: string;
    description: string[];
    values: string[];
    credentials: Array<{
      title: string;
      description: string;
    }>;
  };
  services: Array<{
    id: string;
    title: string;
    description: string;
    features: string[];
    color: string;
  }>;
  projects: Array<{
    id: string;
    title: string;
    location: string;
    units: number;
    year: string;
    image: string;
    description: string;
    features: string[];
    status: string;
  }>;
  contact: {
    phone: string;
    email: string;
    address: string;
    businessHours: string;
    emergencyAvailable: boolean;
  };
  partners: Array<{
    id: string;
    name: string;
    logo: string;
    description: string;
  }>;
  company: {
    name: string;
    tagline: string;
    logo: string;
    socialMedia: {
      facebook: string;
      linkedin: string;
    };
  };
}

export interface CMSConfig {
  githubToken: string;
  githubRepo: string;
  githubOwner: string;
  branch: string;
}

export interface AdminUser {
  username: string;
  password: string;
  isAuthenticated: boolean;
}