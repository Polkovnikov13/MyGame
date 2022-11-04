import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Slices/userSlice/userSlice';
import modalSlice from './Slices/modalSlice/modalSlice';
import quizSlice from './Slices/quizSlice/quizSlice';
import statusSlice from './Slices/statusSlice/statusSlice';
import counterSlice from './Slices/counterSlice/counterSlice';

export const store = configureStore({
  reducer: {
    quiz: quizSlice,
    modal: modalSlice,
    user: userSlice,
    status: statusSlice,
    counter: counterSlice,
  },
});
