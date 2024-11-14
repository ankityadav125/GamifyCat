import React from "react";
import LeftPage2 from "./LeftPage2/LeftPage2";
import RightPage2 from "./RightPage2/RightPage2";
import BottomPage2 from "./BottomPage2/BottomPage2";

const Page2 = () => {
  return (
    <div className="px-10 lg:px-24">
      <div className="flex justify-between items-start lg:items-end flex-col gap-4 lg:flex-row w-full  ">
        <h1 className="text-7xl font-semibold text-[#57BA5E]">
          Successful <br /> <span className="text-white">projects</span>{" "}
        </h1>
        <p className="lg:text-end text-2xl lg:text-base   lg:w-1/4 text-white">
          Explore our diverse cases, featuring immersive mini-games, animated
          gamification, and interactive quizzes.
        </p>
      </div>

      <div className="w-full">
        <div className="flex flex-col lg:flex-row lg:gap-20 ">
          <LeftPage2 />
          <RightPage2 />
        </div>
        <BottomPage2 />
      </div>
    </div>
  );
};

export default Page2;
