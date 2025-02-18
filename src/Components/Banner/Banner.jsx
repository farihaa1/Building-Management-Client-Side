import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Banner = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const banner = [
    {
      id: 1,
      heading: "Welcome to Harmony Heights",
      title:
        "Experience the ultimate luxurious living in the heart of the city, surrounded by convenience and style.",
      callToAction: {
        text: "Explore Apartments",
        link: "/apartments",
      },
      image: {
        src: "https://i.ibb.co.com/7VJpkFx/d09208183125ab47493d5de2f8710b6faa27d7cc-3000x2000.jpg",
        alt: "Beautiful view of Harmony Heights building",
      },
    },
    {
      id: 2,
      heading: "Your Dream Home Awaits",
      title:
        "Discover modern apartments with premium amenities designed for your comfort and lifestyle needs.",
      callToAction: {
        text: "View Details",
        link: "/details",
      },
      image: {
        src: "https://i.ibb.co.com/LdcPDbG/apartments-1-1080x720.jpg",
        alt: "Exterior of a modern apartment building",
      },
    },
    {
      id: 3,
      heading: "Discover Skyline Tower",
      title:
        "Enjoy the perfect blend of sophistication and comfort in a modern apartment overlooking the city skyline.",
      callToAction: {
        text: "See Availability",
        link: "/availability",
      },
      image: {
        src: "https://i.ibb.co.com/tz9ktT2/ois-12.jpg",
        alt: "Skyline Tower at sunset",
      },
    },
    {
      id: 4,
      heading: "Affordable Luxury",
      title:
        "Explore elegant apartments designed for every lifestyle, offering luxury at an affordable price.",
      callToAction: {
        text: "Find Your Space",
        link: "/find",
      },
      image: {
        src: "https://lakehouseapartmentsorlando.com/assets/images/cache/rotator_2_lake_house_2199-2ffd901585d09181c1f97015ab672bc8.jpg",
        alt: "Elegant apartment building with a garden",
      },
    },
    {
      id: 5,
      heading: "Urban Oasis",
      title:
        "Live, work, and play in perfect harmony at an urban oasis designed for a modern lifestyle.",
      callToAction: {
        text: "Discover More",
        link: "/discover",
      },
      image: {
        src: "https://i.ibb.co.com/dQWxGV6/thon-residence-eu-apartment-011.jpg",
        alt: "Aerial view of an urban apartment complex",
      },
    },
  ];

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        speed={500}
        loopAdditionalSlides={1}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {banner.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="banner-slide w-full relative"
              style={{
                backgroundImage: `url(${item.image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "full",
                height: "450px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="banner-content relative z-10 text-center text-white">
                <h1 className="heading">{item.heading}</h1>
                <p className="para">{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Buttons */}
      <div ref={navigationPrevRef} className="custom-prev-button">
        <MdOutlineKeyboardArrowLeft></MdOutlineKeyboardArrowLeft>
      </div>
      <div ref={navigationNextRef} className="custom-next-button">
        <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
      </div>
    </div>
  );
};

export default Banner;
