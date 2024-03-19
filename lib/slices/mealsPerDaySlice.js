
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mealsPerDay: '3',
};

export const mealsPerDaySlice = createSlice({
  name: 'mealsPerDay',
  initialState,
  reducers: {
    setMealsPerDay: (state, action) => {
      state.mealsPerDay = action.payload;
    },
  },
});

export const { setMealsPerDay } = mealsPerDaySlice.actions;

export default mealsPerDaySlice.reducer;
