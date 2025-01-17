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
    <div className="location-details bg-gray-100 py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Our Location
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
          Harmony Heights is ideally located in the heart of the city, providing
          easy access to all major landmarks and transportation hubs. Whether
          you're arriving by car, public transport, or walking, you’ll find us
          conveniently situated. Below are the directions on how to reach us:
        </p>
        <div className="flex justify-center gap-8 mb-10">
          <div className="directions-card bg-white p-8 rounded-lg shadow-lg w-full sm:w-80">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">By Car</h3>
            <p className="text-gray-700 mb-4">
              Take the downtown exit and continue straight for 2 miles. Turn
              left at the 4th light, and you'll find our building on the
              right-hand side.
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=23.8103,90.4125"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 flex items-center gap-2 mt-4 hover:text-blue-800"
            >
              <FaDirections /> Get Directions
            </a>
          </div>
          <div className="directions-card bg-white p-8 rounded-lg shadow-lg w-full sm:w-80">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              By Train
            </h3>
            <p className="text-gray-700 mb-4">
              Take the Red Line to Central Station, and transfer to the Green
              Line. Disembark at Parkview Station, which is just a 5-minute walk
              to the building.
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=23.8103,90.4125"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 flex items-center gap-2 mt-4 hover:text-blue-800"
            >
              <FaDirections /> Get Directions
            </a>
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
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          We look forward to welcoming you! If you need further assistance, feel
          free to contact us.
        </p>
      </div>
    </div>
  );
};

export default LocationDetails;
