import React from 'react'
import { Navigate } from 'react-router'

const Dashboard = ({user}) => {
  if(!user) {
    return (
      <Navigate to='/login' /> 
    )
  }
  return (
    <div>
        This is DashBoard
    </div>
  )
}

export default Dashboard