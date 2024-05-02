import React from 'react';
import * as Icon from '@mui/icons-material'
import Dashboard from './Dashboard';
import History from './History';
import Trashes from './Trashes';

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
    name: 'Relatório de itens por lixeira',
    path: '/historico',
    component: <History />,
    icon: <Icon.History />
  },
  {
    name: 'Lixeiras',
    path: '/lixeiras',
    component: <Trashes />,
    icon: <Icon.Delete />
  }
];
export default screens;
