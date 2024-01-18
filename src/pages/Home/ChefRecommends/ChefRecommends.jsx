import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from "../../../assets/home/chef-recommnends.png";
import Recommend from "../../../components/ChefRecommend/Recommend";

const ChefRecommends = () => {
  return (
    <section className="mb-12">
      <SectionTitle subHeader="Should try" mainHeader="Chef recommnends"></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 bg-slate-200 p-6">
        <Recommend
          img={img}
          title="Caeser Salad"
          details="Excepturi cumque illo veritatis, quaerat omnis unde alias quo."
        ></Recommend>
        <Recommend
          img={img}
          title="Chinis Salad"
          details="Voluptate ea dicta at aspernatur amet et praesentium commodi eveniet magni iusto error."
        ></Recommend>
        <Recommend
          img={img}
          title="Deshi Salad"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cumque illo veritatis,"
        ></Recommend>
      </div>
    </section>
  );
};

export default ChefRecommends;
