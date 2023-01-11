import React from 'react'

const Coupon = () => {
  return (
    <div className='flex py-2 px-4 w-[80%] mx-auto border-2 border-t-0 justify-between'>
        <div className='flex gap-x-4'>
        <input className='border-2 py-1 px-2 ' placeholder='Coupon Code' type="text" />
        <button className='bg-primary-default px-8 py-1 rounded-md uppercase text-white font-semibold'>apply coupon</button>
        </div>
        <button className='bg-primary-default px-8 py-1 rounded-md text-white uppercase font-semibold' >update cart</button>
        
    </div>
  )
}

export default Coupon