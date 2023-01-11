import { useState } from "react";
import ProductItem from "./ProductItem";
// import completeArr from "../dummydata";
import { getProductList } from './Api'
import { BiSearchAlt2 } from "react-icons/bi";
import {  } from "react-icons/bi";


const Product = () => {
    const [productList, setProductList] = useState([]);

    const [query, setQuery ] = useState('');
    const [ sort, setSort ] = useState('default');
    
    useState(() => {
        const data = getProductList();
        data.then((response) => {
            // console.log('promise func');
            setProductList([...response.data.products]);
    })

    },[])

    let arr = productList.filter((item) => {
        return item.title.toLowerCase().indexOf(query.toLowerCase()) == -1 ? false : true;
    }) 
    
    if(sort === 'price') {
        arr.sort((x, y) => {
            return x.price - y.price
        })
    }

    if(sort === 'name') {
        arr.sort((x, y) => {
            return x.name < y.name ? -1 : 1
        })
    }


    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSortChange = (e) => {
        setSort(e.target.value)
    }


    return(
        <div className="max-w-6xl bg-white mx-auto mt-12 pt-20">
            <div className="flex gap-x-8">
                <div className="  relative min-w-2xl px-12" >
                <input className="min-w-2xl border my-0 rounded-md p-3" placeholder="Find ?"  
                type="text" 
                onChange={handleQueryChange}
                value={query}
                />
                <BiSearchAlt2 className="absolute left-56 font-bold text-gray-400 top-[40%]"></BiSearchAlt2>
                </div>

                <select className="p-3 border text-gray-500 font-formal bg-green-50 rounded-lg mr-6" value={sort}
            onChange= {handleSortChange} >
                <option value="default">default sort</option>
                <option value="price">Sort by Price</option>
                <option value="Name">Sort by Name</option>
                </select>
            </div>

            <div className="flex flex-col  md:grid grid-cols-3  p-16 lg:px-12 gap-4 object-cover">
            {arr.map((item) => {
                return (
                    <ProductItem {...item} />
                )
            })}
            </div>
        </div>
    )
}

export default Product;