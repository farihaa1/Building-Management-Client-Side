import React from "react";


const AboutUs = () => {
  return (
    <div className=" text-white py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold tracking-tight mb-6">
          About the Building
        </h2>
        <p className=" text-sm leading-relaxed mb-8 max-w-4xl mx-auto">
          Nestled in the heart of the city, Harmony Heights offers an unmatched
          living experience. This architectural masterpiece features
          state-of-the-art amenities, breathtaking views, and an eco-friendly
          design to ensure a comfortable and sustainable lifestyle. With
          luxurious interiors and modern facilities, it’s the perfect place to
          call home.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-10">
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
          <p className="text-center text-sm mt-2">
            Designed by world-renowned architects, featuring elegant and
            contemporary designs.
          </p>
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
          <p className="text-center text-sm mt-2">
            Built with sustainability in mind, incorporating green spaces and
            energy-efficient systems.
          </p>
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
          <p className="text-center text-sm mt-2">
            Enjoy a wide range of facilities, including a gym, pool, and
            recreational areas for families.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
