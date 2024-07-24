import { MenuIcon } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
    // TODO: reterive user
    const user = true;
    
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
        {/* logo */}
        <h1 className='text-2xl font-bold'>Resume.AI</h1>
        {/* navigation */}
        <div className='absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block'>
            <ul className='flex items-center gap-4 list-none text-sm text-neutral-400'>
                <li className='hover:text-white'>
                    <Link href="#">Templates</Link>
                </li>
                <li  className='hover:text-white'>
                    <Link href="#">Blog</Link>
                </li>
                <li  className='hover:text-white'>
                    <Link href="#">Pricing</Link>
                </li>
                <li  className='hover:text-white'>
                    <Link href="#">About</Link>
                </li>
            </ul>
        </div>
        {/* nav button */}
        <div className="flex items-center gap-4">
            <Link
            href="/dashboard"
            className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {user ? 'Dashboard' : 'Get Started'}
            </span>
            </Link>
            
            <MenuIcon className="md:hidden" />
        </div>
    </header>
  )
}

export default NavBar