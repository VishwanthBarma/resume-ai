// store/resume-store.ts
import create from 'zustand';
import { persist } from 'zustand/middleware';

interface ResumeStore {
    resumeFile: File | null;
    resumeSuggestions: any; 
    setResumeFile: (file: File | null) => void;
    setResumeSuggestions: (suggestions: any) => void;
}

export const useResumeStore = create<ResumeStore>()(
    persist(
        (set) => ({
            resumeFile: null,
            resumeSuggestions: null,
            setResumeFile: (file: File | null) => set({ resumeFile: file }),
            setResumeSuggestions: (suggestions: any) => set({ resumeSuggestions: suggestions }),
        }),
        {
            name: 'resume-storage', // Key for localStorage
            getStorage: () => localStorage, // Use localStorage for persistence
        }
    )
);
