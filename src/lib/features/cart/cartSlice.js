import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

const initialState = {
  cart: getCartFromLocalStorage(),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
        toast.error(`Item is already selected`);
      } else {
        state.cart.push(item);
        toast.success(`Item added successfully`);
      }

      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter(item => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(state.cart));
      toast.success(`Item removed successfully`);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const currentCart = state => state.cart.cart;
export const totalPrice = state =>
  state.cart?.cart.reduce((total, item) => total + item.price, 0);

export default cartSlice.reducer;
