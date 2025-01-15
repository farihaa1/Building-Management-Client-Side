import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes";
import AuthProvider from "../src/Providers/AuthProvider";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <AuthProvider>
   <HelmetProvider>
      <RouterProvider router={Routes}></RouterProvider>
    </HelmetProvider>
   </AuthProvider>
  </StrictMode>
);
