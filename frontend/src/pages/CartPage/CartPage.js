import React from 'react';
import './CartPage.css'; // CSS dosyanızın yolu

// Resimleri import ediyoruz
import cayImage from '../../assets/cayin-tarihcesi-ve-turkiyeye-gelisi-c812539d-a158-4205-b031-724dd2fe3530.jpg';
import limonSodaImage from '../../assets/americano.jpeg';
import turkKahvesiImage from '../../assets/americano.jpeg';

const cartItems = [
  { id: 1, name: 'Çay', quantity: 1, image: cayImage },
  { id: 2, name: 'Limonlu Soda', quantity: 2, image: limonSodaImage },
  { id: 3, name: 'Türk Kahvesi', quantity: 3, image: turkKahvesiImage, details: 'Sade' }, // Detay ekledik
];

const CartPage = () => {
  return (
    <div className="cart-page">
      <h1>Sepetiniz</h1>
      <div className="separator-line"></div>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h2>{item.name}</h2>
              <div className="quantity-control">
                <button>-</button>
                <span>{item.quantity}</span>
                <button>+</button>
              </div>
              {item.details && <p>{item.details}</p>} {/* Sadece detay varsa göster */}
            </div>
          </div>
        ))}
      </div>
      <button className="order-button">Sipariş Ver</button>
    </div>
  );
}

export default CartPage;
