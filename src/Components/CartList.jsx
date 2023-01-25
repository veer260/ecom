import React, { useState } from "react";
import CartItem from "./CartItem";
import Coupon from "./Coupon";
import { withCart } from "./withProvider";

const CartList = ({ cart, setCart, addtoKart, updateCart, products }) => {
  const [localCart, setLocalCart] = useState(cart);
  const handleUpdate = () => {
    console.log("handleUpdate called");
    updateCart(localCart);
  };

  const handleRemove = (id) => {
    const newCart = { ...cart };
    delete newCart[id];
    updateCart(newCart);
  };
  return (
    <div>
      {products.map((item) => {
        return (
          <CartItem
            key={item.id}
            localCart={localCart}
            setLocalCart={setLocalCart}
            item={item}
            onRemove={handleRemove}
          />
        );
      })}
      <Coupon onUpdate={handleUpdate} localCart={localCart} />
    </div>
  );
};

export default withCart(CartList);
