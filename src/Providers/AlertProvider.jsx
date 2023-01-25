import React, { useState, useEffect } from "react";
import { alertContext } from "../Components/Contexts";

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(undefined);
  const removeAlert = () => {
    setAlert(undefined);
  };

  return (
    <alertContext.Provider value={{ alert, setAlert, removeAlert }}>
      {children}
    </alertContext.Provider>
  );
};

export default AlertProvider;
