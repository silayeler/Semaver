import { createSlice } from '@reduxjs/toolkit';

// Başlangıç durumu
const initialState = [];

// Redux slice'ı oluşturun
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Sepete ürün ekleme
    addToCart: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        // Ürün zaten sepette varsa miktarı artır
        state[itemIndex].quantity += action.payload.quantity;
      } else {
        // Ürün sepette yoksa ekle
        state.push(action.payload);
      }
    },
    // Sepetten ürün çıkarma
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    // Ürün miktarını güncelleme
    updateQuantity: (state, action) => {
      const { itemId, amount } = action.payload;
      const item = state.find(item => item.id === itemId);
      if (item) {
        item.quantity = Math.max(1, item.quantity + amount); // Miktar 1'den az olamaz
      }
    },
  },
});

// Aksiyonları dışa aktar
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

// Reducer'ı dışa aktar
export default cartSlice.reducer;
