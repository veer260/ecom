import React from 'react'
import {AiOutlineCheckSquare} from 'react-icons/ai'

const Error = () => {
  return (
    <div className='w-[80%] mx-auto h-24 flex items-center border'>
        <div className='w-[10%] flex items-center justify-center'>
            <AiOutlineCheckSquare />
        </div>
        <div className='flex'>
            "this is horrible"
        </div>
    </div>
  )
}

export default Error