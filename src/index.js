import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
//import { Button } from 'antd-mobile-v2';
//import 'antd-mobile-v2/dist/antd-mobile-v2.css';  // or 'antd-mobile-v2/dist/antd-mobile-v2.less'

//ReactDOM.render(<Button>Start</Button>, document.getElementById('root'));
ReactDOM.render(
  // <React.StrictMode>
  // <BrowserRouter>
  <App />,
  // </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
