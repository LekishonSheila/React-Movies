import React, { useState, useEffect } from "react";

const CategoryFilter = ({ selectedCategory, handleCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
   
    fetch("https://example.com/api/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="category-buttons">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryChange(category.id, category.name)}
          className={selectedCategory === category.id ? "active" : ""}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
