import React, { useEffect, useState } from "react";
import { apiUrl } from "./../api/apiUrl";
import Pagniation from "./common/Pagination";
import { pageniate } from "./../utlites/pagniate";
import Sort from "./common/Sort";

const Items = () => {
  const [item, setItem] = useState([]);
  const [category, setCategory] = useState([]);
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
    console.log(selectedCategory);
  };
  const filteredItem = selectedCategory
    ? item.filter((m) => m.category === selectedCategory.name)
    : item;
  const localitem = pageniate(filteredItem, currentPage, pageSize);
  return (
    <div>
      <div>
        <Sort
          items={category}
          onItemSort={handleSort}
          currentcategory={selectedCategory}
        />
      </div>
      <div className="bg-white">
        <div className=" py-16 px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Customers also purchased
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
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
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
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
