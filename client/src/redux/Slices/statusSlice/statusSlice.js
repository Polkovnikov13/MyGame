import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setStatus(state, action) {
      return [...state, action.payload];
    },

  },
});

export const { setStatus } = statusSlice.actions;
export default statusSlice.reducer;
