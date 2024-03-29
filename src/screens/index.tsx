import React from 'react';
import * as Icon from '@mui/icons-material'
import Home from './Home';
import Map from './Map';

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
  }
];
export default screens;
