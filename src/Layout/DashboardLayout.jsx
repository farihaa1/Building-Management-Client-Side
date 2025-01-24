import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../Components/DashboardNavbar/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="w-full mx-auto p-8">
      
      <div className="flex gap-4 w-full mx-auto">
        <div className="w-[30%] bg-blue min-h-screen rounded-xl p-4 lg:p-8">
         <DashboardNavbar></DashboardNavbar>
        </div>
        <div className="w-[70%] ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
