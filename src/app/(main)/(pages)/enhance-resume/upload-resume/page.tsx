"use client";
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import PDFToText from 'react-pdftotext';

const UploadResume: React.FC = () => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        extractText(file);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: { 'application/pdf': ['.pdf'] },
        onDrop
    });

    const extractText = async (file: File | Blob) => {
        try {
            const text = await PDFToText(file);

            console.log("Number of Characters: ", text.length);
            console.log('Extracted Text:', text);
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
