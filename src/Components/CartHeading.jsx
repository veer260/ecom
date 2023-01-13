import React, { memo } from 'react'

const CartHeading = () => {
  console.log('cartHeading running');
  return (
    <div className='flex bg-gray-100 py-4 px-8 font-semibold border-[1px] border-gray-200 w-[80%] mx-auto'>
        <h3 className='basis-2/5 text-center   '>Product</h3>
        <h3 className='basis-1/5 text-center  '>Price</h3>
        <h3 className='basis-1/5 text-center  '>Quantity</h3>
        <h3 className='basis-1/5 text-center  '>Subtotal</h3>
    </div>
  )
}

export default memo(CartHeading);