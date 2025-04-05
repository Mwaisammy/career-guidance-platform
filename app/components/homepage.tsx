import React from "react";
import Banner from "./banner";
import Careers from "./careers";
import CareerPaths from "./careerPaths";

const HomePage = () => {
  return (
    <div className="">
      <div>
        <Banner />

        <div className="bg-gray-100 flex flex-col space-y-20 px-[30px] py-[30px]">
          <Careers />
          <CareerPaths />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
