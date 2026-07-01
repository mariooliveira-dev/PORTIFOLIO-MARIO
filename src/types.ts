export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link: string;
  isComingSoonOrUpdating?: boolean;
  category: 'systems' | 'websites' | 'all';
}

export interface Skill {
  name: string;
  category: 'tech' | 'tools' | 'admin';
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
}

export interface Differential {
  title: string;
  description: string;
}

export interface ContactInfo {
  whatsapp: string;
  whatsappDisplay: string;
  linkedin: string;
  linkedinDisplay: string;
  github: string;
  githubDisplay: string;
  email: string;
}
