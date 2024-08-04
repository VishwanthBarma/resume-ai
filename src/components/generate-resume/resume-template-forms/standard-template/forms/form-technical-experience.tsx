import React, { useState } from 'react';
import { TechnicalExperience } from '@/lib/types';
import { ArrowLeft, ArrowRight, Brain, CirclePlus, FilePenLine, Loader } from 'lucide-react';
import { text } from 'body-parser';
import GenerateAIDescriptionCard from '@/components/generate-resume/generate-ai-description-card';

interface Props {
  technicalExperience: TechnicalExperience;
  setTechnicalExperience: React.Dispatch<React.SetStateAction<TechnicalExperience>>;
  scrollToTop: () => void;
}

const FormTechnicalExperience: React.FC<Props> = ({ technicalExperience, setTechnicalExperience, scrollToTop }) => {

    const [userDescription, setUserDescription] = useState<string>('');
    const [expNum, setExpNum] = useState(1);
    const [generatedDesc, setGeneratedDesc] = useState<string>('');
    const [loading, setLoading] = useState<Boolean>(false);

    const handleTechnicalExperienceInput = (e: any, section: keyof TechnicalExperience, field: keyof TechnicalExperience[keyof TechnicalExperience]) => {
        setTechnicalExperience(prev => ({
            ...prev,
            [section]:{
                ...prev[section],
                [field]: e.target.value,
            }
        }));
    }

    const generateAIDescription = async() => {
        // Implement generation of description
        if(userDescription === '') return;

        setLoading(true);

        try{
            let text = '';

            if(expNum === 1){
                text = `Company Name: ${technicalExperience.experience1.companyName},
                Role: ${technicalExperience.experience1.role}
                Description: ${userDescription}
                `;
            }else{
                text = `Company Name: ${technicalExperience.experience2.companyName},
                Role: ${technicalExperience.experience2.role}
                Description: ${userDescription}
                `;
            }

            const response = await fetch('/api/generate-resume/technical-experience-suggestion', {
                method: 'POST',
                body: JSON.stringify({text}),
            })

            if(!response.ok){
                throw new Error("Failed to fetch Description Suggestions.")
            }

            const result = await response.json();
            const suggestion = result.suggestion;
            setGeneratedDesc(suggestion);
            setUserDescription(suggestion);

            console.log("Description Suggestion Successfull.")

        }catch(error){
            console.log("Error in fetching the AI generated description.");
        }finally{
            setLoading(false);
        }

    }

    const saveDescription = (section: string) => {
        setTechnicalExperience(prev => ({
            ...prev,
            [section as keyof TechnicalExperience]: {
                ...prev[section as keyof TechnicalExperience],
                "description": generatedDesc,
            }
        }));

        setUserDescription('');
        setGeneratedDesc('');
    }

    const changeExperience = () => {
        setExpNum(() => expNum === 1 ? 2 : 1);
        scrollToTop();
    }


    return(
        <div className='flex flex-col gap-4'>
                    <h1 className='font-semibold text-2xl border-b-2 pb-2'>Technical Experience</h1>

                    <div className='flex flex-col gap-10 px-10'>
                        {
                            expNum === 1 ?
                            <>
                                {/* Experience One */}
                                <div className='flex flex-col gap-2 w-full'>
                                    <h1 className='text-xl font-bold'>Experience 1</h1>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                        Company Name :  
                                        <input 
                                        value={technicalExperience.experience1.companyName}
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleTechnicalExperienceInput(e, 'experience1', 'companyName')}
                                        />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                        Role :  
                                        <input 
                                        value={technicalExperience.experience1.role}
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleTechnicalExperienceInput(e, 'experience1', 'role')}
                                        />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                        Duration :  
                                        <input
                                        value={technicalExperience.experience1.duration}
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleTechnicalExperienceInput(e, 'experience1', 'duration')}
                                        />
                                    </label>
                                    
                                    <GenerateAIDescriptionCard
                                    userDescription={userDescription}
                                    setUserDescription={setUserDescription}
                                    generateAIDescription={generateAIDescription}
                                    loading={loading}
                                    generatedDesc={generatedDesc}
                                    saveDescription={saveDescription}
                                    section='experience1'
                                    />

                                    <div className='mt-8'>
                                        <h1>Description :</h1>
                                        <textarea 
                                        value={technicalExperience.experience1.description}
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-full mt-3 min-h-40'
                                        onChange={(e) => handleTechnicalExperienceInput(e, 'experience1', 'description')}
                                        placeholder='Your Job Description'
                                        />
                                    </div>

                                    <button
                                    onClick={changeExperience}
                                    className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center mt-2 w-fit hover:opacity-90'>
                                        <p className='mr-1'>Experience 2</p>
                                        <ArrowRight className='h-5 w-5'/>
                                    </button>

                                </div>
                            </>
                            :
                            <>
                                {/* Experience Two */}
                                <div className='flex flex-col gap-2 w-full'>
                                    <h1 className='text-xl font-bold'>Experience 2</h1>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                        Company Name :  
                                        <input 
                                        value={technicalExperience.experience2.companyName}
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleTechnicalExperienceInput(e, 'experience2', 'companyName')}
                                        />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                        Role :  
                                        <input 
                                        value={technicalExperience.experience2.role}
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleTechnicalExperienceInput(e, 'experience2', 'role')}
                                        />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                        Duration :  
                                        <input 
                                        value={technicalExperience.experience2.duration}
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleTechnicalExperienceInput(e, 'experience2', 'duration')}
                                        />
                                    </label>

                                    <GenerateAIDescriptionCard
                                    userDescription={userDescription}
                                    setUserDescription={setUserDescription}
                                    generateAIDescription={generateAIDescription}
                                    loading={loading}
                                    generatedDesc={generatedDesc}
                                    saveDescription={saveDescription}
                                    section='experience2'
                                    />

                                    <div className='mt-8'>
                                        <h1>Description :</h1>
                                        <textarea 
                                        value={technicalExperience.experience1.description}
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-full mt-3 min-h-40'
                                        onChange={(e) => handleTechnicalExperienceInput(e, 'experience2', 'description')}
                                        placeholder='Your Job Description'
                                        />
                                    </div>

                                    <button
                                    onClick={changeExperience}
                                    className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center mt-2 w-fit hover:opacity-90'>
                                        <ArrowLeft className='h-5 w-5'/>
                                        <p className='ml-1'>Experience 2</p>
                                    </button>

                                </div>
                            </>

                        }

                    </div>
        </div>
    )
};

export default FormTechnicalExperience;
