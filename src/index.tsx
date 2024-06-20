import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './markdown-styles.modules.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MouseTrail } from '@stichiboi/react-elegant-mouse-trail';

// Media queries
import './styles/mediaqueries.modules/blogpost.modules.css';
import './styles/mediaqueries.modules/blogoverview.modules.css';
import './styles/mediaqueries.modules/home.modules.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MouseTrail strokeColor={"white"}/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
