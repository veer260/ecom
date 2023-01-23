import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { Link } from 'react-router-dom';
import { userContext } from './Contexts'

const Dashboard = () => {
  const {setUser} = useContext(userContext);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(undefined);
  }
  return (
    <div className='space-y-4'>
        <p>This is DashBoard</p>
        <button 
        onClick={handleLogout}
        className='bg-primary-default px-3 py-2 font-semibold text-white rounded-md shadow-md'>Logout</button>

        <div>
        <Link 
        className='bg-primary-default px-3 py-2 font-semibold text-white rounded-md shadow-md'
        to={'/products'}
        >Direct to products</Link>

        </div>
         
        
    </div>
  )
}

export default Dashboard