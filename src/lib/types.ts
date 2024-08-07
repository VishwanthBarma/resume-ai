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
  
  export interface CertificateItem {
    title: string;
    tag: string;
  }
  
  export type Achievements = string[];

  export type TechnicalExperience = TechnicalExperienceItem[];
  export type Education = EducationItem[];
  export type Projects = ProjectItem[];
  export type Certificates = CertificateItem[];

  export type ResumeData = {
    resumeId: string;
    templateName: string;
    date: string;
    basicDetails: {
      name: string;
      phone: string;
      city: string;
      state: string;
      gmail: string;
      github: string;
      linkedIn: string;
    };
    education: Array<{
      name: string;
      course: string;
      score: string;
      duration: string;
    }>;
    technicalExperience: Array<{
      companyName: string;
      role: string;
      duration: string;
      description: string;
    }>;
    skills: string[];
    projects: Array<{
      name: string;
      techstack: string;
      gitlink: string;
      year: string;
      description: string;
    }>;
    certificates: Array<{
      title: string;
      tag: string;
    }>;
    achievements: string[];
  };
  

  