import React from "react";
import TotalHeader from "./TotalHeader";
import Totals from "./Totals";

const CartTotal = ({ cart, products }) => {
  // const total = products.reduce()
  return (
    <div className=" w-[80%] mx-auto  flex flex-col items-end pt-8 ">
      <div className="border w-[50%] ">
        <TotalHeader />
        <div className="flex-col ">
          <Totals totalHeading="Subtotal" total={24} />
          <Totals totalHeading="Total" total={24} />
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
