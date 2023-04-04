import "./App.css";

import { Link, Route, Routes, useParams } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import Navbar from "./Components/Navbar";
import CartPage from "./Components/CartPage";
import SignUp from "./Components/SignUp";
import { createContext, useEffect, useState } from "react";
import EasyLogin from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import axios from "axios";
// import Loading from './Components/Loading';
import UserRoute from "./Components/UserRoute";
import AuthRoute from "./Components/AuthRoute";
// import Error from './Components/Error';
// import { alertContext, userContext } from './Components/Contexts'
import Alert from "./Components/Alert";
import UserProvider from "./Providers/UserProvider";
import AlertProvider from "./Providers/AlertProvider";
import Product from "./Components/Product";
import CartProvider from "./Providers/CartProvider";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <AlertProvider>
          <div className="flex flex-col w-full h-screen space-y-2 overflow-y-scroll bg-gray-50">
            <Navbar />
            <Alert type="error" message="Username or password is wrong!" />
            {/* <Alert type='success' message='User successfully registered' /> */}
            <Routes>
              <Route path="/products" element={<Product />}></Route>
              <Route
                path="/login"
                element={
                  <AuthRoute>
                    <EasyLogin />
                  </AuthRoute>
                }
              ></Route>
              <Route path="/signup" element={<SignUp />}></Route>

              <Route
                path="/ProductDetails/:sku/"
                element={<ProductDetails />}
              ></Route>
              <Route path="/cart/" element={<CartPage />}></Route>
              <Route
                path="/"
                element={
                  <UserRoute>
                    <Dashboard />
                  </UserRoute>
                }
              />
            </Routes>
          </div>
        </AlertProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
