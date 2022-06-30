import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagniation = ({ itemsCount, pagesize, onPageChange, currentpage }) => {
  const pageCount = Math.ceil(itemsCount / pagesize);
  if (pageCount === 1) return null;
  // generating array with numbers [1,2,3,.....]
  const pages = _.range(1, pageCount + 1);
  return (
    <div>
      <div className=" ">
        <ul className="z-0 inline-flex justify-center rounded-md shadow-sm px-2">
          {pages.map((page) => (
            <li key={page} className="px-2 cursor-pointer">
              <a
                className={page === currentpage ? "bg-indigo-300" : "bg-white"}
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Pagniation.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pagesize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagniation;
