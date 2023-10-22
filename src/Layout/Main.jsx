import React from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
const Main = () => {
  return (
    <div className="bg-[#FFF2EB;]">
      <Navbar />
      <div className="min-h-[calc(100vh-350px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
