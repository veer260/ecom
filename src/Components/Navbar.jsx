import React from 'react'

import { FiShoppingCart } from "react-icons/fi";
import { Link} from 'react-router-dom';

const handleShowCart = () => {
  console.log('cart clicked');
}

const Navbar = ({ productCount }) => {
  return (
    <div className=' p-4 px-16 w-full bg-white '>
        <div className='flex justify-between max-w-6xl bg-pink-200 py-2 mx-auto'>
            <img className='w-28' src="https://logodownload.org/wp-content/uploads/2014/04/amazon-logo.png" alt="" />
            <div className='flex flex-col items-center relative' onClick={handleShowCart}>
              
              <Link to={'./cart/'}><FiShoppingCart className='text-4xl text-gray-500'></FiShoppingCart></Link>
              <span className='absolute text-center h-4 -right-1 w-4 rounded-[50%] bg-primary-default text-xs font-formal text-white text'>{productCount}</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar;