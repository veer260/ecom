import React from 'react'
import { useContext } from 'react'

const withProvider = (context) => {
  return function myHOC(IncomingComponent) {
    return function OutgoingComponent(props) {
        const contextData = useContext(context);
        return (
            <IncomingComponent {...props} {...contextData} />
        )
    }
  }
}

export default withProvider;