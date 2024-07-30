"use client";
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import PDFToText from 'react-pdftotext';

const UploadResume: React.FC = () => {
    const [resumeFile, setResumeFile] = useState<File | null>(null);

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
            
            console.log("Generated Suggestions: ", suggestions);

        } catch (error) {
            console.error('Error extracting text:', error);
        }
    };

    return (
        <div className='flex flex-col items-center mt-32'>
            <h1 className='text-4xl font-semibold mb-10'>Upload Your Resume</h1>
            <div
                {...getRootProps()}
                className={`px-10 py-20 border-2 border-dashed cursor-pointer ${isDragActive ? 'border-sky-500' : 'border-gray-300'} rounded-lg`}
            >
                <input {...getInputProps()} />
                <p>Drop your resume here or choose a file.</p>
            </div>
        </div>
    );
};

export default UploadResume;
