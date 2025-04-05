import { Button } from "@/components/ui/button";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#1e3b8b] text-white text-center flex flex-col items-center justify-center h-[500px] md:h-[400px] space-y-5">
      <div className="px-[20px]">
        <div className="flex flex-col space-y-5">
          <h1 className="font-bold text-5xl capitalize">
            Discover Your Perfect Career Path
          </h1>
          <p className="text-lg ">
            Explore thousands of career options, take personalized assessments,
            and build the <br /> skills needed for your dream job.
          </p>
        </div>

        <div className="flex flex-col  gap-5 items-center md:flex-row md:justify-center  w-full mt-5 ">
          <Button className="bg-yellow-600 py-6 px-3 cursor-pointer w-full md:w-auto">
            Take career assessment
          </Button>
          <Button
            variant={"secondary"}
            className="py-6 px-3 cursor-pointer w-full md:w-auto"
          >
            Browse careers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
