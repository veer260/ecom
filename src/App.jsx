
import './App.css'

import { Link, Route, Routes, useParams } from 'react-router-dom';
import Home from './Components/home';
import ProductDetails from './Components/ProductDetails';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
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
       <Route path='/' element={<LoginPage />} ></Route>
       <Route path='/ProductDetails/:sku/' element={ <ProductDetails onAddtoKart={handleAddtoKart} /> } ></Route>
       <Route path='/cart/' element= {<Cart cart={cart} />} ></Route>
   </Routes>
  </div>
  )  
}

export default App;


