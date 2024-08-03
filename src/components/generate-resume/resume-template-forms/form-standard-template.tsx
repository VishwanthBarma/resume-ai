import React from 'react'
import { BasicDetails, Education, TechnicalExperience, Certificates, Achievements, Projects } from '@/lib/types'


interface FormStandardTemplateProps {
    setBasicDetails: React.Dispatch<React.SetStateAction<BasicDetails>>;
    setEducation: React.Dispatch<React.SetStateAction<Education>>;
    setTechnicalExperience: React.Dispatch<React.SetStateAction<TechnicalExperience>>;
    setSkills: React.Dispatch<React.SetStateAction<string[]>>;
    setProjects: React.Dispatch<React.SetStateAction<Projects>>;
    setCertificates: React.Dispatch<React.SetStateAction<Certificates>>;
    setAchievements: React.Dispatch<React.SetStateAction<Achievements>>;
  }
  

const FormStandardTemplate: React.FC<FormStandardTemplateProps>  = (  {
    setBasicDetails,
    setEducation,
    setTechnicalExperience,
    setSkills,
    setProjects,
    setCertificates,
    setAchievements}
) => {
    return (
        <div>
            FormStandardTemplate
        </div>
    )
}

export default FormStandardTemplate
