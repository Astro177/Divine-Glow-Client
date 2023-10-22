/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";

const Banner = () => {
  return (
    <section className="max-w-[1200px] mx-auto mb-[300px]">
      <div className="text-sm text-center text-black">
        <p>Shark Lock Boots</p>
        <p className="mt-2 hover:underline">Discover</p>
      </div>
      <img
        src="https://www.givenchy.com/coremedia/resource/blob/1168914/632f0522c32a1a327caa4904388e8459/slb-iconics-09-data.jpg"
        alt="Banner Image"
        className="mt-16 w-[1200px]"
      />
    </section>
  );
};

export default Banner;
