import React from 'react';
import { useDispatch } from 'react-redux';
import { Snackbar, Alert } from '@mui/material';  
import sadeSodaPic from '../../assets/mocha.jpg';
import limonluSodaPic from '../../assets/mocha.jpg';
import elmaliSodaPic from '../../assets/mocha.jpg';
import ananasMangoSodaPic from '../../assets/mocha.jpg';
import karadutSodaPic from '../../assets/mocha.jpg';
import portakalliSodaPic from '../../assets/mocha.jpg';

function SodaWaterPage() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const addToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
    setMessage(`${item.name}  sepete eklendi!`);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          <div key={index} className="frame" onClick={() => addToCart({ ...item, quantity: 1 })}>
            <img src={item.image} alt={item.name} />
            <div className="frame-label">{item.name}</div>
          </div>
        ))}
      </div>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}


export default SodaWaterPage;
