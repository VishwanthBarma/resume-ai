import React, { useRef, useState } from 'react'
import { BasicDetails, Education, TechnicalExperience, Certificates, Achievements, Projects, Skills } from '@/lib/types'
import FormStepIndicator from '../../form-step-indicator';
import { ChevronLeft, ChevronRight, CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import FormTechnicalExperience from '../../forms/form-technical-experience';
import FormProjects from '../../forms/form-projects';
import FormSkills from '../../forms/form-skills';


interface FormStandardTemplateProps {
    setBasicDetails: React.Dispatch<React.SetStateAction<BasicDetails>>;
    setEducation: React.Dispatch<React.SetStateAction<Education>>;
    setTechnicalExperience: React.Dispatch<React.SetStateAction<TechnicalExperience>>;
    setSkills: React.Dispatch<React.SetStateAction<Skills>>;
    setProjects: React.Dispatch<React.SetStateAction<Projects>>;
    setCertificates: React.Dispatch<React.SetStateAction<Certificates>>;
    setAchievements: React.Dispatch<React.SetStateAction<Achievements>>;
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
    const [skillsState, setSkillsState] = useState<string[]>([]);

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

    const handleEducationInput = (e: React.ChangeEvent<HTMLInputElement>, section: keyof Education, field: keyof Education[keyof Education]) => {
        setEducation(prev => ({
          ...prev,
          [section]:{
            ...prev[section],
            [field]: e.target.value,
          } 
        }));
    };

    const handleSkillsChange = (newSkills: string[]) => {
        setSkillsState(newSkills);
        setSkills(newSkills);
    };

    const handleCertificatesChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Certificates) => {
        setCertificates(prev => ({
            ...prev,
            [field]: e.target.value,
        }));
    };

    const handleAchievementsChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Achievements) => {
        setAchievements(prev => ({
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
                {
                    currentStep === 1 && 
                    <>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-semibold text-2xl border-b-2 pb-2'>Basic Details</h1>
                        <div className='flex flex-col gap-2 px-10'>
                            <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                Your Name :  
                                <input 
                                value={basicDetails.name}
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                onChange={(e) => handleBasicDetailsInput(e, 'name')}
                                />
                            </label>
                            <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                Phone Number :  
                                <input
                                value={basicDetails.phone}
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                onChange={(e) => handleBasicDetailsInput(e, 'phone')}
                                />
                            </label>
                            <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                City :  
                                <input
                                value={basicDetails.city}
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                onChange={(e) => handleBasicDetailsInput(e, 'city')}
                                />
                            </label>
                            <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                State :  
                                <input 
                                value={basicDetails.state}
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                onChange={(e) => handleBasicDetailsInput(e, 'state')}
                                />
                            </label>
                            <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                Email :  
                                <input 
                                value={basicDetails.gmail}
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                onChange={(e) => handleBasicDetailsInput(e, 'gmail')}
                                />
                            </label>
                            <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                GitHub Link :  
                                <input 
                                value={basicDetails.github}
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                onChange={(e) => handleBasicDetailsInput(e, 'github')}
                                />
                            </label>
                            <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                LinkedIn Link :  
                                <input 
                                value={basicDetails.linkedIn}
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
                                    value={education.college.name}
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'college', 'name')}
                                    />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200 m-1'>
                                    Course :  
                                    <input
                                    value={education.college.course}
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'college', 'course')}
                                    />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200 m-1'>
                                    Score :  
                                    <input 
                                    value={education.college.score}
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'college', 'score')}
                                    />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200 m-1'>
                                    Duration :  
                                    <input 
                                    value={education.college.duration}
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
                                    value={education.highschool.name}
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'highschool', 'name')}
                                    />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200 m-1'>
                                    Course :  
                                    <input 
                                    value={education.highschool.course}
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'highschool', 'course')}
                                    />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200 m-1'>
                                    Score :  
                                    <input 
                                    value={education.highschool.score}
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'highschool', 'score')}
                                    />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200 m-1'>
                                    Duration :  
                                    <input 
                                    value={education.highschool.duration}
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
                                    value={education.school.name}
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'school', 'name')}
                                    />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200 m-1'>
                                    Course :  
                                    <input 
                                    value={education.school.course}
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'school', 'course')}
                                    />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200 m-1'>
                                    Score :  
                                    <input 
                                    value={education.school.score}
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'school', 'score')}
                                    />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200 m-1'>
                                    Duration :  
                                    <input 
                                    value={education.school.duration}
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                    onChange={(e) => handleEducationInput(e, 'school', 'duration')}
                                    />
                                    </label>
                            </div>

                            
                        </div>
                    </div>
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
                    <FormSkills skills={skillsState} onSkillsChange={handleSkillsChange} />
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
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-semibold text-2xl border-b-2 pb-2'>Certificates</h1>
                        <div className='flex flex-col gap-2 px-10'>
                        <label className='flex items-center justify-evenly text-slate-200'>
                            Certificate 1 :
                            <input
                            value={certificates.certificate1}
                            type='text'
                            onChange={(e) => handleCertificatesChange(e, 'certificate1')}
                            className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                            />
                        </label>
                        <label className='flex items-center justify-evenly text-slate-200'>
                            Certificate 2 :
                            <input
                            value={certificates.certificate2}
                            type='text'
                            onChange={(e) => handleCertificatesChange(e, 'certificate2')}
                            className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                            />
                        </label>
                        </div>
                    </div>

                    </>
                }


                {/* Achievements */}
                {
                    currentStep === 7 && 
                    <>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-semibold text-2xl border-b-2 pb-2'>Achievements</h1>
                        <div className='flex flex-col gap-2 px-10'>
                        <label className='flex items-center justify-evenly text-slate-200'>
                            Achievement 1:
                            <input
                            value={achievements.achievement1}
                            type='text'
                            onChange={(e) => handleAchievementsChange(e, 'achievement1')}
                            className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-3/5'
                            />
                        </label>
                        <label className='flex items-center justify-evenly text-slate-200'>
                            Achievement 2:
                            <input
                            value={achievements.achievement2}
                            type='text'
                            onChange={(e) => handleAchievementsChange(e, 'achievement2')}
                            className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-3/5'
                            />
                        </label>
                        <label className='flex items-center justify-evenly text-slate-200'>
                            Achievement 3:
                            <input
                            value={achievements.achievement3}
                            type='text'
                            onChange={(e) => handleAchievementsChange(e, 'achievement3')}
                            className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-3/5'
                            />
                        </label>
                        </div>
                    </div>
                    </>
                }


                {/* Pagination Buttons */}

                <div className='mt-10 pb-20 flex gap-10 justify-center border-t-2 pt-10'>
                    <button
                    disabled={currentStep === 1}
                    onClick={handlePrev}
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
                    onClick={handleNext}
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

            </div>

        </div>
    )
}

export default FormStandardTemplate

