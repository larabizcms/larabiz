import React from 'react';
import ReactDOM from 'react-dom/client';
// project import
import App from '@local/app';
import {onLCP, onINP, onCLS} from 'web-vitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
onCLS(console.log);
onINP(console.log);
onLCP(console.log);
