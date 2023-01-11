import React from 'react'
import { GiSpinningRibbons } from "react-icons/gi"

const Loading = () => {
  return (
    <div className=' flex grow items-center justify-center '>
        <GiSpinningRibbons className='text-4xl animate-spin' />
    </div>
  )
}

export default Loading