import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = null;

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setTopics(state, action) {
      return action.payload;
    },

  },
});

export const { setTopics } = quizSlice.actions;
export default quizSlice.reducer;

export const allTopics = () => (dispatch) => {
  axios.get('http://localhost:3001/api/quize')
    .then((res) => dispatch(setTopics(res.data)));
};
