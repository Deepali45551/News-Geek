import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Category from "./pages/Category";
import AddBlogForm from "./components/AddBlogForm";
import SingleBlog from "./components/SingleBlog";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Category defaultCategory="general" />} />
        <Route path="/:name" element={<Category />} />
        <Route path="/" element={<Category />} />
        {/* Add Blog Form */}
        <Route path="/add-blog" element={<AddBlogForm />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
