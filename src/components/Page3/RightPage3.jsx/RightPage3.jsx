import React from "react";
import { motion } from "framer-motion";

const RightPage3 = () => {
  const images = [
    {
      src: "https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/vilebrequin.svg",
      alt: "",
    },
    {
      src: "https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/grishin.svg",
      alt: "",
    },
    {
      src: "https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/garnier.svg",
      alt: "",
    },
    {
      src: "https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/kosmos.svg",
      alt: "",
    },
    {
      src: "https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/bp.svg",
      alt: "",
    },
    {
      src: "https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/mars.svg",
      alt: "",
    },
    {
      src: "https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/arbeidsadvocaat.svg",
      alt: "",
    },
    {
      src: "https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/cloutboost.svg",
      alt: "",
    },
    {
      src: "https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/asus.svg",
      alt: "",
    },
  ];

  return (
    <div className="w-1/2 flex flex-col justify-center  bg-red-100  ">
      <motion.div className="flex   bg-red-500 w-3/4  ">
        {images.map((image, index) => (
          <div className="flex  mx-[1rem]">
            <img className="h-20 w-20" src={image.src} alt={image.alt} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RightPage3;
