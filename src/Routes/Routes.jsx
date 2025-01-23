import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../SharedComponents/ErrorPage";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Apartment from "../Pages/Apartment/Apartment";
import DashboardLayout from "../Layout/DashboardLayout";
import MyProfile from "../Pages/Dashboard/MemberDashboard/MemberProfile";
import Announcements from "../Pages/Announcements/Announcements";
import AdminProfile from "../Pages/Dashboard/AdminDashboard/AdminProfile";
import ManageCoupons from "../Pages/Dashboard/AdminDashboard/ManageCoupons";
import AgreementRequests from "../Pages/Dashboard/AdminDashboard/AgreementRequests";
import MakeAnnouncement from "../Pages/Dashboard/AdminDashboard/MakeAnnouncement";
import ManageMembers from "../Pages/Dashboard/AdminDashboard/ManageMembers";
import AllUsers from "../Pages/Dashboard/AdminDashboard/AllUsers";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/apartment",
        element: <Apartment></Apartment>,
      },
      {
        path: "/sign-in",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "my-profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "announcements",
        element: <Announcements></Announcements>,
      },
      //   admin routes
      {
        path: "admin-profile",
        element: <AdminProfile></AdminProfile> ,
      },
      {
        path: "manage-coupons",
        element: <ManageCoupons></ManageCoupons>
      },
      {
        path: "manage-members",
        element:<ManageMembers></ManageMembers>,
      },
      {
        path: "make-announcement",
        element: <MakeAnnouncement></MakeAnnouncement>,
      },
      {
        path: "agreement-requests",
        element: <AgreementRequests></AgreementRequests>,
      },
      {
        path: "all-users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default Routes;
