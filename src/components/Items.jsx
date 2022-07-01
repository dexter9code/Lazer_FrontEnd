import React, { useEffect, useState } from "react";
import { apiUrl } from "./../api/apiUrl";
import Pagniation from "./common/Pagination";
import { pageniate } from "./../utlites/pagniate";
import Sort from "./common/Sort";
import SearchBox from "./common/SearchBox";

const Items = () => {
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
        <div className="py-2">
          <SearchBox query={query} onSearchEvent={handleSearch} />
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
                    <h3 className="text-sm text-gray-700">
                      {product.name}
                    </h3>
                  <h4 className="text-sm font-medium text-gray-900">
                    Price<p className="inline-block line-through">{product.price}</p>Offer Price ${product.price}
                  </h4>
                  </div>

                  <div>
                    <button>hello</button>
                    <button>hello</button>
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
