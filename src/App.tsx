import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Loader from './components/Loader';
import Login from './screens/Admin/Login';
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
import screens from './screens/Admin';
import Layout from './components/Layout';
import Home from './screens/Home';
import Register from './screens/Admin/Register';
import Map from './screens/Map';

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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mapa' element={<Map />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registrar' element={<Register />} />
          <Route path='*' element={<Navigate to='/' replace />}/>
        </Routes>
      ) : (
        <>
          <Layout {...{ logOut }}>
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
          </Layout>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
