'use client'
import PdfViewer from '@/components/enhance-resume/pdf-viewer'
import SuggestionCard from '@/components/enhance-resume/suggestion-card'
import { base64ToFile } from '@/lib/fileUtils'
import { useEnhanceResumeStore } from '@/store/enhance-resume-store'
import { LoaderCircle } from 'lucide-react'
import React from 'react'

type Props = {}

type Suggestion = {
    heading: string;
    description: string;
}

const EnhanceResume = () => {
    const resumeFileBase64 = useEnhanceResumeStore((state) => state.resumeFileBase64);
    const resumeSuggestions = useEnhanceResumeStore((state) => state.resumeSuggestions);

    const parseSuggestions = (jsonText: string): Suggestion[] => {
        try {
            if (typeof jsonText !== 'string') {
                console.error("Invalid type for resumeSuggestions");
                return [];
            }
    
            const cleanedText = jsonText.replace(/```json|```/g, '').trim();
    
            const parsed = JSON.parse(cleanedText);
    
            if (parsed && Array.isArray(parsed.suggestions)) {
                return parsed.suggestions.map((item: { heading: string; description: string }) => ({
                    heading: item.heading,
                    description: item.description
                }));
            } else {
                console.warn("Parsed data does not have the expected 'suggestions' key or it is not an array.");
                return [];
            }
        } catch (error) {
            console.error("Failed to parse suggestions", error);
            return [];
        }
    };
    
    const suggestions = parseSuggestions(resumeSuggestions);

    const resumeFile = resumeFileBase64
        ? base64ToFile(resumeFileBase64.base64, resumeFileBase64.name, resumeFileBase64.type)
        : null;

    console.log("Resume File GETTING from zustand: ", resumeFile);
    

  return (
    <div className='h-full flex gap-3 py-3 px-5 pb-5'>
        {/* Suggestions Viewer */}
        <div className='w-2/4 xl:w-3/5 rounded-xl border-2 border-dotted p-4 border-neutral-800 overflow-y-scroll mb-20 scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-neutral-700'>
            <div className=' p-3rounded-xl mb-10 border-b-2 pb-2'>
                <p className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-teal-500'>Enhanced Resume Suggestions<br/> <span className='italic text-lg text-neutral-600'>@{resumeFile?.name}</span></p>
            </div>
            {/* Render Suggestions */}
            {suggestions.length > 0 ? (
                suggestions.map((suggestion, index) => (
                    <SuggestionCard 
                        key={index}
                        heading={suggestion.heading}
                        description={suggestion.description}
                    />
                ))
            ) : (
                <p className='text-neutral-500'>No suggestions available</p>
            )}
        </div>

        {/* TODO: Chat with your resume */}

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
                    <h1 className='bg-neutral-800 p-3 px-5 rounded-lg font-semibold text-neutral-500 flex items-center'>
                        <LoaderCircle className='h-5 w-5 mr-1 animate-spin'/>
                        Loading Your Resume</h1>
                </div>
                </>
            }
        </div>
    </div>
  )
}

export default EnhanceResume