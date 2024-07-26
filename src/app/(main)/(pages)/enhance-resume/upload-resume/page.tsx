"use client"
import UploadFile from '@/components/enhance-resume/upload-file';
import React, { useState } from 'react'

interface Props {
    
}

const UploadResume = () => {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];

            if (file.type !== "application/pdf") {
                console.error(file.name, "is not a PDF file.");
                // handle the error: display the error to user
                return;
            }

            // implement redux for state management : to display to user.
            setFile(file);

            console.log(file)
        }
    };


    
    return (
        <div className='flex justify-center h-full mt-36'>
            <div className=' border-neutral-800 border-2 rounded-lg selection:rounded-lg h-fit p-8 flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-bold mb-8'>Upload Your Resume</h1>
                <UploadFile />
            </div>
        </div>
    )
}

export default UploadResume
