import Link from 'next/link';
import React from 'react'

type Props = {
    title: string;
    img: string;
    url: string;
    disable: Boolean;
}

const ResumeTemplate = ({title, img, url, disable}: Props) => {
  return (
    <div className={`m-2 hover:scale-105 transition ease-in-out mb-5 ${disable && 'cursor-not-allowed opacity-50'}`}>
        <Link href={ disable ? "" : url } className={disable && 'cursor-not-allowed'}>
            <img className='h-[500px] rounded-xl' src={img}></img>
            <p className='text-center font-bold mt-2'>{title}</p>
        </Link>
    </div>
  )
}

export default ResumeTemplate