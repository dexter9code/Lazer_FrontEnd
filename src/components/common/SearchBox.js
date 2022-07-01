import React from "react";

const SearchBox = ({ query, onSearchEvent }) => {
  return (
    <div className="">
      <input
        className="border px-5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-sky-500 rounded-lg p-2"
        type={"text"}
        name="query"
        value={query}
        placeholder="Search Brands"
        onChange={({ target }) => onSearchEvent(target.value)}
      />
    </div>
  );
};

export default SearchBox;
