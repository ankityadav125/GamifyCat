import React from "react";
import LeftCard from "../FloatingCard/LeftCard";
import RightCard from "../FloatingCard/RightCard";

const Content = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col gap-5 justify-center items-center md:px-10 lg:px-20">
        <LeftCard />
        <RightCard />
        <div className="text-7xl sm:text-8xl  lg:text-9xl lg: font-bold md:w-3/4 lg:w-2/3  px-4 md:px-10 lg:px-16  xl:px-32 ">
          <h1 className="text-start text-[#57BA5E]">Gamified</h1>
          <h1 className="text-end text-[#57BA5E]">Digital</h1>
          <h1 className="text-center text-[#57BA5E]">Products</h1>
        </div>
        <p className="text-base sm:text-base md:text-lg lg:text-base  px-4 md:px-10 lg:px-16 w-full md:w-3/4 lg:w-1/2 xl:w-1/2 text-center">
          Web Design &amp; Development gamified products like mini-games,
          interactive landings and puzzles for advertising agencies and brands
        </p>
        <div className="w-1/2 flex justify-center">
          <button className="py-3 px-6 bg-[#57BA5E] rounded-full text-xl font-semibold md:w-1/2 lg:w-1/3 xl:w-1/4">
            Our cases <i class="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Content;
