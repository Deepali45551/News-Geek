import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBlog } from "../services/blogApi"; // <-- import your API function

export default function AddBlogForm() {
  const [form, setForm] = useState({
    category: "",
    title: "",
    author: "",
    image: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let err = {};
    if (!form.category) err.category = "Category is required";
    if (form.title.length < 3) err.title = "Title must be at least 3 characters";
    if (form.author.length < 3) err.author = "Author name must be at least 3 characters";
    if (!form.image) err.image = "Image URL is required";
    if (form.description.length < 3) err.description = "Description must be at least 3 characters";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await addBlog(form); // <-- use the API function
      navigate(`/${form.category.toLowerCase()}`);
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  const inputStyle = "w-full border border-gray-400 rounded-lg p-2 text-sm focus:outline-none focus:border-gray-300";
  const errorText = "text-xs text-red-500 mt-1";

  return (
    <div className="h-[calc(100vh-64px)] flex items-start justify-center bg-gray-100 pt-6">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">Add New Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-2">
          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Category</label>
            <select name="category" onChange={handleChange} className={inputStyle}>
              <option value="">Select Category</option>
              <option value="Business">Business</option>
              <option value="Entertainment">Entertainment</option>
              <option value="General">General</option>
              <option value="Health">Health</option>
              <option value="Science">Science</option>
              <option value="Sports">Sports</option>
              <option value="Technology">Technology</option>
            </select>
            {errors.category && <p className={errorText}>{errors.category}</p>}
          </div>

          {/* Title & Author */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Blog Title</label>
              <input name="title" placeholder="Blog title" onChange={handleChange} className={inputStyle} />
              {errors.title && <p className={errorText}>{errors.title}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Author</label>
              <input name="author" placeholder="Author name" onChange={handleChange} className={inputStyle} />
              {errors.author && <p className={errorText}>{errors.author}</p>}
            </div>
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Image URL</label>
            <input name="image" placeholder="Paste image URL" onChange={handleChange} className={inputStyle} />
            {errors.image && <p className={errorText}>{errors.image}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Blog Description</label>
            <textarea name="description" placeholder="Write blog content..." rows="4" onChange={handleChange} className={inputStyle} />
            {errors.description && <p className={errorText}>{errors.description}</p>}
          </div>

          {/* Button */}
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300">
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
}
