import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, Badge } from '@mui/material'; /* css frameworkunü importladık */
import Logo from "../assets/logo.png";
import HomeIcon from "../assets/Group.png";
import LoginIcon from "../assets/Group 6.png";
import CartIcon from "../assets/Group 5.png";
import './Header.css';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null); /*openDropdown, hangi açılır menünün açık olduğunu belirtir.*/
  const [cartItems, setCartItems] = useState([ /*cartItems, sepetteki ürünlerin bir listesidir. */
    { id: 1, name: 'Çay', quantity: 1 },
    { id: 2, name: 'Limonlu Soda', quantity: 2 },
    { id: 3, name: 'Türk Kahvesi', quantity: 3 },
  ]);

  /*fonksiyonlar*/
  const handleDropdownOpen = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const increaseQuantity = (item) => { /*sepet ürünlerinin miktarını artırma azaltma */
    setCartItems((prevItems) =>
      prevItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
    );
  };

  const decreaseQuantity = (item) => { /*azaltma */
    setCartItems((prevItems) =>
      prevItems.map((i) => (i.id === item.id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i))
    );
  };

  return ( /*jsx render kısmı */
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
          <li 
            className="nav-item"
            onMouseEnter={() => handleDropdownOpen('coffee')}
            onMouseLeave={handleDropdownClose}
          >
            <a className="nav-link" href="#">KAHVE</a>
            {openDropdown === 'coffee' && (
              <div className="dropdown-menu">
                <a href="#">Türk Kahvesi</a>
                <a href="#">Filtre Kahve</a>
              </div>
            )}
          </li>
          <li 
            className="nav-item"
            onMouseEnter={() => handleDropdownOpen('tea')}
            onMouseLeave={handleDropdownClose}
          >
            <a className="nav-link" href="#">ÇAY</a>
            {openDropdown === 'tea' && (
              <div className="dropdown-menu">
                <a href="#">Çay</a>
              </div>
            )}
          </li>
          <li 
            className="nav-item"
            onMouseEnter={() => handleDropdownOpen('snacks')}
            onMouseLeave={handleDropdownClose}
          >
            <a className="nav-link" href="#">ATIŞTIRMALIK</a>
            {openDropdown === 'snacks' && (
              <div className="dropdown-menu">
                <a href="#">Tuzlu</a>
                <a href="#">Tatlı</a>
              </div>
            )}
          </li>
          <li 
            className="nav-item"
            onMouseEnter={() => handleDropdownOpen('soda')}
            onMouseLeave={handleDropdownClose}
          >
            <a className="nav-link" href="#">MEYVELİ SODA</a>
            {openDropdown === 'soda' && (
              <div className="dropdown-menu">
                <a href="#">Limon</a>
                <a href="#">Portakal</a>
                <a href="#">Ananas</a>
              </div>
            )}
          </li>
          <li 
            className="nav-item"
            onMouseEnter={() => handleDropdownOpen('herbalTea')}
            onMouseLeave={handleDropdownClose}
          >
            <a className="nav-link" href="#">BİTKİ ÇAYI</a>
            {openDropdown === 'herbalTea' && (
              <div className="dropdown-menu">
                <a href="#">Kuşburnu</a>
                <a href="#">Zencefil-Bal</a>
                <a href="#">Yeşil Çay</a>
              </div>
            )}
          </li>
          <li 
            className="nav-item"
            onMouseEnter={() => handleDropdownOpen('fruit')}
            onMouseLeave={handleDropdownClose}
          >
            <a className="nav-link" href="#">MEYVE</a>
            {openDropdown === 'fruit' && (
              <div className="dropdown-menu">
                <a href="#">Meyve</a>
              </div>
            )}
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
           <button
             onClick={() => decreaseQuantity(item)}
             style={{
               backgroundColor: '#506CEC', /* Mavi arka plan rengi */
               color: 'white', /* Beyaz yazı rengi */
               border: 'none', /* Kenarlık kaldırma */
               padding: '5px 10px', /* İç boşluk */
               borderRadius: '5px', /* Köşe yuvarlama */
               cursor: 'pointer', /* İmleç şekli */
               fontSize: '16px', /* Yazı boyutu */
               margin: '0 5px', /* Butonlar arası boşluk */
             }}
           >
             -
           </button>
           <span style={{ margin: '0 10px' }}>{item.quantity}</span>
           <button
             onClick={() => increaseQuantity(item)}
             style={{
               backgroundColor: '#506CEC', /* Mavi arka plan rengi */
               color: 'white', /* Beyaz yazı rengi */
               border: 'none', /* Kenarlık kaldırma */
               padding: '5px 10px', /* İç boşluk */
               borderRadius: '5px', /* Köşe yuvarlama */
               cursor: 'pointer', /* İmleç şekli */
               fontSize: '16px', /* Yazı boyutu */
               margin: '0 5px', /* Butonlar arası boşluk */
             }}
           >
             +
           </button>
         </div>
       </MenuItem>
       
        ))}
      <MenuItem onClick={handleClose}>
  <a href="/cart" style={{ width: '100%', textAlign: 'center', textDecoration: 'none' }}>
    <button
      style={{
        backgroundColor: '#506CEC', /* Arka plan rengi */
        color: 'white', /* Yazı rengi */
        border: 'none', /* Kenarlık kaldırma */
        padding: '10px 20px', /* İç boşluk */
        borderRadius: '5px', /* Köşe yuvarlama */
        cursor: 'pointer', /* İmleç şekli */
        fontSize: '16px', /* Yazı boyutu */
      }}
    >
      Sepete Git
    </button>
  </a>
</MenuItem>

      </Menu>
    </>
  );
}

export default Header;
