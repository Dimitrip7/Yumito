import React from 'react';

function CartItems({ items }) {
  const calculateItemPrice = (item) => {
    const price = parseFloat(item.price);
    if (!isNaN(price)) {
      return price.toFixed(2);
    }
    return 'NaN';
  };

  const calculateTotalPrice = () => {
    let total = 0;
    for (const item of items) {
      const price = parseFloat(item.price);
      if (!isNaN(price)) {
        total += price;
      }
    }
    return total.toFixed(2);
  };

  return (
    <>
      <ul className="cart-items">
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <p className="cart-item-name">{item.name}</p>
            <p className="cart-item-price">${calculateItemPrice(item)}</p>
          </li>
        ))}
      </ul>
      <p className="total-price">Total Price: ${calculateTotalPrice()}</p>
    </>
  );
}

export default CartItems;
