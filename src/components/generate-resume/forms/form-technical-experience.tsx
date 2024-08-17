import React, { useState } from 'react';
import { TechnicalExperience, TechnicalExperienceItem } from '@/lib/types';
import GenerateAIDescriptionCard from '@/components/generate-resume/generate-ai-description-card';
import FormSectionNavigationButtons from '../form-section-navigation-buttons';
import toast from 'react-hot-toast';

interface Props {
  technicalExperience: TechnicalExperience;
  setTechnicalExperience: (updater: (prev: TechnicalExperience) => TechnicalExperience) => void;
  scrollToTop: () => void;
}


const FormTechnicalExperience: React.FC<Props> = ({ technicalExperience, setTechnicalExperience, scrollToTop }) => {

    const [userDescription, setUserDescription] = useState<string>('');
    const [currentExpIndex, setCurrentExpIndex] = useState(0);
    const [generatedDesc, setGeneratedDesc] = useState<string>('');
    const [loading, setLoading] = useState<Boolean>(false);

    const handleTechnicalExperienceInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number, field: keyof TechnicalExperienceItem) => {
        const { value } = e.target;
        setTechnicalExperience(prev => {
          const updated = [...prev];
          updated[index] = { ...updated[index], [field]: value };
          return updated;
        });
      };

    const generateAIDescription = async () => {
        if (userDescription === '') return;
    
        setLoading(true);
    
        try {
          const currentExperience = technicalExperience[currentExpIndex];
          const text = `Company Name: ${currentExperience.companyName}, Role: ${currentExperience.role}, Description: ${userDescription}`;
    
          const response = await fetch('/api/generate-resume/technical-experience-suggestion', {
            method: 'POST',
            body: JSON.stringify({ text }),
          });
    
          if (!response.ok) {
            toast.error("Failed to Generate Suggestion")
            console.log("Failed to fetch Description Suggestions.");
            return;
          }
    
          const result = await response.json();
          const suggestion = result.suggestion;
          setGeneratedDesc(suggestion);
          setUserDescription(suggestion);
    
          console.log("Description Suggestion Successful.");
          toast.success('Generated Suggestion Successfully');
        } catch (error) {
          console.log("Error in fetching the AI generated description.");
          toast.error("Error in Generating Suggestion")
        } finally {
          setLoading(false);
        }
    };

    const saveDescription = () => {
        setTechnicalExperience(prev => {
          const updated = [...prev];
          updated[currentExpIndex] = { ...updated[currentExpIndex], description: generatedDesc };
          return updated;
        });
        setUserDescription('');
        setGeneratedDesc('');
    };


    const changeExperience = (index: number) => {
        setCurrentExpIndex(index);
        scrollToTop();
    };

    const addExperience = () => {
        setTechnicalExperience(prev => [
          ...prev,
          { companyName: '', role: '', duration: '', description: '' }
        ]);
        setCurrentExpIndex(technicalExperience.length);
        scrollToTop();
    };
    
    const removeExperience = () => {
        setTechnicalExperience(prev => prev.filter((_, i) => i !== currentExpIndex));
        setCurrentExpIndex(prev => Math.max(0, prev - 1));
        scrollToTop();
    };


    return(
        <div className='flex flex-col gap-4'>
            <h1 className='font-semibold text-2xl border-b-2 pb-2'>Technical Experience</h1>

            <div className='flex flex-col gap-10 px-10'>

                {
                    technicalExperience.map((exp, index) => (
                    <div key={index} className={`flex flex-col gap-2 w-full ${currentExpIndex === index ? '' : 'hidden'}`}>
                        <div className='text-lg font-semibold rounded-full bg-slate-200 border-neutral-700 border-2 h-10 w-10 flex items-center justify-center'>
                          <h1 className='text-black'>{index+1}</h1>
                        </div>
                        <label className='w-4/5 flex items-center justify-between text-slate-200'>
                        Company Name :
                        <input
                            value={exp.companyName}
                            className='bg-neutral-900 border-none rounded-lg focus:ring-0  w-3/5'
                            onChange={(e) => handleTechnicalExperienceInput(e, index, 'companyName')}
                        />
                        </label>
                        <label className='w-4/5 flex items-center justify-between text-slate-200'>
                        Role :
                        <input
                            value={exp.role}
                            className='bg-neutral-900 border-none rounded-lg focus:ring-0  w-3/5'
                            onChange={(e) => handleTechnicalExperienceInput(e, index, 'role')}
                        />
                        </label>
                        <label className='w-4/5 flex items-center justify-between text-slate-200'>
                        Duration :
                        <input
                            placeholder='E.g: Aug 2024-Nov 2024'
                            value={exp.duration}
                            className='bg-neutral-900 border-none rounded-lg focus:ring-0  w-3/5'
                            onChange={(e) => handleTechnicalExperienceInput(e, index, 'duration')}
                        />
                        </label>

                        <GenerateAIDescriptionCard
                        userDescription={userDescription}
                        setUserDescription={setUserDescription}
                        generateAIDescription={generateAIDescription}
                        loading={loading}
                        generatedDesc={generatedDesc}
                        saveDescription={saveDescription}
                        />

                        <div className='mt-8'>
                        <h1>Description :</h1>
                        <textarea
                            value={exp.description}
                            className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-full mt-3 min-h-40'
                            onChange={(e) => handleTechnicalExperienceInput(e, index, 'description')}
                            placeholder='Your Job Description'
                        />
                        </div>

                        <FormSectionNavigationButtons
                        currentIndex={currentExpIndex}
                        totalItems={technicalExperience.length}
                        onPrev={() => changeExperience(currentExpIndex - 1)}
                        onNext={() => changeExperience(currentExpIndex + 1)}
                        onAdd={addExperience}
                        onRemove={removeExperience}
                        disablePrev={currentExpIndex === 0}
                        disableNext={currentExpIndex === technicalExperience.length - 1}
                        disableRemove={technicalExperience.length === 1}
                        />

                    </div>
                    ))
                }    

            </div>
        </div>
    )
};

export default FormTechnicalExperience;
