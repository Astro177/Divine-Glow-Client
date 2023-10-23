import { Input } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

const Women = () => {
  const [data, setData] = useState([]);
  const [SearchSidebarOpen, setSearchSidebarOpen] = useState(false);

  const toggleSearchSidebar = () => {
    setSearchSidebarOpen(!SearchSidebarOpen);
  };

  const closeSearchSidebar = () => {
    setSearchSidebarOpen(false);
  };

  useEffect(() => {
    fetch("/women.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <section className="pt-[250px] bg-white pb-[300px]">
      <div className="flex justify-between items-center px-12 text-sm">
        <p>Women section</p>
        <p
          className="hover:underline cursor-pointer"
          onClick={toggleSearchSidebar}
        >
          Filter
        </p>
      </div>
      {SearchSidebarOpen && (
        <div className="fixed top-0 right-0 w-2/6 h-full bg-white text-black p-4 transition-all transform translate-x-0 z-50">
          {/* Close button for the sidebar */}
          <div className="mt-10 px-6">
            <button
              onClick={closeSearchSidebar}
              className="absolute top-4 right-4 p-2 text-black text-sm hover-border-b-2 duration-100 border-black"
            >
              Close
            </button>
            {/* Sidebar content */}
            <div className="flex flex-col gap-6 absolute top-[100px] w-3/4 mx-auto px-12">
              <div className="relative">
                <Input variant="standard" label="Search" />
                <p className="absolute right-0 bottom-1 text-xs">Search</p>
              </div>

              <div className="mt-16 flex flex-col gap-4">
                <p className="text-sm">Color</p>
                <p className="text-sm text-[#737373]">Size</p>
                <p className="text-sm text-[#737373]">Category</p>
                <p className="text-sm text-[#737373]">Bag Size</p>
                <p className="text-sm text-[#737373]">Heel Height</p>
                <p className="text-sm text-[#737373]">Sort By</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center text-center text-xs mt-36 gap-6 absolute bottom-8">
            <button className="outline outline-1 mx-auto px-[250px] py-3">
              DONE
            </button>
            <p className="text-[#737373] hover:underline">CLEAR ALL</p>
          </div>
        </div>
      )}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-10">
        {data.map((singleData, i) => (
          <div
            key={i}
            className="text-xs text-center flex flex-col gap-2 cursor-pointer relative"
          >
            <img src={singleData.image} alt="" />
            <div className="absolute bottom-16 left-0 right-0 top-0 bg-black/50 flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-500 hover:opacity-60 p-2"></div>
            <p className="mt-2">{singleData.name}</p>
            <p>${singleData.price}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center text-center text-xs mt-36 gap-6">
        <p>20 of 1,402</p>
        <button className="outline outline-1 mx-auto px-[300px] py-3">
          View More
        </button>
      </div>
    </section>
  );
};

export default Women;
