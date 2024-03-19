
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dietType: '',
};

export const dietTypeSlice = createSlice({
  name: 'dietType',
  initialState,
  reducers: {
    setDietType: (state, action) => {
      state.dietType = action.payload;
    },
  },
});

export const { setDietType } = dietTypeSlice.actions;

export default dietTypeSlice.reducer;
