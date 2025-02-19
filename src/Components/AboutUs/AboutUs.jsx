import React, { useState } from "react";
import AnimatedNumbers from "react-animated-numbers";
import bg1 from "../../assets/background/about1.png";
import bg2 from "../../assets/background/about2.jpg";
import bg3 from "../../assets/background/bg.jpg";

const AboutUs = () => {
  const [number, setNumber] = useState(1990);

  return (
    <div
      id="about"
      style={{ backgroundImage: `url(${bg3})` }}
      className="text-black py-16 px-4 sm:px-12 lg:px-20 font-pSans flex flex-col md:flex-row gap-10 dark:bg-black dark:bg-opacity-80 dark:bg-blend-overlay  dark:text-white"
    >
      <div className="md:w-3/5 relative flex justify-center items-center mb-48">
        <div className="flex -translate-x-16">
          <img className="w-80 h-96 object-cover " src={bg1} alt="" />
          <img
            className="w-80 absolute h-96 object-cover top-1/2 left-1/2"
            src={bg2}
            alt=""
          />
        </div>
        <div className="absolute top-0 right-10 font-antonio font-bold">
          <div >
            <AnimatedNumbers
              
              fontStyle={{
                fontSize: 50,
                color: "#3FB9BE",
              }}
              transitions={(index) => ({
               
                type: "spring",
                duration: index + 0.9,
              })}
              animateToNumber={number}
            />
          </div>

          <p className="text-[#4febff]">Built In</p>
        </div>
      </div>
      <div className="md:2/5 mx-auto md:flex md:flex-col md:justify-center">
        <p className="text-[#3FB9BE] italic text-start font-play">Where Luxury Meets Comfort in the Heart of the City</p>
        <h2 className="text-5xl text-start md:text-6xl font-bold  mb-6">
          Introducing Our Residence
        </h2>
        <p className="text-sm font-mulish text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
          Nestled in the heart of the city, Harmony Heights offers an unmatched
          living experience. This architectural masterpiece features
          state-of-the-art amenities, breathtaking views, and an eco-friendly
          design to ensure a comfortable and sustainable lifestyle. With
          luxurious interiors and modern facilities, it’s the perfect place to
          call home.
        </p>
      </div>
    
    </div>
  );
};

export default AboutUs;
