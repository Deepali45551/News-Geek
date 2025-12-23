import axios from "axios";

const API_KEY = "d716a3ee5b654e80954fba5db710aebf"; // get from newsapi.org
const BASE_URL = "https://newsapi.org/v2/top-headlines";

export const fetchNewsByCategory = async (category) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        country: "us",
        category: category.toLowerCase(),
        apiKey: API_KEY,
        pageSize: 10
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
