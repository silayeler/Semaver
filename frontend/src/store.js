import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './pages/CartPage/cartSlice'; // Dosya yolunu güncelledik

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
