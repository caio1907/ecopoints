import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import * as Icon from '@mui/icons-material';
import axiosBase from 'axios';
import axios from '@services/axios';
import User from '../../../types/User.type';

interface Props {
  sidebarOnOpen: () => void
}

const Root = styled(AppBar)(({ theme }: any) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}))

const Navbar: React.FC<Props> = ({
  sidebarOnOpen
}) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const query = {
      query: 'query {me {firstName, lastName}}'
    }
    axios.post<{data: {me: User}}>('', query).then(response => setUser(response.data.data.me));
  }, []);

  const logOut = () => {
    const { VITE_API_URL } = import.meta.env;
    const token = localStorage.getItem('token');
    axiosBase.post(
      `${VITE_API_URL ?? 'http://localhost/'}auth/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    ).then(() => {
      localStorage.removeItem('token');
      window.dispatchEvent(new Event('storage'));
    });
  }
  return (
    <>
      <Root
        sx={{
          left: {
            lg: 280
          },
          width: {
            lg: 'calc(100% - 280px)'
          }
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={sidebarOnOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <Icon.Menu fontSize='small' />
          </IconButton>
          <Typography component='span'>Bem vindo(a) {`${user?.firstName} ${user?.lastName}`}</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title='Sair'>
            <IconButton sx={{ ml: 1 }} onClick={logOut}>
              <Icon.Logout fontSize='small' />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Root>
    </>
  )
}
export default Navbar;
