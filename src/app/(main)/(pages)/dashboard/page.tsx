import React, { use } from 'react'
import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from '@clerk/nextjs/server';
import CreateResumeCard from '@/components/dashboard/create-resume-card';
import { getUserResumes } from '@/lib/firestore-functions';
import ResumeCard from '@/components/dashboard/resume-card';


const Dashboard = async () => {
    const user = await currentUser();

    const { resumes }  = user ? await getUserResumes(user.id) : { resumes: [] };

    return (
        <div className='p-10 px-20 flex flex-col gap-3'>
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold'>Dashboard</h1>
                <SignOutButton redirectUrl="/">
                    <button className='bg-neutral-900 p-2 px-4 border-[2px] border-slate-800 rounded-xl'>Log Out</button>
                </SignOutButton>
            </div>
            <div className='flex flex-col gap-5 h-full'>
                <h1 className='text-5xl font-thin'>Your Resumes</h1>
                <div className='w-full overflow-hidden overflow-y-scroll flex flex-wrap gap-10 mt-5 p-10'>
                    {/* Render all saved resume progress */}
                    <CreateResumeCard />

                    {
                        resumes?.length != 0 &&
                        <>
                            {
                                resumes?.map((resume, index) => (
                                    <div key={index}>
                                        {/* @ts-ignore:next-line */}
                                        <ResumeCard resumeData={resume}/>
                                    </div>
                                ))
                            }
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard
