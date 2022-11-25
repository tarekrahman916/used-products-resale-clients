import React from "react";
import Categories from "../Categories/Categories";
import Contact from "../Contact/Contact";
import Info from "../Info/Info";
import TopBanner from "../TopBanner.js/TopBanner";

const Home = () => {
  return (
    <div>
      <TopBanner />
      <Categories />
      <Info />
      <Contact />
    </div>
  );
};

export default Home;
