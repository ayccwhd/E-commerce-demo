/*
 * @Author: aycc
 * @Date: 2022-03-09 18:22:14
 * @LastEditors: aycc
 * @LastEditTime: 2022-03-10 12:40:39
 * @Description: file content
 * @FilePath: \my-app\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom ';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);