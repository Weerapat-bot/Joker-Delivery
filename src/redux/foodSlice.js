import { createSlice } from '@reduxjs/toolkit';

export const foodSlice = createSlice({
  name: 'food',
  initialState: {
    categories: [
      { id: 1, name: 'Bronze' },
      { id: 2, name: 'Silver' },
      { id: 3, name: 'Gold' },
      { id: 4, name: 'Platinum' },
    ],
    items: [
      { id: 1, category: 1, name: 'ปัญญวัฒน์ สุทธิสัตยาภรณ์', price: 10.99, image: '/images/yom.jpg' },
      { id: 2, category: 1, name: 'จักรพันธ์ วิโรจน์แดนไทย', price: 12.99, image: '/images/mek.jpg' },
      { id: 3, category: 2, name: 'วีรภัทร ชาเรืองเดช', price: 8.99, image: '/images/new.jpg' },
      { id: 4, category: 2, name: 'ปุณณสิน อัศวรังษี', price: 9.99, image: '/images/mark.jpg' },
      { id: 5, category: 3, name: 'ชานุภณ แฟงเอม', price: 13.99, image: '/images/punpun.jpg' },
      { id: 6, category: 3, name: 'ธนวัฒน์ วงศ์ภิญโญจิต', price: 14.99, image: '/images/kaopun.png' },
      { id: 7, category: 4, name: 'ภวัต ช่อมะลิ', price: 29.99, image: '/images/pruek.jpg' },
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
