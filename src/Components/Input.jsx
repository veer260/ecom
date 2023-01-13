import React from 'react'

const Input = ({id, label, touched, error, ...rest}) => {
  return (
    <div>
         <div className='items-center justify-center '>
                <label htmlFor={id} className='sr-only' >{label}</label>
                <input 
                {...rest}
                id={id}
                className='p-2 border-2 rounded-md placeholder-gray-300'
                />
                {touched && error && (
                    <h3 className='text-primary-dark '>{error}!</h3>
                )}
            </div>
    </div>
  )
}

export default Input