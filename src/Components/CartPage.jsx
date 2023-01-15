import React, { useEffect, useState } from 'react'
import CartHeading from './CartHeading';
import CartItem from './CartItem';
import Coupon from './Coupon';
import Totals from './Totals';
import { getProduct} from './Api'
import Loading from './Loading';


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
                  <CartItem id={item.id} removeItem={handleRemove} price={item.price} quantity={cart[item.id]} imgURL={item.thumbnail} title={item.title} />
               )
            })
         }
         <Coupon />
      </div>
        
    </div>
   )
   }

export default CartPage;