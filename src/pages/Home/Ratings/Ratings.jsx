import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Ratings = () => {
  const [ratings, setRatings] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setRatings(data);
      });
  }, []);
  return (
    <div className="flex flex-col content-center">
      <SectionTitle subHeader={"What Our Clients Say"} mainHeader={"Ratings"}></SectionTitle>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {ratings.map((rating) => (
            <SwiperSlide className="text-center" key={rating._id}>
              <Rating
                className="mx-auto"
                style={{ maxWidth: 180 }}
                value={rating.rating}
                readOnly
              />
              <p>
                <FaQuoteLeft className="mx-auto text-5xl mt-10"></FaQuoteLeft>
              </p>
              <p className="mx-16 md:mx-24 my-10">{rating.details}</p>
              <h3 className="text-orange-500 text-center text-2xl">{rating.name}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Ratings;
