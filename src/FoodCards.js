import React from 'react';

function FoodCards({ item, onAddToCart, images }) {
  return (
    <div key={item.id} className="food-card">
      {item.image ? (
        <img src={item.image} alt={item.name} />
      ) : (
        <img src={images.DefaultImage} alt="Default" />
      )}
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <button onClick={() => onAddToCart(item)}>Add to Cart</button>
    </div>
  );
}

export default FoodCards;
