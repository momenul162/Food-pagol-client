import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import AboutFoodPagol from "../About/AboutFoodPagol";
import Contact from "../Contact/Contact";
import PopularMenu from "../PopularMenu/PopularMenu";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import FeatureItem from "../FeatureItem/FeatureItem";
import Ratings from "../Ratings/Ratings";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <AboutFoodPagol></AboutFoodPagol>
      <PopularMenu></PopularMenu>
      <Contact></Contact>
      <ChefRecommends></ChefRecommends>
      <FeatureItem></FeatureItem>
      <Ratings></Ratings>
    </div>
  );
};

export default Home;
