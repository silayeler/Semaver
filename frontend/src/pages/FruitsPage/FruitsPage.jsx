import React from 'react';
import { useDispatch } from 'react-redux';
import { Snackbar, Alert } from '@mui/material';
import meyvePic from '../../assets/179d7a6c-c5df-445b-8f37-d6780376a383.jpg';


function FruitsPage() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const addToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
    setMessage(`${item.name} sepete eklendi!`);
    setOpen(true);
  };

 const handleClose = () => {
    setOpen(false);
  }; 

  const items = [
    { name: 'Günün Meyvesi', image: meyvePic },
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

export default FruitsPage;
