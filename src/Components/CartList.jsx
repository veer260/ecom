import React, { useState } from "react";
import { useEffect } from "react";
import CartItem from "./CartItem";
import Coupon from "./Coupon";
import { withCart } from "./withProvider";

const CartList = ({ cart, updateCart, quantityMap }) => {
  const [localCart, setLocalCart] = useState({});
  console.log("cartList start");

  useEffect(() => {
    console.log("useEffect start");
    setLocalCart(quantityMap);
  }, [cart]);

  const handleUpdate = () => {
    updateCart(localCart);
  };

  const handleRemove = (id) => {
    const newCart = { ...localCart };
    delete newCart[id];
    updateCart(newCart);
  };
  return (
    <div>
      {cart.map((item) => {
        return (
          <CartItem
            key={item.product.id}
            localCart={localCart}
            setLocalCart={setLocalCart}
            item={item}
            onRemove={handleRemove}
          />
        );
      })}
      <Coupon
        onUpdate={handleUpdate}
        localCart={localCart}
        quantityMap={quantityMap}
      />
    </div>
  );
};

export default withCart(CartList);
