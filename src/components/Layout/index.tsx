import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Box, Container } from '@mui/material';

interface Props {
  children: React.ReactNode
}

const Root = styled('div')(({theme}) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  },
  height: '100vh',
  backgroundColor: '#121212'
}));

const Dashboard:React.FC<Props> = ({
  children
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const handleChangeSidebarState = () => setIsSidebarOpen(prev => !prev);
  return (
    <>
      <Root>
        <Container>
          <Box sx={{ pt: 2 }}>
            {children}
          </Box>
        </Container>
      </Root>
      <Navbar sidebarOnOpen={handleChangeSidebarState}/>
      <Sidebar open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>
    </>
  )
}
export default Dashboard;
