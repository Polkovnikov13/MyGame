import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCounter(state, action) {
      return state + action.payload;
    },

  },
});

export const { setCounter } = counterSlice.actions;
export default counterSlice.reducer;
