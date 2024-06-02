import React from 'react';
import ReactDOM from 'react-dom/client';
// project import
import App from './app';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// ==============================|| MAIN - REACT DOM RENDER ||============================== //

root.render(<App />);

// if (import.meta.hot) {
//     console.log(import.meta.hot.accept());

//     import.meta.hot.accept('./app', () => {
//         console.log('hot reload');

//         const nextApp = require('./app.tsx').default;
//         root.render(nextApp);
//     })
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
