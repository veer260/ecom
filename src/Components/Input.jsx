import { useField } from 'formik'
import React from 'react'

const Input = ({id, name, label, className, ...rest}) => {
  
  const field = useField(name);
  const [data, meta] = field;
  const {onBlur, onChange, value } = data;
  const { touched, error} = meta;
  const errorClass = (touched && error) ? className : "border-gray-300 focus:border-gray-100"
  // console.log(data);
  return (
    <div>
      <div className='items-center justify-center '>
        <label htmlFor={id} className='sr-only' >{label}</label>
        <input 
        {...rest}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        className={'p-2 border-2 focus:border-gray-200 rounded-md outline-none placeholder-gray-300 appearence-none '+ errorClass}
        />
        {touched && error && (
            <h3 className='text-primary-dark '>{error}!</h3>
        )}
      </div>
    </div>
  )
}

export default Input