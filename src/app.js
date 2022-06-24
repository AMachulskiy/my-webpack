import React from 'react';
import ReactDOM from 'react-dom/client';
import First from './components/first';
import Se from './components/se';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <First />
    <Se color="red" />
  </React.StrictMode>,
);
