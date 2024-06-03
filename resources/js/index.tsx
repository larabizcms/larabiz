import React from 'react';
import ReactDOM from 'react-dom/client';
// project import
import App from '@/app';
import {onLCP, onINP, onCLS} from 'web-vitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// ==============================|| MAIN - REACT DOM RENDER ||============================== //

root.render(<App />);

// if (import.meta.hot) {
//     import.meta.hot.accept(['./app', './store'], () => {
//         console.log('HMR update...');

//         const nextApp = require('./app').default;
//         root.render(nextApp);
//     });
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
onCLS(console.log);
onINP(console.log);
onLCP(console.log);
