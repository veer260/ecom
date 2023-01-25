import React from "react";
import { useContext } from "react";
import { alertContext, CartContext, userContext } from "./Contexts";

const withProvider = (context) => {
  return function myHOC(IncomingComponent) {
    return function OutgoingComponent(props) {
      const contextData = useContext(context);
      return <IncomingComponent {...props} {...contextData} />;
    };
  };
};

export default withProvider;

export const withAlert = withProvider(alertContext);
export const withUser = withProvider(userContext);
export const withCart = withProvider(CartContext);
