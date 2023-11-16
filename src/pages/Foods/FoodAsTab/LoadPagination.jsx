import React from "react";
import FoodCart from "../../../components/FoodCarts/FoodCart";

const LoadPagination = ({ currentItems }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items">
      {currentItems && currentItems.map((item) => <FoodCart key={item._id} item={item}></FoodCart>)}
    </div>
  );
};

export default LoadPagination;
