import { Sparkles } from 'lucide-react';
import React from 'react'

type Suggestion = {
    heading: string;
    description: string;
}

const SuggestionCard: React.FC<Suggestion> = ({heading, description}) => {
  return (
    <div className='flex gap-2 justify-start mb-10 w-4/5 relative'>
      <div className='absolute w-[2px] h-full rounded-xl left-[18px] top-1 bg-slate-400' />
      <div className='absolute  w-[2px] h-14 rounded-xl left-[18px] -bottom-12 bg-slate-400' />
      <div className='p-2 z-50 rounded-full border-[2px] border-slate-400 bg-gradient-to-r from-sky-600 to-slate-600 h-fit shadow-lg shadow-sky-500/30'>
          <Sparkles className='h-5 w-5 text-white'/>
      </div>
      <div className='rounded-xl text-sm shadow-xl border-2 border-slate-700 shadow-slate-900/50'>
        <h1 className='bg-slate-900/70 rounded-t-xl p-3 font-semibold border-b-2 border-neutral-800/40'>{heading}</h1>
        <p className='px-4 rounded-b-xl py-4 text-slate-300 text-[16px] leading-[1.6]'>- {description}</p>
      </div>
    </div>
  )
}

export default SuggestionCard