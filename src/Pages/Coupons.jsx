import React from "react";
import useCoupons from "../Hooks/useCoupons";
import Loader from "../Components/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./coupon.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useMember from "../Hooks/useMember";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Coupons = () => {
  const navigate = useNavigate();
  const [refetch, coupons, isCouponLoading, isError] = useCoupons();
  const [isMember, isMemberLoading] = useMember();
 

  if (isCouponLoading) {
    return <Loader></Loader>;
  }

  const handleApply = (id) => {
  
    if (isMember) {
      navigate("/dashboard/make-payment", { state: { id } });
    } else {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Apply For a Apartment first",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/apartment");
    }
  };

  return (
    <div className="my-6">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {coupons.map((coupon) => (
          <SwiperSlide key={coupon._id}>
            <div
              key={coupon._id}
              className="card w-full  bg-base-100 shadow-xl"
            >
              <div className="card-body flex flex-col justify-center items-center py-3 my-6 mb-8">
                <h2 className="card-title">{coupon.discount}</h2>
                <p>{coupon.description}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleApply(coupon._id)}
                    className="primary-btn"
                  >
                    Apply now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Coupons;
