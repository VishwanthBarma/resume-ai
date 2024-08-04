import React, { useState } from 'react'
import { BasicDetails, Education, TechnicalExperience, Certificates, Achievements, Projects } from '@/lib/types'
import FormStepIndicator from '../form-step-indicator';
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';


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

    const [currentStep, setCurrentStep] = useState(1);
    const [latestStep, setLatestStep] = useState(1);

    const handleNext = () => {
      if (currentStep < steps.length){
        setCurrentStep(currentStep + 1);
      }

      if (latestStep <= currentStep){
        setLatestStep(latestStep + 1);
      }
    };
  
    const handlePrev = () => {
      if (currentStep > 1){
        setCurrentStep(currentStep - 1);
      } 
    };
  
    const handleStepClick = (index: number) => {
      setCurrentStep(index);
    };


    // Form Section Handlers
    const handleBasicDetailsInput = (e: React.ChangeEvent<HTMLInputElement>, field: keyof BasicDetails) => {
        setBasicDetails(prev => ({
          ...prev,
          [field]: e.target.value,
        }));
    };

    const handleEducationInput = (e: React.ChangeEvent<HTMLInputElement>, section: keyof Education, field: keyof Education[keyof Education]) => {
        setEducation(prev => ({
          ...prev,
          [section]:{
            ...prev[section],
            [field]: e.target.value,
          } 
        }));
    };

    
    

    return (
        <div className='flex flex-col gap-4 h-full'>

            <div className='mb-5'>
                <FormStepIndicator 
                    currentStep={currentStep}
                    latestStep={latestStep}
                    steps={steps}
                    onStepClick={handleStepClick}
                />
            </div>

            {/* MultiStep Form */}
            <div className='overflow-hidden overflow-y-scroll h-[700px] scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-neutral-700'>

                {/* BasicDetails */}
                {
                    currentStep === 1 && 
                    <>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-semibold text-2xl border-b-2 pb-2'>Basic Details</h1>
                        <div className='flex flex-col gap-2 px-10'>
                            <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                Your Name :  
                                <input 
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                onChange={(e) => handleBasicDetailsInput(e, 'name')}
                                />
                            </label>
                            <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                Phone Number :  
                                <input 
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                onChange={(e) => handleBasicDetailsInput(e, 'phone')}
                                />
                            </label>
                            <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                City :  
                                <input 
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                onChange={(e) => handleBasicDetailsInput(e, 'city')}
                                />
                            </label>
                            <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                State :  
                                <input 
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                onChange={(e) => handleBasicDetailsInput(e, 'state')}
                                />
                            </label>
                            <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                Email :  
                                <input 
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                onChange={(e) => handleBasicDetailsInput(e, 'gmail')}
                                />
                            </label>
                            <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                GitHub Link :  
                                <input 
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                onChange={(e) => handleBasicDetailsInput(e, 'github')}
                                />
                            </label>
                            <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                LinkedIn Link :  
                                <input 
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                onChange={(e) => handleBasicDetailsInput(e, 'linkedIn')}
                                />
                            </label>
                        </div>
                    </div>
                    </>
                }


                {/* Education */}
                {
                    currentStep === 2 && 
                    <>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-semibold text-2xl border-b-2 pb-2'>Education Details</h1>
                        <div className='flex flex-col gap-12 px-10'>
                            <div className='flex flex-col'>
                                <h1 className='text-xl'>College</h1>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200 m-1'>
                                    Name :  
                                    <input 
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'college', 'name')}
                                    />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200 m-1'>
                                    Course :  
                                    <input 
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'college', 'course')}
                                    />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200 m-1'>
                                    Score :  
                                    <input 
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'college', 'score')}
                                    />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200 m-1'>
                                    Duration :  
                                    <input 
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'college', 'duration')}
                                    />
                                    </label>
                            </div>

                            <div className='flex flex-col'>
                                <h1 className='text-xl'>High School</h1>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200 m-1'>
                                    Name :  
                                    <input 
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'highschool', 'name')}
                                    />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200 m-1'>
                                    Course :  
                                    <input 
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'highschool', 'course')}
                                    />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200 m-1'>
                                    Score :  
                                    <input 
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'highschool', 'score')}
                                    />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200 m-1'>
                                    Duration :  
                                    <input 
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'highschool', 'duration')}
                                    />
                                    </label>
                            </div>

                            <div className='flex flex-col'>
                                <h1 className='text-xl'>School</h1>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200 m-1'>
                                    Name :  
                                    <input 
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'school', 'name')}
                                    />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200 m-1'>
                                    Course :  
                                    <input 
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'school', 'course')}
                                    />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200 m-1'>
                                    Score :  
                                    <input 
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'school', 'score')}
                                    />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200 m-1'>
                                    Duration :  
                                    <input 
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'school', 'duration')}
                                    />
                                    </label>
                            </div>

                            
                        </div>
                    </div>
                    </>
                }



                {/* Pagination Buttons */}

                <div className='mt-10 pb-20 flex gap-10 justify-center'>
                    <button
                    disabled={currentStep === 1}
                    onClick={handlePrev}
                    className={`border-neutral-700 bg-neutral-900 border-2 p-3 rounded-lg ${currentStep === 1 ? 
                        "opacity-50 cursor-not-allowed" :
                        "hover:bg-neutral-800"} `
                        }>
                        <CircleArrowLeft className={`${currentStep === 1 && "text-gray-500"} h-7 w-7 text-pink-500`}/>
                    </button>

                    <button
                    disabled={currentStep >= (steps.length)}
                    onClick={handleNext}
                    className={`border-neutral-700 bg-neutral-900 border-2 p-3 rounded-lg ${currentStep >= steps.length ? 
                        "opacity-50 cursor-not-allowed" :
                        "hover:bg-neutral-800"} `
                        }>
                        <CircleArrowRight className={`${currentStep >= (steps.length) && "text-gray-500"} h-7 w-7 text-pink-500`}/>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default FormStandardTemplate

