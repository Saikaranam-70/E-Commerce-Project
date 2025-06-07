import React, { useEffect, useState } from 'react';
import './HomePage.css';
import CategorySection from '../CategorySection/CategorySection';


const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:8080/product/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  if (categories.length === 0) {
    return <div className="loading">Loading categories...</div>;
  }

  return (
    <div className="homepage-container">
      {categories.map((category) => (
        <CategorySection key={category} category={category} />
      ))}
    </div>
  );
};

export default HomePage;
