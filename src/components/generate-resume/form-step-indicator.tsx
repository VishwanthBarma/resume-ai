// components/StepIndicator.tsx
import { BadgeCheck, Check, CircleCheck, CircleDashed, Dot } from 'lucide-react';
import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
  onStepClick: (index: number) => void;
}

const FormStepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, steps, onStepClick }) => {
  return (
   <div className='flex gap-4 justify-center items-center'>
    <h1 className='text-sm'>Step {currentStep + 1} of {steps.length}</h1>
        {
            steps.map((step, index) => (
                <div
                onClick={(e) => {
                    if(currentStep <= index){
                        e.preventDefault();
                    }else{
                        onStepClick(index);
                    }
                }}
                className={`h-4 w-4 rounded-full
                ${currentStep > index ? 
                    "bg-pink-500 cursor-pointer hover:scale-110"
                    :
                    currentStep === index ?
                    "border-2 border-pink-500"
                    :
                    "bg-gray-500 cursor-not-allowed"
                }
                flex items-center justify-center 
                ` }>
                    {
                        currentStep === index && <p className='h-2 w-2 rounded-full bg-pink-500'></p>
                    }
                </div>

            ))
        }
   </div>   
  );
};

export default FormStepIndicator;
