import NavBar from '@/components/global/navbar'
import React from 'react'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <NavBar />
      <div className='flex-1 overflow-auto mt-20'>
        {props.children}
      </div>
    </div>
  )
}

export default Layout