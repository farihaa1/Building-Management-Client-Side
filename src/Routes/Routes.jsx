import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../SharedComponents/ErrorPage";
import HomePage from "../Pages/Home/HomePage";

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
    ]
  },
]);

export default Routes;
