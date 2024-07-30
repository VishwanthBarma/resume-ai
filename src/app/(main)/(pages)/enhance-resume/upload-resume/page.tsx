"use client";
import ShiningText from '@/components/loading/shining-text';
import { CloudUpload } from 'lucide-react';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import PDFToText from 'react-pdftotext';

const UploadResume: React.FC = () => {
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        setResumeFile(file);
        extractText(file);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: { 'application/pdf': ['.pdf'] },
        onDrop
    });

    const extractText = async (file: File | Blob) => {
        setLoading(true);
        try {
            const text = await PDFToText(file);

            const response = await fetch('/api/enhance-resume/generate-suggestions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({text}),
            })

            if(!response.ok){
                throw new Error("Failed to fetch suggestion from route");
            }

            const result = await response.json();
            const suggestions = result.suggestions;

            console.log("Generated Suggestions Succesfully.");

        } catch (error) {
            console.error('Error extracting text:', error);
        } finally{
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col items-center mt-32'>
            <h1 className='text-4xl font-semibold mb-3'>Upload Your Resume</h1>
            <p className='font-bold text-slate-700 mb-12'>Note: We are not storing your resume in any database.</p>

            {
                !loading ?
                <>
                <div
                    {...getRootProps()}
                    className={`px-10 flex flex-col items-center py-14 border-2 border-dashed cursor-pointer ${isDragActive ? 'border-pink-500' : 'border-gray-300'} rounded-lg`}
                >
                    <input {...getInputProps()} />
                    <CloudUpload className='h-12 w-12 mb-2'/>
                    <p>Drop your resume here or choose a file.</p>
                </div>
                </>
                :
                <>
                <ShiningText />
                </>
            }

        </div>
    );
};

export default UploadResume;
