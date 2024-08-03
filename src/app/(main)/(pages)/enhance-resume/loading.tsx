import { Hourglass } from 'lucide-react'
import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <Hourglass className='h-20 w-20 animate-spin'/>
    </div>
  )
}

export default Loading