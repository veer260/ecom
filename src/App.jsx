
import './App.css'

import { Link, Route, Routes, useParams } from 'react-router-dom';
import Home from './Components/home';
import ProductDetails from './Components/ProductDetails';
import Navbar from './Components/Navbar';
import CartPage from './Components/CartPage';
import { useEffect, useState } from 'react';
import { getProduct } from './Components/Api'
import LoginPage from './Components/LoginPage';
import EasyLogin from './Components/Login';
import Dashboard from './Components/Dashboard';
import axios from 'axios';
import Loading from './Components/Loading';

function App() {
  const data = JSON.parse(localStorage.getItem("cartData")) || {};
  const [ cart, setCart ] = useState(data);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  console.log('user:',user);
  // console.log('cart:', cart);

  const token = localStorage.getItem("token");
  console.log('token:',token);
  useEffect(() => {
    if(token) {
      console.log('useEffect running')
      axios.get('https://myeasykart.codeyogi.io/me', {
        headers: {
          Authorization: token
        },}
      )
      .then(response => {
        console.log('response', response);
        setUser(response.data);
        setLoading(false);
        console.log('Inside useEffect user:',user)
      })
    }
    else {
      setLoading(false)
    }
    },[])

  const handleAddtoKart = (itemId, itemCount) => {
    let newItems = +(itemCount);
    let oldItems =  cart[itemId] || 0;
    const newCart = { ... cart};
    newCart[itemId] = oldItems + newItems;
    setLocalStorage(newCart);
    
  }

  const setLocalStorage = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cartData", JSON.stringify(newCart));
  }

  const totalItems = Object.keys(cart).reduce((output, current) => {
    console.log('inside total items')
    return output + (+cart[current]);
  }, 0);

  if(loading ) {
    return(
      <Loading />
    )
  }

  return(
    <div className='bg-gray-50 flex flex-col w-full h-screen overflow-y-scroll'>
    <Navbar productCount={totalItems} />
    <Routes >
       <Route path='/login' element={<EasyLogin user={user} setUser={setUser} />} ></Route>
       <Route path='/ProductDetails/:sku/' element={ <ProductDetails onAddtoKart={handleAddtoKart} /> } ></Route>
       <Route path='/cart/' element= {<CartPage cart={cart} updateCart={setCart} setLocalStorage={setLocalStorage} />} ></Route>
       <Route index element={<Dashboard user={user} />} />
   </Routes>
  </div>
  )  
}

export default App;


