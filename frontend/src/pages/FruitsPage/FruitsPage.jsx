// pages/FruitsPage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Snackbar, Alert } from '@mui/material';
import ProductModal from '../../components/ProductModal'; 
import meyvePic from '../../assets/179d7a6c-c5df-445b-8f37-d6780376a383.jpg';


function FruitsPage() {
  const dispatch = useDispatch();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedItem, setSelectedItem] = useState(null); 

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
    { name: 'Günün Meyvesi', image: meyvePic },
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

export default FruitsPage;
