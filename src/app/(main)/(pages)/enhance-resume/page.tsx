'use client'
import PdfViewer from '@/components/enhance-resume/pdf-viewer'
import SuggestionCard from '@/components/enhance-resume/suggestion-card'
import { useResumeStore } from '@/store/resume-store'
import React from 'react'

type Props = {}

type Suggestion = {
    heading: string;
    description: string;
}

const EnhanceResume = () => {
    const resumeFile = useResumeStore((state) => state.resumeFile);
    const resumeSuggestions = useResumeStore((state) => state.resumeSuggestions);

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