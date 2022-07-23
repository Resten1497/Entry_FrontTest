import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import UserOne from './user/userOne';
import UserTwo from './user/userTwo';
// import UserThree from './user/userThree';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserTwo />
  </React.StrictMode>
);

reportWebVitals();
