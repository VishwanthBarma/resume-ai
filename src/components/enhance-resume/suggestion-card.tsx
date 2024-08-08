import { Sparkles } from 'lucide-react';
import React from 'react'

type Suggestion = {
    heading: string;
    description: string;
}

const SuggestionCard: React.FC<Suggestion> = ({heading, description}) => {
  return (
    <div className='flex gap-2 justify-start mb-10 w-4/5 relative'>
      <div className='absolute suggestion-shine-effect w-[2px] h-full rounded-xl left-4 top-1 bg-gradient-to-b from-slate-800 to-sky-500' />
      <div className='p-2 z-50 rounded-full bg-gradient-to-r from-sky-600 to-slate-600 h-fit shadow-lg shadow-sky-500/30'>
          <Sparkles className='h-5 w-5 text-white'/>
      </div>
      <div className='rounded-xl text-sm shadow-xl border-2 border-slate-800 shadow-slate-900/80'>
        <h1 className='bg-slate-900/70 rounded-t-xl p-3 font-semibold border-b-2 border-neutral-800/40'>{heading}</h1>
        <p className='px-4 rounded-b-xl py-4 text-slate-300 text-[16px] leading-[1.6]'>- {description}</p>
      </div>
    </div>
  )
}

export default SuggestionCard