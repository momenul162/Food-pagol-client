import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import LoadPagination from "./LoadPagination";
import "./FoodAsTab.css";

const FoodAsTab = ({ items, itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <LoadPagination currentItems={currentItems}></LoadPagination>
      <ReactPaginate
        className="paginationa-item"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default FoodAsTab;
