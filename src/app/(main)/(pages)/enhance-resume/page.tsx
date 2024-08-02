'use client'
import PdfViewer from '@/components/enhance-resume/pdf-viewer'
import { useResumeStore } from '@/store/resume-store'
import React from 'react'

type Props = {}

const EnhanceResume = () => {
    const resumeFile = useResumeStore((state) => state.resumeFile);
    const resumeSuggestions = useResumeStore((state) => state.resumeSuggestions);


  return (
    <div className='h-full flex gap-3 py-3 px-5 pb-5'>
        {/* Suggestions Viewer */}
        <div className='w-2/4 xl:w-3/5 rounded-lg border-2 border-neutral-800 '>
            {/* Render Suggestions */}

        </div>

        {/* PDF Viewer */}
        <div className='w-2/4 xl:w-2/5'>
            {
                resumeFile ?
                <>
                <PdfViewer resumeFile={resumeFile}/>
                </>
                :
                <>
                <div className='flex items-center justify-center h-full'>
                    <h1 className='bg-neutral-800 p-3 px-5 rounded-lg font-semibold text-neutral-500'>Failed to load resume</h1>
                </div>
                </>
            }
        </div>
    </div>
  )
}

export default EnhanceResume