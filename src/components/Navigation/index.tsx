import React from 'react';
import logoEcoPoint from '../../assets/Logo EcoPoints.png';
import { NavLink } from 'react-router-dom';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';

const Navigation: React.FC = () => {
  const Link = (path: string, name: string) => (
    <Typography
      component={NavLink}
      sx={{
        transition: 'all 0.1s ease-in-out',
        ':hover': {
          color: '#FAFFF9',
          boxShadow: '0px 1px 0px #FAFFF9'
        },
        '&.active': {
          color: '#FAFFF9',
          boxShadow: '0px 1px 0px #FAFFF9'
        }
      }}
      variant='body1'
      color='#EAF6EA'
      to={path}>
      {name}
    </Typography>
  )
  return (
    <AppBar position='fixed' sx={{display: 'flex', justifyContent: 'center', backgroundColor: '#537052', height: '8vh'}}>
      <Toolbar sx={{gap: 2}}>
        <IconButton LinkComponent={NavLink}>
          <img src={logoEcoPoint} alt='Ecopoint' className='logo'style={{maxWidth: 40}}/>
        </IconButton>
        <Box display='flex' flexGrow={1} gap={2}>
          {Link('/', 'Home')}
          {Link('/mapa', 'Mapa')}
          {Link('/admin', 'Área do cliente')}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navigation;
