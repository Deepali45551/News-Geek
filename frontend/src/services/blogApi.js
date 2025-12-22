import axios from "axios";

const BASE_URL = "http://localhost:3001/blogs";

export const getBlogs = () => axios.get(BASE_URL);

export const addBlog = (data) => axios.post(BASE_URL, data);

export const getBlogById = (id) => axios.get(`${BASE_URL}/${id}`);
