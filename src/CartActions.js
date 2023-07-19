import React from 'react';

function CartActions({ handlePay, handleClearCart }) {
  return (
    <>
      <button className="cart-button" onClick={handlePay}>
        Pay
      </button>
      <button className="cart-button" onClick={handleClearCart}>
        Clear Cart
      </button>
    </>
  );
}

export default CartActions;

