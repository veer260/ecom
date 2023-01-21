// import { Input } from 'postcss'
import React from 'react'
import testFormikHOC from './testFormikHOC';


const TestInput = ({name,error,touched,  borderClass, id, label, type, ...rest}) => {
    // console.log('error:', error);
    
  return (
    <div className='w-full'>
        
        <input 
        className='w-full text-white appearance-none  placeholder-white/50 bg-none border-white outline-none bg-primary-default'
        id={id}
        name={name}
        type={type}
        {...rest} />
        <label 
        className='sr-only'
        htmlFor={id}>
            {label}</label>
        {error && touched && (
            <div className='text-yellow-400'>
                <span className='text-[#FFD56F]'>{error}</span>
            </div>
        )}
    </div>
  )
}

export const TestFormikInput = testFormikHOC(TestInput)
export default TestInput;