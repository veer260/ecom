
import { Formik, Form } from 'formik';
import React from 'react'
import * as Yup from 'yup';
// import FormikInput from './FormikInput';
import Input, { FormikInput} from './Input';

const LoginPage = () => {
    console.log('login ran')
    function callLoginApi(values) {
        console.log('email', touched.email);
        // console.log('password', touched.password)
        console.log('sending data', values.email, values.password); 
    }

    const schema = Yup.object().shape( {
        email: Yup.string().email().required(),
        password: Yup.string().min(8).max(12).required(),
    })

    const initialValues = {
        email: '',
        password: ''
    };

  return (
    <div className='flex flex-col items-center justify-center h-screen font-semibold space-y-4'>
        <Input
        label="Search" 
        placeholder="Search"/>
        <Formik initialValues={initialValues} onSubmit={callLoginApi} validationSchema={schema} validateOnMount={true} >

        <Form 
            action="" className='flex flex-col bg-white border p-8  justify-center items-center'>
            <h1 className='text-2xl'>Login page to CodeYogi</h1>
            <FormikInput
            id="MyEmail"
            name="email"
            placeholder='Email addresssss'
            type="email"
            required={true}
            label="Email address"
            className='border-primary-default b-2'
            />

            <FormikInput
            id="MyPassword"
            name="password"
            placeholder='Passwordss'
            type="password"
            required={true}
            label="Password"
            />
            <button
            // onClick={resetForm} 
            className='bg-primary-default py-1 px-3 rounded-md uppercase text-white mt-4'>Reset Form</button>
            <button className='bg-primary-default py-1 px-3 rounded-md uppercase font-semibold text-white mt-8 disabled:bg-primary-light' >Login</button>
        </Form>
        </Formik>
    </div>
  )
}

export default LoginPage;