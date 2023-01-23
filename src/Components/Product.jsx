import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
// import completeArr from "../dummydata";
import { getProductList } from "./Api";
import { BiSearchAlt2 } from "react-icons/bi";
import {} from "react-icons/bi";
import Loading from "./Loading";

const Product = () => {
  const [productData, setProductData] = useState();

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

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
    const data = getProductList({ sortBy, query, pageNumber, sortType });
    data.then((response) => {
      setProductData(response);
      setLoading(false);
    });
  }, [sort, pageNumber, query]);

  // let arr = productList.filter((item) => {
  //     return item.title.toLowerCase().indexOf(query.toLowerCase()) == -1 ? false : true;
  // })

  // if(sort === 'price') {
  //     arr.sort((x, y) => {
  //         return x.price - y.price
  //     })
  // }

  // if(sort === 'name') {
  //     arr.sort((x, y) => {
  //         return x.name < y.name ? -1 : 1
  //     })
  // }

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
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
    </div>
  );
};

export default Product;
