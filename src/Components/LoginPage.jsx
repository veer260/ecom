import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import Input from './Input';

const LoginPage = () => {

    function callLoginApi(values) {
        console.log('email', touched.email);
        console.log('password', touched.password)
        console.log('sending data', values.email, values.password); 
    }

    const schema = Yup.object().shape( {
        email: Yup.string().email().required(),
        password: Yup.string().min(8, 'bhut chota password h bhai').max(12, 'bhut lmba password h bhai').required(),
    })

    const { handleSubmit, handleChange, values, resetForm, errors, handleBlur, touched, isValid} = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: callLoginApi,
        validationSchema: schema,
        validateOnMount: true
    }) 


  return (
    <div className='flex flex-col items-center justify-center h-screen font-semibold space-y-4'>
        
        <form
            onSubmit={handleSubmit} 
            action="" className='flex flex-col bg-white border p-8  justify-center items-center'>
            <h1 className='text-2xl'>Login page to CodeYogi</h1>
            <Input
            id="MyEmail"
            value={values.email}
            name="email"
            placeholder='Email address'
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.email}
            error={errors.email}
            required={true}
            label="Email address"
            />

            <Input
            id="MyPassword"
            value={values.password}
            name="password"
            placeholder='Password'
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.password}
            error={errors.password}
            required={true}
            label="Password"
            />
            <button
            onClick={resetForm} 
            className='bg-primary-default py-1 px-3 rounded-md uppercase text-white mt-4'>Reset Form</button>
            <button className='bg-primary-default py-1 px-3 rounded-md uppercase font-semibold text-white mt-8 disabled:bg-primary-light' disabled={!isValid}>Login</button>
        </form>
    </div>
  )
}

export default LoginPage;