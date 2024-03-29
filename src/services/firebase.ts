import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from '@firebase/storage';

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_APIKEY,
  authDomain:        import.meta.env.VITE_AUTHDOMAIN,
  projectId:         import.meta.env.VITE_PROJECTID,
  storageBucket:     import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId:             import.meta.env.VITE_APPID
}

const firebaseApp = initializeApp(firebaseConfig);

const database = getFirestore(firebaseApp);

const auth = getAuth();

const storage = getStorage();

export { auth, database, firebaseApp, storage }
