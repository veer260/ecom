import React from 'react'
import * as Yup from 'yup';
import {Formik, Form, withFormik} from 'formik';
import { TestFormikInput } from './TestInput';
import TestInput from './TestInput';
import {BiUser} from 'react-icons/bi';
import {RiLockPasswordLine} from 'react-icons/ri'
import axios from 'axios';
import { Navigate } from 'react-router';


const callLoginApi = (values, bag) => {
    console.log('callloginApi called')   
    console.log('values:', values);
    axios.post('https://myeasykart.codeyogi.io/login', {
        email: values.email,
        password: values.password
    }).then(response => {
        const {user, token} = response.data;
        localStorage.setItem('token', token);
        bag.props.setUser(user);
    }).catch(() =>{
        console.log('Invalid credentials');
    })
}
const schema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(8).max(12)
})

const initialValues = {
    email: '',
    password: ''
}

const Login = ({values, touched, errors, user, handleSubmit, handleBlur, handleChange}) => {
    // console.log('errors:', values);
    // console.log('call login api', callLoginApi);
    // console.log('onSubmit', onSubmit)
    if(user) {
        return (
            <Navigate to='/'></Navigate>
        )
    }
  return (
    <div className='bg-primary-default h-screen flex justify-center items-center'>
        {/* <Formik 
        // initialValues={initialValues}
        // onSubmit={callLoginApi}
        //  validationSchema={schema}
        //  validateOnMount={true} 
          > */}
            <form 
            onSubmit={handleSubmit}
            className='w-[400px]'>
            <div className='flex my-4 border rounded-md items-center gap-x-2 px-4 py-2 bg-primary-default'>
            <BiUser className='text-white/50'></BiUser>
                <TestInput
                value={values.email}
                error={errors.email} 
                touched={touched.email}
                name='email'
                placeholder='Email Address'
                onChange={handleChange}
                onBlur={handleBlur}
                id='myEmail'
                type='email'
                required={true}
                label='Email Address'
                borderClass=''
                />
            </div>
            

            <div className='flex my-4 border rounded-md items-center gap-x-2 px-4 py-2 bg-primary-default'>
                <RiLockPasswordLine className='text-white/50'></RiLockPasswordLine>
                <TestInput 
                name='password'
                value={values.password}
                error={errors.password} 
                touched={touched.password}
                placeholder='Password'
                id='myPassword'
                type='password'
                onChange={handleChange}
                onBlur={handleBlur}
                required={true}
                label='Enter Password'
                borderClass=''
                />
            </div>

            <button type='submit'  className='bg-white w-full font-semibold text-primary-default p-2 '>Login</button>

            </form>
              

        {/* </Formik> */}

    </div>
  )
}

// const myHOC = withFormik({
//     validationSchema: schema,
//     initialValues: initialValues,
//     onSubmit: callLoginApi
// });
const myHOC = withFormik({ validationSchema: schema, handleSubmit: callLoginApi, initialValues: initialValues});
// console.log(myHOC);

const EasyLogin = myHOC(Login);

export default EasyLogin;