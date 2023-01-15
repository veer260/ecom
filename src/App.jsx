
import './App.css'

import { Link, Route, Routes, useParams } from 'react-router-dom';
import Home from './Components/home';
import ProductDetails from './Components/ProductDetails';
import Navbar from './Components/Navbar';
import CartPage from './Components/CartPage';
import { useState } from 'react';
import { getProduct } from './Components/Api'
import LoginPage from './Components/LoginPage';

function App() {
  const data = JSON.parse(localStorage.getItem("cartData")) || {};
  const [ cart, setCart ] = useState(data);
  // console.log(cart);

  const handleAddtoKart = (itemId, itemCount) => {
    let newItems = +(itemCount);
    let oldItems =  cart[itemId] || 0;
    const newCart = { ... cart};
    newCart[itemId] = oldItems + newItems;
    setLocalCart(newCart);
    
  }

  const setLocalCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cartData", JSON.stringify(newCart));
  }

  const totalItems = Object.keys(cart).reduce((output, current) => {
    return output + cart[current];
  }, 0);

  return(
    <div className='bg-gray-50 flex flex-col w-full h-screen overflow-y-scroll'>
    <Navbar productCount={totalItems} />
    <Routes >
       <Route path='/' element={<Home />} ></Route>
       <Route path='/ProductDetails/:sku/' element={ <ProductDetails onAddtoKart={handleAddtoKart} /> } ></Route>
       <Route path='/cart/' element= {<CartPage cart={cart} updateCart={setCart} setLocalCart={setLocalCart} />} ></Route>
   </Routes>
  </div>
  )  
}

export default App;


