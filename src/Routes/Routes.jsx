import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../SharedComponents/ErrorPage";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Apartment from "../Pages/Apartment/Apartment";
import DashboardLayout from "../Layout/DashboardLayout";
import Announcements from "../Pages/Announcements/Announcements";
import AdminProfile from "../Pages/Dashboard/AdminDashboard/AdminProfile";
import MemberProfile from "../Pages/Dashboard/MemberDashboard/MemberProfile";
import MakePayment from "../Pages/Dashboard/MemberDashboard/MakePayment";
import PaymentHistory from "../Pages/Dashboard/MemberDashboard/PaymentHistory";
import ManageCoupons from "../Pages/Dashboard/AdminDashboard/ManageCoupons";
import AgreementRequests from "../Pages/Dashboard/AdminDashboard/AgreementRequests";
import MakeAnnouncement from "../Pages/Dashboard/AdminDashboard/MakeAnnouncement";
import ManageMembers from "../Pages/Dashboard/AdminDashboard/ManageMembers";
import AllUsers from "../Pages/Dashboard/AdminDashboard/AllUsers";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";
import UserProfile from "../Pages/Dashboard/UserDashboard/UserProfile";
import MemberRoutes from "./MemberRoutes";
import PaymentInfo from "../Pages/Dashboard/MemberDashboard/PaymentInfo";
import Overview from "../Pages/Overview/Overview";
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
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [

      {
        path: "overview",
        element: <Overview></Overview>,
      },
      {
        path: "user-profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "announcements",
        element: <Announcements></Announcements>,
      },
      // member routes
      {
        path: "member-profile",
        element: (
          <MemberRoutes>
            <MemberProfile></MemberProfile>
          </MemberRoutes>
        ),
      },
      {
        path: "make-payment",
        element: (
          <MemberRoutes>
            <MakePayment></MakePayment>
          </MemberRoutes>
        ),
      },
      {
        path: "make-payment/pay",
        element: (
          <MemberRoutes>
            <PaymentInfo></PaymentInfo>
          </MemberRoutes>
        ),
      },
      {
        path: "payment-history",
        element: (
          <MemberRoutes>
            <PaymentHistory></PaymentHistory>
          </MemberRoutes>
        ),
      },
      //   admin routes
      {
        path: "admin-profile",
        element: (
          <AdminRoutes>
            <AdminProfile></AdminProfile>
          </AdminRoutes>
        ),
      },
      {
        path: "manage-coupons",
        element: (
          <AdminRoutes>
            <ManageCoupons></ManageCoupons>
          </AdminRoutes>
        ),
      },
      {
        path: "manage-members",
        element: (
          <AdminRoutes>
            <ManageMembers></ManageMembers>
          </AdminRoutes>
        ),
      },
      {
        path: "make-announcement",
        element: (
          <AdminRoutes>
            <MakeAnnouncement></MakeAnnouncement>
          </AdminRoutes>
        ),
      },
      {
        path: "agreement-requests",
        element: (
          <AdminRoutes>
            <AgreementRequests></AgreementRequests>
          </AdminRoutes>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default Routes;
