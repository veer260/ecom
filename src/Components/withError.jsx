import React, { useContext } from 'react'
import { alertContext } from '../App'

const withError = (IncomingComponent) => {
    
  return function OutgoingComponent(props) {
    const {alert, setAlert, removeAlert} = useContext(alertContext);
    return (
        <IncomingComponent {...props} alert={alert} setAlert={setAlert} removeAlert={removeAlert} />
    )
  }
}

export default withError;