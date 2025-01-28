import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../Components/DashboardNavbar/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="w-full mx-auto min-h-fit lg:p-8">
      
      <div className="relative flex gap-4 w-full min-h-fit mx-auto">
        <div className="w-3/7 bg-blue h-full lg:p-6 ">
         <DashboardNavbar></DashboardNavbar>
        </div>
        <div className="w-4/7 overflow-y-">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
