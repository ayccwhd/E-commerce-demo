import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'

import Pay from './pages/payment/Pay'
import PayMent from './pages/payment/PayMent'
import PayDown from './pages/payment/PayDown';

export default class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/pay" component={Pay}></Route>
                    <Route path="/payment" component={PayMent}></Route>
                    <Route path="/paydown" component={PayDown}></Route>
                    <Redirect to="/pay"></Redirect>
                    {/* <Route path="/payment" component={PayMent}></Route> */}
                </Switch>
                {/* <PayMent/> */}
            </div>
        );
    }

}


import logo from './logo.svg';
import Shop from './Components/Shop/Shop'
import SearchResult from './Components/SearchResult/SearchResult'
import Home from './Components/Home/Home'
import Cart from './views/Cart/Cart'
import Me from './views/Me/Me'
import Product from './views/Product/Product.jsx'
import Shop from './views/Shop/Shop'
import Pay from './pages/payment/Pay'
import PayMent from './pages/payment/PayMent'
import PayDown from './pages/payment/PayDown';
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
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/me" element={<Me/>}/>
        <Route path="/productinfo/:id" element={<Product/>}/>
        <Route path="/shopinfo/:shopname" element={<Shop/>}/>
        <Route path="/pay" element={<Pay/>}>
        <Route path="/payment" element={<PayMent/>}>
        <Route path="/paydown" element={<PayDown/>}>
        <Route path="*" element={<Navigate to="/" />} />
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

