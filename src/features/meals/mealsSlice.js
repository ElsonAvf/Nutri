import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';
import { getStorage } from 'storage/storage.js'

const mealsSlice = createSlice({
  name: 'meals',
  initialState: getStorage(),
  reducers: {
    addFood: (state, { payload }) => {
      payload.food.id = uniqid();
      state[payload.meal].push(payload.food);
    },
    removeFood: (state, { payload }) => {
      state[payload.meal] = state[payload.meal].filter(food => food.id !== payload.id);
    }
  },
});

export const { addFood, removeFood } = mealsSlice.actions;
export default mealsSlice.reducer;