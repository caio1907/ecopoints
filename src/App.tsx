import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Loader from './components/Loader';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './services/firebase';
import { loadCurrentUser } from './utils/user';
import { setLoading } from './utils/loadingState';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import screens from './screens';
import screensAdmin from './screens/Admin';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, result => {
      if (result) {
        loadCurrentUser()
          .finally(() => {
            setLogged(true);
            setLoading(false)
          });
      } else {
        setLogged(false)
        setLoading(false)
      }
    })
  }, []);

  const logOut = () => {
    signOut(auth);
  }

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
          <Layout {...{ logOut }}>
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
