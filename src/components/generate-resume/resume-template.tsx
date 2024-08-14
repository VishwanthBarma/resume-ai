'use client'
import { useGenerateResumeStore } from '@/store/generate-resume-store';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

type Props = {
    title: string;
    img: string;
    url: string;
    disable: Boolean;
}

const ResumeTemplate = ({title, img, url, disable}: Props) => {
  const [loading, setLoading] = useState(false)
  const { resetState } = useGenerateResumeStore();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if(!disable){
      setLoading(true);
      router.push(url);
      resetState();
    }
    setLoading(false);
  }

  return (
    <div className={`m-2 hover:scale-105 transition ease-in-out mb-5 ${disable && 'cursor-not-allowed opacity-50'}`}>
        <button onClick={(e) => handleClick(e)} className={disable && 'cursor-not-allowed'}>
            <Image alt='Resume Template Name' width={300} height={600} className='rounded-xl' src={img}></Image>
            {
              !loading ?
              <p className='text-center font-bold mt-2'>{title}</p>
              :
              <h1>Loading...</h1>
            }
        </button>
    </div>
  )
}

export default ResumeTemplate