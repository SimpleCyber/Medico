import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import HomePage from "./components/home/homepage";
import "./index.css";
import Auth from "./components/auth/auth";
import Patient from "./components/users/patient/patient";
import Doctor from "./components/users/doctor/doctor";
import Hospital from "./components/users/hospital/hospital";

function App() {
  return (
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/hospital" element={<Hospital />} />
        

      </Routes>
  );
}

export default App;
