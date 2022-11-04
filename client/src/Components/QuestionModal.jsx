import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup,
} from '@mui/material';
import { setModal } from '../redux/Slices/modalSlice/modalSlice';
import { setStatus } from '../redux/Slices/statusSlice/statusSlice';
import { setCounter } from '../redux/Slices/counterSlice/counterSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function QuestionModal() {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const myHandleClose = () => {
    if (modal.answer === input) {
      dispatch(setCounter(Number(modal.price)));
    } else { dispatch(setCounter(Number(-modal.price))); }
    dispatch(setModal(null));
    dispatch(setStatus(modal.id));
  };

  return (
    <div>

      {modal?.id && (
      <Box sx={style}>
        <Grid container spacing={2}>
          <Grid item xs={12}>

            <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight: 'bold' }}>
              {modal.quest}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">Варианты ответа</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              >
                <FormControlLabel value="да" control={<Radio />} label="Да" />
                <FormControlLabel value="нет" control={<Radio />} label="Нет" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={myHandleClose}>Ответ</Button>
          </Grid>
        </Grid>
      </Box>
      )}
    </div>
  );
}
