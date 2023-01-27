import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getCart, getProductsByIds, saveCart } from "../Components/Api";
import { CartContext } from "../Components/Contexts";
import { withUser } from "../Components/withProvider";

const CartProvider = ({ children, isLoggedIn }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (isLoggedIn) {
      // console.log("cart:", typeof cart);
      // console.log(getCart);
      getCart().then((response) => {
        setCart(response);
        // console.log("saved Data:", response);
      });
    } else {
      const savedData = JSON.parse(localStorage.getItem("cartData")) || {};
      quantityMapToCart(savedData);
      // console.log(savedData);
    }
  }, [isLoggedIn]);

  const quantityMapToCart = (quantityMap) => {
    getProductsByIds(Object.keys(quantityMap)).then((products) => {
      const savedCart = products.map((p) => {
        return {
          product: p,
          quantity: quantityMap[p.id],
        };
      });
      setCart(savedCart);
    });
  };

  const addtoKart = (productId, count) => {
    const quantityMap = cart.reduce((output, current) => {
      return { ...output, [current.product.id]: current.quantity };
    }, {});
    const oldCount = quantityMap[productId] || 0;
    const newCart = { ...quantityMap, [productId]: count + oldCount };
    updateCart(newCart);
  };

  const updateCart = (quantityMap) => {
    if (isLoggedIn) {
      saveCart(quantityMap).then((response) => {
        // console.log("data from saveCart:", response);
        quantityMapToCart(quantityMap);
      });
    }
  };

  const cartCount = cart.reduce((output, current) => {
    return output + current.quantity;
  }, 0);
  return (
    <CartContext.Provider
      value={{ cart, setCart, updateCart, addtoKart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default withUser(CartProvider);
