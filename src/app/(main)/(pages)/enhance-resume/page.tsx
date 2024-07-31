'use client'
import { useResumeStore } from '@/store/resume-store'
import React from 'react'

type Props = {}

const EnhanceResume = (props: Props) => {
    const resumeFile = useResumeStore((state) => state.resumeFile);
    const resumeSuggestions = useResumeStore((state) => state.resumeSuggestions);

    console.log("Resume File: ", resumeFile);
    console.log("Resume Suggestions: ", resumeSuggestions);
  return (
    <div>EnhanceResume</div>
  )
}

export default EnhanceResume