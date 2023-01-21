import React, { useContext } from 'react'
import { alertContext } from '../App'

const withError = (IncomingComponent) => {
    
  return function OutgoingComponent(props) {
    const {alert, setAlert} = useContext(alertContext);
    return (
        <IncomingComponent {...props} alert={alert} setAlert={setAlert} />
    )
  }
}

export default withError;