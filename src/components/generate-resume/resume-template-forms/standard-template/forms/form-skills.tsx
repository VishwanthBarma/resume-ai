// components/FormSkills.tsx
import React, { useState } from 'react';
import { Skills } from '@/lib/types';  // Adjust the import based on your file structure

interface FormSkillsProps {
  skills: Skills;
  onSkillsChange: (skills: Skills) => void;
}

const FormSkills: React.FC<FormSkillsProps> = ({ skills, onSkillsChange }) => {
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      onSkillsChange([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (index: number) => {
    onSkillsChange(skills.filter((_, i) => i !== index));
  };

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-semibold text-2xl border-b-2 pb-2'>Skills</h1>
      <div className='flex flex-col gap-2 px-10'>
        <div className='flex items-center'>
          <input
            type='text'
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className='bg-neutral-800 border-none rounded-lg p-3 focus:ring-0'
            placeholder='Enter new skill'
          />
          <button
            onClick={handleAddSkill}
            className='ml-4 bg-white font-semibold text-pink-500 rounded-lg px-4 py-2'
          >
            Add
          </button>
        </div>

        <ul className='list-disc pl-5'>
          {skills.map((skill, index) => (
            <li key={index} className='flex justify-between items-center'>
              {skill}
              <button
                onClick={() => handleRemoveSkill(index)}
                className='ml-2 text-red-500'
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FormSkills;
