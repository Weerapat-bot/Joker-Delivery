import { configureStore } from '@reduxjs/toolkit';
import foodReducer from '../redux/foodSlice';
import orderReducer from '../redux/orderSlice';

export const store = configureStore({
  reducer: {
    food: foodReducer,
    order: orderReducer,
  },
});
