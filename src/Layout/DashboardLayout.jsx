import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../Components/DashboardNavbar/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="w-full mx-auto h-[100%]">
      
      <div className="relative flex  gap-4  w-full  mx-auto">
        <div className="w-3/7 lg:p-6 ">
         <DashboardNavbar></DashboardNavbar>
        </div>
        <div className="w-4/7 w-full h-[100%] overflow-y-">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
