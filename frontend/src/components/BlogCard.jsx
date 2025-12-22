import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-visible hover:shadow-lg transition relative mt-2 pt-5">
            <img
                src={blog.urlToImage || blog.image || "/img1.webp"}
                alt={blog.title || "News headline"}
                className="h-48 w-full object-cover"
                onError={(e) => (e.target.src = "/img1.webp")}
            />

            <div className="p-4">
                {/* Title */}
                <h3 className="font-semibold text-lg mt-2">{blog.title}</h3>

                {/* Author */}
                <p className="text-xs text-gray-600 mt-1 text-right">
                    ~ {blog.author || "Hindustan Times"}
                </p>

                {/* Description (truncate to 120 chars) */}
                <p className="text-sm text-gray-600 mt-2 mb-3" >
                    {blog.description
                        ? `${blog.description.slice(0, 120)}...`
                        : "This headline covers the latest developments and important updates from around"}
                </p>

                {/* Read More Link */}
                {blog.id ? (
                    // If it's a local blog (from json-server), navigate to single blog page
                    <Link
                        to={`/blog/${blog.id}`}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1.5 rounded"
                    >
                        Read more
                    </Link>
                ) : (
                    // If it's from NewsAPI, open external URL
                    <a
                        href={blog.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1.5 rounded"
                    >
                        Read more
                    </a>
                )}
            </div>
        </div>
    );
}
