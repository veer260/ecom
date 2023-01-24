import { Link, Route, Routes } from "react-router-dom";
// import TShirt from "./TShirt";

const ProductItem = ({ title, price, thumbnail, id, category }) => {
  // console.log(id);
  return (
    <div className=" max-w-xs ">
      <div className="w-[100%] border-2 mt-8 hover:animate-grow">
        <img className="aspect-square object-cover" src={thumbnail} alt="" />
      </div>
      <h5 className="text-gray-400 text-sm  my-2 tracking-wider">{category}</h5>
      <p className="font-normal font-formal">{title}</p>
      <p className="text-sm mb-2">
        Price: <span className="font-medium">${price}</span>{" "}
      </p>

      <Link
        className=" px-2 py-1 text-sm font-formal shadow-sm bg-primary-dark  text-white rounded-md"
        to={"/ProductDetails/" + id}
      >
        {" "}
        <span> View Details</span>
      </Link>
    </div>
  );
};

export default ProductItem;
