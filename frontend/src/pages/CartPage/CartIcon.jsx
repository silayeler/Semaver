import React, { useState } from 'react';
import { IconButton, Popover, Typography, Badge, List, ListItem, ListItemText } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { blueGrey } from '@mui/material/colors';

function CartIcon() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const cartItems = useSelector((state) => state.cart);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const totalItems = cartItems.length;

  return (
    <div>
      <IconButton onClick={handleClick}>
        <Badge badgeContent={totalItems} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div style={{ padding: '10px', minWidth: '300px' }}>
          <Typography variant="h6">Sepetiniz</Typography>
          <List>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <ListItem key={index}>
                  <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
                  <ListItemText
                    primary={item.name}
                    secondary={`Adet: ${item.quantity} - ${item.price} TL`}
                  />
                </ListItem>
              ))
            ) : (
              <ListItem>Sepetiniz Boş.</ListItem>
            )}
          </List>
          {cartItems.length > 0 && (
            <div style={{ marginTop: '10px', textAlign: 'right' }}>
              <Typography variant="body2">
                <a href="/cart" >Sepete Git</a>
              </Typography>
            </div>
          )}
        </div>
      </Popover>
    </div>
  );
}

export default CartIcon;
