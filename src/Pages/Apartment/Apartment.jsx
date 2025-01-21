import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Apartment = () => {
  const [apartments, setApartments] = useState([]);
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();


  const handleApply = (item) => {
    if (user && user.email) {
      const applyItem = {
        apartmentId:_id,
        email: user.email,
        name: user.displayName,
        image,
        price
      };
      axios.post('http://localhost:5000/apply', applyItem)
      .then(res=>{
        if(res.data.insertedId){
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `Apartment ${item.apartmentNo} added`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
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
          navigate("/sign-in", { state: { from: location } });
        }
        
      });
    }
  };



  useEffect(() => {
    fetch(
      `http://localhost:5000/apartments?page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setApartments(data.apartments);
      });
  }, [currentPage, itemsPerPage]);

  const numberOfPages = Math.ceil(count / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < numberOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="container mx-auto py-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Apartments</h2>
          <p className="text-gray-600">Find your dream apartment today!</p>
        </div>
        <div>
          <input type="number" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apartments.length > 0 &&
            apartments.map((apartment, idx) => (
              <div
                key={idx}
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
                  <h2 className="card-title">
                    Apartment {apartment.apartmentNo}
                  </h2>
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
                      {apartment.agreementButton}
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
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
          onClick={handleNextPage}
          disabled={currentPage === numberOfPages - 1}
          className="btn btn-secondary"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Apartment;
