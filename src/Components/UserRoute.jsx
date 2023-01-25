import React, { useContext } from "react";
import { Navigate } from "react-router";

import { withUser } from "./withProvider";
// import { userContext } from '../App'

const UserRoute = ({ children, user }) => {
  // const {user, setUser} = useContext(userContext)
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default withUser(UserRoute);
