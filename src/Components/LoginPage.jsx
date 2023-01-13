import { useFormik } from 'formik';
import React from 'react'

const LoginPage = () => {

    function callLoginApi(values) {
        console.log('sending data', values.email, values.password); 
    }

    const { handleSubmit, handleChange, values, resetForm} = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: callLoginApi
    })


  return (
    <div className='flex flex-col items-center justify-center h-screen font-semibold space-y-4'>
        
        <form
            onSubmit={handleSubmit} 
            action="" className='flex flex-col bg-white border p-8  justify-center items-center'>
            <h1 className='text-2xl'>Login page to CodeYogi</h1>
            <div className='items-center justify-center '>
                <label htmlFor="MyEmail" className='sr-only' >Email address</label>
                <input 
                value={values.email}
                onChange={handleChange}
                name='email'
                type="email" 
                placeholder='Email address '
                id='MyEmail'
                autoComplete
                required
                className='p-2 border-2 rounded-md placeholder-gray-300'
                />
            </div>
            <div>
                <label htmlFor="MyPassword"></label>
                <input 
                value={values.password}
                onChange={handleChange}
                placeholder='Password'
                name='password'
                className='p-2 border-2 rounded-md placeholder-gray-300'
                id='MyPassword'
                type="password" />
            </div>
            <button
            onClick={resetForm} 
            className='bg-primary-default py-1 px-3 rounded-md uppercase text-white mt-4'>Reset Form</button>
            <button className='bg-primary-default py-1 px-3 rounded-md uppercase font-semibold text-white mt-8'>Login</button>
        </form>
    </div>
  )
}

export default LoginPage;