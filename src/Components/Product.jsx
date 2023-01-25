import ProductItem from "./ProductItem";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import { getProductList } from "./Api";
import { BiSearchAlt2 } from "react-icons/bi";
import {} from "react-icons/bi";
import { range } from "lodash";
import { Link, useSearchParams } from "react-router-dom";

const Product = () => {
  console.log("Product rerrun");
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  let params = Object.fromEntries([...searchParams]);
  let { query, page, sort } = params;
  query = query || "";
  sort = sort || "default";
  page = page || 1;
  console.log("page:", page);

  useEffect(() => {
    let sortBy;
    let sortType;
    if (sort == "Name") {
      sortBy = "title";
    } else if (sort == "price-asc") {
      sortBy = "price";
      sortType = "asc";
    } else if (sort == "price-desc") {
      sortBy = "price";
      sortType = "desc";
    }
    const data = getProductList({ sortBy, query, page, sortType });
    data.then((response) => {
      setProductData(response);
      setLoading(false);
    });
  }, [sort, page, query]);

  const handleQueryChange = (e) => {
    setSearchParams({ ...params, query: e.target.value, page: 1 });
  };

  const handleSortChange = (e) => {
    setSearchParams({ ...params, sort: e.target.value });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-6xl pt-20 mx-auto mt-12 bg-white">
      <div className="flex gap-x-8">
        <div className="relative px-12 min-w-2xl">
          <input
            className="p-3 my-0 border rounded-md min-w-2xl"
            placeholder="Find ?"
            type="text"
            onChange={handleQueryChange}
            value={query}
          />
          <BiSearchAlt2 className="absolute left-56 font-bold text-gray-400 top-[40%]"></BiSearchAlt2>
        </div>

        <select
          className="p-3 mr-6 text-gray-500 border rounded-lg font-formal bg-green-50"
          value={sort}
          onChange={handleSortChange}
        >
          <option value="default">default sort</option>
          <option value="price-asc">Low to High</option>
          <option value="price-desc">High to Low</option>
          <option value="Name">Sort by Name</option>
        </select>
      </div>

      <div className="flex flex-col object-cover grid-cols-3 gap-4 p-16 md:grid lg:px-12">
        {productData.data.map((item) => {
          return <ProductItem {...item} key={item.id} />;
        })}
      </div>
      {range(1, productData.meta.last_page + 1).map((pageNo) => (
        <Link
          className={
            "px-2 py-1 m-2     border-white" +
            (page == pageNo
              ? " bg-primary-dark border-2 shadow-md text-white font-display text-xl"
              : " bg-primary-ligh border-1")
          }
          key={pageNo}
          to={"?" + new URLSearchParams({ ...params, page: pageNo })}
        >
          {pageNo}
        </Link>
      ))}
    </div>
  );
};

export default Product;
