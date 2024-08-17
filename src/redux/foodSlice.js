import { createSlice } from '@reduxjs/toolkit';

export const foodSlice = createSlice({
  name: 'food',
  initialState: {
    categories: [
      { id: 1, name: 'Pizza' },
      { id: 2, name: 'Burgers' },
      { id: 3, name: 'Sushi' },
    ],
    items: [
      { id: 1, category: 1, name: 'Margherita Pizza', price: 10.99, image: '/images/margherita-pizza.jpg' },
      { id: 2, category: 1, name: 'Pepperoni Pizza', price: 12.99, image: '/images/pepperoni-pizza.jpg' },
      { id: 3, category: 2, name: 'Cheeseburger', price: 8.99, image: '/images/cheeseburger.jpg' },
      { id: 4, category: 2, name: 'Bacon Burger', price: 9.99, image: '/images/bacon-burger.jpg' },
      { id: 5, category: 3, name: 'California Roll', price: 13.99, image: '/images/california-roll.jpg' },
      { id: 6, category: 3, name: 'Spicy Tuna Roll', price: 14.99, image: '/images/spicy-tuna-roll.jpg' },
    ],
    selectedCategory: null,
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = foodSlice.actions;

export const selectFoodCategories = (state) => state.food.categories;
export const selectFoodItems = (state) => {
  if (state.food.selectedCategory === null) {
    return state.food.items;
  }
  return state.food.items.filter(item => item.category === state.food.selectedCategory);
};
export const selectSelectedCategory = (state) => state.food.selectedCategory;

export default foodSlice.reducer;
