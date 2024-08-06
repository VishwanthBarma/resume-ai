import { Education, EducationItem } from '@/lib/types';
import { CirclePlus } from 'lucide-react';
import React from 'react'

interface FormEducationProps {
    education: Education;
    setEducation: (updater: (prev: Education) => Education) => void;
}

const FormEducation: React.FC<FormEducationProps> = ({education, setEducation}) => {

    const handleEducationInput = (e: React.ChangeEvent<HTMLInputElement>, index: number, field: keyof EducationItem) => {
        const { value } = e.target;
        setEducation(prev => {
            const updated = [...prev];
            updated[index] = { ...updated[index], [field]: value };
            return updated;
        });
    };

    const addEducation = () => {
        setEducation(prev => [
            ...prev,
            { name: '', course: '', score: '', duration: '' }
        ]);
    }

    const removeEducation = (index: number) => {
        setEducation(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div className='flex flex-col gap-4'>
            <h1 className='font-semibold text-2xl border-b-2 pb-2'>Education Details</h1>
            {
                education.map((edu, index) => (
                    <div key={index} className='flex flex-col mb-10 px-10'>
                        <div className='flex flex-col'>
                            <div className='flex gap-4 items-center'>
                                <div className='text-lg font-semibold rounded-full bg-slate-200 border-neutral-700 border-2 h-10 w-10 flex items-center justify-center'>
                                    <h1 className='text-black'>{index+1}</h1>
                                </div>
                                <button
                                onClick={() => removeEducation(index)}
                                 className={` text-red-400 p-1 px-3 rounded-lg hover:bg-neutral-900 ${index === 0 && 'hidden'}`}>
                                    Remove
                                </button>
                            </div>
                                <label className='w-4/5 flex items-center justify-between text-slate-200 m-1'>
                                Course :  
                                <input
                                value={edu.course}
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0  w-3/5'
                                onChange={(e) => handleEducationInput(e, index, 'course')}
                                />
                                </label>
                                <label className='w-4/5 flex items-center justify-between text-slate-200 m-1'>
                                School Name :  
                                <input 
                                value={edu.name}
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-3/5'
                                onChange={(e) => handleEducationInput(e, index, 'name')}
                                />
                                </label>
                                <label className='w-4/5 flex items-center justify-between text-slate-200 m-1'>
                                Score :  
                                <input
                                placeholder='E.g: CGPA: 8.2/10'
                                value={edu.score}
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0  w-3/5'
                                onChange={(e) => handleEducationInput(e, index, 'score')}
                                />
                                </label>
                                <label className='w-4/5 flex items-center justify-between text-slate-200 m-1'>
                                Duration :  
                                <input 
                                placeholder='E.g: 2020-2024'
                                value={edu.duration}
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0  w-3/5'
                                onChange={(e) => handleEducationInput(e, index, 'duration')}
                                />
                                </label>
                        </div>
                    </div>
                ))
            }
            <div className='flex ml-10'>
                <button
                    onClick={addEducation}
                    className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center hover:opacity-90 disabled:cursor-default disabled:opacity-50 w-fit'
                >
                    <CirclePlus className='h-5 w-5' />
                    <p className='ml-1'>Add Education</p>
                </button>
            </div>
        </div>
    )
}

export default FormEducation
