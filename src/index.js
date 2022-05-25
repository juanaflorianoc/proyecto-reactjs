import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMVUdQH0YkMI9zb5k426-i3HFljiy25fQ",
  authDomain: "zen-react.firebaseapp.com",
  projectId: "zen-react",
  storageBucket: "zen-react.appspot.com",
  messagingSenderId: "759356907834",
  appId: "1:759356907834:web:731c7aaa27972546c5f003"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div class="bg-gradient-to-t from-red-50">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
