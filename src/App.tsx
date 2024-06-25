import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Loader from '@components/Loader';
import { setLoading } from '@contexts/loadingState';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import screens from '@screens/index';
import screensAdmin from '@screens/Admin';
import Layout from '@components/Layout';
import Navigation from '@components/Navigation';
import Footer from '@components/Footer';

const App: React.FC = () => {
  const [logged, setLogged] = useState(false);

  const checkLogged = () => {
    const token = localStorage.getItem('token');
    setLogged(!!token);
    setLoading(false);
  };

  useEffect(() => {
    checkLogged();
    window.addEventListener('storage', checkLogged);
  }, []);

  return (
    <BrowserRouter>
      <Loader />
      <ToastContainer position='bottom-right' />
      {!logged ? (
        <>
          <Navigation/>
          <Routes>
            {screens.map((screen, index) => (
              <Route
                key={index}
                path={screen.path}
                element={screen.component}
              />
            ))}
            <Route path='*' element={<Navigate to='/' replace />}/>
          </Routes>
          <Footer/>
        </>
      ) : (
        <>
          <Layout>
            <Routes>
              {screensAdmin.map((screen, index) => (
                <Route
                  key={index}
                  path={screen.path}
                  element={screen.component}
                />
              ))}
              <Route path='*' element={<Navigate to='/' replace />}/>
            </Routes>
          </Layout>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
