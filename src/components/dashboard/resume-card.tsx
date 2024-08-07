'use client'
import { ResumeData } from '@/lib/types';
import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useGenerateResumeStore } from '@/store/generate-resume-store';
import { useRouter } from 'next/navigation';
import { LoaderCircle } from 'lucide-react';

interface ResumeCardProps {
    resumeData: ResumeData;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ resumeData }) => {

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const { setBasicDetails, setEducation, setTechnicalExperience, setSkills, setProjects, setCertificates, setAchievements, setResumeId, resetState } = useGenerateResumeStore();

    const date = new Date(resumeData.date);
    const relativeTime = formatDistanceToNow(date, { addSuffix: true });

    const handleClick = () => {
        setLoading(true);

        try{
            resetState();
    
            // Set new resume data to global state
            setBasicDetails(() => resumeData.basicDetails);
            setEducation(() => resumeData.education);
            setTechnicalExperience(() => resumeData.technicalExperience);
            setSkills(() => resumeData.skills);
            setProjects(() => resumeData.projects);
            setCertificates(() => resumeData.certificates);
            setAchievements(() => resumeData.achievements);
            setResumeId(resumeData.resumeId);
    
            // Navigate to the specified route
            router.push('/generate-resume/resume-templates/standard-template');
        }catch(error){
            console.log("Unable to open resume.", error);
        }finally{
            setLoading(false);
        }
    }

    return (
        <button
            onClick={handleClick}
            className='h-64 w-64 bg-neutral-900 rounded-xl hover:scale-105 transition ease-in-out'>
            {
                loading ? 
                <>
                <LoaderCircle className="h-5 w-5 animate-spin"/>
                </>
                :
                <div className='flex flex-col'>
                    <h1 className='text-sky-500'>{resumeData.templateName}</h1>
                    <h1 className='text-sm text-slate-500'>Update: {relativeTime}</h1>
                </div>
            }
        </button>
    );
}

export default ResumeCard;
