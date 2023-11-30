// import React, { Suspense } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import HardDrives from "./pages/HardDrives/HardDrives";
// import CloudDrives from "./pages/CloudDrives/CloudDrives";
// import Screenshots from "./pages/Screenshots/Screenshots";
// // import Preview from "./pages/Preview/Preview";
// import About from "./pages/About/About";
// import Login from "./pages/Login/Login";
// import Signup from "./pages/Signup/Signup";
// import ContactUs from "./pages/ContactUs/Contactus";
// import FaqPage from "./pages/Faq/FaqPage";
// import AdminPage from "./pages/Admin/adminPage";
// import AdminProfile from "./pages/Admin/AdminProfile";
// import SongsAlbums from "./pages/Admin/SongsAlbums";
// import UserManagement from "./pages/Admin/UserManagement";
// import OrdersManagement from "./pages/Admin/OrdersManagement";
// import ProductManagement from "./pages/Admin/ProductManagement";
// import useScrollToTop from "./components/useScrollToTop";



// import UserDashboard from "./pages/UserDashboard/UserDashboard"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // If you decide to use lazy loading in the future:
// // const App = React.lazy(() => import("./App"));

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<App />} />
//           <Route path="/hard-drives" element={<HardDrives />} />
//           <Route path="/cloud-drives" element={<CloudDrives />} />
//           <Route path="/screenshots" element={<Screenshots />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//           <Route path="/faq" element={<FaqPage/>}/>
//           <Route path="/admin" element={<AdminPage/>}/>
//           <Route path="/admin/profile" element={<AdminProfile/>}/>
//           <Route path="/admin/songs-albums" element={<SongsAlbums/>}/>
//           <Route path="/admin/users-management" element={<UserManagement/>}/>
//           <Route path="/admin/orders-management" element={<OrdersManagement/>}/>
//           <Route path="/admin/products-management" element={<ProductManagement/>}/>
//           <Route path="/dashboard" element={<UserDashboard />} />
//           {/* If using a 404 page: */}
//           {/* <Route path="*" element={<NotFound />} /> */}
//         </Routes>
//       </Suspense>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HardDrives from "./pages/HardDrives/HardDrives";
import CloudDrives from "./pages/CloudDrives/CloudDrives";
import Screenshots from "./pages/Screenshots/Screenshots";
// import Preview from "./pages/Preview/Preview";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ContactUs from "./pages/ContactUs/Contactus";
import FaqPage from "./pages/Faq/FaqPage";
import AdminPage from "./pages/Admin/adminPage";
import AdminProfile from "./pages/Admin/AdminProfile";
import SongsAlbums from "./pages/Admin/SongsAlbums";
import UserManagement from "./pages/Admin/UserManagement";
import OrdersManagement from "./pages/Admin/OrdersManagement";
import ProductManagement from "./pages/Admin/ProductManagement";
import useScrollToTop from "./components/useScrollToTop";



import UserDashboard from "./pages/UserDashboard/UserDashboard"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// If you decide to use lazy loading in the future:
// const App = React.lazy(() => import("./App"));

const Index = () => {
  useScrollToTop();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hard-drives" element={<HardDrives />} />
        <Route path="/cloud-drives" element={<CloudDrives />} />
        <Route path="/screenshots" element={<Screenshots />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<FaqPage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/admin/profile" element={<AdminProfile/>}/>
        <Route path="/admin/songs-albums" element={<SongsAlbums/>}/>
        <Route path="/admin/users-management" element={<UserManagement/>}/>
        <Route path="/admin/orders-management" element={<OrdersManagement/>}/>
        <Route path="/admin/products-management" element={<ProductManagement/>}/>
        <Route path="/dashboard" element={<UserDashboard />} />
        {/* If using a 404 page: */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Index />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);