// pages/SodaWaterPage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Snackbar, Alert } from '@mui/material';
import ProductModal from '../../components/ProductModal'; // Modal bileşenini içe aktar
import sadeSodaPic from '../../assets/mocha.jpg';
import limonluSodaPic from '../../assets/mocha.jpg';
import elmaliSodaPic from '../../assets/mocha.jpg';
import ananasMangoSodaPic from '../../assets/mocha.jpg';
import karadutSodaPic from '../../assets/mocha.jpg';
import portakalliSodaPic from '../../assets/mocha.jpg';


function SodaWaterPage() {
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
    { name: 'Sade Soda', image: sadeSodaPic },
    { name: 'Limonlu Soda', image: limonluSodaPic },
    { name: 'Elmalı Soda', image: elmaliSodaPic },
    { name: 'Mango-Ananas Soda', image: ananasMangoSodaPic },
    { name: 'Karadutlu Soda', image: karadutSodaPic },
    { name: 'Portakallı Soda', image: portakalliSodaPic },
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

      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SodaWaterPage;
