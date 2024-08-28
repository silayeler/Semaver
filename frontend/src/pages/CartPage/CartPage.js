// src/pages/CartPage/CartPage.js

import React from 'react';
import { useSelector } from 'react-redux';
import './CartPage.css';
import salepImage from '../../assets/salep.jpg'; // Resmi içe aktarın

function CartPage() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="cart-page">
      <h1>Sepetiniz</h1>
      <div className="frames-container">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="item-frame">
              <img src={salepImage} alt={item.name} className="item-image" />
              <div className="item-details">
                <h2>{item.name}</h2>
                <p>Adet: {item.quantity}</p>
                <p>Fiyat: {item.price} TL</p>
              </div>
            </div>
          ))
        ) : (
          <p>Sepetiniz boş.</p>
        )}
      </div>
      <button className="order-button">Sipariş Ver</button>
    </div>
  );
}

export default CartPage;
