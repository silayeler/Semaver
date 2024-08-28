import React from 'react';
import { useDispatch } from 'react-redux';
import { Snackbar, Alert } from '@mui/material';  
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

export default ColdDrinksPage;
