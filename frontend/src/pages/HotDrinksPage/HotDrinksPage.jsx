// HotDrinksPage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Snackbar, Alert } from '@mui/material';
import ProductModal from '../../components/ProductModal'; // Modal bileşenini içe aktar
import cayPic from '../../assets/cayin-tarihcesi-ve-turkiyeye-gelisi-c812539d-a158-4205-b031-724dd2fe3530.jpg';
import turkKahvesiPic from '../../assets/turkkahve.jpg';
import bitkiCayiPic from '../../assets/bitkicay.jpg';
import filtreKahvePic from '../../assets/filtrekahve.webp';
import americanoPic from '../../assets/americano.jpeg';
import lattePic from '../../assets/latte.jpg';
import espressoPic from '../../assets/espresso.jpg';
import salepPic from '../../assets/salep.jpg';
import dibekKahvesiPic from '../../assets/dibek_kahve.jpg';
import capuccinoPic from '../../assets/capuccino.jpg';
import sicakcikolataPic from '../../assets/sicakcikolata.jpg';
import mochaPic from '../../assets/mocha.jpg';
import './HotDrinksPage.css';

function HotDrinksPage() {
  const dispatch = useDispatch();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedItem, setSelectedItem] = useState(null); // Seçilen ürünü saklamak için

  const handleAddToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
    setMessage(`${item.name} sepete eklendi!`);
    setOpenSnackbar(true);
  };

  const handleOpenModal = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const items = [
    { name: 'Çay', image: cayPic },
    { name: 'Türk Kahvesi', image: turkKahvesiPic },
    { name: 'Bitki Çayı', image: bitkiCayiPic },
    { name: 'Filtre Kahve', image: filtreKahvePic },
    { name: 'Americano', image: americanoPic },
    { name: 'Latte', image: lattePic },
    { name: 'Espresso', image: espressoPic },
    { name: 'Salep', image: salepPic },
    { name: 'Dibek Kahvesi', image: dibekKahvesiPic },
    { name: 'Mocha', image: mochaPic },
    { name: 'Capuccino', image: capuccinoPic },
    { name: 'Sıcak Çikolata', image: sicakcikolataPic },
  ];

  return (
    <div>
      <div className="frames-container">
        {items.map((item, index) => (
          <div key={index} className="frame" onClick={() => handleOpenModal(item)}>
            <img src={item.image} alt={item.name} />
            <div className="frame-label">{item.name}</div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <ProductModal
          open={!!selectedItem}
          handleClose={handleCloseModal}
          item={selectedItem}
          addToCart={handleAddToCart}
        />
      )}

      <Snackbar open={openSnackbar} autoHideDuration={null} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default HotDrinksPage;
