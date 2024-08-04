import React, { useState } from 'react';
import { TechnicalExperience } from '@/lib/types';
import { ArrowLeft, ArrowRight, Brain, CirclePlus, FilePenLine } from 'lucide-react';

interface Props {
  technicalExperience: TechnicalExperience;
  setTechnicalExperience: React.Dispatch<React.SetStateAction<TechnicalExperience>>;
}

const FormTechnicalExperience: React.FC<Props> = ({ technicalExperience, setTechnicalExperience }) => {

    const [userDescription, setUserDescription] = useState<String>("");
    const [expNum, setExpNum] = useState(1);
    const [generatedDesc, setGeneratedDesc] = useState<String>('');

    const handleTechnicalExperienceInput = (e: any, section: keyof TechnicalExperience, field: keyof TechnicalExperience[keyof TechnicalExperience]) => {
        setTechnicalExperience(prev => ({
            ...prev,
            [section]:{
                ...prev[section],
                [field]: e.target.value,
            }
        }));
    }

    const generateAIDescription = () => {
        // Implement generation of description

    }

    const saveDescription = (section: keyof TechnicalExperience) => {
        setTechnicalExperience(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                "description": generatedDesc,
            }
        }))
    }

    const changeExperience = () => {
        setExpNum(() => expNum === 1 ? 2 : 1);
        setUserDescription('');
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
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleTechnicalExperienceInput(e, 'experience1', 'companyName')}
                                        />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                        Role :  
                                        <input 
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleTechnicalExperienceInput(e, 'experience1', 'role')}
                                        />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                        Duration :  
                                        <input 
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleTechnicalExperienceInput(e, 'experience1', 'duration')}
                                        />
                                    </label>
                                    <div className='mt-5 border-2 border-dotted p-3 rounded-xl'>
                                        <h1 className='font-bold'>AI Suggestion</h1>
                                        <textarea 
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-full mt-3 min-h-40'
                                        onChange={(e) => setUserDescription(e.target.value)}
                                        placeholder='Provide more details about your role in the company'
                                        />

                                        <div className='flex gap-5'>
                                            <button
                                            onClick={generateAIDescription}
                                            className='bg-gradient-to-r from-pink-600 to-pink-500 p-2 rounded-lg flex items-center mt-2'>
                                                <Brain className='h-5 w-5'/>
                                                <p className='font-bold ml-2'>Generate</p>
                                            </button>

                                            <button
                                            onClick={() => saveDescription('experience1')}
                                            className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center mt-2'>
                                                <FilePenLine className='h-5 w-5'/>
                                                <p className=' ml-2'>Insert To Description</p>
                                            </button>
                                        </div>
                                    </div>

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
                                    className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center mt-2 w-fit'>
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
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleTechnicalExperienceInput(e, 'experience2', 'companyName')}
                                        />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                        Role :  
                                        <input 
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleTechnicalExperienceInput(e, 'experience2', 'role')}
                                        />
                                    </label>
                                    <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                        Duration :  
                                        <input 
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleTechnicalExperienceInput(e, 'experience2', 'duration')}
                                        />
                                    </label>
                                    <div className='mt-5 border-2 border-dotted p-3 rounded-xl'>
                                        <h1 className='font-bold'>AI Suggestion</h1>
                                        <textarea 
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-full mt-3 min-h-40'
                                        onChange={(e) => setUserDescription(e.target.value)}
                                        placeholder='Provide more details about your role in the company'
                                        />

                                        <div className='flex gap-5'>
                                            <button
                                            onClick={generateAIDescription}
                                            className='bg-gradient-to-r from-pink-600 to-pink-500 p-2 rounded-lg flex items-center mt-2'>
                                                <Brain className='h-5 w-5'/>
                                                <p className='font-bold ml-2'>Generate</p>
                                            </button>

                                            <button
                                            onClick={() => saveDescription('experience2')}
                                            className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center mt-2'>
                                                <FilePenLine className='h-5 w-5'/>
                                                <p className=' ml-2'>Insert To Description</p>
                                            </button>
                                        </div>
                                    </div>

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
                                    className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center mt-2 w-fit'>
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
