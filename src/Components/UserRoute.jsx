import React from 'react'
import { Navigate } from 'react-router'

const UserRoute = ({user, children}) => {
    if(!user) {
        return (
            <Navigate to= '/login' />
        )
    }
  return (
    <div>UserRoute</div>
  )
}

export default UserRoute