import React from 'react';
import './style.css';
import { IconButton } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <footer>
      <IconButton>
        <Instagram htmlColor='#EAF6EA'/>
      </IconButton>
      <IconButton>
        <Facebook htmlColor='#EAF6EA'/>
      </IconButton>
      <strong>© EcoPoints - 2024</strong>
    </footer>
  )
}
export default Footer;
