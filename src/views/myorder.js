import React from "react";
import Subheader from "../component/subheader";
import Tags from '../component/tags';
import {Outlet} from 'react-router-dom';
import '../assets/css/order/myorder.css';

export default class MyOrder extends React.Component{
  render(){
    return(
        <div className="pages">
            <Subheader title='我的订单'></Subheader>
            <Tags/>
            <div className="main">
                <Outlet/>
            </div>
        </div>
    )
  }
}