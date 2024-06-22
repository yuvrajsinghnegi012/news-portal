import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import NewsList from '../components/NewsList';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Favorites</h1>
        <NewsList articles={favorites} handleFavorite={() => {}} />
      </div>
    </div>
  );
};

export default FavoritesPage;
