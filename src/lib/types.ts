// types.ts
export interface BasicDetails {
    name: string;
    phone: string;
    city: string;
    state: string;
    gmail: string;
    github: string;
    linkedIn: string;
  }

  
  export interface EducationItem {
    name: string;
    course: string;
    score: string;
    duration: string;
  }
  
  export interface TechnicalExperienceItem {
      companyName: string;
      role: string;
      duration: string;
      description: string;
  }

  export type Skills = string[];
  
  export interface ProjectItem {
    name: string;
    techstack: string;
    gitlink: string;
    year: string;
    description: string;
  }
  
  export interface Certificates {
    certificate1: string;
    certificate2: string;
  }
  
  export interface Achievements {
    achievement1: string;
    achievement2: string;
    achievement3: string;
  }

  export type TechnicalExperience = TechnicalExperienceItem[];
  export type Education = EducationItem[];
  export type Projects = ProjectItem[];
  