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
                {
                    basicDetails.name !== '' ?
                    <h1 className='text-2xl font-bold'>{basicDetails.name}</h1>
                    :
                    <h1 className='text-2xl font-bold'>Your Name</h1>
                }
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
                <h1 className='text-[12px] text-teal-800 border-b-[1px] border-neutral-300 w-full'>Education</h1>
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
                <h1 className='text-[12px] text-teal-800 border-b-[1px] border-neutral-300 w-full'>Technical Experience</h1>
                <div className='flex flex-col gap-1'>
                    {
                        technicalExperience.map((item, index) => (
                            <div key={index} className='flex flex-col'>
                                <div className='font-bold flex justify-between text-[10px]'>
                                    <h1 className=''>{item.companyName}</h1>
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
          <div className='flex text-[10px] flex-col'>
                <h1 className='text-[12px] text-teal-800 border-b-[1px] border-neutral-300 w-full'>Skills</h1>
                <div className='grid grid-flow-col auto-cols-max justify-center'>
                    {
                        skills.map((item, index) => (
                            <div className='' key={index}>
                                <h1 className='flex items-center'>{item}
                                {
                                    index < (skills.length - 1) && (
                                        <span className='mx-1'>|</span>
                                    )
                                }
                                </h1>
                            </div>
                        ))
                    }
                </div>
          </div>

          {/* Projects */}
          <div className='flex text-[8px] flex-col'>
                <h1 className='text-[12px] text-teal-800 border-b-[1px] border-neutral-300 w-full'>Projects</h1>
                {
                    projects.map((item, index) => (
                        <div key={index} className='flex flex-col'>
                            <div className='font-bold text-[10px] flex justify-between'>
                                <div className='flex items-center'>
                                    <h1 className=''>{item.name}</h1>
                                    <span className={`${item.name !== '' && item.techstack !== '' ? '' : 'hidden'}`}>-</span>
                                    {item.techstack && (
                                        <span className='ml-1 text-gray-700 text-[8px]'>
                                            ( {item.techstack} )
                                        </span>
                                    )}
                                </div>

                                <div className='flex'>
                                    <a href={item.gitlink} target="_blank" rel="noopener noreferrer" className={`text-teal-800 ${item.gitlink !== '' ? '' : 'hidden'}`}>GitHub</a>
                                    <span className={`${item.gitlink !== '' && item.year !== '' ? '' : 'hidden'} mx-[2px]`}>|</span>
                                    <h1>{item.year}</h1>
                                </div>
                            </div>
                            <h1 className='leading-[1.38]'>{renderDescription(item.description)}</h1>
                        </div>
                    ))
                }
          </div>

          {/* Certificates */}
          <div className='flex text-[8px] flex-col'>
                <h1 className='text-[12px] text-teal-800 border-b-[1px] border-neutral-300 w-full'>Certificates</h1>
                <div className='flex flex-col'>
                    {
                        certificates.map((item, index) => (
                            <div key={index} className='flex items-center'>
                                <h1 className='font-semibold'><span className={`${item.title !== '' ? '' : 'hidden'} mr-[2px]`}>•</span>
                                {item.title}</h1>
                                <h1><span className={`${item.title !== '' && item.tag !== '' ? '' : 'hidden'} mx-[2px]`}>|</span>{item.tag}</h1>
                            </div>
                        ))
                    }
                </div>
          </div>

          {/* Achievements */}
          <div className='flex text-[8px] flex-col'>
                <h1 className='text-[12px] text-teal-800 border-b-[1px] border-neutral-300 w-full'>Achievements</h1>
                <div className='flex flex-col'>
                    {
                        achievements.map((item, index) => (
                            <div key={index} className='flex items-center'>
                                
                                <h1 className=''><span className={`${item !== '' ? '' : 'hidden'} mr-[2px]`}>•</span>{item}</h1>
                            </div>
                        ))
                    }
                </div>
          </div>

        </div>
    )
}

export default ResumePreviewStandardTemplate
