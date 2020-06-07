import * as firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAG0xO59sbx7u6oz4jhMl5to6z6VxaanrA',
  authDomain: 'pandus-84b14.firebaseapp.com',
  databaseURL: 'https://pandus-84b14.firebaseio.com',
  projectId: 'pandus-84b14',
  storageBucket: 'pandus-84b14.appspot.com',
  messagingSenderId: '357998900706',
  appId: '1:357998900706:web:b8234c43815f45ca3bf5bb',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;
