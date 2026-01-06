import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";
import BlogCard from "../components/BlogCard";

export default function Category({ defaultCategory = "general" }) {
  const { category } = useParams();

  const selectedCategory = category || defaultCategory;

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    API.get(`/${selectedCategory}`)
      .then((res) => {
        setNews(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <div className="px-6 py-6">
      <h1 className="text-3xl font-semibold text-center mb-6 capitalize">
        News Geek - Top {selectedCategory} Headlines
      </h1>

      {loading ? (
        <p className="text-center">Loading news...</p>
      ) : news.length === 0 ? (
        <p className="text-center">No news found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <BlogCard key={index} blog={article} />
          ))}
        </div>
      )}
    </div>
  );
}
