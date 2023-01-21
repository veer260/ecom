import React, { useEffect, useState } from 'react'
import CartHeading from './CartHeading';
import CartItem from './CartItem';
import Coupon from './Coupon';
import Totals from './Totals';
import { getProduct} from './Api'
import Loading from './Loading';
import CartTotal from './CartTotal';
import CartList from './CartList';


const CartPage = ({cart, updateCart, setLocalStorage}) => {
   const [ products, setProducts] =  useState([])
   const [ loading, setLoading ] = useState(true);

   const productsIds = Object.keys(cart);
   useEffect( () => {
      const myProductPromises = productsIds.map(id => {
         return getProduct(id);
      })
         Promise.all(myProductPromises).then(products => {
            setProducts(products);
            setLoading(false);
         })
      }, [cart]);

   const handleRemove = (event, id ) => {
      console.log(event.currentTarget);
      console.log('ProductId', id );
      const newCart = {...cart};
      delete newCart[id];
      console.log('newCart',newCart);
      updateCart(newCart);
      setLocalStorage(newCart);
   }

   // const updateTheCart = (localCart) => {
   //    setCart(localCart);
   // }

   // const handleChange = (event, id) => {
   // }

   if(loading) {
      return (
         <Loading />
      )
   }


   return (
    <div className='p-12'>
      <div className='bg-white'>
         <CartHeading />
         <CartList cart={cart} updateCart={updateCart} setLocalStorage={setLocalStorage} products={products}/>
         <CartTotal cart={cart} products={products}/>
      </div>
    </div>
   )
   }

export default CartPage;