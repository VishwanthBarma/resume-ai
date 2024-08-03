import { Sparkles } from 'lucide-react';
import React from 'react'

type Suggestion = {
    heading: string;
    description: string;
}

const SuggestionCard: React.FC<Suggestion> = ({heading, description}) => {
  return (
    <div className='flex gap-2 justify-start mb-10 w-4/5'>
      <div className='p-2 rounded-full bg-gradient-to-r from-sky-600 to-teal-500 h-fit'>
          <Sparkles className='h-5 w-5 text-white'/>
      </div>
      <div className='rounded-xl text-sm'>
        <h1 className='bg-neutral-900 rounded-t-xl p-3 font-semibold text-sky-200'>{heading}</h1>
        <p className='px-4 border-2 border-neutral-900 rounded-b-xl py-4 text-slate-300 text-[16px] leading-[1.6]'>- {description}</p>
      </div>
    </div>
  )
}

export default SuggestionCard