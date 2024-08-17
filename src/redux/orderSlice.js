import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    items: [],
  },
  reducers: {
    addOrder: (state, action) => {
      const { id, name, price } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * price;
      } else {
        state.items.push({ ...action.payload, quantity: 1, totalPrice: price });
      }
    },
    removeOrder: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearOrder: (state) => {
      state.items = [];
    },
  },
});

export const { addOrder, removeOrder, clearOrder } = orderSlice.actions;

export const selectOrderItems = (state) => state.order.items;

export default orderSlice.reducer;
