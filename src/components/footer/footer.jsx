import React from "react";

const footer = () => {
  return (
    <div className="text-white px-4 py-10 md:px-24">
      <div className="flex flex-col  md:flex-row justify-between ">
        <div className="left  flex flex-col justify-between md:w-1/2 lg:w-1/3 xl:w-1/4">
          <div className="flex flex-col gap-1">
            <h1 className="text-5xl md:text-7xl text-[#57BA5E]">Let's talk</h1>
            <h2 className="text-xl md:text-2xl">hello@Ankit</h2>
          </div>
          <div className="">
            <h4 className="mb-10">INDIA</h4>
            <h6 className="text-sm md:text-base">Bhopal , Madhya Pradesh</h6>
          </div>
        </div>

        <div className="right ">
          <div className="flex flex-col gap-10">
            <ul>
              <h1 className="mb-5">Menu</h1>
              <li className="leading-tight">Agency</li>
              <li>Cases</li>
              <li>Contacts</li>
              <li>Terms And Conditions</li>
              <li>Privacy Policy</li>
            </ul>

            <ul>
              <h1 className="mb-10">LINKS</h1>
              <div className="flex gap-5">
                <i className="ri-linkedin-box-fill"></i>
                <i className="ri-google-fill"></i>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-2 text-[#57BA5E]" />
      <h1 className="text-start text-sm md:text-base">@2024 gamifyCat</h1>
    </div>
  );
};

export default footer;
