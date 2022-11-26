import React from "react";
import Advertise from "../Advertise/Advertise";
import Categories from "../Categories/Categories";
import Contact from "../Contact/Contact";
import Info from "../Info/Info";
import TopBanner from "../TopBanner.js/TopBanner";

const Home = () => {
  return (
    <div>
      <TopBanner />
      <Categories />
      <Advertise />
      <Info />
      <Contact />
    </div>
  );
};

export default Home;
