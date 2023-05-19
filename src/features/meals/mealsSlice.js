import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const mealsSlice = createSlice({
  name: 'meals',
  initialState: {},
  reducers: {
    setState: (state, { payload }) => payload,
    addFood: (state, { payload }) => {
      payload.id = uniqid();
      state[payload.meal].push(payload);
    },
    removeFood: (state, { payload }) => {
      state[payload.meal] = state[payload.meal].filter(food => food.id !== payload.id);
    },
    calculateTotals: state => {
      let [kcal, protein, carb, fat] = [0, 0, 0, 0]
      const keys = Object.keys(state)
      for(const key of keys) {
        if(Array.isArray(state[key])) {
          state[key].forEach(meal => {
            kcal += meal.kcal;
            protein += meal.protein;
            carb += meal.carb;
            fat += meal.fat;
          })
        }
      }
      state.kcalAmount = kcal;
      state.proteinAmount = protein;
      state.carbAmount = carb;
      state.fatAmount = fat;
    }
  },
});

export const { setState, addFood, removeFood, calculateTotals } = mealsSlice.actions;
export default mealsSlice.reducer;