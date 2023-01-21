import React from 'react'
import { Navigate } from 'react-router'
import withUser from './withUser'

const AuthRoute = ({user, children}) => {
    if(user) {
        <Navigate to='/' />
    }
  return children
}

export default withUser(AuthRoute)