import React from "react";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import Cover from "../../../../components/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img, details }) => {
  return (
    <div className="mt-10">
      {title && <Cover img={img} title={title} details={details}></Cover>}
      <div className="grid md:grid-cols-2  gap-8 mt-10">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <Link to={`/foods/${title ? title : "salad"}`}>
          <button className="btn btn-outline border-0 border-b-4 btn-secondary mt-8">
            Order now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
