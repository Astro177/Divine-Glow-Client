import React from "react";

const GenderSection = () => {
  return (
    <section className="bg-[#CDD1DE]">
      <div className="max-w-[1200px] mx-auto flex gap-16 text-center text-xs py-[200px] text-black">
        <div>
          <p>Varsity</p>
          <p className="mt-2 mb-16 hover:underline">FOR HIM</p>
          <img
            src="https://www.givenchy.com/coremedia/resource/blob/1217572/d6dfc5e2898978d5d9a17a85eca10def/varsity-01-data.jpg"
            alt=""
          />
        </div>
        <div>
          <p>Varsity</p>
          <p className="mt-2 mb-16 hover:underline">FOR HER</p>
          <img
            src="https://www.givenchy.com/coremedia/resource/blob/1217578/579d12a70050caffeea669f71a99a6d4/varsity-04-data.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default GenderSection;
