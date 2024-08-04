import React, { useRef, useState } from 'react';
import { Projects } from '@/lib/types';
import { ArrowLeft, ArrowRight, Brain, FilePenLine, Loader } from 'lucide-react';
import ProjectNavigationButtons from '../../../project-navigation-buttons';
import GenerateAIDescriptionCard from '../../../generate-ai-description-card';

interface Props {
  projects: Projects;
  setProjects: React.Dispatch<React.SetStateAction<Projects>>;
  scrollToTop: () => void;

}

const FormProjects: React.FC<Props> = ({ projects, setProjects, scrollToTop }) => {

    const [userDescription, setUserDescription] = useState<string>('');
    const [projNum, setProjNum] = useState<number>(1);
    const [generatedDesc, setGeneratedDesc] = useState<string>('');
    const [loading, setLoading] = useState<Boolean>(false);

    const handleProjectInput = (e: any, project: keyof Projects, field: keyof Projects[keyof Projects]) => {
        setProjects(prev => ({
            ...prev,
            [project]: {
                ...prev[project],
                [field]: e.target.value,
            }
        }));
    }

    const generateAIDescription = async() => {
        // Implement generation of description
        setLoading(true);

        try {
            let text = '';

            if (projNum === 1) {
                text = `Project Name: ${projects.project1.name},
                Tech Stack: ${projects.project1.techstack},
                Description: ${userDescription}
                `;
            } else if (projNum === 2) {
                text = `Project Name: ${projects.project2.name},
                Tech Stack: ${projects.project2.techstack},
                Description: ${userDescription}
                `;
            } else if (projNum === 3) {
                text = `Project Name: ${projects.project3.name},
                Tech Stack: ${projects.project3.techstack},
                Description: ${userDescription}
                `;
            } else {
                text = `Project Name: ${projects.project4.name},
                Tech Stack: ${projects.project4.techstack},
                Description: ${userDescription}
                `;
            }

            const response = await fetch('/api/generate-resume/projects-suggestion', {
                method: 'POST',
                body: JSON.stringify({ text }),
            });

            if (!response.ok) {
                throw new Error("Failed to fetch Description Suggestions.");
            }

            const result = await response.json();
            const suggestion = result.suggestion;
            setGeneratedDesc(suggestion);
            setUserDescription(suggestion);

            console.log("Description Suggestion Successful.");

        } catch (error) {
            console.log("Error in fetching the AI generated description.");
        } finally {
            setLoading(false);
        }
    }

    const saveDescription = (section: string) => {
        setProjects(prev => ({
            ...prev,
            [section as keyof Projects]: {
                ...prev[section as keyof Projects],
                description: generatedDesc,
            }
        }));

        setUserDescription('');
        setGeneratedDesc('');
    }

    const changeNextProject = () => {
        if (projNum < 4) { 
            setProjNum(projNum + 1);
            scrollToTop();
        }
    };

    const changePrevProject = () => {
        if (projNum > 1) {
            setProjNum(projNum - 1);
            scrollToTop();
        }
    };

    return (
        <div className='flex flex-col gap-4'>
            <h1 className='font-semibold text-2xl border-b-2 pb-2'>Projects</h1>

            <div className='flex flex-col gap-10 px-10'>
                {
                    projNum === 1 ? (
                        <>
                            {/* Project One */}
                            <div className='flex flex-col gap-2 w-full'>
                                <h1 className='text-xl font-bold'>Project 1</h1>
                                <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                    Project Name :
                                    <input 
                                    value={projects.project1.name}
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleProjectInput(e, 'project1', 'name')}
                                    />
                                </label>
                                <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                    Tech Stack :
                                    <input 
                                    value={projects.project1.techstack}
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleProjectInput(e, 'project1', 'techstack')}
                                    />
                                </label>
                                <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                    Git Link :
                                    <input 
                                    value={projects.project1.gitlink}
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleProjectInput(e, 'project1', 'gitlink')}
                                    />
                                </label>
                                <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                    Year :
                                    <input 
                                    value={projects.project1.year}
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleProjectInput(e, 'project1', 'year')}
                                    />
                                </label>
                                
                                <GenerateAIDescriptionCard
                                userDescription={userDescription}
                                setUserDescription={setUserDescription}
                                generateAIDescription={generateAIDescription}
                                loading={loading}
                                generatedDesc={generatedDesc}
                                saveDescription={saveDescription}
                                section='project1'
                                />

                                <div className='mt-8'>
                                    <h1>Description:</h1>
                                    <textarea 
                                        value={projects.project1.description}
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-full mt-3 min-h-40'
                                        onChange={(e) => handleProjectInput(e, 'project1', 'description')}
                                        placeholder='Your Project Description'
                                    />
                                </div>

                                <ProjectNavigationButtons 
                                changeNextProject={changeNextProject}
                                changePrevProject={changePrevProject}
                                projNum={projNum}
                                />
                            </div>
                        </>
                    ) : projNum === 2 ? (
                        <>
                            {/* Project Two */}
                            <div className='flex flex-col gap-2 w-full'>
                                <h1 className='text-xl font-bold'>Project 2</h1>
                                <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                    Project Name :
                                    <input 
                                    value={projects.project2.name}
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleProjectInput(e, 'project2', 'name')}
                                    />
                                </label>
                                <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                    Tech Stack :
                                    <input 
                                    value={projects.project2.techstack}
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleProjectInput(e, 'project2', 'techstack')}
                                    />
                                </label>
                                <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                    Git Link :
                                    <input 
                                    value={projects.project2.gitlink}
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleProjectInput(e, 'project2', 'gitlink')}
                                    />
                                </label>
                                <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                    Year :
                                    <input 
                                    value={projects.project2.year}
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleProjectInput(e, 'project2', 'year')}
                                    />
                                </label>

                                <GenerateAIDescriptionCard
                                userDescription={userDescription}
                                setUserDescription={setUserDescription}
                                generateAIDescription={generateAIDescription}
                                loading={loading}
                                generatedDesc={generatedDesc}
                                saveDescription={saveDescription}
                                section='project2'
                                />

                                <div className='mt-8'>
                                    <h1>Description:</h1>
                                    <textarea 
                                        value={projects.project2.description}
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-full mt-3 min-h-40'
                                        onChange={(e) => handleProjectInput(e, 'project2', 'description')}
                                        placeholder='Your Project Description'
                                    />
                                </div>

                                <ProjectNavigationButtons 
                                changeNextProject={changeNextProject}
                                changePrevProject={changePrevProject}
                                projNum={projNum}
                                />
                            </div>
                        </>
                    ) : projNum === 3 ? (
                        <>
                            {/* Project Three */}
                            <div className='flex flex-col gap-2 w-full'>
                                <h1 className='text-xl font-bold'>Project 3</h1>
                                <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                    Project Name :
                                    <input 
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleProjectInput(e, 'project3', 'name')}
                                    />
                                </label>
                                <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                    Tech Stack :
                                    <input 
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleProjectInput(e, 'project3', 'techstack')}
                                    />
                                </label>
                                <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                    Git Link :
                                    <input 
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleProjectInput(e, 'project3', 'gitlink')}
                                    />
                                </label>
                                <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                    Year :
                                    <input 
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleProjectInput(e, 'project3', 'year')}
                                    />
                                </label>

                                <GenerateAIDescriptionCard
                                userDescription={userDescription}
                                setUserDescription={setUserDescription}
                                generateAIDescription={generateAIDescription}
                                loading={loading}
                                generatedDesc={generatedDesc}
                                saveDescription={saveDescription}
                                section='project3'
                                />

                                <div className='mt-8'>
                                    <h1>Description:</h1>
                                    <textarea 
                                        value={projects.project3.description}
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-full mt-3 min-h-40'
                                        onChange={(e) => handleProjectInput(e, 'project3', 'description')}
                                        placeholder='Your Project Description'
                                    />
                                </div>

                                <ProjectNavigationButtons 
                                changeNextProject={changeNextProject}
                                changePrevProject={changePrevProject}
                                projNum={projNum}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Project Four */}
                            <div className='flex flex-col gap-2 w-full'>
                                <h1 className='text-xl font-bold'>Project 4</h1>
                                <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                    Project Name :
                                    <input 
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleProjectInput(e, 'project4', 'name')}
                                    />
                                </label>
                                <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                    Tech Stack :
                                    <input 
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleProjectInput(e, 'project4', 'techstack')}
                                    />
                                </label>
                                <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                    Git Link :
                                    <input 
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleProjectInput(e, 'project4', 'gitlink')}
                                    />
                                </label>
                                <label className='w-4/6 flex items-center justify-between text-slate-200'>
                                    Year :
                                    <input 
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0'
                                        onChange={(e) => handleProjectInput(e, 'project4', 'year')}
                                    />
                                </label>

                                <GenerateAIDescriptionCard
                                userDescription={userDescription}
                                setUserDescription={setUserDescription}
                                generateAIDescription={generateAIDescription}
                                loading={loading}
                                generatedDesc={generatedDesc}
                                saveDescription={saveDescription}
                                section='project4'
                                />

                                <div className='mt-8'>
                                    <h1>Description:</h1>
                                    <textarea 
                                        value={projects.project4.description}
                                        className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-full mt-3 min-h-40'
                                        onChange={(e) => handleProjectInput(e, 'project4', 'description')}
                                        placeholder='Your Project Description'
                                    />
                                </div>

                                <ProjectNavigationButtons 
                                changeNextProject={changeNextProject}
                                changePrevProject={changePrevProject}
                                projNum={projNum}
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
    );
};

export default FormProjects;
