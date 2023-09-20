import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomePage from './pages/home/HomePage'

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function App() {
    return (
      <HomePage />
    );
}

export default App;