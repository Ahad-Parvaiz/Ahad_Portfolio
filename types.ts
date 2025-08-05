
export interface Certification {
  name: string;
  url: string;
}

export interface Project {
  name: string;
  description: string;
  github?: string;
  live?: string;
}

export interface Skill {
  axis: string;
  value: number;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}