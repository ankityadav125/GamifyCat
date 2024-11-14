import React from "react";

const LeftPage2 = () => {
  return (
    <div className=" lg:w-1/2 rounded-2xl z-10 py-10">
      <div
        style={{
          backgroundImage: `url('https://www.tzperspective.com/wp-content/uploads/2021/01/galaxy-s21-ultra-5g-share-image.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[80vh]  flex justify-between items-end  p-5 text-white w-full rounded-3xl"
      >
        <div className="flex  gap-5">
          <button className="py-3 px-6 border-2 border-white rounded-full text-base font-semibold text-[#57BA5E]">
            Animation
          </button>
          <button className="py-3 px-6 border-2 border-white rounded-full text-base font-semibold text-[#57BA5E] ">
            Web Design & Development
          </button>
        </div>
        <i class="text-5xl ri-arrow-right-circle-line"></i>
      </div>

      <h1 className="text-7xl font-semibold text-[#57BA5E] py-5">Samsung</h1>
      <p className=" text-[1.7rem] leading-tight lg:text-lg  text-white  lg:pr-2 ">
        Collaborative advertising campaign for the new Samsung S21 Ultra
        smartphone on the Forbes business magazine platform, the Samsung brand
        increased smartphone sales and received many positive mentions on social
        media.
      </p>
    </div>
  );
};

export default LeftPage2;
