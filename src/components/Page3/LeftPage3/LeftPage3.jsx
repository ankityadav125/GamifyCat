import React from "react";

const LeftPage3 = () => {
  return (
    <>
      <div className="w-ful lg:w-1/2 flex flex-col justify-center h-fit py-20 lg:py-0 lg:h-screen gap-10  text-start px-28">
        <h1 className="text-7xl font-semibold ">
          We're <br /> trustworthy
        </h1>
        <p className="text-base">
          Trusted by over 100 advertising agencies, companies, media digital
          magazines and brands
        </p>
        <button
          className="
                        w-fit
                        py-2 
                        px-4 
                        sm:py-2 
                        sm:px-4 
                        md:py-3 
                        md:px-6 
                        
                        bg-[#346237] 
                        text-[#57BA53]
                        rounded-full 
                        text-lg 
                        md:text-xl  
                        font-semibold
                    "
        >
          About us <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </>
  );
};

export default LeftPage3;
