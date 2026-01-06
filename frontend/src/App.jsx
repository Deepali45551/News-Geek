import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Category from "./pages/Category";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home page → default general news */}
        <Route path="/" element={<Category defaultCategory="general" />} />

        {/* Category pages */}
        <Route path="/category/:category" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
