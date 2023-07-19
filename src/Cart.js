import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartItems from './CartItems';
import CartActions from './CartActions';
import './Cart.css';

function Cart({ cartItems, onClearCart }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);
  

  const calculateTotalPrice = () => {
    let total = 0;
    for (const item of items) {
      const price = parseFloat(item.price);
      if (!isNaN(price)) {
        total += price * item.quantity;
      }
    }
    return total.toFixed(2);
  };
  
  
  

  const handlePay = () => {
    // Clear the cart
    setItems([]);
    onClearCart();

    toast.success('Payment successful!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleClearCart = () => {
    setItems([]);
    onClearCart();
  };

  return (
    <div className="cart-container">
      <h3>Cart Items</h3>
      {items.length > 0 ? (
        <CartItems items={items} calculateTotalPrice={calculateTotalPrice} />
      ) : (
        <p className="empty-cart-message">No items in the cart</p>
      )}
      <CartActions handlePay={handlePay} handleClearCart={handleClearCart} />
    </div>
  );
}

export default Cart;
