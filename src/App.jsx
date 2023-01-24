import "./App.css";

import { Link, Route, Routes, useParams } from "react-router-dom";
// import Home from './Components/home';
import ProductDetails from "./Components/ProductDetails";
import Navbar from "./Components/Navbar";
import CartPage from "./Components/CartPage";
import { createContext, useEffect, useState } from "react";
// import { getProduct } from './Components/Api'
import EasyLogin from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import axios from "axios";
// import Loading from './Components/Loading';
import UserRoute from "./Components/UserRoute";
import AuthRoute from "./Components/AuthRoute";
// import Error from './Components/Error';
// import { alertContext, userContext } from './Components/Contexts'
import Alert from "./Components/Alert";
import UserProvider from "./Components/UserProvider";
import AlertProvider from "./Components/AlertProvider";
import Product from "./Components/Product";

function App() {
  const data = JSON.parse(localStorage.getItem("cartData")) || {};
  const [cart, setCart] = useState(data);
  const handleAddtoKart = (itemId, itemCount) => {
    let newItems = +itemCount;
    let oldItems = cart[itemId] || 0;
    const newCart = { ...cart };
    newCart[itemId] = oldItems + newItems;
    setLocalStorage(newCart);
  };

  const setLocalStorage = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cartData", JSON.stringify(newCart));
  };

  const totalItems = Object.keys(cart).reduce((output, current) => {
    console.log("inside total items");
    return output + +cart[current];
  }, 0);
  return (
    <UserProvider>
      <AlertProvider>
        <div className="flex flex-col w-full h-screen space-y-2 overflow-y-scroll bg-gray-50">
          <Navbar productCount={totalItems} />
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
            <Route
              path="/ProductDetails/:sku/"
              element={<ProductDetails onAddtoKart={handleAddtoKart} />}
            ></Route>
            <Route
              path="/cart/"
              element={
                <CartPage
                  cart={cart}
                  updateCart={setCart}
                  setLocalStorage={setLocalStorage}
                />
              }
            ></Route>
            <Route
              path="/Home/"
              element={
                <UserRoute>
                  <Dashboard />
                </UserRoute>
              }
            />
          </Routes>
        </div>
      </AlertProvider>
    </UserProvider>
  );
}

export default App;
