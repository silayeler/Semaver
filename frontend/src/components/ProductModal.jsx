import React, { useState } from 'react';
import { Modal, Button, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import './ProductModal.css';

const ProductModal = ({ open, handleClose, item, addToCart }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAddToCart = () => {
    if (item.name === 'Türk Kahvesi' && !selectedOption) {
      alert('Lütfen bir seçenek seçin!');
      return;
    }
    addToCart({ ...item, quantity: 1, option: selectedOption });
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <h2>{item.name}</h2>
        <img src={item.image} alt={item.name} className="modal-image" />

        {item.name === 'Çay' && (
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="Çay Seçeneği"
              name="tea-option"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <FormControlLabel value="Az Demli" control={<Radio />} label="Az Demli" />
              <FormControlLabel value="Çok Demli" control={<Radio />} label="Çok Demli" />
            </RadioGroup>
          </FormControl>
        )}

        {item.name === 'Türk Kahvesi' && (
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="Türk Kahvesi Seçeneği"
              name="turkish-coffee-option"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <FormControlLabel value="Sade" control={<Radio />} label="Sade" />
              <FormControlLabel value="Orta" control={<Radio />} label="Orta" />
              <FormControlLabel value="Şekerli" control={<Radio />} label="Şekerli" />
            </RadioGroup>
          </FormControl>
        )}

{item.name === 'Filtre Kahve' && (
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="Filtre Kahve Seçeneği"
              name="filter-coffee-option"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <FormControlLabel value="Sade" control={<Radio />} label="Sade" />
              <FormControlLabel value="Sütlü" control={<Radio />} label="Sütlü" />
            </RadioGroup>
          </FormControl>
        )}
        <Button onClick={handleAddToCart} variant="contained" color="primary">Sepete Ekle</Button>
      </div>
    </Modal>
  );
};

export default ProductModal;
