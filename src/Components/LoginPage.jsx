import React from 'react'

const LoginPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen font-semibold space-y-4'>
        
        <form action="" className='flex flex-col bg-white border p-8  justify-center items-center'>
            <h1 className='text-2xl'>Login page to CodeYogi</h1>
            <div className='items-center justify-center '>
                <label htmlFor="MyEmail" className='sr-only' >Email address</label>
                <input 
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
                placeholder='Password'
                name='password'
                className='p-2 border-2 rounded-md placeholder-gray-300'
                id='MyPassword'
                type="password" />
            </div>

            <button className='bg-primary-default py-1 px-3 rounded-md uppercase font-semibold text-white mt-8'>Login</button>
        </form>
    </div>
  )
}

export default LoginPage;