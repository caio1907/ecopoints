import React from 'react';
import * as Icon from '@mui/icons-material'
import Dashboard from './Dashboard';
import Perfil from './Dashboard/Perfil';

export interface ScreenProps {
  path: string
  name: string
  icon: JSX.Element
  component: React.ReactNode
}

const screens: ScreenProps[] = [
  {
    name: 'Dashboard',
    path: '/',
    component: <Dashboard />,
    icon: <Icon.Home />
  },
  {
    name: 'Alteração de Perfil',
    path: '/',
    component: <Dashboard />,
    icon: <Icon.AccountCircle />
  },
  {
    name: 'Histórico de Pontuação',
    path: '/',
    component: <Dashboard />,
    icon: <Icon.History />
  }
];
export default screens;
