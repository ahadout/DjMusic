import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HardDrives from "./pages/HardDrives/HardDrives";
import CloudDrives from "./pages/CloudDrives/CloudDrives";
import Screenshots from "./pages/Screenshots/Screenshots";
import Preview from "./pages/Preview/Preview";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// If you decide to use lazy loading in the future:
// const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/hard-drives" element={<HardDrives />} />
          <Route path="/cloud-drives" element={<CloudDrives />} />
          <Route path="/screenshots" element={<Screenshots />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          {/* If using a 404 page: */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
