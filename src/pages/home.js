import React from "react";
import {Link,Outlet} from 'react-router-dom'


export default class Home extends React.Component{
  render(){
    return(
        <div >
            <Link to={'/myorder/orderpage'}>订单页</Link>
        </div>
    )
  }
}