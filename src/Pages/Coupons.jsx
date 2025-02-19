import React from 'react';
import Marquee from 'react-fast-marquee';
import useCoupons from '../Hooks/useCoupons';
import Loader from '../Components/Loader';
import useMember from '../Hooks/useMember';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import bg3 from '../assets/background/bg.jpg';

const Coupons = () => {
 const navigate = useNavigate();
 const [refetch, coupons, isCouponLoading] = useCoupons();
 const [isMember] = useMember();

 if (isCouponLoading) {
   return <Loader />;
 }

 const handleApply = (id) => {
   if (isMember) {
     navigate('/dashboard/make-payment', { state: { id } });
   } else {
     Swal.fire({
       position: 'center',
       icon: 'warning',
       title: 'Apply For an Apartment first',
       showConfirmButton: false,
       timer: 1500,
     });
     navigate('/apartment');
   }
 };

 return (
   <div
     style={{ backgroundImage: `url(${bg3})` }}
     className="py-16 min-h-80 flex justify-center"
   >
     <Marquee pauseOnHover={true} speed={20}>
       {coupons.map((coupon) => (
         <div
           key={coupon._id}
           className=" w-52 h-40 mx-4 p-4 text-center bg-white rounded-lg flex flex-col items-center "
         >
           <h2 className="text-2xl font-bold">{coupon.discount}</h2>
           <p className="text-sm text-gray-500">{coupon.description}</p>
           <button
             onClick={() => handleApply(coupon._id)}
             className="mt-2 px-4 py-2 border border-b-4 border-primary text-primary rounded"
           >
             Apply now
           </button>
         </div>
       ))}
     </Marquee>
   </div>
 );
};

export default Coupons;
