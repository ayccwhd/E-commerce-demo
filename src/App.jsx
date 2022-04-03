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