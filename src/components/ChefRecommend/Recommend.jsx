import React from "react";

const Recommend = ({ img, title, details }) => {
  return (
    <div className="card w-96 shadow-xl bg-white">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>
        <div className="card-actions">
          <button className="btn btn-outline border-0 border-b-4 btn-secondary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
