import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import * as serviceWorker from './serviceWorker';

const config = {
    apiKey: "AIzaSyAMgRHbkjlE2XL6AVrK6uW9eiVODuocp64",
    authDomain: "todo2-6c52b.firebaseapp.com",
    databaseURL: "https://todo2-6c52b.firebaseio.com",
    projectId: "todo2-6c52b",
    storageBucket: "",
    messagingSenderId: "241112575489",
    appId: "1:241112575489:web:98b67e6187a773a5"
  };

firebase.initializeApp(config);

ReactDOM.render(
    <App />, 
    document.getElementById('root'));

// serviceWorker.unregister();
