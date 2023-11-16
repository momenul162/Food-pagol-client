import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, title, details }) => {
  return (
    <Parallax blur={{ min: -15, max: 15 }} bgImage={img} bgImageAlt="the dog" strength={-200}>
      <div className="hero bg-fixed md:h-[700px]] mb-10 mx-auto py-28 md:px-40">
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-white py-8">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{details}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
