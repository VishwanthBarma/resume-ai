"use client"

import Resume3DCard from '@/components/global/resume-3d-card';
import ShiningText from '@/components/loading/shining-text';
import { useEnhanceResumeStore } from '@/store/enhance-resume-store';
import { CloudUpload } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import toast, { Toaster } from 'react-hot-toast';
import PDFToText from 'react-pdftotext';

const UploadResume: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const setResumeFile = useEnhanceResumeStore((state) => state.setResumeFile);
    const setResumeSuggestions = useEnhanceResumeStore((state) => state.setResumeSuggestions);
    const router = useRouter();

    const generateSuggestions = async (file: File | null) => {
        if(!file) return;

        setLoading(true);
        try {
            const text = await PDFToText(file);

            const response = await fetch('/api/enhance-resume/generate-suggestions', {
                method: 'POST',
                body: JSON.stringify({ text }),
            })

            if(!response.ok){
                throw new Error("Failed to fetch suggestion from route");
            }

            const result = await response.json();
            const suggestions = result.suggestions;
            setResumeSuggestions(suggestions);

            console.log("Generated Suggestions Succesfully.");

            router.push('/enhance-resume');

        } catch (error) {
            console.error('Error extracting text:', error);
            toast.error("Error Generating Suggestions. Try Again.")
            setLoading(false);
        }
    };

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        setResumeFile(file);
        generateSuggestions(file);
    }, [setResumeFile, generateSuggestions]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: { 'application/pdf': ['.pdf'] },
        onDrop
    });
    

    return (
    <div className="w-full h-full bg-neutral-950  bg-dot-white/[0.1] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 1500 }}
      />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-neutral-950  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className='flex justify-center gap-40 items-center w-full'>
            <div className='flex flex-col items-center'>
                <h1 className='text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-teal-500'>Upload Your Resume</h1>
                <p className='font-bold text-slate-500 mb-12'>Note: We are not storing your resume in any database.</p>

                {
                    !loading ?
                    <div
                        {...getRootProps()}
                        className={`px-10 flex flex-col items-center py-14 border-2 bg-black border-dashed cursor-pointer ${isDragActive ? 'border-sky-500' : 'border-gray-300'} rounded-lg`}
                    >
                        <input {...getInputProps()} />
                        <CloudUpload className='h-12 w-12 mb-2'/>
                        <p>Drop your resume here or choose a file.</p>
                    </div>
                    :
                    <ShiningText />
                }
            </div>
            <div className='animate-pulse'>
                <Resume3DCard />
            </div>
        </div>
    </div>
    );
};

export default UploadResume;
