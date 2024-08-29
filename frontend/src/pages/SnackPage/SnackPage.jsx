// pages/SnackPage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Snackbar, Alert } from '@mui/material';
import ProductModal from '../../components/ProductModal'; // Modal bileşenini içe aktar
import tuzluPic from '../../assets/tuzlu.jpg';
import tatliPic from '../../assets/tatli-kurupasta.webp';


function SnackPage() {
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
    { name: 'Tuzlu', image: tuzluPic },
    { name: 'Tatlı', image: tatliPic },
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

export default SnackPage;
