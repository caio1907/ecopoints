import React from 'react';
import * as Icon from '@mui/icons-material'
import Home from './Home';
import Map from './Map';
import Login from './Login';

export interface ScreenProps {
  path: string
  name: string
  icon: JSX.Element
  component: React.ReactNode
}

const screens: ScreenProps[] = [
  {
    name: 'Home',
    path: '/',
    component: <Home />,
    icon: <Icon.Home />
  },
  {
    name: 'Localizações',
    path: '/mapa',
    component: <Map />,
    icon: <Icon.Explore />
  },
  {
    name: 'Login',
    path: '/admin',
    component: <Login />,
    icon: <Icon.Explore />
  }
];
export default screens;
