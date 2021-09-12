import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD72gMheiysnrSBbCaNNjNqfkFDw5zyWgY',
  authDomain: 'crypto-base-db.firebaseapp.com',
  databaseURL:
    'https://crypto-base-db-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'crypto-base-db',
  storageBucket: 'crypto-base-db.appspot.com',
  messagingSenderId: '853554508159',
  appId: '1:853554508159:web:9a2f30558c2fc026066a4a',
};

initializeApp(firebaseConfig);
export default getFirestore();
