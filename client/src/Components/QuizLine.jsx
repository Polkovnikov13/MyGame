import { Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allTopics, setTopics } from '../redux/Slices/quizSlice/quizSlice';
import Question from './Question';
import QuestionModal from './QuestionModal';
import Topic from './Topic';

export default function QuizLine() {
  const topics = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allTopics());
  }, []);

  return (
    <>
      {topics?.map((elem) => (
        <Stack key={elem.id} direction="row" spacing={3}>
          <Topic key={elem.id} element={elem} />
          {elem.Quests.map((el) => <Question key={el.id} element={el} />)}
        </Stack>
      ))}
      <QuestionModal />
    </>

  );
}
