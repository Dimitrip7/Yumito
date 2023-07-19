import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import images from './images';
import categories from './categories';
import './FoodCards.css';
import FoodCard from './FoodCards';

function FoodCardsContainer({ searchTerm, onAddToCart }) {
  const { category } = useParams();
  const selectedCategory = category
    ? categories.find((cat) => cat.name.toLowerCase() === category.toLowerCase())
    : categories[0];

  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    const token = localStorage.getItem('token');
    if (token) {
      const itemWithNumberPrice = {
        ...item,
        price: parseFloat(item.price.replace('$', '')),
      };
      onAddToCart(itemWithNumberPrice);
    } else {
      navigate('/login');
    }
  };
  
  

  useEffect(() => {
    if (!selectedCategory) {
      return <h3>Category not found</h3>;
    }
  }, [selectedCategory]);

  const filteredItems = selectedCategory.items
    ? selectedCategory.items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="food-cards-container">
      <h3>{selectedCategory.name}</h3>
      <div className="food-cards">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <FoodCard
              key={item.id}
              item={item}
              onAddToCart={handleAddToCart}
              images={images}
            />
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
}

export default FoodCardsContainer;
