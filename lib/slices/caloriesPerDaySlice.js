
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  caloriesPerDay: 2000,
};

export const caloriesPerDaySlice = createSlice({
  name: 'caloriesPerDay',
  initialState,
  reducers: {
    setCaloriesPerDay: (state, action) => {
      state.caloriesPerDay = action.payload;
    },
  },
});

export const { setCaloriesPerDay } = caloriesPerDaySlice.actions;

export default caloriesPerDaySlice.reducer;
