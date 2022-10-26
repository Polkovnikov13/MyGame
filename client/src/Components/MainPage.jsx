import { Autocomplete } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import QuizLine from './QuizLine';

export default function MainPage() {
  const count = useSelector((state) => state.counter);
  return (
    <>
      <div className="image">

        {count < 0
          && <img src="https://img.smi2.net/470x246/a9eca19a5fd925314d3cbd3155a4ac7cd9ce473e.jpg?u=aHR0cDovL3BvdG9rbWVkaWEucnUvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDEvODhiY2I3ZmZmMTE1MGU0MjY2MjI3YzZlYWNhZjVjMGIuanBn" alt="VV" />}
      </div>
      <div className="image">

        <h1>
          {count < 0 ? `У вас отрицательный счет : ${count}` : `ВАШ СЧЁТ ${count}`}
        </h1>
      </div>
      <QuizLine />
    </>
  );
}
