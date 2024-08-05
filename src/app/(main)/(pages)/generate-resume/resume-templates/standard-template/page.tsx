'use client'
import FormStandardTemplate from '@/components/generate-resume/resume-template-forms/standard-template/form-standard-template'
import React, { useState } from 'react'
import { BasicDetails, Education, TechnicalExperience, Skills, Certificates, Achievements, Projects } from '@/lib/types'
import ResumePreviewStandardTemplate from '@/components/generate-resume/resume-template-forms/standard-template/resume-preview-standard-template'


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

  const [certificates, setCertificates] = useState<Certificates>([
    {title: '', tag: ''}
  ])

  const [achievements, setAchievements] = useState<Achievements>(['', ''])



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
        <ResumePreviewStandardTemplate
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
  )
}

export default StandardTemplate