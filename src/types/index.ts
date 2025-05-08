 export interface PortfolioSectionType {
  id: string;
  title: string;
  lat: number;
  lng: number;
  desc?: string;
  url?: string;
  isProject?: boolean;
}


// Type definitions for different section content structures
export interface AboutContent {
  bio: string;
  interests: string[];
  philosophy: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillsContent {
  technical: SkillItem[];
  soft: string[];
  tools: string[];
}

export interface Job {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  gradYear: string;
  achievements: string[];
}

export interface ExperienceContent {
  jobs: Job[];
  education: Education;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  link: string;
}

export interface ProjectsContent {
  featuredProjects: Project[];
  caseStudies: CaseStudy[];
}

export interface ContactContent {
  email: string;
  linkedin: string;
  github: string;
  twitter: string;
  availability: string;
  preferredContact: string;
  location: string;
}

export type SectionContentType = AboutContent | SkillsContent | ExperienceContent | ProjectsContent | ContactContent;

export interface SectionContentProps {
  sectionId: string;
  content: SectionContentType;
}