import React from "react";
import { useEffect } from "react";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { alertContext } from "./Contexts";
import withProvider from "./withProvider";
import { withAlert } from "./withProvider";

const Alert = ({ alert, setAlert, removeAlert }) => {
  console.log("alert", alert);
  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(removeAlert, 3 * 1000);
      return function () {
        clearTimeout(timeout);
      };
    }
  }, [alert]);

  if (!alert) {
    return <></>;
  }

  const { type, message } = alert;
  let color;
  let Icon;
  let heading;
  let border;
  if (type == "success") {
    border = "";
    color = "bg-[#f6e548]";
    Icon = AiOutlineCheckSquare;
  } else {
    color = "bg-[#e43737]";
    Icon = BiErrorCircle;
    heading = "error";
    border = " border-primary-dark";
  }

  return (
    <div
      className={
        "w-[80%] mx-auto rounded-md font-formal h-12  bg-white  flex items-center border-2 pr-4" +
        border
      }
    >
      <div
        className={"w-[5%] h-full flex items-center justify-center " + color}
      >
        <Icon className="text-white text-2xl" />
      </div>
      <div className="pl-4 grow">{message}</div>
      <div>
        <button
          onClick={removeAlert}
          className="border-b-2 text-[#850000] shadow-sm"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default withAlert(Alert);
