import logo from './logo.svg';
import Shop from './Components/Shop/Shop'
import SearchResult from './Components/SearchResult/SearchResult'
import Home from './Components/Home/Home'
import SearchField from './Components/SearchField/SearchField'
import React, { Component } from 'react';
import './App.css';
import { Link, Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { HashRouter, Switch } from 'react-router-dom'
import TabDivide from 'zent/es/tabs/components/TabDivide';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchfield" element={<SearchField />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/searchresult" element={<SearchResult />} />
        {/* <Route path="/test" element={<Test />} /> */}
      </Routes>
    </HashRouter>
    // <div>
    //   <SearchResult />
    // </div>
  );
}

export default App;
