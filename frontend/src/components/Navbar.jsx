// components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const categories = [
        "Business",
        "Entertainment",
        "General",
        "Health",
        "Science",
        "Sports",
        "Technology",
    ];

    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
            <h1 className="text-white text-xl font-bold">News Geek</h1>

            <div className="flex space-x-4">
                {categories.map((cat) => (
                    <Link
                        key={cat}
                        to={`/${cat.toLowerCase()}`}
                        className="text-white hover:underline"
                    >
                        {cat}
                    </Link>
                ))}
            </div>
            <div className="d-flex">
                <Link to="/add-blog" className="bg-white text-black px-4 py-1 rounded">
                    Add Blog
                </Link>
            </div>
        </nav>
    );
}
