import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import HomePage from "./components/home/homepage";
import "./index.css";
import Auth from "./components/auth/auth";

function App() {
  return (
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />

      </Routes>
  );
}

export default App;
