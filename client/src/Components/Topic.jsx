import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
  width: 200,
  bgcolor: '#113f67',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Topic({ element }) {
  return (
    <div>
      <Box sx={style}>
        <Typography sx={{ fontWeight: 'bold', color: 'white', fontFamily: 'monospace' }} id="modal-modal-title" variant="h6" component="h2">
          {element.name}
        </Typography>

      </Box>
    </div>
  );
}
