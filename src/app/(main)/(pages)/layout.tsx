import NavBar from '@/components/global/navbar'
import React from 'react'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className="flex flex-col overflow-hidden h-screen">
      <NavBar />
      <div className='mt-20 h-screen'>
        {props.children}
      </div>
    </div>
  )
}

export default Layout