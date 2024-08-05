import { Achievements, BasicDetails, Certificates, Education, Projects, Skills, TechnicalExperience } from '@/lib/types'
import React from 'react'

interface ResumePreviewStandardTemplateProps {
    basicDetails: BasicDetails;
    education: Education;
    technicalExperience: TechnicalExperience;
    skills: Skills;
    projects: Projects;
    certificates: Certificates;
    achievements: Achievements;
}

const ResumePreviewStandardTemplate: React.FC<ResumePreviewStandardTemplateProps> = ({
    basicDetails,
    education,
    technicalExperience,
    skills,
    projects,
    certificates,
    achievements
}) => {
    return (
        <div className='h-full bg-slate-100 w-full rounded-xl flex flex-col gap-2 text-neutral-800 p-5'>

          {/* Basic Details */}
            <div className='flex justify-between items-end border-b-2 pb-1 border-teal-800'>
                <div className='flex flex-col text-[8px] w-1/5'>
                    <h1>{basicDetails.phone}</h1>
                    <h1>{basicDetails.city}, {basicDetails.state}</h1>
                    <h1 className='text-teal-800'>{basicDetails.gmail}</h1>
                </div>
                <div>
                <h1 className='text-2xl font-bold'>{basicDetails.name}</h1>
                </div>
                    <div className='text-[8px] text-right w-1/5'>
                    <h1 className='text-teal-800'>GitHub: {basicDetails.github}</h1>
                    <h1 className='text-teal-800'>LinkedIn: {basicDetails.linkedIn}</h1>
                </div>
            </div>

          {/* Education */}
          

          {/* Technical Experience */}
          <div className='flex text-[8px] flex-col'>
                <h1 className='text-[12px] text-teal-800 border-b-[1px] border-neutral-300 w-full'>Technical Experience</h1>
                <div className='flex flex-col'>
                
                </div>
          </div>

          {/* Skills */}
          <div>

          </div>

          {/* Projects */}
          <div>

          </div>

          {/* Certificates */}
          <div>

          </div>

          {/* Achievements */}
          <div>

          </div>

        </div>
    )
}

export default ResumePreviewStandardTemplate
