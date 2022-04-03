import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import asyncComponents from './component/async';
const Home=asyncComponents(()=>import('./pages/home'));
const MyOrder=asyncComponents(()=>import('./pages/myorder'));
const Orderpage=asyncComponents(()=>import('./pages/orderpage'));
const OrderInfo=asyncComponents(()=>import('./pages/orderinfo'));

export default class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Router>
          <Routes>
            
            <Route path='/' element={<Home/>}/>
            <Route path='myorder' element={<MyOrder/>}>
              <Route path='orderpage' element={<Orderpage/>}>
                <Route path='?status=:id' element={<Orderpage/>}/>
              </Route>
            </Route>
            <Route path='orderinfo' element={<OrderInfo/>}/>
            
          </Routes>
        </Router>

      </React.Fragment>
    )
  }
}