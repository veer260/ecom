import React from "react";
import { useState } from "react";
import { CartContext } from "../Components/Contexts";

const CartProvider = ({ children }) => {
  const data = JSON.parse(localStorage.getItem("cartData")) || {};
  const [cart, setCart] = useState(data);

  const addtoKart = (itemId, itemCount) => {
    let newItems = +itemCount;
    let oldItems = cart[itemId] || 0;
    const newCart = { ...cart };
    newCart[itemId] = oldItems + newItems;
    // setCart()
    // localStorage.setItem("cartData", JSON.stringify(newCart));
    updateCart(newCart);
  };

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cartData", JSON.stringify(newCart));
  };

  const cartCount = Object.keys(cart).reduce((output, current) => {
    console.log("inside total items");
    return output + +cart[current];
  }, 0);

  return (
    <CartContext.Provider
      value={{ cart, setCart, updateCart, addtoKart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
