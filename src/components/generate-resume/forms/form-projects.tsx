import React, { useRef, useState } from 'react';
import { ProjectItem, Projects } from '@/lib/types';
import { ArrowLeft, ArrowRight, Brain, FilePenLine, Loader } from 'lucide-react';
import GenerateAIDescriptionCard from '../generate-ai-description-card';
import FormSectionNavigationButtons from '../form-section-navigation-buttons';
import toast from 'react-hot-toast';

interface FormProjectsProps {
  projects: Projects;
  setProjects: (updater: (prev: Projects) => Projects) => void;
  scrollToTop: () => void;
}

const FormProjects: React.FC<FormProjectsProps> = ({ projects, setProjects, scrollToTop }) => {

    const [userDescription, setUserDescription] = useState<string>('');
    const [currentProjIndex, setCurrentProjIndex] = useState(0);
    const [generatedDesc, setGeneratedDesc] = useState<string>('');
    const [loading, setLoading] = useState<Boolean>(false);

    const handleProjectInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number, field: keyof ProjectItem) => {
        const { value } = e.target;
        setProjects(prev => {
            const updated = [...prev];
            updated[index] = { ...updated[index], [field]: value };
            return updated;
        });
    }

    const generateAIDescription = async() => {
        if (userDescription === '') return;
    
        setLoading(true);
    
        try {
            const currentProject = projects[currentProjIndex];
            const text = `Project Name: ${currentProject.name}, Tech Stack: ${currentProject.techstack}, Description: ${userDescription}`;


            const response = await fetch('/api/generate-resume/projects-suggestion', {
                method: 'POST',
                body: JSON.stringify({ text }),
            });

            if (!response.ok) {
                toast.error("Failed to Generate Suggestion");
                console.log("Failed to fetch Description Suggestions.");
                return;
            }

            const result = await response.json();
            const suggestion = result.suggestion;
            setGeneratedDesc(suggestion);
            setUserDescription(suggestion);

            console.log("Description Suggestion Successful.");
            toast.success("Generated Suggestion Successfully.");

        } catch (error) {
            toast.error("Error in Generating Suggestion")
            console.log("Error in fetching the AI generated description.");
        } finally {
            setLoading(false);
        }
    }

    const saveDescription = () => {
        setProjects(prev => {
          const updated = [...prev];
          updated[currentProjIndex] = { ...updated[currentProjIndex], description: generatedDesc };
          return updated;
        });
        setUserDescription('');
        setGeneratedDesc('');
    };

    const changeProject = (index: number) => {
        setCurrentProjIndex(index);
        scrollToTop();
    };

    const addProject = () => {
        setProjects(prev => [
          ...prev,
          {name: '', techstack: '', gitlink: '', year: '', description: ''}
        ]);
        setCurrentProjIndex(projects.length);
        scrollToTop();
    };
    
    const removeProject = () => {
        setProjects(prev => prev.filter((_, i) => i !== currentProjIndex));
        setCurrentProjIndex(prev => Math.max(0, prev - 1));
        scrollToTop();
    };



    return (
        <div className='flex flex-col gap-4'>
            <h1 className='font-semibold text-2xl border-b-2 pb-2'>Projects</h1>

            <div className='flex flex-col gap-10 px-10'>
                {
                    projects.map((project, index) => (
                        <div key={index} className={`flex flex-col gap-2 w-full ${currentProjIndex === index ? '' : 'hidden'}`}>
                            <div className='text-lg font-semibold rounded-full bg-slate-200 border-neutral-700 border-2 h-10 w-10 flex items-center justify-center'>
                                <h1 className='text-black'>{index+1}</h1>
                            </div>
                            <label className='w-4/5 flex items-center justify-between text-slate-200'>
                                Project Name :
                                <input 
                                value={project.name}
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0  w-3/5'
                                    onChange={(e) => handleProjectInput(e, index, 'name')}
                                />
                            </label>
                            <label className='w-4/5 flex items-center justify-between text-slate-200'>
                                Tech Stack :
                                <input 
                                placeholder='E.g: Reactjs, Javascript'
                                value={project.techstack}
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-3/5'
                                    onChange={(e) => handleProjectInput(e, index, 'techstack')}
                                />
                            </label>
                            <label className='w-4/5 flex items-center justify-between text-slate-200'>
                                Git Link :
                                <input 
                                value={project.gitlink}
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-3/5'
                                    onChange={(e) => handleProjectInput(e, index, 'gitlink')}
                                />
                            </label>
                            <label className='w-4/5 flex items-center justify-between text-slate-200'>
                                Year :
                                <input 
                                placeholder='E.g: Aug 2023'
                                value={project.year}
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0  w-3/5'
                                    onChange={(e) => handleProjectInput(e, index, 'year')}
                                />
                            </label>
                            
                            <GenerateAIDescriptionCard
                            userDescription={userDescription}
                            setUserDescription={setUserDescription}
                            generateAIDescription={generateAIDescription}
                            loading={loading}
                            generatedDesc={generatedDesc}
                            saveDescription={saveDescription}
                            />

                            <div className='mt-8'>
                                <h1>Description:</h1>
                                <textarea 
                                    value={project.description}
                                    className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-full mt-3 min-h-40'
                                    onChange={(e) => handleProjectInput(e, index, 'description')}
                                    placeholder='Your Project Description'
                                />
                            </div>

                            <FormSectionNavigationButtons
                            currentIndex={currentProjIndex}
                            totalItems={projects.length}
                            onPrev={() => changeProject(currentProjIndex - 1)}
                            onNext={() => changeProject(currentProjIndex + 1)}
                            onAdd={addProject}
                            onRemove={removeProject}
                            disablePrev={currentProjIndex === 0}
                            disableNext={currentProjIndex === projects.length - 1}
                            disableRemove={projects.length === 1}
                            />
                        </div>
                    ))
                }
                </div>
            </div>
    );
};

export default FormProjects;
