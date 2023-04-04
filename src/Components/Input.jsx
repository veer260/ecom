import { useField } from 'formik'
import React from 'react'
import FormikHOC from './FormikHOC'

const Input = ({id, name, label, borderClass, touched, error,...rest}) => {
  // console.log("input ran");
  // console.log(name);
  // const field = useField(name);
  // const [data, meta] = field;
  // const {onBlur, onChange, value } = data;
  // const { touched, error} = meta;
  // const errorClass = (touched && error) ? className : "border-gray-300 focus:border-gray-100"
  return (
    <div>
      <div className='items-center justify-center '>
        <label htmlFor={id} className='sr-only' >{label}</label>
        <input 
        id={id}
        name={name}
        {...rest}
        // value={value}
        // placeholder={placeholder}
        className={'p-2 border-2  focus:border-gray-200 rounded-md outline-none placeholder-gray-300 appearence-none ' + borderClass}
        />
        {touched && error && (
            <h3 className='text-primary-dark '>{error}!</h3>
        )}
      </div>
    </div>
  )
}

export const FormikInput = FormikHOC(Input);

export default Input;