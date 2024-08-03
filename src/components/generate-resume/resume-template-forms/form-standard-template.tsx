import React, { useState } from 'react'
import { BasicDetails, Education, TechnicalExperience, Certificates, Achievements, Projects } from '@/lib/types'
import FormStepIndicator from '../form-step-indicator';


interface FormStandardTemplateProps {
    setBasicDetails: React.Dispatch<React.SetStateAction<BasicDetails>>;
    setEducation: React.Dispatch<React.SetStateAction<Education>>;
    setTechnicalExperience: React.Dispatch<React.SetStateAction<TechnicalExperience>>;
    setSkills: React.Dispatch<React.SetStateAction<string[]>>;
    setProjects: React.Dispatch<React.SetStateAction<Projects>>;
    setCertificates: React.Dispatch<React.SetStateAction<Certificates>>;
    setAchievements: React.Dispatch<React.SetStateAction<Achievements>>;
}

const steps = [
    'Basic Details',
    'Education',
    'Technical Experience',
    'Skills',
    'Projects',
    'Certificates',
    'Achievements',
];
  

const FormStandardTemplate: React.FC<FormStandardTemplateProps>  = (  {
    setBasicDetails,
    setEducation,
    setTechnicalExperience,
    setSkills,
    setProjects,
    setCertificates,
    setAchievements}
) => {

    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
      if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    };
  
    const handlePrev = () => {
      if (currentStep > 0) setCurrentStep(currentStep - 1);
    };
  
    const handleStepClick = (index: number) => {
      setCurrentStep(index);
    };

    return (
        <div className='flex flex-col gap-4'>
            <div>
                <FormStepIndicator 
                    currentStep={currentStep}
                    steps={steps}
                    onStepClick={handleStepClick}
                />
            </div>
            <div>
                {/* Form */}
                FormStandardTemplate
            </div>
        </div>
    )
}

export default FormStandardTemplate
