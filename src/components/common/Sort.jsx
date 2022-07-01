import React from "react";

const Sort = ({ items, onItemSort, currentcategory }) => {
  return (
    <div className="flex">
      <ul className="grid grid-cols-4 gap-x-2 cursor-pointer px-2">
        <li onClick={() => onItemSort(null)} className="mt-1 ml-3 text-base font-semibold">
          All
        </li>
        {items.map((item) => (
          <li
            key={item._id}
            className={
              currentcategory === item ? "bg-indigo-500 rounded-xl shadow-md text-white px-2 py-1 text-base font-semibold " : "bg-white px-2 py-1 text-base font-semibold"
            }
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
