import React, { useState } from "react";

import { RxCrossCircled } from "react-icons/rx";
import Coupon from "./Coupon";
import { withCart } from "./withProvider";

const CartItem = ({
  cart,
  item,
  onRemove,
  setCart,
  localCart,
  setLocalCart,
}) => {
  const handleRemove = (event) => {
    onRemove(event, item.id);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    const newCart = { ...localCart };
    newCart[item.id] = event.target.value;
    setLocalCart(newCart);
  };

  const updateCartObject = () => {
    setCart(localCart);
  };

  return (
    <>
      <div className="flex items-center py-2 bg-white border-b font-semibold border-r border-l w-[80%] mx-auto">
        <div className="flex basis-2/5  items-center">
          <button className="" onClick={handleRemove}>
            <RxCrossCircled className="basis-1/3 text-2xl text-gray-400"></RxCrossCircled>
          </button>

          <div className="basis-1/3">
            <img className="w-[50%] " src={item.thumbnail} alt="" />
          </div>

          <p className="basis-1/3  text-sm font-bold text-primary-default">
            {item.title}
          </p>
        </div>
        <p className="basis-1/5 text-center ">${item.price}</p>
        <div className="basis-1/5 flex justify-center">
          <input
            onChange={handleChange}
            className="border w-[20%]"
            type="number"
            name=""
            id="quantity"
            value={localCart[item.id]}
          />
          <label className="sr-only" htmlFor="quantity"></label>
          {/* <p className=' w-8 mx-auto text-center p-2 bg-white border'>{quantity}</p> */}
        </div>

        <p className="basis-1/5 text-center">
          ${item.price * localCart[item.id]}
        </p>
      </div>
    </>
  );
};

export default withCart(CartItem);
