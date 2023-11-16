import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12">
      <SectionTitle mainHeader="Our Popular menu" subHeader="Check it out"></SectionTitle>
      <div className="grid md:grid-cols-2  gap-8">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link to="menu">
          <button className="btn btn-outline border-0 border-b-4 btn-secondary">
            View full menu
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;
