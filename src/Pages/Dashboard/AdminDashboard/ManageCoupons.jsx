import React, { useState } from "react";

const ManageCoupons = () => {
  const [coupons, setCoupons] = useState([
    { id: 1, code: "DISCOUNT10", discount: "10%", description: "10% off" },
  ]);

  const [newCoupon, setNewCoupon] = useState({ code: "", discount: "", description: "" });

  const handleAddCoupon = () => {
    setCoupons([...coupons, { ...newCoupon, id: Date.now() }]);
    setNewCoupon({ code: "", discount: "", description: "" });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Coupons</h1>
      <table className="w-full border mb-4">
        <thead>
          <tr>
            <th className="border p-2">Code</th>
            <th className="border p-2">Discount</th>
            <th className="border p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon) => (
            <tr key={coupon.id}>
              <td className="border p-2">{coupon.code}</td>
              <td className="border p-2">{coupon.discount}</td>
              <td className="border p-2">{coupon.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="border p-4 rounded">
        <h2 className="text-lg font-semibold mb-4">Add New Coupon</h2>
        <input
          type="text"
          placeholder="Code"
          className="border p-2 mb-2 w-full"
          value={newCoupon.code}
          onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value })}
        />
        <input
          type="text"
          placeholder="Discount"
          className="border p-2 mb-2 w-full"
          value={newCoupon.discount}
          onChange={(e) => setNewCoupon({ ...newCoupon, discount: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="border p-2 mb-2 w-full"
          value={newCoupon.description}
          onChange={(e) => setNewCoupon({ ...newCoupon, description: e.target.value })}
        />
        <button
          onClick={handleAddCoupon}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Add Coupon
        </button>
      </div>
    </div>
  );
};

export default ManageCoupons;
