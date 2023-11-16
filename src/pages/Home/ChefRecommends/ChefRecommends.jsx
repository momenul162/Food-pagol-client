import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from "../../../assets/home/chef-recommnends.png";

const ChefRecommends = () => {
  return (
    <section className="mb-12">
      <SectionTitle subHeader="Should try" mainHeader="Chef recommnends"></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="card w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 btn-secondary">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 btn-secondary">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 btn-secondary">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
