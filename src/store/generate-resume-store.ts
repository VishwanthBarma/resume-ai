// store/generate-resume-store.ts
import { persist, createJSONStorage } from 'zustand/middleware';
import { create } from 'zustand';
import { Achievements, BasicDetails, Certificates, Education, Projects, Skills, TechnicalExperience, EducationItem, TechnicalExperienceItem, ProjectItem, CertificateItem } from '@/lib/types';

interface GenerateResumeState {
    basicDetails: BasicDetails;
    education: Education;
    technicalExperience: TechnicalExperience;
    skills: Skills;
    projects: Projects;
    certificates: Certificates;
    achievements: Achievements;
    resumeId: string | null;
    setBasicDetails: (updater: (prev: BasicDetails) => BasicDetails) => void;
    setEducation: (updater: (prev: Education) => Education) => void;
    setTechnicalExperience: (updater: (prev: TechnicalExperience) => TechnicalExperience) => void;
    setSkills: (updater: (prev: Skills) => Skills) => void;
    setProjects: (updater: (prev: Projects) => Projects) => void;
    setCertificates: (updater: (prev: Certificates) => Certificates) => void;
    setAchievements: (updater: (prev: Achievements) => Achievements) => void;
    setResumeId: (id: string | null) => void;
    resetState: () => void;
}

export const useGenerateResumeStore = create<GenerateResumeState>()(
    persist(
        (set) => ({
            basicDetails: { name: '', phone: '', city: '', state: '', gmail: '', github: '', linkedIn: '' },
            education: [{ name: '', course: '', score: '', duration: '' }],
            technicalExperience: [{ companyName: '', role: '', duration: '', description: '' }],
            skills: [],
            projects: [{ name: '', techstack: '', gitlink: '', year: '', description: '' }],
            certificates: [{ title: '', tag: '' }],
            achievements: ['', ''],
            resumeId: null,
            setBasicDetails: (updater) => set((state) => ({
                basicDetails: updater(state.basicDetails)
            })),
            setEducation: (updater) => set((state) => ({
                education: updater(state.education)
            })),
            setTechnicalExperience: (updater) => set((state) => ({
                technicalExperience: updater(state.technicalExperience)
            })),
            setSkills: (updater) => set((state) => ({
                skills: updater(state.skills)
            })),
            setProjects: (updater) => set((state) => ({
                projects: updater(state.projects)
            })),
            setCertificates: (updater) => set((state) => ({
                certificates: updater(state.certificates)
            })),
            setAchievements: (updater) => set((state) => ({
                achievements: updater(state.achievements)
            })),
            setResumeId: (id) => set({ resumeId: id }),
            resetState: () => {
                set({
                    basicDetails: { name: '', phone: '', city: '', state: '', gmail: '', github: '', linkedIn: '' },
                    education: [{ name: '', course: '', score: '', duration: '' }],
                    technicalExperience: [{ companyName: '', role: '', duration: '', description: '' }],
                    skills: [],
                    projects: [{ name: '', techstack: '', gitlink: '', year: '', description: '' }],
                    certificates: [{ title: '', tag: '' }],
                    achievements: ['', ''],
                    resumeId: null,
                });
                localStorage.removeItem('generate-resume-storage');
            }
        }),
        {
            name: 'generate-resume-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
