import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import useApartments from "../../Hooks/useApartment";
import Loader from "../../Components/Loader";

const Apartment = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data, isLoading, isError } = useApartments(currentPage, itemsPerPage);

  const handleApply = (apartment) => {
    if (user?.email) {
      const applyItem = {
        apartmentId: apartment._id,
        email: user.email,
        name: user.displayName,
        image: apartment.image,
        floorNo: apartment.floorNo,
        status: "pending",
        blockName: apartment.blockName,
        rent: apartment.rent,
      };

      axiosSecure
        .post("/apply", applyItem)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: `Apartment ${apartment.apartmentNo} added`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => console.error(err));
    } else {
      Swal.fire({
        title: "You are not logged in",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/sign-in");
        }
      });
    }
  };

  if (isLoading) return <Loader></Loader>;
  if (isError) return <p>Something went wrong!</p>;

  const { apartments, count } = data || {};
  const numberOfPages = Math.ceil(count / itemsPerPage);

  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Apartments</h2>
        <p className="text-gray-600">Find your dream apartment today!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apartments.map((apartment) => (
          <div
            key={apartment._id}
            className="card card-compact bg-base-100 w-full shadow-xl"
          >
            <figure>
              <img
                src={apartment.image}
                alt={`Apartment ${apartment.apartmentNo}`}
                className="h-56 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Apartment {apartment.apartmentNo}</h2>
              <p>
                Block: <strong>{apartment.blockName}</strong> | Floor:{" "}
                <strong>{apartment.floorNo}</strong>
              </p>
              <p>
                Rent: <strong>${apartment.rent}</strong>/month
              </p>
              <div className="card-actions justify-start">
                <button
                  onClick={() => handleApply(apartment)}
                  className="btn btn-primary"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
          className="btn btn-secondary"
        >
          Previous
        </button>
        {[...Array(numberOfPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`btn ${
              currentPage === index ? "btn-primary" : "btn-outline"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, numberOfPages - 1))
          }
          disabled={currentPage === numberOfPages - 1}
          className="btn btn-secondary"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Apartment;
