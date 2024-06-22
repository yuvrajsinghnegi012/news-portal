import React from 'react';

const categories = ['General', 'Sports', 'Entertainment', 'Technology', 'Health', 'Science'];

const Categories = ({ selectedCategory, setCategory }) => {
  return (
    <div className="my-4 flex flex-wrap">
      {categories.map((category, i) => (
        <button
          key={i}
          className={`m-2 p-2 text-white  text-sm sm:text-base rounded ${selectedCategory === category.toLowerCase() ? "bg-blue-700" : "bg-blue-500"}`}
          onClick={() => setCategory(category.toLowerCase())}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
