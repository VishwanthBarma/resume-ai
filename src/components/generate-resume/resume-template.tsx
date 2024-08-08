'use client'
import { useGenerateResumeStore } from '@/store/generate-resume-store';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

type Props = {
    title: string;
    img: string;
    url: string;
    disable: Boolean;
}

const ResumeTemplate = ({title, img, url, disable}: Props) => {
  const { resetState } = useGenerateResumeStore();
  const router = useRouter();

  const handleClick = () => {
    router.push(url);
    resetState();
  }

  return (
    <div className={`m-2 hover:scale-105 transition ease-in-out mb-5 ${disable && 'cursor-not-allowed opacity-50'}`}>
        <button onClick={handleClick} className={disable && 'cursor-not-allowed'}>
            <Image alt='Resume Template Name' width={300} height={600} className='rounded-xl' src={img}></Image>
            <p className='text-center font-bold mt-2'>{title}</p>
        </button>
    </div>
  )
}

export default ResumeTemplate