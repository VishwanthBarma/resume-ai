'use client'
import { ResumeData } from '@/lib/types';
import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useGenerateResumeStore } from '@/store/generate-resume-store';
import { useRouter } from 'next/navigation';
import { FileText, LoaderCircle } from 'lucide-react';
import { MeteorCard } from '../global/meteor-card';

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
        <div className="h-64 w-64">
      <div className="w-full h-full relative max-w-xs">
        <div className="relative shadow-xl bg-gradient-to-r from-slate-900 to-slate-950 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start gap-1">

            <FileText />
 
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            {resumeData.templateName}
          </h1>
 
          <h1 className='text-sm mb-2'>Update: <br/>{relativeTime}</h1>
 
          <button
          onClick={handleClick}
           className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300 hover:bg-black">
            Open
          </button>
 
          {/* Meaty part - Meteor effect */}
          <MeteorCard number={20} />
        </div>
      </div>
    </div>
    );
}

export default ResumeCard;
