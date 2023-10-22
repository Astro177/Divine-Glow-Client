import React from "react";
import Banner from "./Banner/Banner";
import GenderSection from "./GenderSection/GenderSection";
import ForWinter from "./ForWinter/ForWinter";

const Home = () => {
  return (
    <div className="mx-auto bg-[##EAEAEA]">
      <Banner />
      <GenderSection />
      <ForWinter />
    </div>
  );
};

export default Home;
