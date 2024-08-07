import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface Props {
    
}

const CreateResumeCard = (props: Props) => {
    return (
        <Link
        className='flex justify-center items-center border-2 border-slate-400  border-dashed w-64 h-64 rounded-xl hover:border-sky-500 hover:text-sky-500'
         href={"/generate-resume"}>
            <Plus className='h-6 w-6 mr-1'/>
            <h1 className=''>Create Resume</h1>
        </Link>
    )
}

export default CreateResumeCard
