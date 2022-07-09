import React, { useEffect, useState,useContext,useMemo, useCallback } from "react";
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

import { addingToCart } from "../features/cartSlice";
import { apiUrl } from "./../api/apiUrl";
import Pagniation from "./common/Pagination";
import { pageniate } from "./../utlites/pagniate";
import Sort from "./common/Sort";
import SearchBox from "./common/SearchBox";
import { NavContext } from "./context/NavState";
import cartimg from '../assets/images/cart.png'



const Items = () => {
  const cart=useSelector((state)=>state.cart.cartItem)
  const dispatch=useDispatch()

  const [order, setOrder] = useState([])
  const [count,setCount]=useContext(NavContext)
  const [item, setItem] = useState([]);
  const [category, setCategory] = useState([]);
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const callingApi = async () => {
    const res = await apiUrl.get("/products");
    setItem(res.data);
  };

  const callingCategories = async () => {
    const res = await apiUrl.get("/categories");
    setCategory(res.data);
    
  };

  useEffect(() => {
    callingApi();
    callingCategories();
  }, []);
  
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleSort = (sort) => {
    setSelectedCategory(sort);
    setQuery('')
  };

  const handleSearch=(search)=>{
    setQuery(search)
    setSelectedCategory(null)
    setCurrentPage(1)
  }

  // const handlecart=useCallback((item)=>{
  //   setCount(count=>count+1)
  //   console.log(item)
  // },[setCount])

  const handlecart=(item)=>{
    setCount(count+1)
    dispatch(addingToCart(item))
    console.log(cart)
  }

  let filteredItem = item;
  if(query) {
    filteredItem=item.filter(m=>m.name.toLowerCase().match(query.toLowerCase()))
  }
  else if (selectedCategory){
    filteredItem=item.filter(m=>m.category===selectedCategory.name)
  }
  const localitem = pageniate(filteredItem, currentPage, pageSize);
  return (
    <div>
      <div className="flex justify-evenly items-center border-b sticky top-0 z-10 bg-slate-100">
        <div className="text-center align-middle">
          <Sort
            items={category}
            onItemSort={handleSort}
            currentcategory={selectedCategory}
          />
        </div>
        <div className="py-2 flex justify-between">
          <SearchBox query={query} onSearchEvent={handleSearch} />
          <div className="self-center ml-8">
            <span className="rounded-full bg-blue-300 -z-10 px-1 lg:absolute top-0 right-[374px]">{count}</span>
            <Link to={'/lazer/orders'}><img className="w-8" src={cartimg} alt="cart-img" /></Link>
            </div>
        </div>
      </div>
      <div className="bg-white">
        <div className=" py-10 px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-center text-gray-900">
            Popular Collections
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {localitem.map((product) => (
              <div key={product._id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.image}
                    alt={"image"}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 font-semibold">
                      {product.name}
                    </h3>
                  <h4 className="text-base font-medium text-gray-900">
                    Price<p className="inline-block line-through">{product.price}</p> ${product.price}
                  </h4>
                  </div>

                  <div className="px-3">
                    <button className="px-5 py-1 mr-3 capitalize font-semibold border rounded-2xl text-white bg-gradient-to-r from-[#01A7EC] to-[#A929EE]">buy</button>
                    <button onClick={()=>handlecart(product)} className="px-5 py-1 capitalize font-semibold border rounded-2xl text-white bg-gradient-to-t from-[#C4A8FF] to-[#1A0554]">cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Pagniation
        itemsCount={filteredItem.length}
        pagesize={pageSize}
        currentpage={currentPage}
        onPageChange={handleChangePage}
      />
    </div>
  );
};

export default Items;
