'use client'
import PdfViewer from '@/components/enhance-resume/pdf-viewer'
import { useResumeStore } from '@/store/resume-store'
import React from 'react'

type Props = {}

const EnhanceResume = () => {
    const resumeFile = useResumeStore((state) => state.resumeFile);
    const resumeSuggestions = useResumeStore((state) => state.resumeSuggestions);

    const fileUrl = resumeFile instanceof File ? URL.createObjectURL(resumeFile) : '';

    console.log("Resume File: ", resumeFile)
    console.log("Resume Url: ", fileUrl)

  return (
    <div className='h-full flex gap-3 py-3 px-5 pb-5'>
        {/* Suggestions Viewer */}
        <div className='w-2/4 rounded-lg border-2 border-neutral-900'></div>

        {/* PDF Viewer */}
        <div className='w-2/4 flex items-center justify-center'>
            {
                resumeFile && fileUrl != '' ? (
                    <div className='w-full h-[800px] rounded-lg overflow-hidden'>
                        <PdfViewer fileUrl={fileUrl}/>
                    </div>
                ):(
                    <div className='flex items-center justify-center h-full'>
                        <h1 className='bg-neutral-800 p-3 px-5 rounded-lg font-semibold text-neutral-500'>Unable to load resume</h1>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default EnhanceResume