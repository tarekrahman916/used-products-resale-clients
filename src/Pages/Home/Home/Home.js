import React from "react";
import Categories from "../Categories/Categories";
import Info from "../Info/Info";
import TopBanner from "../TopBanner.js/TopBanner";

const Home = () => {
  return (
    <div>
      <TopBanner />
      <Categories />
      <Info />
    </div>
  );
};

export default Home;
