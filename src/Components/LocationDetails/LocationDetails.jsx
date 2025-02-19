import React, { useState } from "react";
import { FaDirections } from "react-icons/fa";
import "./LocationDetails.css";
import { Map, Marker } from "pigeon-maps";

const LocationDetails = () => {
  const [center, setCenter] = useState([23.8103, 90.4125]);
  const [zoom, setZoom] = useState(11);
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;

  return (
    <div id="location" className="location-details text-black dark:text-white py-16 px-6 sm:px-12 lg:px-20 font-pSans  bg-opacity-40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 ">
          Our Location
        </h2>
        <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 mb-8 font-mulish">
          Harmony Heights is ideally located in the heart of the city, providing
          easy access to all major landmarks and transportation hubs. Whether
          you're arriving by car, public transport, or walking, you’ll find us
          conveniently situated. Below are the directions on how to reach us:
        </p>
        <div className="flex justify-center gap-8 mb-10 font-mulish ">
          <div className="directions-card bg-white p-3 lg:p-6  shadow-lg w-full sm:w-80">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">By Car</h3>
            <p className="text-gray-700 text-sm mb-4">
              Take the downtown exit and continue straight for 2 miles. Turn
              left at the 4th light, and you'll find our building on the
              right-hand side.
            </p>
           
          </div>
          <div className="directions-card bg-white p-3 lg:p-6  shadow-lg w-full sm:w-80">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              By Train
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Take the Red Line to Central Station, and transfer to the Green
              Line. Disembark at Parkview Station, which is just a 5-minute walk
              to the building.
            </p>
            
          </div>
        </div>
        <div className="map-container mb-10">
          <Map height={500} defaultCenter={[23.8103, 90.4125]} defaultZoom={11}>
            <Marker
              width={50}
              
              anchor={[23.8103, 90.4125]} 
              color={color}
              onClick={() => setHue(hue + 20)}
            />
          </Map>
        </div>
        <p className="text-sm sm:text-lg dark:text-gray-300  text-gray-600 text-center leading-relaxed font-mulish">
          We look forward to welcoming you! If you need further assistance, feel
          free to contact us.
        </p>
      </div>
    </div>
  );
};

export default LocationDetails;
