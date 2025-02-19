// src/ManageCoupons.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCoupons from "../../../Hooks/useCoupons";
import Loader from "../../../Components/Loader";

const ManageCoupons = () => {
  const axiosSecure = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [refetch,coupons, isCouponLoading, isError] = useCoupons();

  const onSubmit = async (data) => {
    const couponData = {
      code: data.code,
      discount: data.discount,
      description: data.description,
    };

    try {
      const response = await axiosSecure.post("/coupons", couponData);
      if (response.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Coupon added successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        setIsModalOpen(false);
        refetch()
      }
    } catch (error) {
    
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to add coupon.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const handleUpdateStatus = async (couponId, currentStatus) => {
    const newStatus = currentStatus === 'active' ? 'expired' : 'active';
    const confirmationMessage = `Are you sure you want to mark this coupon as ${newStatus}?`;
  
    const result = await Swal.fire({
      title: 'Confirm Status Change',
      text: confirmationMessage,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, change it!',
      cancelButtonText: 'No, keep it',
    });
  
    if (result.isConfirmed) {
      try {
        const response = await axiosSecure.patch(`/coupons/${couponId}`, { status: newStatus });
        if (response.status === 200) {
          Swal.fire('Success', `Coupon status updated to ${newStatus} successfully.`, 'success');
          // Optionally, refresh the coupon list or update the state
        } else {
          Swal.fire('Error', 'Failed to update coupon status.', 'error');
        }
        refetch()
      } catch (error) {
        Swal.fire('Error', 'An error occurred while updating the coupon status.', 'error');
      }
    }
  };
  

  return (
    <div className="w-full relative">
      {isModalOpen && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="absolute z[10] items-center top-20 lg:top-0 right-0 left-0 lg:translate-x-1/2  lg:translate-y-1/2 min-w-28 max-w-60  lg:min-w-96 bg-primaryColor text-white px-6 py-6 flex flex-col gap-4"
        >
          <h2 className="text-lg font-semibold mb-4 text-center">
            Add New Coupon
          </h2>
          <input
            type="text"
            placeholder="Code"
            {...register("code", { required: true })}
            className="input input-bordered w-full text-gray-600"
          />
          {errors.code && (
            <span className="text-red-500">Code is required</span>
          )}
          <input
            type="text"
            placeholder="Discount"
            {...register("discount", { required: true })}
            className="input input-bordered w-full text-gray-600"
          />
          {errors.discount && (
            <span className="text-red-500">Discount is required</span>
          )}
          <textarea
            placeholder="Description"
            {...register("description", { required: true })}
            className="input input-bordered w-full text-gray-600"
          />
          {errors.description && (
            <span className="text-red-500">Description is required</span>
          )}
          <div className="flex gap-2 justify-center items-center mt-3">
          <input
            type="submit"
            className="bg-white text-gray-600 font-bold py-2 rounded-lg text-center w-24"
          />
          <button onClick={() => setIsModalOpen(false)} className="danger-btn">Cancel</button>
          </div>
        </form>
      )}
      <h1 className="text-2xl font-bold mb-6">Manage Coupons</h1>
      {isCouponLoading ? (
        <Loader></Loader>
      ) : isError ? (
        <p>No Coupons Found</p>
      ) : (
        <table className="w-full border mb-4">
          <thead>
            <tr>
              <th className="border p-2">Code</th>
              <th className="border p-2">Discount</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Status</th>
              <th className="border p-2 capitalize">Actions</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => (
              <tr key={coupon._id}>
                <td className="border p-2 text-xs lg:text-lg">{coupon.code}</td>
                <td className="border p-2 text-xs md:text-sm lg:text-lg">{coupon.discount}</td>
                <td className="border p-2 text-sm lg:text-lg">{coupon.description}</td>
                <td className="border p-2 capitalize text-sm lg:text-lg">{coupon?.status}</td>
                <td className="flex items-center justify-center px-1 pt-1">
              <button className="bg-green-500 text-gray-700 px-2 rounded-md" onClick={() => handleUpdateStatus(coupon._id, coupon.status)}>
                {coupon.status === 'active' ? 'Expire' : 'Activate'}
              </button>
            </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="border p-4 rounded flex flex-col gap-4 w-full">
        <button onClick={() => setIsModalOpen(true)} className="primary-btn">
          Add Coupon
        </button>
      </div>
    </div>
  );
};

export default ManageCoupons;
