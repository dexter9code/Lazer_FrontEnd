import React from "react";

const Sort = ({ items, onItemSort, currentcategory }) => {
  return (
    <div className="flex">
      <ul className="grid grid-cols-4 gap-x-4 cursor-pointer">
        <li onClick={()=>onItemSort(null)} className='text-center'>All</li>
        {items.map((item) => (
            
          <li
            key={item._id}
            className={currentcategory === item ? "bg-indigo-500 text-white" : "bg-white"}
            onClick={() => onItemSort(item)}
          >
            {item.name}
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default Sort;
