import { Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allTopics, setTopics } from '../features/quizSlice/quizSlice';
import Question from './Question';
import QuestionModal from './QuestionModal';
import Topic from './Topic';

export default function QuizLine() {
  const topics = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  console.log('Пришел из слайса', topics);
  useEffect(() => {
    dispatch(allTopics());
  }, []);

  return (
    <>
      {topics?.map((elem) => (
        <Stack key={elem.id} direction="row" spacing={2}>
          <Topic key={elem.id} element={elem} />
          {elem.Quests.map((el) => <Question key={el} element={el} />)}
        </Stack>
      ))}
      <QuestionModal />
    </>

  );
}
