import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/userSlice/userSlice';
import modalSlice from '../features/modalSlice/modalSlice';
import quizSlice from '../features/quizSlice/quizSlice';
import statusSlice from '../features/statusSlice/statusSlice';
import counterSlice from '../features/counterSlice/counterSlice';

export const store = configureStore({
  reducer: {
    quiz: quizSlice,
    modal: modalSlice,
    user: userSlice,
    status: statusSlice,
    counter: counterSlice,
  },
});
