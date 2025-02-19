import React from "react";
import bg from "../assets/bg.jpg";
import { FaWifi } from "react-icons/fa";
import { BiSolidDryer } from "react-icons/bi";
import { FaCarRear } from "react-icons/fa6";

const Luxary = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="capitalize ">
     <div className="container mx-auto py-12">
     <p className="font-play italic text-primary text-lg">Luxury Apartments</p>
      <h3 className="font-pSans text-5xl md:text-6xl text-white mb-7">Stunning Luxury Rental<br/> Apartments, Designed for Life</h3>
      <div className="flex justify-start items-center gap-5">
        {" "}
        <div className="bg-primaryColor text-white flex flex-col justify-center items-center p-4">
          <FaCarRear className="text-5xl" />
          <h4 className="text-2xl text-primary">Parking space</h4>
        </div>
        <div className="bg-primaryColor text-white flex flex-col justify-center items-center p-4">
          <FaWifi className="text-5xl" />
          <h4 className="text-2xl text-primary">free high speed wi-fi</h4>
        </div>
        <div className="bg-primaryColor text-white flex flex-col justify-center items-center p-4">
          <BiSolidDryer className="text-5xl" />
          <h4 className="text-2xl text-primary">Washer-Dryer</h4>
        </div>
     </div>
      </div>
    </div>
  );
};

export default Luxary;
