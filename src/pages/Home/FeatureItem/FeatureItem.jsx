import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from "../../../assets/home/featured.jpg";
import "./FeatureItem.css";
import { Link } from "react-router-dom";

const FeatureItem = () => {
  return (
    <section className="bg-feature bg-fixed md:px-12 md:py-16 lg:px-24 lg:py-26">
      <SectionTitle subHeader="Check it out" mainHeader="Food Feature"></SectionTitle>

      <div className="card md:card-side shadow-xl bg-slate-500 bg-opacity-30">
        <figure>
          <img src={img} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">March 20, 2023</h2>
          <h2 className="card-title text-white">WHERE CAN I GET SOME?</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quae debitis
            dignissimos eum! Dolor, amet quaerat? Facere dolor nihil vero, quidem nisi ipsam sit a
            rerum explicabo nam voluptatem voluptatum doloremque repellat magnam id eos provident?
          </p>
          <div className="card-actions">
            <Link to="/foods/salad">
              <button className="btn btn-outline border-0 border-b-4 btn-secondary">
                Order now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureItem;
