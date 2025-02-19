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
        <p className="text-[#3FB9BE] italic text-start">Subtitle</p>
        <h2 className="text-5xl text-start md:text-6xl font-bold  mb-6">
          Introducing Our Residence
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Nestled in the heart of the city, Harmony Heights offers an unmatched
          living experience. This architectural masterpiece features
          state-of-the-art amenities, breathtaking views, and an eco-friendly
          design to ensure a comfortable and sustainable lifestyle. With
          luxurious interiors and modern facilities, it’s the perfect place to
          call home.
        </p>
      </div>
      {/* <div className="flex gap-8 max-w-7xl mx-auto mt-10">
        <div className="flex flex-col items-center">
          <div className="p-6 rounded-full bg-gray-800 shadow-lg">
            <svg
              className="w-12 h-12 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 1l7.997 4.884v8.233L10 19l-7.997-4.883V5.884zM10 3.26L4.5 6.086v7.828L10 16.74l5.5-2.827V6.086L10 3.26z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mt-4">Modern Architecture</h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-6 rounded-full bg-gray-800 shadow-lg">
            <svg
              className="w-12 h-12 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 10a7 7 0 1114 0A7 7 0 013 10zm7-4a1 1 0 100 2 1 1 0 000-2zm-2 9h4v-1.586l.293-.293a1 1 0 10-1.414-1.414L10 11.586l-1.293-1.293a1 1 0 10-1.414 1.414L9 12.414V14z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mt-4">Eco-Friendly Design</h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-6 rounded-full bg-gray-800 shadow-lg">
            <svg
              className="w-12 h-12 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.707 10.293a1 1 0 00-1.414 0L12 13.586V3a1 1 0 10-2 0v10.586L4.707 10.293a1 1 0 00-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 000-1.414z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mt-4">Premium Amenities</h3>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
