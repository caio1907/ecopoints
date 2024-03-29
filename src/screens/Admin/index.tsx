import React from 'react';
import * as Icon from '@mui/icons-material'
import Login from './Login';
import Register from './Register';

export interface ScreenProps {
  path: string
  name: string
  icon: JSX.Element
  component: React.ReactNode
}

const screens: ScreenProps[] = [
  {
    name: 'Login',
    path: '/login',
    component: <Login />,
    icon: <Icon.Home />
  },
  {
    name: 'Registrar',
    path: '/registrar',
    component: <Register />,
    icon: <Icon.PersonAddAlt1 />
  }
];
export default screens;
