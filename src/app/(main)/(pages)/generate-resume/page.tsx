import ResumeTemplate from '@/components/generate-resume/resume-template'
import { resumeTemplates } from '@/lib/constant'
import React from 'react'

type Props = {}

const GenerateResume = () => {
  return (
    <div className='p-5 flex flex-col h-full'>
        <h1 className='text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500'>
            Generate Resume
        </h1>
        <h1 className='text-xl mt-1 ml-2'>
            Resume Templates <span className='text-sm text-sky-500 animate-pulse'>-Use Standard Template for now, we are working on other templates</span>
        </h1>


        <div className='mt-8 p-5 w-full overflow-y-scroll overflow-hidden'>
            {/* Render Templates */}
            <div className='grid grid-cols-4 gap-7'>
                {
                    resumeTemplates.map((template, index) => (
                        <ResumeTemplate key={index} title={template.title} img={template.img} url={template.url} disable={template.disable}/>
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default GenerateResume