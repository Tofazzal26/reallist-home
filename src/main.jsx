import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Toaster } from "react-hot-toast";
// ..
AOS.init();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={Router}></RouterProvider>
      </HelmetProvider>
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
