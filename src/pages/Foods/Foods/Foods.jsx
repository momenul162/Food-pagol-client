import React, { useState } from "react";
import Cover from "../../../components/Cover/Cover";
import shopCoverImg from "../../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import FoodAsTab from "../FoodAsTab/FoodAsTab";
import { useParams } from "react-router-dom";

const Foods = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks", "deshi"];
  const { category } = useParams();
  const initialTab = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialTab);
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  const deshi = menu.filter((item) => item.category === "deshi");

  return (
    <div className="">
      <Cover
        img={shopCoverImg}
        title="Our food items"
        details="Would you like to try a dish?"
      ></Cover>

      {/* Foods tab */}
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="text-center my-10">
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
          <Tab>DESHI</Tab>
        </TabList>
        <TabPanel>
          <FoodAsTab itemsPerPage={6} items={salad}></FoodAsTab>
        </TabPanel>
        <TabPanel>
          <FoodAsTab itemsPerPage={6} items={pizza}></FoodAsTab>
        </TabPanel>
        <TabPanel>
          <FoodAsTab itemsPerPage={6} items={soup}></FoodAsTab>
        </TabPanel>
        <TabPanel>
          <FoodAsTab itemsPerPage={6} items={dessert}></FoodAsTab>
        </TabPanel>
        <TabPanel>
          <FoodAsTab itemsPerPage={6} items={drinks}></FoodAsTab>
        </TabPanel>
        <TabPanel>
          <FoodAsTab itemsPerPage={6} items={deshi}></FoodAsTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Foods;
