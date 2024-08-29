import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Snackbar, Alert } from '@mui/material';
import ProductModal from '../../components/ProductModal'; // Modal bileşenini içe aktar
import iceLattePic from '../../assets/mocha.jpg';
import iceAmericanoPic from '../../assets/mocha.jpg';
import iceFiltrePic from '../../assets/mocha.jpg';
import iceMochaSodaPic from '../../assets/mocha.jpg';
import iceTeaPic from '../../assets/mocha.jpg';
import meyveSuyuPic from '../../assets/mocha.jpg';
import limonataPic from '../../assets/mocha.jpg';
import enerjiİcecegiPic from '../../assets/mocha.jpg';
import gazliİcecekPic from '../../assets/mocha.jpg';

function ColdDrinksPage() {
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
    { name: 'Ice Latte', image: iceLattePic },
    { name: 'Ice Americano', image: iceAmericanoPic },
    { name: 'Ice Filtre', image: iceFiltrePic },
    { name: 'Ice Mocha', image: iceMochaSodaPic },
    { name: 'Ice Tea', image: iceTeaPic },
    { name: 'Meyve Suyu', image: meyveSuyuPic },
    { name: 'Limonata', image: limonataPic },
    { name: 'Enerji İçeceği', image: enerjiİcecegiPic },
    { name: 'Gazlı İçecek', image: gazliİcecekPic },
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

export default ColdDrinksPage;
