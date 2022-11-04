import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/Slices/modalSlice/modalSlice';

const style = {
  width: 200,
  bgcolor: '#fcfafa',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Question({ element }) {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);
  const modalHandler = (el) => {
    dispatch(setModal(el));
  };
  return (
    <div>

      <Box sx={status.includes(element.id) ? { ...style, bgcolor: '#e7e6e1' } : style}>
        <Typography style={status.includes(element.id) ? { opacity: '0' } : { color: 'black' }} onClick={() => modalHandler(element)} id="modal-modal-title" variant="h6" component="h2">
          <div className="textstyle">
            <div>{element.price}</div>
          </div>
        </Typography>

      </Box>
    </div>
  );
}
