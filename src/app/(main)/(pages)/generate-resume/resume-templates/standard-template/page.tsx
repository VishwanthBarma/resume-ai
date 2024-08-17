'use client'
import FormStandardTemplate from '@/components/generate-resume/resume-templates/standard-template/form-standard-template'
import React, { useRef, useState } from 'react'
import ResumePreviewStandardTemplate from '@/components/generate-resume/resume-templates/standard-template/resume-preview-standard-template'
import { FileDown, LoaderCircle, Save } from 'lucide-react'
import ReactToPrint from 'react-to-print';
import { useGenerateResumeStore } from '@/store/generate-resume-store'
import { useUser } from '@clerk/nextjs';
import { saveResumeProgress } from '@/lib/firestore-functions'
import toast, { Toaster } from 'react-hot-toast';

const StandardTemplate = () => {
  const {
    basicDetails,
    education,
    technicalExperience,
    skills,
    projects,
    certificates,
    achievements,
    resumeId,
    setBasicDetails,
    setEducation,
    setTechnicalExperience,
    setSkills,
    setProjects,
    setCertificates,
    setAchievements,
    setResumeId
  } = useGenerateResumeStore();

  const resumeDownloadRef = useRef(null);
  const [saving, setSaving] = useState(false);

  const { isSignedIn, user, isLoaded } = useUser();

  const handleSaveProgress = async () => {
    if(!isSignedIn){
      console.log("Error in User-authentication.");
      return;
    }

    setSaving(true);

    const resumeData = {
      templateName: 'Standard Template',
      date: new Date().toISOString(),
      basicDetails,
      education,
      technicalExperience,
      skills,
      projects,
      certificates,
      achievements
    };

    try {
      const result = await saveResumeProgress(user.id, resumeId, resumeData);

      if (result.success) {
        setResumeId(result.resumeId ? result.resumeId : null);
        
        toast.success('Progress Saved Successfully');
        console.log('Resume saved successfully with ID:', result.resumeId);

      } else {
        toast.error("Failed to save progress. Try again.");
        console.error('Failed to save resume:', result.error);
      }
    } catch (error) {
      toast.error("Error saving resume progress. Try again.");
      console.error('Error saving resume progress:', error);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className='flex gap-10 h-full p-6 px-14'>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 1500 }}
      />
      <div className='flex-1 flex flex-col gap-4 h-full'>
        <div className='flex justify-between'>
          <h1
          className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-300'>
            Generate Resume
          </h1>
          <div className='flex gap-5 items-center'>
            {
              !isSignedIn && isLoaded && 
              <p className='text-sm text-slate-500 animate-pulse'>• Sign-In to save progress...</p>
            }
            <ReactToPrint
              trigger={() => (
                <button
                  className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center hover:opacity-90 disabled:cursor-default disabled:opacity-50'
                >
                  <FileDown className='h-4 w-4' />
                  <p className='ml-1 text-sm'>Download PDF</p>
                </button>
              )}
              content={() => resumeDownloadRef.current}
              pageStyle="@page { margin: 0; }"
              documentTitle='GeneratedResume- Resume.AI'
            />

            <div className='flex relative'>         
                <button
                disabled={!isSignedIn}
                  onClick={handleSaveProgress}
                      className='bg-neutral-900 border-2 py-2 w-20 justify-center rounded-lg flex items-center hover:opacity-90 disabled:cursor-default disabled:opacity-50'
                  >
                    {
                      saving ? 
                      <>
                      <LoaderCircle className='animate-spin h-5 w-5'/>
                      </>
                       :
                      <>
                      <Save className='h-4 w-4' />
                      <p className='ml-1 text-sm'>Save</p>
                      </>
                    }
                </button>
            </div>
          </div>
        </div>

        {/* Resume Form */}
        <div className='px-5 h-full'>
          <FormStandardTemplate 
          setBasicDetails={setBasicDetails}
          setEducation={setEducation}
          setTechnicalExperience={setTechnicalExperience}
          setSkills={setSkills}
          setProjects={setProjects}
          setCertificates={setCertificates}
          setAchievements={setAchievements}
          basicDetails={basicDetails}
          education={education}
          technicalExperience={technicalExperience}
          skills={skills}
          projects={projects}
          certificates={certificates}
          achievements={achievements}
          />
        </div>
        
      </div>

      {/* Resume Viewer */}
      <div className='w-2/5 h-full overflow-hidden overflow-y-scroll'>

        {/* Render Standard Resume */}
        <div ref={resumeDownloadRef} className='h-full w-full'>
          <ResumePreviewStandardTemplate
          basicDetails={basicDetails}
          education={education}
          technicalExperience={technicalExperience}
          skills={skills}
          projects={projects}
          certificates={certificates}
          achievements={achievements}
          />
        </div>
      </div>
    </div>
  )
}

export default StandardTemplate