import React, { useContext } from 'react'
import { userContext } from './Contexts'

const withUser = (IncomingComponent) => {
  return function OutgoingComponent(props) {
    const contextData = useContext(userContext);
    return <IncomingComponent {...props} {...contextData} />
  }
}

export default withUser;