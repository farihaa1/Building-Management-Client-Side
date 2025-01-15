import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../SharedComponents/ErrorPage";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path:'/',
            element: <HomePage></HomePage>,
        },
        {
            path:'/apartment',
            element: <HomePage></HomePage>,
        },
        {
            path:'/sign-in',
            element: <Login></Login>,
        },
        {
            path:'/register',
            element: <Register></Register>,
        },
    ]
  },
]);

export default Routes;
