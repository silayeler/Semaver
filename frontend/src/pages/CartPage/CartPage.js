import React from 'react';
import { useSelector } from 'react-redux';
import './CartPage.css';

function CartPage() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="cart-page">
      <h1>Sepetiniz</h1>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))
        ) : (
          <li>Sepetiniz boş.</li>
        )}
      </ul>
    </div>
  );
}

export default CartPage;
