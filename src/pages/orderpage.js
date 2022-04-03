import React from "react";
import '../assets/css/order/orderpage.css';
import { localParam } from "../assets/js/utils/util.js"
import OrderId from "./order_id"
export default class MyOrder extends React.Component{
    constructor(props){
        super(props);
        this.state={
            status:localParam(window.location.search).search.status?localParam(window.location.search).search.status:""
        }
        
    }
    
    
    render(){
        return(
                <div className="my_order">
                    <OrderId/>
                </div>
        )
    }
    
}