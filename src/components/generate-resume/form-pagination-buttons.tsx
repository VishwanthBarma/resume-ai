import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

interface FormPaginationButtonProps {
    currentStep: number;
    steps: string[];
    onNext: () => void;
    onPrev: () => void;
}

const FormPaginationButtons: React.FC<FormPaginationButtonProps> = ({currentStep, steps, onNext, onPrev}) => {
    return (
        <div className='mt-10 pb-20 flex gap-10 justify-center border-t-2 pt-10'>
            <button
            disabled={currentStep === 1}
            onClick={onPrev}
            className={`border-neutral-800 bg-neutral-900 border-2 p-3 px-6 rounded-lg ${currentStep === 1 ? 
                "opacity-50 cursor-not-allowed" :
                "hover:bg-neutral-800"} 
                flex items-center
                `
                }>
                <ChevronLeft className={`${currentStep === 1 && "text-gray-500"} h-6 w-6 text-pink-500`}/>
                <p className='font-semibold text-pink-500'>Back</p>
            </button>

            <button
            disabled={currentStep >= (steps.length)}
            onClick={onNext}
            className={`border-neutral-800 bg-neutral-900 border-2 p-3 px-6 rounded-lg ${currentStep >= steps.length ? 
                "opacity-50 cursor-not-allowed" :
                "hover:bg-neutral-800"} 
                flex items-center
                `
                }>
                <p className='font-semibold text-pink-500'>Next</p>
                <ChevronRight className={`${currentStep >= (steps.length) && "text-gray-500"} h-6 w-6 text-pink-500`}/>
            </button>
        </div>
    )
}

export default FormPaginationButtons
