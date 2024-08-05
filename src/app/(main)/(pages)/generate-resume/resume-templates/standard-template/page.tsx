'use client'
import FormStandardTemplate from '@/components/generate-resume/resume-template-forms/standard-template/form-standard-template'
import React, { useState } from 'react'
import { BasicDetails, Education, TechnicalExperience, Skills, Certificates, Achievements, Projects } from '@/lib/types'


const StandardTemplate = () => {

  const [basicDetails, setBasicDetails] = useState<BasicDetails>({
    name: '',
    phone: '',
    city: '',
    state: '',
    gmail: '',
    github: '',
    linkedIn: '',
  })

  const [education, setEducation] = useState<Education>([
    { name: '', course: '', score: '', duration: '' }
  ])

  const [technicalExperience, setTechnicalExperience] = useState<TechnicalExperience>([
    { companyName: '', role: '', duration: '', description: '' }
  ]);

  const [skills, setSkills] = useState<Skills>([]);

  const [projects, setProjects] = useState<Projects>([
    {name: '', techstack: '', gitlink: '', year: '', description: ''}
  ])

  const [certificates, setCertificates] = useState<Certificates>({
    certificate1: '',
    certificate2: '',
  })

  const [achievements, setAchievements] = useState<Achievements>({
    achievement1: "",
    achievement2: "",
    achievement3: "",
  })



  return (
    <div className='flex gap-10 h-full p-6 px-14'>
      <div className='flex-1 flex flex-col gap-4 h-full'>
        <h1
        className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500'>
          Generate Resume</h1>

        {/* Resume Form */}
        <div className='px-5 h-full'>
          <FormStandardTemplate 
          setBasicDetails={setBasicDetails}
          setEducation={setEducation}
          setTechnicalExperience={setTechnicalExperience}
          setSkills={setSkills}
          setProjects={setProjects}
          setCertificates={setCertificates}
          setAchievements={setAchievements}
          basicDetails={basicDetails}
          education={education}
          technicalExperience={technicalExperience}
          skills={skills}
          projects={projects}
          certificates={certificates}
          achievements={achievements}
          />
        </div>
        
      </div>

      {/* Resume Viewer */}
      <div className='w-2/5 max-h-full overflow-hidden overflow-y-scroll'>

        {/* Render Standard Resume */}
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
      </div>
    </div>
  )
}

export default StandardTemplate