import LoadingAnimation from '@/components/loading/loading-animation'
import { Hourglass } from 'lucide-react'
import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <LoadingAnimation />
    </div>
  )
}

export default Loading