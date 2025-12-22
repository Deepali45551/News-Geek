import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchNewsByCategory } from "../services/newsApi";
import BlogCard from "../components/BlogCard";
import axios from "axios";
import { getBlogs } from "../services/blogApi"; // Adjust the path


export default function Category({ defaultCategory = "general" }) {
  const { name } = useParams();
  const category = name || defaultCategory;

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  async function loadNews() {
    setLoading(true);

    try {
      // 1️⃣ Fetch NewsAPI articles
      const apiArticles = await fetchNewsByCategory(category);

      // 2️⃣ Fetch locally added blogs using blogApi.js
      const localResponse = await getBlogs(); // <-- use API helper
      const localBlogs = localResponse.data.filter(
        (b) => b.category.toLowerCase() === category.toLowerCase()
      );

      // 3️⃣ Combine them
      setBlogs([...localBlogs, ...apiArticles]);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  }

  loadNews();
}, [category]);

  return (
    <div className="px-6 py-6">
      <h1 className="text-3xl font-semibold text-center mb-6 capitalize">
        News Geek - Top {category} Headlines
      </h1>

      {loading ? (
        <p className="text-center"></p>
      ) : blogs.length === 0 ? (
        <p className="text-center">No news found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}
