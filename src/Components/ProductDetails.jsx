import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "./Api";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Loading from "./Loading";
import { IoAddSharp } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";
import { withCart } from "./withProvider";

const ProductDetails = ({ addtoKart }) => {
  const sku = +useParams().sku;
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    const data = getProduct(sku);
    data.then((response) => {
      setProduct(response);
      setCount(1);
    });
  }, [sku]);

  if (Object.keys(product).length == 0) {
    return <Loading />;
  }

  const handleAddbtnClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleSubbtnClick = () => {
    if (count >= 2) {
      setCount(count - 1);
    }
  };

  const handleSubmitToCart = () => {
    addtoKart(sku, count);
  };

  const handleCountChange = (e) => {
    setCount(e.target.value);
  };

  return (
    <div className="grow relative flex w-[80%] mx-auto">
      <div className="w-[40%] relative">
        <img
          className="max-w-[70%] mb-3
            "
          src={product.thumbnail}
          alt="{product.title}"
        />
        <div className="">
          <div className="flex items-center mt-8 mb-4">
            <div
              className=" hover:bg-gray-400 h-6 w-6 rounded-full flex justify-center items-center bg-gray-300"
              onClick={handleAddbtnClick}
            >
              <IoAddSharp></IoAddSharp>
            </div>
            <input
              className="w-8 p-2 mx-2
            "
              value={count}
              onChange={handleCountChange}
              type="text"
            />
            <div
              className="hover:bg-gray-400 h-6 w-6 rounded-full flex justify-center items-center bg-gray-300 "
              onClick={handleSubbtnClick}
            >
              <RiSubtractFill></RiSubtractFill>
            </div>
          </div>

          <button
            onClick={handleSubmitToCart}
            className="hover:bg-primary-dark px-2 py-1 text-sm bg-primary-default font-medium uppercase font-formal text-white rounded-md"
          >
            Add to cart
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center pl-12 font-formal ">
        <p className="font-medium font-formal text-4xl">{product.title}</p>
        <p>
          Price:{" "}
          <span className="font-display font-bold tracking-widest">
            {" "}
            ${product.price}
          </span>{" "}
        </p>
        <p className="text-black font-formal mb-8">
          Description:{" "}
          <span className="font-formal  font-normal text-base">
            {product.description}
          </span>{" "}
        </p>
        <p className="font-display text-xl">
          Manufactured by{" "}
          <span className="font-formal text-base">{product.brand}</span>{" "}
        </p>
        <p>
          In stock, only{" "}
          <span className="font-display font-black"> {product.stock} </span>left{" "}
        </p>
        <p>{product.rating}</p>

        <div className="absolute bottom-12 right-0 w-[80%] flex justify-around items-center pt-12">
          <div>
            {sku > 1 && (
              <Link
                className="w-12 hover:shadow-md h-12 hover:bg-white rounded-full flex justify-center items-center"
                to={"/ProductDetails/" + (sku - 1)}
              >
                <HiArrowLeft className="text-black text-2xl"></HiArrowLeft>
              </Link>
            )}
          </div>

          <Link
            className="  w-12  hover:shadow-md h-12 hover:bg-white rounded-full flex justify-center items-center "
            to={"/ProductDetails/" + (sku + 1)}
          >
            <HiArrowRight className="text-black text-2xl"></HiArrowRight>
          </Link>
          <Link
            className="font-medium hover:bg-gray-700 hover:text-white p-2 align-center  "
            to={"/"}
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withCart(ProductDetails);
