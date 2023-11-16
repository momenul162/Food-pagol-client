import React from "react";
import bgImg from "../../../assets/home/chef-service.jpg";
import Cover from "../../../components/Cover/Cover";

const AboutFoodPagol = () => {
  return (
    <div>
      <Cover
        img={bgImg}
        title="Food Pagol"
        details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error itaque modi ratione nihil
          delectus, eos magnam aliquam, sunt fugit aliquid molestias repellat veritatis, laudantium
          eligendi nulla provident dignissimos voluptatem eveniet."
      ></Cover>
      {/* <img src={bgImg} alt="" />
      <div className="mx-16 lg:py-20 lg:px-40 md:py-12 md:px-20 md:absolute top-12 opacity-80 bg-white">
        <h1 className="text-4xl text-center mb-4">Food Pagol</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error itaque modi ratione nihil
          delectus, eos magnam aliquam, sunt fugit aliquid molestias repellat veritatis, laudantium
          eligendi nulla provident dignissimos voluptatem eveniet.
        </p>
      </div> */}
    </div>
  );
};

export default AboutFoodPagol;
