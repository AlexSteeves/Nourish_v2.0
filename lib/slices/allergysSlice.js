
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allergys: [],
};

export const allergysSlice = createSlice({
  name: 'allergys',
  initialState,
  reducers: {
    addAllergy: (state, action) => {
      state.allergys.push(action.payload);
    },
    removeAllergy:(state, action) =>{
      state.allergys = state.allergys.filter(allergy => allergy !== action.payload);
    },
  },
});

export const { addAllergy, removeAllergy } = allergysSlice.actions;

export default allergysSlice.reducer;
