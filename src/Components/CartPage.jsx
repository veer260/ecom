import React, { useEffect, useState } from "react";
import CartHeading from "./CartHeading";
import CartItem from "./CartItem";
import Coupon from "./Coupon";
import Totals from "./Totals";
import { getProductsByIds } from "./Api";
import Loading from "./Loading";
import CartTotal from "./CartTotal";
import CartList from "./CartList";
import { withCart } from "./withProvider";

const CartPage = ({ cart, setCart, addtoCart }) => {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  const quantityMap = cart.reduce((output, current) => {
    return { ...output, [current.product.id]: current.quantity };
  }, {});

  // useEffect(() => {
  //   const productIds = Object.keys(cart);
  //   console.log("cart:", cart);
  //   getProductsByIds(productIds).then((response) => {
  //     // console.log("response:", response);
  //     setProducts(response);
  //     setLoading(false);
  //   });
  // }, [cart]);

  const handleRemove = (event, id) => {
    console.log(event.currentTarget);
    console.log("ProductId", id);
    const newCart = { ...cart };
    delete newCart[id];
    console.log("newCart", newCart);
    setCart(newCart);
    addtoCart(newCart);
    // quantityMap = { quantityMap };
  };

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <div className="p-12">
      <div className="bg-white">
        <CartHeading />
        <CartList quantityMap={quantityMap} />
        <CartTotal
        // cart={cart}
        // products={products}
        />
      </div>
    </div>
  );
};

export default withCart(CartPage);
