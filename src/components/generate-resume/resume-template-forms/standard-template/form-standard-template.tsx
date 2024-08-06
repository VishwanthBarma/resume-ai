import React, { useRef, useState } from 'react'
import { BasicDetails, Education, TechnicalExperience, Certificates, Achievements, Projects, Skills } from '@/lib/types'
import FormStepIndicator from '../../form-step-indicator';
import { ChevronLeft, ChevronRight, CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import FormTechnicalExperience from '../../forms/form-technical-experience';
import FormProjects from '../../forms/form-projects';
import FormSkills from '../../forms/form-skills';
import FormEducation from '../../forms/form-education';
import FormCertificates from '../../forms/form-certificates';
import FormAchievements from '../../forms/form-achievements';
import FormPaginationButtons from '../../form-pagination-buttons';


interface FormStandardTemplateProps {
    setBasicDetails: (updater: (prev: BasicDetails) => BasicDetails) => void;
    setEducation: (updater: (prev: Education) => Education) => void;
    setTechnicalExperience: (updater: (prev: TechnicalExperience) => TechnicalExperience) => void;
    setSkills: (updater: (prev: Skills) => Skills) => void;
    setProjects: (updater: (prev: Projects) => Projects) => void;
    setCertificates: (updater: (prev: Certificates) => Certificates) => void;
    setAchievements: (updater: (prev: Achievements) => Achievements) => void;
    basicDetails: BasicDetails;
    education: Education;
    technicalExperience: TechnicalExperience;
    skills: Skills;
    projects: Projects;
    certificates: Certificates;
    achievements: Achievements;
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
    setAchievements,
    basicDetails,
    education,
    technicalExperience,
    skills,
    projects,
    achievements,
    certificates,}
) => {

    const [currentStep, setCurrentStep] = useState(1);
    const [latestStep, setLatestStep] = useState(1);

    const scrollableContainerRef = useRef<HTMLDivElement>(null);

    const scrollToTop = () => {
        if (scrollableContainerRef.current) {
            scrollableContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleNext = () => {
      if (currentStep < steps.length){
        setCurrentStep(currentStep + 1);
        scrollToTop();
      }

      if (latestStep <= currentStep){
        setLatestStep(latestStep + 1);
      }
    };
  
    const handlePrev = () => {
      if (currentStep > 1){
        setCurrentStep(currentStep - 1);
        scrollToTop();
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
            <div
            ref={scrollableContainerRef}
             className='overflow-hidden overflow-y-scroll h-[700px] scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-neutral-700'>

                {/* BasicDetails */}

                {/* TODO: Dynamic Fields and Labels using map */}
                {
                    currentStep === 1 && 
                    <>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-semibold text-2xl border-b-2 pb-2'>Basic Details</h1>
                        <div className='flex flex-col gap-2 px-10'>
                            <label className='w-4/5 flex items-center justify-between text-slate-200'>
                                Your Name :  
                                <input 
                                value={basicDetails.name}
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-3/5'
                                onChange={(e) => handleBasicDetailsInput(e, 'name')}
                                />
                            </label>
                            <label className='w-4/5 flex items-center justify-between text-slate-200'>
                                Phone Number :  
                                <input
                                value={basicDetails.phone}
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-3/5'
                                onChange={(e) => handleBasicDetailsInput(e, 'phone')}
                                />
                            </label>
                            <label className='w-4/5 flex items-center justify-between text-slate-200'>
                                City :  
                                <input
                                value={basicDetails.city}
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-3/5'
                                onChange={(e) => handleBasicDetailsInput(e, 'city')}
                                />
                            </label>
                            <label className='w-4/5 flex items-center justify-between text-slate-200'>
                                State :  
                                <input 
                                value={basicDetails.state}
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-3/5'
                                onChange={(e) => handleBasicDetailsInput(e, 'state')}
                                />
                            </label>
                            <label className='w-4/5 flex items-center justify-between text-slate-200'>
                                Email :  
                                <input 
                                value={basicDetails.gmail}
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-3/5'
                                onChange={(e) => handleBasicDetailsInput(e, 'gmail')}
                                />
                            </label>
                            <label className='w-4/5 flex items-center justify-between text-slate-200'>
                                GitHub Profile URL :  
                                <input 
                                value={basicDetails.github}
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-3/5'
                                onChange={(e) => handleBasicDetailsInput(e, 'github')}
                                />
                            </label>
                            <label className='w-4/5 flex items-center justify-between text-slate-200'>
                                LinkedIn Profile URL :  
                                <input 
                                value={basicDetails.linkedIn}
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-3/5'
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
                    <FormEducation
                    education={education}
                    setEducation={setEducation}
                    />
                    </>
                }

                
                {/* TechnialExperience */}
                {
                    currentStep === 3 && 
                    <>
                    <FormTechnicalExperience
                        technicalExperience={technicalExperience}
                        setTechnicalExperience={setTechnicalExperience}
                        scrollToTop={scrollToTop}
                    />
                    </>
                }


                {/* Skills */}
                {
                    currentStep === 4 &&
                    <>
                    <FormSkills skills={skills} setSkills={setSkills} />
                    </>
                }


                {/* Projects */}
                {
                    currentStep === 5 &&
                    <>
                    <FormProjects 
                    projects={projects}
                    setProjects={setProjects}
                    scrollToTop={scrollToTop}
                    />
                    </>
                }


                {/* Certificates */}
                {
                    currentStep === 6 &&
                    <>
                    <FormCertificates
                    certificates={certificates}
                    setCertificates={setCertificates}
                    />

                    </>
                }


                {/* Achievements */}
                {
                    currentStep === 7 && 
                    <>
                    <FormAchievements
                    achievements={achievements}
                    setAchievements={setAchievements}
                    />
                    </>
                }


                {/* Pagination Buttons */}
                <FormPaginationButtons
                currentStep={currentStep}
                steps={steps}
                onNext={handleNext}
                onPrev={handlePrev}
                />
                

            </div>

        </div>
    )
}

export default FormStandardTemplate

