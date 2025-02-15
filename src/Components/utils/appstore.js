import { configureStore }  from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const appStore = configureStore({
  reducer: {
    cart: cartReducer, // Ensure this matches the slice you imported
  },
});
export default appStore;
