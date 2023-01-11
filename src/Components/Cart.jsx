import React from 'react'
import CartHeading from './CartHeading';
import CartItem from './CartItem';
import Coupon from './Coupon';
import Totals from './Totals';

const cartItems = [
    {
        price: 15.00,
        quantity: 2,
        title: "Black Printed Coffee Mug",
        imgURL: "https://trycasuals.com/wp-content/uploads/2018/06/mug-coffee-5.jpg",

    },
    {
        price: 34.00,
        quantity: 4,
        title: "Printed Dark Blue Shirt",
        imgURL: "https://trycasuals.com/wp-content/uploads/2018/06/tshirt4-4.jpg",

    },
]

const total = cartItems.reduce((output, current) => {
    return output + current.price*current.quantity
}, 0);
console.log('total',  total)

const Cart = () => {
    console.log('cart run');
  return (
    <div className=' bg-white m-12 py-20'>
        <div>
            <CartHeading />
        </div>
        <div>

        </div>
        {
            cartItems.map((item) => {
                return (
                    <CartItem imgURL={item.imgURL} title={item.title} price={item.price} quantity={item.quantity} />
                )
            })
        }
        <Coupon />
        <div className='flex justify-end w-[80%] mx-auto mt-8 '>
            <div className='w-[50%] border-2 flex flex-col'>
                <p className='font-semibold px-4 py-2 bg-gray-50 border-b-2'>Cart totals</p>
                <Totals totalHeading="Subtotal" total={total} />
                <Totals totalHeading="Total" total={total} />
                <button className='uppercase bg-primary-default font-semibold text-white py-3 w-[80%] self-center my-4 rounded-md'>proceed to checkout</button>
            </div>
        </div>
        
    </div>
  )
}

export default Cart;