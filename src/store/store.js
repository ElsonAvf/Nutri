import { configureStore } from '@reduxjs/toolkit';
import mealsReducer from './../features/meals/mealsSlice.js';

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
  },
});