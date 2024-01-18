import React from "react";

const CategoryComponent = ({ img, category }) => {
  return (
    <>
      {/* <img src={img} alt="" />
      <h3 className="text-xl font-bold md:text-4xl uppercase ms-4 ms-16 sm: md:text-white -mt-16">
        {category}
      </h3> */}
      <div className="card h-32 shadow-xl image-full">
        <figure>
          <img width={"425px"} src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-center">
            <h2 className="text-4xl text-white">{category}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryComponent;
