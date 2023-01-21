import React, { useState } from 'react'
import CartItem from './CartItem'
import Coupon from './Coupon';

const CartList = ({cart, updateCart, setLocalStorage, products}) => {
    // const [localCart, setLocalCart ] = useState(cart);
    // const onUpdate = () => {
    //     updateEveryCart(localCart);
    // }
    
    const updateCartObject = () => {
        updateCart(localCart);
    }

    const handleRemove = (event, id ) => {
        console.log(event.currentTarget);
        // console.log('ProductId', id );
        const newCart = {...cart};
        delete newCart[id];
        // console.log('newCart',newCart);
        updateCart(newCart);
        setLocalStorage(newCart);
     }
  return (
    <div>
        {
            products.map(item => {
               return (
                  <CartItem  cart={cart} item={item}  onRemove={handleRemove} updateCart={updateCart} />
               )
            })
            // Object.keys()
         }
         <Coupon onUpdate={updateCartObject} />
    </div>
  )
}

export default CartList;