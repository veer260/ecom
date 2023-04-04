import React, { useContext } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { userContext } from "./Contexts";

const Dashboard = () => {
  const { setUser } = useContext(userContext);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cartData");
    setUser(undefined);
  };
  return (
    <div className="">
      <div className="bg-[url(https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)] space-y-4 flex justify-around  mx-auto h-[70vh] items-end">
        <div className="flex flex-col space-y-2">
          <h1 className=" text-6xl font-display text-white">
            Experience hassle-free online shopping with us
          </h1>

          <div className="mt-4">
            <Link
              className="bg-primary-default px-3 py-2 font-semibold text-white rounded-md shadow-md"
              to={"/products"}
            >
              Direct to products
            </Link>
          </div>
        </div>
      </div>
      <footer className=" pt-8 flex items-end ">
        <button
          onClick={handleLogout}
          className="bg-primary-default  px-3 py-2 font-semibold text-white rounded-md shadow-md"
        >
          Logout
        </button>
      </footer>
    </div>
  );
};

export default Dashboard;
