import { db } from '@/firebase';
import { collection, doc, setDoc, getDocs, query } from 'firebase/firestore';


interface ResumeData {
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
}

// Save or update a resume
export const saveResumeProgress = async (userId: string, resumeId: string | null, resumeData: ResumeData) => {
  try {

    const resumeRef = resumeId
      ? doc(db, 'users', userId, 'resumes', resumeId)
      : doc(collection(db, 'users', userId, 'resumes'));

    if(resumeId){
        await setDoc(resumeRef, resumeData, { merge: true });
    }else{
        await setDoc(resumeRef, resumeData);
    }

    return { success: true, resumeId: resumeRef.id };
  } catch (error) {
    console.error('Error saving resume progress: ', error);
    return { success: false, error: (error as Error).message };
  }
};

// Retrieve all resumes for a user
export const getUserResumes = async (userId: string) => {
  try {
    const querySnapshot = await getDocs(collection(db, "users", userId, "resumes"));

    const resumes = querySnapshot.docs.map(doc => ({
      resumeId: doc.id,
      ...doc.data(),
    }));

    return { success: true, resumes };
  } catch (error) {
    console.error('Error fetching user resumes: ', error);
    return { success: false, error: (error as Error).message };
  }
};

