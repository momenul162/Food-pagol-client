import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import CategoryComponent from "../../../components/Category/CategoryComponent";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeader={"From 11.00am to 10.00pm"}
        mainHeader={"Order Online"}
      ></SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center mb-10">
        <Link to="/foods/salad">
          <CategoryComponent img={slide1} category="Salads" />
        </Link>
        <Link to="/foods/pizza">
          <CategoryComponent img={slide2} category="Pizzas" />
        </Link>
        <Link to="/foods/soup">
          <CategoryComponent img={slide3} category="Soups" />
        </Link>
        <Link to="/foods/soup">
          <CategoryComponent img={slide3} category="Soups" />
        </Link>
        <Link to="/foods/dessert">
          <CategoryComponent img={slide4} category="Desserts" />
        </Link>
        <Link to="/foods/dehsi">
          <CategoryComponent img={slide5} category="Deshi" />
        </Link>
      </div>
    </section>
  );
};

export default Category;
