import React from "react";
import { motion, useScroll } from "framer-motion";

const Page4 = () => {
  const data = [
    {
      title: "Design",
      list: [
        "Logo,Branding,Icons",
        "Custom illustrations",
        "User Experience (UI) ",
        "User Interface (UI)",
        "Web & Product Design",
      ],
    },
    {
      title: "Development",
      list: [
        "Frontend Development",
        "Backend Development",
        "Full Stack Development",
        "Mobile App Development",
        "API Integration",
      ],
    },
    {
      title: "Marketing",
      list: [
        "Digital Marketing",
        "SEO",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
      ],
    },
    {
      title: "Analytics",
      list: [
        "Data Analysis",
        "Performance Metrics",
        "A/B Testing",
        "User Feedback",
        "Conversion Rate Optimization",
      ],
    },
  ];

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
    <div>
      <div className="bg-[#E6E7E4] p-20">
        <h1 className="text-6xl lg:text-8xl text-[#57BA5E]">Expertise</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 pt-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white lg:w-[40rem] w-[20rem] rounded-3xl p-10"
            >
              <h2 className="text-3xl lg:text-5xl py-4 text-[#57BA5E]">{item.title}</h2>
              <ul className="lg:text-xl text-sm list-disc px-6">
                {item.list.map((listItem, listIndex) => (
                  <li key={listIndex}>{listItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#E6E7E4] p-20 overflow-hidden">
        <h1 className="text-8xl text-[#57BA5E]">Positive Feeling</h1>
        <motion.div
          initial={{ x: -690 }}
          animate={{
            x: "-75%",
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="flex w-fit pt-20 -ml-16"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white  w-[20rem]  sm:w-[40rem] rounded-3xl mx-6 px-5 sm:px-10 py-5 "
            >
              <div className="w-full h-32 flex items-center ">
                <img
                  className="sm:pb-20 pb-5 "
                  src={image.src}
                  alt={image.alt}
                />
              </div>
              <p className="sm:text-sm text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                nisi voluptatum tempore, optio laudantium nostrum sunt odio
                temporibus mollitia, dolores necessitatibus magni, perferendis
                consequuntur ullam dolorem autem aut alias dolorum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Eius, nostrum
                debitis commodi maxime expedita necessitatibus. Excepturi soluta
                incidunt itaque cumque tempora. Ipsa nostrum dolore est
                similique cum odit repellendus libero?
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Page4;
