import { Input } from "@material-tailwind/react";
import React, { useState } from "react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [SearchSidebarOpen, setSearchSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleSearchSidebar = () => {
    setSearchSidebarOpen(!SearchSidebarOpen);
  };

  const closeSearchSidebar = () => {
    setSearchSidebarOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50">
      <div className="text-black flex justify-between items-center py-16 md:px-16">
        {/* Left Section */}
        <div className="md:flex items-center">
          <button
            onClick={toggleSidebar}
            className="md:hidden mr-2 p-2 text-2xl"
          >
            ☰
          </button>
          {/* Conditionally render Item 1, Item 2, and Item 3 in the left section for md screens */}
          <div className="hidden md:flex gap-6 items-center text-sm capitalize">
            <div className="hover:border-b-2  border-black">Women</div>
            <div className="hover:border-b-2  border-black">Men</div>
            <div className="hover:border-b-2  border-black">Explore</div>
            <div className="hover:border-b-2  border-black">Beauty</div>
          </div>
        </div>

        {/* Middle Section (Logo) */}
        <div className="flex justify-center items-center mr-0 md:mr-[130px]">
          <img src="/DG-Logo.png" className="w-[70px] h-[70px]" />
        </div>

        {/* Right Section */}
        <div className="hidden md:flex text-sm">
          <div
            className="mr-4 hover:border-b-2  border-black"
            onClick={toggleSearchSidebar}
          >
            Search
          </div>
          <div className="mr-4 hover:border-b-2  border-black">Login</div>
        </div>
        <div className="flex md:hidden text-sm">
          <div
            className="mr-4 hover:border-b-2  border-black"
            onClick={toggleSearchSidebar}
          >
            Search
          </div>
          <div className="mr-4 hover:border-b-2  border-black">Cart</div>
        </div>

        {sidebarOpen && (
          <div className="fixed top-0 left-0  bg-white w-full h-full text-black p-4 transition-transform transform translate-x-0 z-10">
            {/* Close button for the sidebar */}
            <div className="mt-10 px-6">
              <button
                onClick={closeSidebar}
                className="absolute top-4 right-4 p-2 text-black text-3xl"
              >
                &#215;
              </button>
              {/* Sidebar content */}
              <div className="flex flex-col gap-6 absolute top-[100px]">
                <div className="hover:border-b-2 duration-100">Women</div>
                <div className="hover:border-b-2 duration-100">Men</div>
                <div className="hover:border-b-2 duration-100">Explore</div>
                <div className="hover:border-b-2 duration-100 border-black">
                  Beauty
                </div>
              </div>
            </div>
          </div>
        )}
        {SearchSidebarOpen && (
          <div className="fixed top-0 right-0 w-2/6 h-full bg-white text-black p-4  transition-all transform translate-x-0 z-10">
            {/* Close button for the sidebar */}
            <div className="mt-10 px-6">
              <button
                onClick={closeSearchSidebar}
                className="absolute top-4 right-4 p-2 text-black text-sm hover:border-b-2 duration-100 border-black"
              >
                Close
              </button>
              {/* Sidebar content */}
              <div className="flex flex-col gap-6 absolute top-[100px] w-3/4 mx-auto px-12">
                <Input variant="standard" label="Search" />
                <div className="mt-2 flex flex-col gap-1">
                  <p className="text-sm mb-4">Trending Searches</p>
                  <p className="text-sm text-[#737373]">Antigona</p>
                  <p className="text-sm text-[#737373]">Varsity Jacket</p>
                  <p className="text-sm text-[#737373]">Shark Lock</p>
                  <p className="text-sm text-[#737373]">G Tote</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="text-center fixed bottom-4 lg:bottom-16 text-2xl font-extrabold w-full z-50 ">
        Divine Glow
      </div>
    </nav>
  );
};

export default Navbar;
