import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../shared/Navbar/Navbar";
import { Footer } from "../shared/Footer/Footer";
const Main = () => {
  return (
    <div className="bg-[#FFF2EB;]">
      <NavBar />
      <div className="min-h-[calc(100vh-350px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
