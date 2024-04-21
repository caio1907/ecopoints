import React from 'react';
import * as Icon from '@mui/icons-material'
import Dashboard from './Dashboard';
import Profile from './Profile';
import History from './History';

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
    path: '/perfil',
    component: <Profile />,
    icon: <Icon.AccountCircle />
  },
  {
    name: 'Histórico de Pontuação',
    path: '/historico',
    component: <History />,
    icon: <Icon.History />
  }
];
export default screens;
