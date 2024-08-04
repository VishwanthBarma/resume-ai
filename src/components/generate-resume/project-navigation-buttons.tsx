import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

interface ProjectNavigationButtonsProps {
    changePrevProject: () => void;
    changeNextProject: () => void;
    projNum: number;
}

const ProjectNavigationButtons: React.FC<ProjectNavigationButtonsProps> = ({changePrevProject, changeNextProject, projNum}) => {
    return (
        <div className='flex items-center gap-4'>
            <button
                onClick={changePrevProject}
                disabled={projNum <= 1}
                className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center mt-2 w-fit hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50'>
                <ArrowLeft className='h-5 w-5'/>
                <p className='ml-1'>Previous Project</p>
            </button>

            <button
                onClick={changeNextProject}
                disabled={projNum >= 4}
                className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center mt-2 w-fit hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50'>
                <p className='mr-1'>Next Project</p>
                <ArrowRight className='h-5 w-5'/>
            </button>
        </div>
    )
}

export default ProjectNavigationButtons
