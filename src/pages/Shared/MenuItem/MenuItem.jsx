import React from "react";

const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex space-x-2 bg-white p-2 rounded-lg">
      <img className="w-[125px] h=[80px] rounded-lg" src={image} alt="" />
      <div>
        <h3 className="text-2xl">{name}-------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-secondary font-bold">
        <span className="bg-yellow-400 rounded px-2">${price}</span>
      </p>
    </div>
  );
};

export default MenuItem;
