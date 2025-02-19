import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../Components/Loader";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useApartments from "../../Hooks/useApartment";

const Apartment = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(6);
  const [minRent, setMinRent] = useState(0);
  const [maxRent, setMaxRent] = useState(Infinity);

  const { data, isLoading, isError } = useApartments(
    currentPage,
    itemsPerPage,
    minRent,
    maxRent
  );

  if (isLoading) {
    return <Loader></Loader>;
  }
  if (isError) return <div>Error loading apartments.</div>;

  const { apartments = [], count } = data || {};
 
  const numberOfPages = Math.ceil(count / itemsPerPage);

  const handleSubmit = (e) => {
    e.preventDefault();
    const min = e.target.min.value;
    const max = e.target.max.value;
    setMaxRent(parseInt(max));
    setMinRent(parseInt(min));
  };

  const handleApply = (apartment) => {
    if (!user?.email) {
      Swal.fire({
        title: "Not Logged In",
        text: "You need to log in to apply for an apartment.",
        icon: "warning",
        confirmButtonText: "Login",
      }).then(() => navigate("/sign-in"));
      return;
    }

    const applyItem = {
      apartmentId: apartment._id,
      email: user.email,
      name: user.displayName,
      floorNo: apartment.floorNo,
      blockName: apartment.blockName,
      apartmentNo: apartment.apartmentNo,
      rent: apartment.rent,
      date: new Date().toLocaleDateString(),
    };

    axiosSecure
      .post("/apply", applyItem)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire(
            "Success",
            "Your application has been submitted!",
            "success"
          );
        } else {
          Swal.fire({
            icon: "error",
            text: `${res.data.message}`,
          });
        }
      })
    
  };

  return (
    <div className="container mx-auto lg:px-12">
      <h2 className="main-heading">Available Apartments</h2>

      <div className="flex justify-between items-center mb-6">
        <form onSubmit={handleSubmit} className="flex gap-2 justify-start items-center w-full">
          <input
            type="number"
            placeholder="Min Rent"
            
            className="input input-bordered w-2/5 h-10 rounded-none"
            name="min"
          />
          <input
            type="number"
            placeholder="Max Rent"
            
            className="input input-bordered w-2/5 h-10 rounded-none"
            name="max"
          />
          <button type="submit" className="primary-btn">
            Filter
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
        {apartments.map((apartment) => (
          <div key={apartment._id} className="card rounded-none dark:bg-white/85 shadow-lg">
            <img
              src={apartment.image}
              alt={`Apartment ${apartment.apartmentNo}`}
              className="w-full h-48 object-cover"
            />
            <div className="card-body  text-sm">
              <h3 className="primary-heading">
                Apartment {apartment.apartmentNo}
              </h3>
              <p>Floor: {apartment.floorNo}</p>
              <p>Block: {apartment.blockName}</p>
              <p>Rent: ${apartment.rent}</p>
              <button
                className="primary-btn"
                onClick={() => handleApply(apartment)}
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center mt-6 gap-1 text-xs lg:text-sm">
        <button
          className="primary-btn2"
          onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        {[...Array(numberOfPages)].map((_, idx) => (
          <button
            key={idx}
            className={` ${
              currentPage === idx ? "primary-btn" : "primary-btn1"
            }`}
            onClick={() => setCurrentPage(idx)}
          >
            {idx + 1}
          </button>
        ))}
        <button
          className="primary-btn2"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, numberOfPages - 1))
          }
          disabled={currentPage === numberOfPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Apartment;
