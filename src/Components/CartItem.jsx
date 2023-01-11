import React from 'react'

import { RxCrossCircled } from "react-icons/rx";

const CartItem = ({price, quantity, imgURL, title}) => {
  return (
    <div className='flex items-center py-2 bg-white border-b font-semibold border-r border-l w-[80%] mx-auto'>
        <div className='flex basis-2/5  items-center'>
            <RxCrossCircled className='basis-1/3 text-2xl text-gray-400'></RxCrossCircled>
            <div className='basis-1/3'>
            <img className='w-[50%] ' src={imgURL} alt="" />
            </div>
            
            <p className='basis-1/3  text-sm font-bold text-primary-default'>{title}</p>
        </div>
        <p className='basis-1/5 text-center '>${price}</p>
        <div className='basis-1/5 '>
        <p className=' w-8 mx-auto text-center p-2 bg-white border'>{quantity}</p>
        </div>
        
        <p className='basis-1/5 text-center'>${price*quantity}</p>
    </div>
  )
}

export default CartItem