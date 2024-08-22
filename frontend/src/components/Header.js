import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, Badge } from '@mui/material';
import Logo from "../assets/logo.webp";
import HomeIcon from "../assets/Group.png"; // Ana sayfa ikonu dosya yolunu güncelleyin
import LoginIcon from "../assets/Group 6.png"; // Giriş ikonu dosya yolunu güncelleyin
import CartIcon from "../assets/Group 5.png"; // Sepet ikonu dosya yolunu güncelleyin  
import './Header.css';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Ürün 1', quantity: 1 },
    { id: 2, name: 'Ürün 2', quantity: 2 },
  ]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const increaseQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
    );
  };

  const decreaseQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((i) => (i.id === item.id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i))
    );
  };

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={Logo} alt="Semaver Logo" className="logo" />
        </div>
        <div className="nav-links">
          <a href="/" className="link icon-home">
            <img src={HomeIcon} alt="Ana Sayfa" className="icon" />
            Ana Sayfa
          </a>
          <a href="/login" className="link icon-login">
            <img src={LoginIcon} alt="Giriş" className="icon" />
            Giriş
          </a>
          <IconButton color="inherit" onClick={handleClick} className="icon-cart-button">
            <Badge badgeContent={cartItems.length} color="secondary">
              <img src={CartIcon} alt="Sepet" className="icon" />
            </Badge>
            <span className="cart-text">Sepet</span>
          </IconButton>
        </div>
      </header>
      <nav className="Header-nav">
        <ul className="nav nav-underline">
          <li className="nav-item">
            <a className="nav-link" href="#">KAHVE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">ÇAY</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">ATIŞTIRMALIK</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">MEYVELİ SODA</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">BİTKİ ÇAYI</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">MEYVE</a>
          </li>
        </ul>
      </nav>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {cartItems.map((item) => (
          <MenuItem key={item.id}>
            {item.name}
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
              <button onClick={() => decreaseQuantity(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item)}>+</button>
            </div>
          </MenuItem>
        ))}
        <MenuItem onClick={handleClose}>
          <a href="/cart" style={{ width: '100%', textAlign: 'center' }}>
            <button>Sepete Git</button>
          </a>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Header;
