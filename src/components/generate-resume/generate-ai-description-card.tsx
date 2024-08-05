import { Projects, TechnicalExperience } from '@/lib/types';
import { Brain, FilePenLine, Loader } from 'lucide-react'
import React from 'react'

interface GenerateAIDescriptionCardProps {
    userDescription: string;
    setUserDescription: (description: string) => void;
    generateAIDescription: () => Promise<void>;
    loading: Boolean;
    generatedDesc: string;
    saveDescription: () => void;
}

const GenerateAIDescriptionCard: React.FC<GenerateAIDescriptionCardProps> = ({userDescription, setUserDescription, generateAIDescription, loading, generatedDesc, saveDescription}) => {

    return (
        <div className='mt-5 border-2 border-dotted p-3 rounded-xl'>
            <h1 className='font-bold'>AI Suggestion</h1>
            <textarea 
                value={userDescription}
                className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-full mt-3 min-h-40'
                onChange={(e) => setUserDescription(e.target.value)}
                placeholder='Tell me more about your work and contributions'
            />

            <div className='flex gap-5'>
                <button
                    disabled={userDescription === ''}
                    onClick={generateAIDescription}
                    className='bg-gradient-to-r from-pink-600 to-pink-500 p-2 rounded-lg flex items-center mt-2 hover:opacity-90 disabled:cursor-default disabled:opacity-50'>
                    {
                        loading ? 
                        <Loader className='h-5 w-5 animate-spin'/>
                        :
                        <Brain className='h-5 w-5'/>
                    }
                    {
                        loading ? 
                        <p className='font-bold ml-1'>Generating...</p>
                        :
                        <p className='font-bold ml-1'>Generate</p>
                    }
                </button>

                <button
                    disabled={generatedDesc === ''}
                    onClick={saveDescription}
                    className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center mt-2 hover:opacity-90 disabled:cursor-default disabled:opacity-50'>
                    <FilePenLine className='h-5 w-5'/>
                    <p className='ml-1'>Insert To Description</p>
                </button>
            </div>
        </div>
    )
}

export default GenerateAIDescriptionCard
