import React from 'react'

const Totals = ({totalHeading, total}) => {
  return (
    <div className='flex py-3 px-4 border-b w-[90%]  mx-auto  font-semibold '>
        <h3 className='basis-2/5'>{totalHeading}</h3>
        <h3 className='basis-3/5'>${total}.00</h3>
    </div>
  )
}

export default Totals