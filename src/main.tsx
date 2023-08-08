import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/CSS/normalize.css';
import './style/SASS/main.scss';
import Router from './Router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
