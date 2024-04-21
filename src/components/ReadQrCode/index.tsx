import React from 'react';
import { Box, Fab } from '@mui/material';
import * as Icon from '@mui/icons-material';

const ReadQrCode: React.FC = () => {
  const handleClick = () => {
    alert('Hello world');
  }
  return (
    <Box position='absolute' right={20} bottom={20}>
      <Fab color='success' aria-label='add' onClick={handleClick}>
        <Icon.QrCode/>
      </Fab>
    </Box>
  )
}
export default ReadQrCode;
