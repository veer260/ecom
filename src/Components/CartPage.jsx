import React, { useEffect, useState } from 'react'
import CartHeading from './CartHeading';
import CartItem from './CartItem';
import Coupon from './Coupon';
import Totals from './Totals';
import { getProduct} from './Api'
import Loading from './Loading';
import CartTotal from './CartTotal';


const CartPage = ({cart, updateCart, setLocalCart}) => {
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
      setLocalCart(newCart);
   }

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
         {
            products.map(item => {
               return (
                  <CartItem setLocalCart={setLocalCart} cart={cart} updateCart={updateCart} id={item.id} removeItem={handleRemove} price={item.price} quantity={cart[item.id]} imgURL={item.thumbnail} title={item.title} />
               )
            })
         }
         <Coupon />
         <CartTotal />
      </div>
        
    </div>
   )
   }

export default CartPage;