import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import UserOne from './user/userOne';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserOne />
  </React.StrictMode>
);

reportWebVitals();
