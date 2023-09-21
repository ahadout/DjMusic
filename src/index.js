import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import HardDrives from "./pages/HardDrives/HardDrives";
import CloudDrives from "./pages/CloudDrives/CloudDrives";
import Screenshots from "./pages/Screenshots/Screenshots";
import Preview from "./pages/Preview/Preview";
import About from "./pages/About/About"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/hard-drives",
    element: <HardDrives />,
  },
  {
    path: "/cloud-drives",
    element: <CloudDrives />,
  },
  {
    path: "/screenshots",
    element: <Screenshots />,
  },
  {
    path: "/preview",
    element: <Preview />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
