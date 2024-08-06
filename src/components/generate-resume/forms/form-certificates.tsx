import { CertificateItem, Certificates } from '@/lib/types'
import { CirclePlus } from 'lucide-react';
import React from 'react'

interface FormCertificatesProps {
    certificates: Certificates,
    setCertificates: (updater: (prev: Certificates) => Certificates) => void;
}

const FormCertificates: React.FC<FormCertificatesProps> = ({certificates, setCertificates}) => {

    const handleCertificatesChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, field: keyof CertificateItem) => {
        const { value } = e.target;
        setCertificates(prev => {
            const updated = [...prev];
            updated[index] = {...updated[index], [field]: value};
            return updated;
        });
    };

    const removeCertificate = (index: number) => {
        setCertificates(prev => prev.filter((_, i) => i !== index));
    }

    const addCertificate = () => {
        setCertificates(prev => [
            ...prev,
            {title: '', tag: ''}
        ])
    }

    return (
        <div className='flex flex-col gap-4'>
            <h1 className='font-semibold text-2xl border-b-2 pb-2'>Certificates</h1>
            <div className='flex flex-col gap-2 px-10'>
                {
                    certificates.map((certificate, index) => (
                        <div key={index} className='flex flex-col mb-10'>
                            <div className='flex gap-4 items-center'>
                                <div className='text-lg font-semibold rounded-full bg-slate-200 border-neutral-700 border-2 h-10 w-10 flex items-center justify-center'>
                                    <h1 className='text-black'>{index+1}</h1>
                                </div>
                                <button
                                onClick={() => removeCertificate(index)}
                                 className={` text-red-400 p-1 px-3 rounded-lg hover:bg-neutral-900 ${index === 0 && 'hidden'}`}>
                                    Remove
                                </button>
                            </div>
                            <label className='flex items-center justify-between text-slate-200 m-1'>
                                Certificate Title :  
                                <input
                                value={certificate.title}
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-4/6'
                                onChange={(e) => handleCertificatesChange(e, index, 'title')}
                                />
                            </label>
                            <label className='flex items-center justify-between text-slate-200 m-1'>
                                Certificate Tag :  
                                <input
                                value={certificate.tag}
                                className='bg-neutral-900 border-none rounded-lg focus:ring-0 w-4/6'
                                onChange={(e) => handleCertificatesChange(e, index, 'tag')}
                                />
                            </label>
                        </div>
                    ))
                }

                <div className='flex'>
                    <button
                        onClick={addCertificate}
                        className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center hover:opacity-90 disabled:cursor-default disabled:opacity-50 w-fit'
                    >
                        <CirclePlus className='h-5 w-5' />
                        <p className='ml-1'>Add Certificate</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FormCertificates
