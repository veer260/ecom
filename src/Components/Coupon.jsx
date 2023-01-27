import React from "react";
import { withCart } from "./withProvider";

const Coupon = ({ updateCart, localCart, cart, quantityMap }) => {
  const handleUpdate = () => {
    updateCart(localCart);
  };

  let buttonattribute = localCart == quantityMap ? { disabled: true } : {};
  return (
    <div className="flex py-2 px-4 w-[80%] mx-auto border-2 border-t-0 justify-between">
      <div className="flex gap-x-4">
        <input
          className="border-2 py-1 px-2 "
          placeholder="Coupon Code"
          type="text"
        />
        <button className="bg-primary-default px-8 py-1 rounded-md uppercase text-white font-semibold">
          apply coupon
        </button>
      </div>
      <button
        {...buttonattribute}
        onClick={handleUpdate}
        className={
          "bg-primary-default px-8 py-1 rounded-md text-white uppercase font-semibold disabled:opacity-30"
        }
      >
        update cart
      </button>
    </div>
  );
};

export default withCart(Coupon);
