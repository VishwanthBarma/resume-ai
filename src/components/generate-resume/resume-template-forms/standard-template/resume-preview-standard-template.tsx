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

    const renderDescription = (description: string) => {
        return description.split('\n').map((line, index) => (
          line.trim() ? <div key={index}>{line}</div> : null
        ));
      };

    return (
        <div className='h-full bg-slate-100 w-full rounded-xl flex flex-col gap-[3px] text-neutral-800 p-5'>

          {/* Basic Details */}
            <div className='flex justify-between items-end border-b-2 pb-1 border-teal-800'>
                <div className='flex flex-col text-[8px] w-1/5'>
                    <h1>{basicDetails.phone}</h1>
                    <h1>{basicDetails.city}<span className={`${basicDetails.city === '' ? 'hidden' : ''}`}>, </span>{basicDetails.state}</h1>
                    <h1 className='text-teal-800'>{basicDetails.gmail}</h1>
                </div>
                <div>
                <h1 className='text-2xl font-bold'>{basicDetails.name}</h1>
                </div>
                    <div className='text-[8px] text-right w-1/5 flex flex-col'>
                        {
                            basicDetails.github && 
                            <a href={basicDetails.github} target="_blank" rel="noopener noreferrer" className='text-teal-800'>GitHub</a>
                        }
                        {
                            basicDetails.linkedIn && 
                            <a href={basicDetails.linkedIn} target="_blank" rel="noopener noreferrer" className='text-teal-800'>LinkedIn</a>
                        }
                    </div>
            </div>

          {/* Education */}
          <div className='flex text-[8px] flex-col'>
                <h1 className='text-[10px] text-teal-800 border-b-[1px] border-neutral-300 w-full'>Education</h1>
                <div className='flex flex-col'>
                    {
                        education.map((item, index) => (
                            <div key={index} className='flex justify-between'>
                                <div className='flex gap-[2px]'>
                                    <h1 className='font-bold'>{item.course}<span className={`${item.course === '' ? 'hidden' : ''}`}>,</span></h1>
                                    <h1>{item.name}</h1>
                                </div>
                                <div className='flex gap-[2px]'>
                                    <h1>{item.score}<span className={`${item.score !== '' && item.duration !== '' ? '' : 'hidden'}`}> |</span></h1>
                                    <h1> {item.duration}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
          </div>
          

          {/* Technical Experience */}
          <div className='flex text-[8px] flex-col'>
                <h1 className='text-[10px] text-teal-800 border-b-[1px] border-neutral-300 w-full'>Technical Experience</h1>
                <div className='flex flex-col gap-1'>
                    {
                        technicalExperience.map((item, index) => (
                            <div key={index} className='flex flex-col'>
                                <div className='font-bold flex justify-between'>
                                    <h1>{item.companyName}</h1>
                                    <h1>{item.duration}</h1>
                                </div>
                                <h1 className='italic'>{item.role}</h1>
                                <h1 className='leading-[1.38]'>{renderDescription(item.description)}</h1>
                            </div>
                        ))
                    }
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
