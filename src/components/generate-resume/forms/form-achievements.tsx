import { Achievements } from '@/lib/types'
import { CirclePlus } from 'lucide-react';
import React from 'react'

interface FormAchievementsProps {
    achievements: Achievements;
    setAchievements: (updater: (prev: Achievements) => Achievements) => void;

}

const FormAchievements: React.FC<FormAchievementsProps> = ({achievements, setAchievements}) => {

    const handleAchievementsChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        setAchievements(prev => {
            const updated = [...prev];
            updated[index] = value;
            return updated;
        })
    }

    const removeAchievements = (index: number) => {
        setAchievements(prev => prev.filter((_, i) => i !== index));
    }

    const addAchievement = () => {
        setAchievements(prev => [...prev, '']);
    }

    return (
        <div className='flex flex-col gap-4'>
            <h1 className='font-semibold text-2xl border-b-2 pb-2'>Achievements</h1>

                {
                    achievements.map((achievement, index) => (
                        <div key={index} className='flex gap-3 px-10'>
                            <div className='text-lg font-semibold rounded-full bg-slate-200 border-neutral-700 border-2 h-10 w-10 flex items-center justify-center'>
                                <h1 className='text-black'>{index+1}</h1>
                            </div>

                            <input
                            value={achievement}
                            type='text'
                            onChange={(e) => handleAchievementsChange(e, index)}
                            className='bg-neutral-900 border-none rounded-lg focus:ring-0 flex-1'
                            />

                            <button
                            onClick={() => removeAchievements(index)}
                                className={` text-red-400 p-1 px-3 rounded-lg hover:bg-neutral-900 ${index === 0 && 'hidden'}`}>
                                Remove
                            </button>
                        </div>
                    ))
                }

                <div className='flex ml-10'>
                    <button
                        onClick={addAchievement}
                        className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center hover:opacity-90 disabled:cursor-default disabled:opacity-50 w-fit'
                    >
                        <CirclePlus className='h-5 w-5' />
                        <p className='ml-1'>Add Achievement</p>
                    </button>
                </div>
        </div>
    )
}

export default FormAchievements
