import React, { useEffect, useState } from 'react'
import CartHeading from './CartHeading';
import CartItem from './CartItem';
import Coupon from './Coupon';
import Totals from './Totals';
import { getProduct} from './Api'
import Loading from './Loading';

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



const Cart = ({cart}) => {
    const [ cartArr, setCartArr ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    useEffect(() => {
        const arrofpromises = Object.keys(cart).map(item => {
            return getProduct((+item))
          }) 
        Promise.all(arrofpromises).then((value) => {
            const arr = Object.keys(value).map(item => {
                return value[item].data;
            })
            setCartArr(arr);
            setLoading(false);
        })
    }, [])
    
    const total = cartArr.reduce((output, current) => {
        return output + current.price*cart[current.id];
    }, 0);
    // console.log('total',  total)
   if(loading) {
    return (
        <Loading />
    )
   }


  return (
    <div className=' bg-white m-12 py-20'>
        <div>
            <CartHeading />
        </div>
        <div>

        </div>
        {
            cartArr.map((item) => {
                return (
                    <CartItem imgURL={item.thumbnail} title={item.title} price={item.price} quantity={cart[item.id]} />
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