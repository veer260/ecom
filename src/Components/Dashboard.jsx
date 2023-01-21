import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { userContext } from '../App'

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
    </div>
  )
}

export default Dashboard