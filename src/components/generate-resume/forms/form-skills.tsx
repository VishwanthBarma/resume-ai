// components/FormSkills.tsx
import React, { useState } from 'react';
import { Skills } from '@/lib/types';  // Adjust the import based on your file structure
import { Trash } from 'lucide-react';

interface FormSkillsProps {
  skills: Skills;
  setSkills: (updater: (prev: Skills) => Skills) => void;
}

const FormSkills: React.FC<FormSkillsProps> = ({ skills, setSkills }) => {
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills(prev => [...prev, newSkill]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (index: number) => {
    setSkills(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-semibold text-2xl border-b-2 pb-2'>Skills</h1>
      <div className='flex flex-col gap-2 px-10 max-h-screen'>
        <div className='flex items-center'>
          <input
            type='text'
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className='bg-neutral-900 border-none rounded-lg p-3 focus:ring-0'
            placeholder='Enter new skill'
          />
          <button
            onClick={handleAddSkill}
            className='ml-4 bg-slate-200 font-semibold text-pink-500 rounded-lg px-4 py-2'
          >
            Add
          </button>
        </div>

        <div className='flex flex-wrap gap-4 mt-5 h-full overflow-hidden overflow-y-scroll'>
          {
            skills.map((skill, index) => (
              <div key={index} className='flex p-2 pl-3 items-center gap-5 bg-neutral-900 w-fit rounded-lg'>
                <h1 className='text-slate-200 text-lg'>{skill}</h1>
                <button
                onClick={() => handleRemoveSkill(index)}
                    className={` text-red-400 hover:opacity-80 bg-neutral-800 p-2 rounded-lg`}>
                    <Trash className='h-4 w-4'/>
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default FormSkills;
