import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import Pagination from "../components/Pagination";
import toast from "react-hot-toast";

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const apiUrl = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}`;
        const searchCategory = category ? `&category=${category}` : "";
        const searchPage = page ? `&page=${page}` : "";
        const searchParam = searchQuery ? `&q=${searchQuery}` : "";
        const searchCountry = `&country=us`;
        const searchLanguage = `&language=en`;
        
        const url = apiUrl + searchParam + searchPage + searchCategory + searchLanguage;
        // const response = await fetch(
        //   `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&searchIn=${searchQuery}&apiKey=${
        //     import.meta.env.VITE_API_KEY
        //   }`
        // );
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
          setArticles(data.articles);
          setTotalPages(Math.ceil(data.totalResults / 20));
        } else {
          throw new Error(data.message || "Failed to fetch news");
        }
      } catch (err) {
        setError("Failed to fetch news");
      }
      setLoading(false);
    };

    fetchNews();
  }, [category, page, searchQuery]);

  const handleFavorite = (article) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    localStorage.setItem("favorites", JSON.stringify([...favorites, article]));
    toast.success("Post Added To Favoutie");
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Categories selectedCategory={category} setCategory={setCategory} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <NewsList articles={articles} handleFavorite={handleFavorite} />
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </div>
  );
};

export default HomePage;
