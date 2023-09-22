import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home/Home";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

function App() {
  return <Home />;
}

export default App;
