'use client'
import FormStandardTemplate from '@/components/generate-resume/resume-template-forms/standard-template/form-standard-template'
import React, { useRef, useState } from 'react'
import { BasicDetails, Education, TechnicalExperience, Skills, Certificates, Achievements, Projects } from '@/lib/types'
import ResumePreviewStandardTemplate from '@/components/generate-resume/resume-template-forms/standard-template/resume-preview-standard-template'
import { FileDown, Save } from 'lucide-react'
import ReactToPrint from 'react-to-print';
import { useGenerateResumeStore } from '@/store/generate-resume-store'


const StandardTemplate = () => {
  const {
    basicDetails,
    education,
    technicalExperience,
    skills,
    projects,
    certificates,
    achievements,
    setBasicDetails,
    setEducation,
    setTechnicalExperience,
    setSkills,
    setProjects,
    setCertificates,
    setAchievements,
  } = useGenerateResumeStore();


  const [resumeFileName, setResumeFileName] = useState('');
  const resumeRef = useRef(null);

  const handleSaveProgress = () => {
    // store in database
  }

  return (
    <div className='flex gap-10 h-full p-6 px-14'>
      <div className='flex-1 flex flex-col gap-4 h-full'>
        <div className='flex justify-between'>
          <h1
          className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-300'>
            Generate Resume
          </h1>
          <div className='flex gap-5'>
            <ReactToPrint
              trigger={() => (
                <button
                  className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center hover:opacity-90 disabled:cursor-default disabled:opacity-50'
                >
                  <FileDown className='h-4 w-4' />
                  <p className='ml-1 text-sm'>Download PDF</p>
                </button>
              )}
              content={() => resumeRef.current}
              pageStyle="@page { size: A4; margin: 0; }"
              documentTitle='GeneratedResume- Resume.AI'
            />
            <div className='flex gap-1'>
              <input
              placeholder='Add file name to save: '
              className='focus:ring-0 bg-neutral-900 border-none text-sm rounded-lg'
              value={resumeFileName}
              onChange={(e) => setResumeFileName(e.target.value)}
              >
              </input>
              <button
              disabled={resumeFileName === ''}
                onClick={handleSaveProgress}
                    className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center hover:opacity-90 disabled:cursor-default disabled:opacity-50'
                >
                    <Save className='h-4 w-4' />
                    <p className='ml-1 text-sm'>Save</p>
              </button>
            </div>
          </div>
        </div>

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
      <div className='w-2/5 h-full overflow-hidden overflow-y-scroll'>

        {/* Render Standard Resume */}
        <div ref={resumeRef} className='h-full w-full'>
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
    </div>
  )
}

export default StandardTemplate