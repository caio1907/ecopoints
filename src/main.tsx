import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#537052',
      contrastText: '#FAFFF9'
    }
  },
  components: {
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          sx: {
            color: '#FAFFF9',
          }
        },
        InputProps: {
          disableUnderline: true,
          sx: {
            borderRadius: 3,
            boxShadow: '0px 10px 40px #00000056'
          }
        }
      },
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: '#FAFFF9'
          }
        }
      }
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
