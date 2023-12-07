import React from "react";
import Cover from "../../../components/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const deshi = menu.filter((item) => item.category === "deshi");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <>
      <div>
        <Cover img={menuImg} title="Our menu" details="Would you like to try this?"></Cover>
        <SectionTitle subHeader="Don't miss" mainHeader="Today's offer"></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
        <MenuCategory
          img={dessertImg}
          items={dessert}
          title="dessert"
          details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></MenuCategory>
        <MenuCategory
          img={pizzaImg}
          items={pizza}
          title="pizza"
          details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></MenuCategory>
        <MenuCategory
          img={soupImg}
          items={soup}
          title="soup"
          details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></MenuCategory>
        <MenuCategory
          img={saladImg}
          items={salad}
          title="salad"
          details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></MenuCategory>
        <MenuCategory
          img={saladImg}
          items={deshi}
          title="deshi"
          details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></MenuCategory>
      </div>
    </>
  );
};

export default Menu;
