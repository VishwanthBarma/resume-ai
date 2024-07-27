import { CloudUpload, Inbox } from 'lucide-react'
import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'

interface Props {
    
}

const UploadFile = (props: Props) => {

    const [loading, setLoading] = useState(false);

    const {getRootProps, getInputProps} = useDropzone({
        accept: {"application/pdf" : [".pdf"]},
        maxFiles: 1,
        onDrop: async (acceptedFiles) => {
            const file = acceptedFiles[0];
            if (file.size > 10 * 1024 * 1024) {
              console.log("Pdf size is >10mb")
              // show it on display
              return;
            }

            parseResume(file);

        }
    })

    const parseResume = async (file: File) => {
        console.log(file);

        const formData = new FormData();
        formData.append('file', file);

        console.log(formData);

        try{
            const response = await fetch('/api/enhance-resume/upload-resume', {
                method: 'POST',
                body: formData,
            })

            const result = await response.json();
            console.log("Result From Server: ", result);

        }catch(error){
            console.error('Error uploading file: ', error);
        }
    }




    return (
        <div className="p-2 rounded-xl">
        <div
          {...getRootProps({
            className:
              "border-dashed border-2 rounded-xl cursor-pointer w-[20rem] py-10 flex justify-center items-center flex-col",
          })}
        >
          <input {...getInputProps()} />
            <>
              <CloudUpload className="w-14 h-14" />
              <p className="mt-2 text-sm text-slate-200">Drop Your Resume Here</p>
            </>
        </div>
      </div>
    )
}

export default UploadFile
