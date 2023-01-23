import React, { useContext } from 'react'
import { alertContext } from './Contexts'

const withError = (IncomingComponent) => {
    
  return function OutgoingComponent(props) {
    const contextData = useContext(alertContext);
    return (
        <IncomingComponent {...props} {...contextData} />
    )
  }
}

export default withError;