
import './App.css'

import { Link, Route, Routes, useParams } from 'react-router-dom';
import Home from './Components/home';
import ProductDetails from './Components/ProductDetails';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import { useState } from 'react';
import { getProduct } from './Components/Api'

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

   
    // .map((item) => {
    //   return getProduct(item);
    // })
    // Promise.all(arr).then((value) => {
    //   console.log(value);
    // })
    
    localStorage.setItem("cartData", JSON.stringify(newCart));
  }

  // let ans;
  

  // console.log(ans);



 

  // const arr = getProduct(3);
  // arr.then(response => {
  //   console.log(response.data);
  // })

  // console.log(arr);




  const totalItems = Object.keys(cart).reduce((output, current) => {
    return output + cart[current];
  }, 0);

  // console.log("totalitems: ", totalItems)

  return(
    <div className='bg-gray-50 flex flex-col w-full h-screen overflow-y-scroll'>
    <Navbar productCount={totalItems} />
    <Routes >
       <Route path='/' element={<Home />} ></Route>
       <Route path='/ProductDetails/:sku/' element={ <ProductDetails onAddtoKart={handleAddtoKart} /> } ></Route>
       <Route path='/cart/' element={<Cart  
       cart={cart}
       /> } ></Route>
   </Routes>
  </div>
  )  
}

export default App;


